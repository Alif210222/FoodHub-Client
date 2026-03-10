
import ContactSection from "@/components/modules/home/ContactSection";
import HeroSection from "@/components/modules/home/hero";
import HomeMeals from "@/components/modules/home/HomeMeals";
import HowItWorks from "@/components/modules/home/HowItWorks";
import HomeProviders from "@/components/modules/home/ProviderHomeCard";
import Footer from "@/components/shared/Footer";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black mt-10 ">
      
       <HeroSection></HeroSection>
       <HomeMeals></HomeMeals>
       <HomeProviders></HomeProviders>
       <HowItWorks></HowItWorks>
       <ContactSection></ContactSection>

       <Footer></Footer>
    </div>
  );
}
