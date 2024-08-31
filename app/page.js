import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link href={"/sign-in"}>Sign In</Link>
      </SignedOut>
      <h1>Hello</h1>
    </div>
  );
}
