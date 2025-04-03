'use client'

import { getAccountWithTransactions } from '@/actions/accounts';
import { notFound, useParams, useRouter } from 'next/navigation';
import React, { Suspense, use, useEffect, useState } from 'react'
import TransactionTable from '../_components/TransactionTable';
import { BarLoader } from 'react-spinners';

const AccountsPage = () => {
    const [account, setAccount] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading , setLoading] = useState(true);
    const { id } = useParams();
    const router = useRouter();

    useEffect(() => {
        // Ensure params.id is available
        if (!id) {
            console.log("params.id is not yet available");
            return;
        }

        const fetchAccount = async () => {
            try {
                const data = await getAccountWithTransactions(id);
                console.log("Fetched data:", data);
                if(!data){
                    console.log("No data found for the given id:", id);
                    router.push('/404');
                }
                setAccount(data);
                setTransactions(data.transactions);
                setLoading(false);
            } catch (err) {
                notFound();
            }
        };

        fetchAccount();
    }, [id]); // Runs when `params.id` changes


  return (
    <>
        {
        loading ? (
            <BarLoader className='mt-4' width={"100%"} color='#9333ea'/>
        ):(
            <div className='space-y-8 px-5'>
                <div className='flex gap-4 items-end justify-between'>
                    <div>
                        <h1 className='text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize'>{account.name}</h1>
                        <p className='text-muted-foreground'>{account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account</p>
                    </div>

                    <div className='text-right pb-2'>
                        <div className='text-xl sm:text-2xl font-bold'>₹{parseFloat(account.balance).toFixed(2)}</div>
                        <p className='text-sm text-muted-foreground'>{account._count.transactions} Transactions</p>
                    </div>
                </div>


                <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color='#9333ea'/>}>
                    <TransactionTable transactions={transactions}/>
                </Suspense>
            </div>
        )
}
    </>
  )
}

export default AccountsPage