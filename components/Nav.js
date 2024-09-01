'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import logo from '@/public/images/logo.png'

export default function Nav() {
    

  return (
    <div className="backdrop-blur-lg bg-[#f2f4f363] z-50 top-0 sticky rounded-xl px-4 w-full py-3 flex justify-between items-center rgb ">
        <div >
            <Link href='/' className="flex justify-between items-center">
                <Image 
                    src={logo} 
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full"/>
            <h1 className="font-medium text-2xl pt-1 pl-3">DDAS</h1>
            </Link>
        </div>
        <div className="ml-10 flex justify-between gap-5 items-baseline space-x-4">
            <Link href="/#landing" className=" hover:text-muted-foreground px-5 py-2 rounded-md text-lg font-medium">
                Home
            </Link>
            <Link href="/#features" className=" hover:text-muted-foreground px-5 py-2 rounded-md text-lg font-medium">
                Features
            </Link>
            <Link href="/#install" className=" hover:text-muted-foreground px-5 py-2 rounded-md text-lg font-medium">
                Install
            </Link>
            
        </div>
        <div className="flex items-center justify-center">
            <SignedIn>
            <UserButton />
            </SignedIn>
            <SignedOut>
            <button className=" flex justify-between items-center px-4 py-1.5 rounded-md border-black border-2 font-medium hover:scale-105 transition-all duration-300  ">
            <Link href={"/sign-in"} className="">Sign In</Link>

            </button>
            </SignedOut>
            
        </div>
       
    </div>
  )
}
