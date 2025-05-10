
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set document title for SEO
    document.title = "SoftSell - Software License Resale Marketplace";
    
    // Scroll animation functionality
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Trigger once on load
    
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <DarkModeToggle />
      <ChatWidget />
    </div>
  );
};

export default Index;
