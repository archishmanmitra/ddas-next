import React from 'react'
import Link from "next/link"
export default function Footer() {
  return (
      <footer className="mt-10 py-8 pl-5 w-full">
        <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              
              <span className="text-lg font-semibold">DDAS Inc</span>
            </Link>
            <p className="text-muted-foreground">
              DDAS is a dataset management system that prevents duplicate data downloads, optimizes resource usage and enhances database management.
            </p>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                <TwitterIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                <FacebookIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                <LinkedinIcon className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:underline" prefetch={false}>
                <InstagramIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <nav className="grid gap-2">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <Link href="#landing" className="text-muted-foreground hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#features" className="text-muted-foreground hover:underline" prefetch={false}>
              Features
            </Link>
            <Link href="#install" className="text-muted-foreground hover:underline" prefetch={false}>
              Installation
            </Link>
          </nav>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-muted-foreground hover:underline">
                  info@ddas.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                <a href="#" className="text-muted-foreground hover:underline">
                  +91 9836473444
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Kolkata, India</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Dev & Design</h4>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                
                <a href="https://github.com/archishmanmitra" target='_blank'
                className="text-muted-foreground hover:underline">
                  Archishman Mitra
                </a>
              </div>
              <div className="flex items-center gap-2">                
                <a href="https://github.com/Tennobis" target='_blank' className="text-muted-foreground hover:underline">
                  Tanveer Hossain
                </a>
              </div>
              <div className="flex items-center gap-2"> 
                <a href="https://twitter.com/BroskiWoski69" target='_blank' className="text-muted-foreground hover:underline">
                  Prithweesh Banerjee
                </a>
              </div>
              <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/_._mriganka_debnath_._" target='_blank' className="text-muted-foreground hover:underline">
                Mriganka Debnath
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 DDAS Inc. All rights reserved.</p>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
      </footer>
    )
  }
  
  function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function MapPinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  }
  
  
  
  function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )}