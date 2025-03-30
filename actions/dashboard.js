'use server';

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

const serializeTransaction = (obj)=>{
    const serialized = {...obj};

    if(obj.balance){
        serialized.balance = obj.balance.toNumber();
    }
}

export async function createAccount(data) {
    try{
        const  { userId } = await auth();
        if(!userId) throw new Error('Unauthorized');

        const user = await db.user.findUnique({
            where:{ clerkUserId : userId},
        })

        if(!user){
            throw new Error('User not found');
        }

        const balanceFloat = parseFloat(data.balance);
        if(isNaN(balanceFloat)){
            throw new Error("invalid balance amount")
        }

        const existingAccounts = await db.account.findMany({
            where: { userId: user.id }
        });

        const shouldBeDefault = existingAccounts.length ===0 ? true : data.isDefault;

        if(shouldBeDefault){
            await db.account.updateMany({
                where : { userId : user.id , isDefault :true},
                data: { isDefault : false },
            });
        }

        const account = await db.account.create({
            data:{
                ...data,
                balance: balanceFloat,
                isDefault: shouldBeDefault,
                userId: user.id
            }
        });

        // as next does not support decimal so update balance in flot to decimal
        const serializedAccount =  serializeTransaction(account);

        // Refetch the page when account is created
        revalidatePath("/dashboard");
        return { success: true, data: serializedAccount};
    } catch(error){
        throw new Error(error.message);
    }
}