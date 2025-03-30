import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import { checkUser } from '@/lib/checkUser'

const Header = () => {
  // await checkUser();
  return (
    <div className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
      <nav className='w-full px-4 py-2 flex items-center justify-between'>
        <Link href={'/'}>
          <Image src={"/kamai-black.png"} alt='kamai logo' width={200} height={60} className='w-32 h-auto object-contain'/>
          {/* <img src="kamai-black.png" alt=""  className='w-36'/> */}
        </Link>

        <div className='flex items-center space-x-4'>
          <SignedIn>
            <Link href={'/dashboard'} className='text-gray-600 hover:text-blue-600 flex items-center gap-2'>
              <Button variant="outline">
                <LayoutDashboard size={18}/>
                <span className='hidden md:inline'>Dashboard</span>
              </Button>
            </Link>

            <Link href={'/transaction'} className='text-gray-600 hover:text-blue-600'>
              <Button>
                <PenBox size={18}/>
                <span className='hidden md:inline'>Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard'>
              <Button variant={'outline'}>Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements:{
                avatarBox : "w-10 h-10"
              }
            }} />
          </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default Header