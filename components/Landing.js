import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Zap } from 'lucide-react'

export default function Landing() {
  return (
    <div id='landing' className="flex flex-col min-h-screen bg-gradient-to-br from-gray-0 to-gray-50 text-black ">

      <main className="flex-grow container mx-auto px-4  py-12">
        <div  className="bg-white rounded-2xl shadow-2xl py-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                <span className="block">  Spot the Copy, <br/>Stop the Chaos.
                </span>
              </h2>
              <p className="text-xl mb-8">
             
              Alert, Avert, Optimize: Your Data Guardian is Here.
              </p>
              <Link 
                href="/#install" 
                className="inline-flex items-center px-8 py-4 rounded-full font-semibold text-white bg-black hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started <ArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="relative">
                <Image
                  src="/images/main.png"
                  width={600}
                  height={400}
                  alt="Data Download Duplication Alert System"
                  className="rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                />
                <div className="absolute -top-4 -left-4 bg-gray-200 rounded-full p-3 shadow-lg">
                  <Zap size={24} className="text-black" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-200 rounded-full p-3 shadow-lg">
                  <Shield size={24} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
    }
