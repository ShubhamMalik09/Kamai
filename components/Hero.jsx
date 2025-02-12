import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className='pb-20 px-4'>
        <div>
            <h1>Manage your Finances <br /> with Intelligence</h1>
            <p>An AI-powered financial management platform that helps you track, analyse, and optimize your spending with real-time insights</p>
            <div>
                <Link href={'/dashboard'}>
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div>
                <div>
                    <Image src={"/"} width={300} height={200}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection