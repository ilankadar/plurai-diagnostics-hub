import { Button } from "@/components/ui/button";
import AnimatedDots from "./AnimatedDots";
import { Link } from "react-router-dom";
const Hero = () => {
  return <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Base Background with Dark Gradient */}
      <div className="absolute inset-0" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #121212 50%, #0a0a0a 100%)',
      opacity: '0.95'
    }} />
      
      {/* Animated Green Gradient Circle */}
      <div className="absolute animate-float opacity-60" style={{
      background: 'radial-gradient(circle at center, rgba(92, 235, 177, 0.4) 0%, transparent 70%)',
      width: '800px',
      height: '800px',
      bottom: '-200px',
      right: '-200px',
      borderRadius: '50%'
    }} />
      
      {/* Additional Animated Left Side Gradient */}
      <div className="absolute animate-float opacity-20" style={{
      background: 'radial-gradient(circle at center, rgba(92, 235, 177, 0.3) 0%, transparent 70%)',
      width: '600px',
      height: '600px',
      top: '-100px',
      left: '-100px',
      borderRadius: '50%',
      animationDelay: '2s'
    }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto">
          {/* Text content */}
          <div className="text-center space-y-6">
            <h1 style={{
            animationDelay: "0.3s",
            animationFillMode: "forwards"
          }} className="opacity-0 text-4xl font-bold text-white mb-6 leading-tight animate-fade-in sm:text-7xl">Ship Reliable LLM Products - Faster </h1>
            <p className="opacity-0 text-lg sm:text-xl text-gray-300 mb-8 animate-fade-in" style={{
            animationDelay: "0.5s",
            animationFillMode: "forwards"
          }}>The End-2-End Platform for Building Reliable World-Class LLM Products</p>
            <div className="opacity-0 flex justify-center gap-4 animate-fade-in" style={{
            animationDelay: "0.7s",
            animationFillMode: "forwards"
          }}>
              <Link to="/contact-us">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black font-medium px-8 rounded-full flex items-center gap-2">
                  Book A Demo
                  <span className="bg-white/20 rounded-full p-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <a href="https://github.com/plurai-ai/intellagent" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-800 font-medium px-8 rounded-full flex items-center gap-2">
                  <img src="/lovable-uploads/0d2c6f66-f734-4588-b67c-ff060eda40da.png" alt="GitHub" className="h-5 w-5" />
                  Open-Source
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;