import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"


export default function Nav() {
  return (
    <nav>
        <div id='left'>
            <Link href='/'>
                <Image 
                src='/images/icon-16.png'
                alt='Icon'
                width={50}
                height={50}
                className="rounded-full"
                />
            </Link>
        </div>
        <div id='middle'>

        </div>
        <div id='right'>
            <UserButton showName/>
        </div>
    </nav>
  )
}
