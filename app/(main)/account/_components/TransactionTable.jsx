'use client'

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { categoryColors } from '@/data/categories';
import { format } from "date-fns";
import { Clock, RefreshCcw, RefreshCw } from 'lucide-react';
import React from 'react'

const TransactionTable = ({ transactions }) => {
    const filteredAndSortedTransactions = [
        {
            id:1,
            date: new Date(),
            description: "Received Salary",
            category: "salary",
            amount: 5000,
            type: "INCOME",
            isRecurring: true,
            recurringInterval: "MONTHLY",
            nextRecurringDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        },
        {
            id:2,
            date: new Date(),
            description: "Received Salary",
            category: "healthcare",
            amount: 7000,
            type: "EXPENSE",
            isRecurring: false,
        },
    ];

    const RECURRING_INTERVALS = {
        DAILY: "Daily",
        WEEKLY: "Weekly",
        MONTHLY: "Monthly",
        YEARLY: "Yearly",
    }
 
    const handleSort = ()=>{

    };

  return (
    <div className='space-y-4'>
        <div className='rounded-md border'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px]">
                            <Checkbox/>
                        </TableHead>
                        <TableHead className='cursor-pointer' onClick={()=>handleSort("date")}>
                            <div className='flex items-center'>
                                Date
                            </div>
                        </TableHead>
                        <TableHead>
                                Description
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={()=>handleSort('category')}>
                            <div className='flex items-center'>
                                Category
                            </div>
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={()=>handleSort('amount')}>
                            <div className='flex items-center justify-end'>
                                Amount
                            </div>
                        </TableHead>
                        <TableHead>
                            Recurring
                        </TableHead>
                        <TableHead className='w-[50px]'></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredAndSortedTransactions.length===0 ? (
                        <TableRow>
                            <TableCell colSpan={7} className="text-center text-muted-foreground">No Transactions Found</TableCell>
                        </TableRow>
                    ) : (
                        filteredAndSortedTransactions.map((transaction)=>(
                            <TableRow key={transaction.id}>
                                <TableCell className="font-medium">
                                    <Checkbox/>
                                </TableCell>
                                <TableCell>
                                    {format(new Date(transaction.date),'PP')}
                                </TableCell>
                                <TableCell>
                                    {transaction.description}
                                </TableCell>
                                <TableCell className='capitalize '>
                                    <span className='px-2 py-1 rounded text-white text-sm'
                                     style={{background: categoryColors[transaction.category]}}>
                                        {transaction.category}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right font-medium"
                                style={{color: transaction.type==='EXPENSE' ? 'red' : 'green'}}>
                                    {transaction.type==='EXPENSE' ? '-' : '+'}
                                    ₹{transaction.amount.toFixed(2)}
                                </TableCell>
                                <TableCell>
                                    { transaction.isRecurring ? (
                                        <TooltipProvider>
                                            <Tooltip>
                                            <TooltipTrigger>
                                                <Badge variant={'outline'} className='gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200'>
                                                    <RefreshCw className='h-3 w-3'/>
                                                    {RECURRING_INTERVALS[transaction.recurringInterval]}
                                                </Badge>
                                                </TooltipTrigger>
                                            <TooltipContent>
                                                <div className='text-sm'>
                                                    <div className='font-medium'>
                                                       Next Date:
                                                    </div>
                                                    <div>
                                                        {format(new Date(transaction.nextRecurringDate),'PP')}
                                                    </div>
                                                </div>
                                            </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ):(
                                        <Badge variant={'outline'} className='gap-1'>
                                            <Clock className='h-3 w-3'/>
                                            One-time
                                        </Badge>
                                    )
                                    }
                                </TableCell>
                                <TableCell>
                                    
                                </TableCell>
                            </TableRow>
                        ))
                        
                    )}
                    
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default TransactionTable