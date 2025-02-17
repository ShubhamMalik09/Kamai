"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const heroRef = useRef();

  return (
    <div className='px-4 mt-20 h-[90vh] overflow-hidden bg-[linear-gradient(to_bottom,#fff,#EFF6FF_17%,#BFDBFE_46%,#93C5FD_79%,#60A5FA_100%)] relative ' ref={heroRef}>
        <div className='container mx-auto text-center mt-20 md:mt-28 overflow-hidden'>
            <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title relative'>Manage your Finances <br /> with Intelligence</h1>
            <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>A one-stop platform for all your financial management needs, offering AI-powered reports and smart AI scan features to track, analyze, and optimize your spending with real-time insights, automated savings suggestions, and detailed expense categorization for better financial control.</p>
            <div className='flex justify-center mb-14'>
                <Link href={'/dashboard'}>
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div className='rounded-[100%] bg-blue-900 h-[358px] absolute w-[983px] top-[90%] left-1/2 translate-x-[-50%] border border-[#60A5FA] bg-[radial-gradient(closest-side,#1E3A8A_76%,#60A5FA)]'></div>
        </div>
        <motion.div className='absolute top-[30%] hidden sm:inline right-[75%]' drag dragSnapToOrigin>
            <Image src={'/hero-1.webp'} alt='hero gradint image' width={400} height={400} className='swing max-w-none' draggable="false" />
        </motion.div>
        <motion.div className='absolute top-[0%] hidden sm:inline left-[80%]' dragConstraints={heroRef} drag dragElastic={0.5}>
            <Image src={'/cursor.png'} alt='cursor image' width={300} height={300} className=' max-w-none' draggable="false" />
        </motion.div>
    </div>
  )
}

export default HeroSection