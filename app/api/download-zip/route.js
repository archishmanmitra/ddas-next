import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Path to your ZIP file
    
    const filePath = path.resolve('.', 'public/zip/DDAS.zip');

    // Read the file
    const fileBuffer = fs.readFileSync(filePath)

    // Set the headers for the response
    const headers = new Headers()
    headers.set('Content-Disposition', 'attachment; filename=DDAS.zip')
    headers.set('Content-Type', 'application/zip')

    // Return the file as the response
    return NextResponse.json(fileBuffer, {
      status: 200,
      statusText: 'OK',
      headers: headers,
    })
  } catch (error) {
    console.error('Error serving ZIP file:', error)
    return NextResponse.json('Error serving file', { status: 500 })
  }
}