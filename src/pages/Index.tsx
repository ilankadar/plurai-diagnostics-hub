
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ActivitySquare, BarChart3, Shield, Settings } from "lucide-react";
import Products from "@/components/Products";

const Index = () => {
  const features = [{
    icon: ActivitySquare,
    title: "Simulate Data",
    description: "Automatically generate a test dataset customized to your product specifications and policies, ensuring your LLM app is stress-tested from every angle before shipping"
  }, {
    icon: BarChart3,
    title: "Evaluate Performance",
    description: "Detailed analysis to identify failures and performance gaps, prioritize improvements, and compare outcomes across experiments"
  }, {
    icon: Settings,
    title: "Optimize Performance",
    description: "Enhance application performance using simulated data to align with business needs"
  }, {
    icon: Shield,
    title: "SafeGuard Reliability",
    description: "Robust guardrails to proactively prevent risks, ensure compliance, and guarantee your LLM-App operates within defined boundaries"
  }];
  
  return (
    <div className="min-h-screen pt-16 bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <Hero />
      </div>
      
      <Products features={features} />
      
      {/* Let's Get Started Section */}
      <section className="py-24 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Let's Get Started
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">At Plurai, we're committed to accelerating GenAI adoption. Let's make your GenAI App reliable, aligned with your business needs, and ready for confident deployment. Book a demo to see how we can help!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact-us">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium px-8 rounded-full flex items-center gap-2">
                Book A Demo
                <span className="bg-white/20 rounded-full p-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
