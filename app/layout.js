
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


export const metadata = {
  title: "DDAS",
  description: "Data Download Duplication Alert System",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="w-full p-5">
        <body className='flex justify-center items-center '>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
