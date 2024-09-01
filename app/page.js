import Nav from "@/components/Nav";
import Landing from "@/components/Landing";
import Install from "@/components/Install";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    
    <main className="flex flex-col justify-between items-center min-h-screen w-full relative">
      <Nav/>
      <Landing/>
      <Features/>
      <Install/>
      <Footer/>
     
    </main>
    
  );
}
