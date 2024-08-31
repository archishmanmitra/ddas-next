import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";
import { ClerkProvider } from "@clerk/clerk-react";


export const metadata = {
  title: "DDAS",
  description: "Data Download Duplication Alert System",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" >
      <body className=''>
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
    </ClerkProvider>
  );
}
