'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logooo from '@/public/images/logooo.jpg'

export default function Nav() {
  return (
    <div className="w-full pb-4 flex justify-between items-center ">
        <div >
            <Link href='/' className="flex justify-between items-center">
                <Image 
                    src={logooo} 
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-full"/>
            <h1 className="font-medium text-2xl pt-2 pl-3">DDAS</h1>
            </Link>
        </div>
        <div className="ml-10 flex justify-between gap-5 items-baseline space-x-4">
            <Link href="/" className=" hover:text-blue-950 px-5 py-2 rounded-md text-lg font-medium">
                Home
            </Link>
            <Link href="/about" className=" hover:text-blue-950 px-5 py-2 rounded-md text-lg font-medium">
                Features
            </Link>
            <Link href="/services" className=" hover:text-blue-950 px-5 py-2 rounded-md text-lg font-medium">
                Install
            </Link>
            
        </div>
        <div className="flex items-center justify-center">
            <SignedIn>
            <UserButton />
            </SignedIn>
            <SignedOut>
            <button className=" flex justify-between items-center px-4 py-1 rounded-md border-white border ">
            <Link href={"/sign-in"} className="pt-1">Sign In</Link>

            </button>
            </SignedOut>
            
        </div>
       
    </div>
  )
}
