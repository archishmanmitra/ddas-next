'use client'
import { useState } from "react"
import { Download, FolderOpen, Settings, ToggleRight, Upload } from "lucide-react"
import Link from "next/link"
export default function Install() {

  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    setIsLoading(true)
    setInterval(() => {
      setIsLoading(false)
    }, 690); 
  }

  return (
    <div id="install" className="w-full  max-w-4xl rounded-2xl mx-auto bg-white text-black shadow-2xl overflow-hidden mt-32 mb-32">
      <div className="p-6 ">
        <h2 className="text-2xl font-bold mb-6">Install Chrome Extension</h2>
        <ol className="space-y-4">
          <li className="flex items-start space-x-4">
            <Download className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Download the ZIP file</h3>
              <Link href="/zip/DDAS.zip" passHref>
              <button onClick={handleDownload} disabled={isLoading} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-[#4b4a4a] transition-colors">
              {isLoading ? 'Downloading...' : 'Download ZIP'}
              </button>
              </Link>
              
              
              
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FolderOpen className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Unzip the file</h3>
              <p>Extract the contents of the ZIP file to a folder on your computer.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <Settings className="w-6 h-6  flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Open Chrome Extensions page</h3>
              <p>Go to <code className="bg-gray-100 p-1 rounded">chrome://extensions/</code> in your Chrome browser.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <ToggleRight className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Enable Developer Mode</h3>
              <p>Toggle on Developer Mode in the top-right corner of the extensions page.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <Upload className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Load unpacked extension</h3>
              <p>Click on the &quot;Load unpacked&quot; button that appears after enabling Developer Mode.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <FolderOpen className="w-6 h-6  flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold">Select the extension folder</h3>
              <p>Choose the folder containing the unzipped extension files.</p>
            </div>
          </li>
        </ol>
        <p className="mt-6 text-sm text-gray-600">
          After completing these steps, the extension should be installed and visible in your Chrome browser.
        </p>
      </div>
    </div>
  )
}