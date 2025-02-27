"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
    const heroRef = useRef();

  return (
    <div className='px-4 pt-8 h-[90vh] bg-[linear-gradient(to_top,#fff,#EFF6FF_15%,#BFDBFE_86%,#60A5FA)] relative ' ref={heroRef}>
        {/* <div className='rounded-[100%] bg-white h-[218px] absolute w-[128vw] top-[90%] left-1/2 translate-x-[-50%] bg-[radial-gradient(closest-side,#ffffff_84%,#60A5FA)]'></div> */}
        <div className='container mx-auto text-center mt-20 md:mt-28 overflow-y-hidden'>
            <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title relative'>Manage your Finances <br /> with Intelligence</h1>
            <p className='text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>A one-stop platform for all your financial management needs, offering AI-powered reports and smart AI scan features to track, analyze, and optimize your spending with real-time insights, automated savings suggestions, and detailed expense categorization for better financial control.</p>
            <div className='flex justify-center mb-14'>
                <Link href={'/dashboard'}>
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>
        </div>
        <motion.div className='absolute md:top-[62%] lg:top-[52%] xl:top-[30%] hidden md:inline right-[75%] md:right-[80%] xl:right-[75%]' drag dragSnapToOrigin>
            <Image src={'/hero-1.webp'} alt='hero gradint image' width={400} height={400} className='swing max-w-none md:w-64 lg:w-80 xl:w-96' draggable="false" />
        </motion.div>
        <motion.div className='absolute top-[0%] hidden md:inline left-[80%]' dragConstraints={heroRef} drag dragElastic={0.5}>
            <Image src={'/cursor.png'} alt='cursor image' width={300} height={300} className=' max-w-none md:w-52 lg:w-60 xl:w-72' draggable="false" />
        </motion.div>
    </div>
  )
}

export default HeroSection