import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Zap, Lightbulb } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { categorizedFeatures } from "./products/productData";

interface ProductsProps {
  features: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
  }[];
}

const Products = ({
  features
}: ProductsProps) => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getRadius = () => {
    if (windowWidth < 640) return 120; // Small mobile
    if (windowWidth < 768) return 150; // Medium mobile
    if (windowWidth < 1024) return 200; // Tablet
    return 280; // Desktop
  };

  const radius = getRadius();

  const getFeaturePosition = (index: number, totalFeatures: number) => {
    const angle = (index * (360 / totalFeatures) - 90) * (Math.PI / 180);
    return {
      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
      transform: 'translate(-50%, -50%)'
    };
  };

  const arrowPositions = Array.from({
    length: 24
  }).map((_, i) => {
    const angle = (i * (360 / 24) - 90) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      rotation: i * (360 / 24) + 90
    };
  });

  const getCircleSize = (i: number) => {
    const baseSize = radius * 1.4;
    return baseSize + i * (radius * 0.15);
  };

  const allFeatures = [...categorizedFeatures.automatedTesting, ...categorizedFeatures.qualityAndRisk];

  return <div id="products" className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">Product</h1>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-16">Go from Prototype to World-Class Performance 10X Faster—With Confidence</p>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-black/60 to-primary/10 p-6 rounded-xl border border-primary/20 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Proactive Reliability Rating</h3>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-primary/10 p-6 rounded-xl border border-primary/20 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">10X Faster Time to Value</h3>
            </div>
            
            <div className="bg-gradient-to-br from-black/60 to-primary/10 p-6 rounded-xl border border-primary/20 backdrop-blur-sm">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white">Intelligent Risk Prevention</h3>
            </div>
          </div>

          <div className="mb-24">
            <div className={`relative mx-auto ${windowWidth < 768 ? 'h-[400px]' : 'h-[700px]'} mb-16`}>
              {/* Testing Label - Half Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/30 text-primary font-semibold z-20 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                Testing
              </div>
              
              {/* Production Label */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-black/80 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/30 text-primary font-semibold z-20 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                Production
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(8)].map((_, i) => <div key={i} className="absolute border border-primary/30 rounded-full" style={{
                width: `${getCircleSize(i)}px`,
                height: `${getCircleSize(i)}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }} />)}
              </div>

              <motion.div className="absolute w-full h-full" animate={{
              rotate: 360
            }} transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }} style={{
              transformOrigin: 'center center'
            }}>
                {arrowPositions.map((pos, index) => <motion.div key={`arrow-${index}`} className="absolute left-1/2 top-1/2 w-2 h-2" style={{
                x: pos.x,
                y: pos.y,
                rotate: pos.rotation,
                opacity: 0.5
              }} animate={{
                scale: [1, 1.2, 1]
              }} transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1
              }}>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-primary" />
                  </motion.div>)}
              </motion.div>

              <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20 flex items-center justify-center z-10`} style={{
              width: `${windowWidth < 768 ? '60px' : '96px'}`,
              height: `${windowWidth < 768 ? '60px' : '96px'}`
            }}>
                <div className="rounded-full bg-primary/5 flex items-center justify-center" style={{
                width: `${windowWidth < 768 ? '40px' : '64px'}`,
                height: `${windowWidth < 768 ? '40px' : '64px'}`
              }}>
                <div className="rounded-full bg-primary/10" style={{
                  width: `${windowWidth < 768 ? '25px' : '40px'}`,
                  height: `${windowWidth < 768 ? '25px' : '40px'}`
                }} />
              </div>
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              const position = getFeaturePosition(index, features.length);
              return <HoverCard key={index} openDelay={100} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <motion.div className="absolute cursor-pointer group z-30" style={position} initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)}>
                      <div className="flex flex-col items-center gap-2">
                        <div className={`${windowWidth < 768 ? 'p-2' : 'p-3'} bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors relative hover:scale-110 duration-300`}>
                          <div className={`absolute -top-2 -right-2 ${windowWidth < 768 ? 'w-4 h-4 text-[10px]' : 'w-6 h-6 text-xs'} rounded-full bg-primary flex items-center justify-center text-black font-bold shadow-md`}>
                            {index + 1}
                          </div>
                          <Icon className={`${windowWidth < 768 ? 'w-4 h-4' : 'w-6 h-6'} text-primary`} />
                        </div>
                        <div className={`${windowWidth < 768 ? 'text-sm' : 'text-lg'} font-semibold text-white`}>
                          {feature.title}
                        </div>
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-black/95 border border-primary/30 text-white p-4 backdrop-blur-lg" sideOffset={5}>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <h4 className="font-semibold">{feature.title}</h4>
                      </div>
                      <p className="text-sm text-gray-300">{feature.description}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>;
            })}

            {features.map((_, index) => {
              const angle = (index * (360 / features.length) - 90) * (Math.PI / 180);
              const markerRadius = radius - 20;
              const x = Math.cos(angle) * markerRadius;
              const y = Math.sin(angle) * markerRadius;
              return <motion.div key={`marker-${index}`} className="absolute left-1/2 top-1/2 w-2 h-2" style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle * (180 / Math.PI) + 90}deg)`
              }}>
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-primary/30" />
              </motion.div>;
            })}
            
            {/* SVG with half circle path for Automated Testing Phase */}
            <svg className="absolute inset-0 w-full h-full z-5" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#5CEBB1" />
                </marker>
                
                {/* Gradient for the path */}
                <linearGradient id="automatedTestingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#5CEBB1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#5CEBB1" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              
              {/* Half circle path for Automated Testing Phase from Simulate Data to Evaluate Performance */}
              <path d={`M ${windowWidth < 768 ? '30%' : '25%'} 50% A ${windowWidth < 768 ? '120' : '180'} ${windowWidth < 768 ? '120' : '180'} 0 0 1 ${windowWidth < 768 ? '70%' : '75%'} 50%`} stroke="url(#automatedTestingGradient)" strokeWidth="3" fill="none" strokeDasharray="5,5" strokeLinecap="round" className="animate-pulse" />
              
              {/* Arrows at each end */}
              <circle cx={windowWidth < 768 ? "30%" : "25%"} cy="50%" r="5" fill="#5CEBB1" />
              <circle cx={windowWidth < 768 ? "70%" : "75%"} cy="50%" r="5" fill="#5CEBB1" />
              
              {/* Arrow for Production (bottom part) */}
              <path d="M 30% 70%, Q 40% 80%, 50% 80%" stroke="#5CEBB1" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
            </svg>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white">Our Platform Features</h2>
            
            {/* Automated Testing Category */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-medium mb-8 text-primary">Automated Testing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {categorizedFeatures.automatedTesting.map((feature, index) => {
                const Icon = feature.icon;
                return <Card key={index} className="group border border-primary/20 bg-black/70 backdrop-blur-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                      <CardHeader className="relative pb-0">
                        <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                        <CardTitle className="flex items-center gap-3 text-xl text-white">
                          <Icon className="w-6 h-6 text-primary" />
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
            
            {/* Quality and Risk Prevention Category */}
            <div>
              <h3 className="text-xl md:text-2xl font-medium mb-8 text-primary">Continuous Quality Improvement and Risk Prevention</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {categorizedFeatures.qualityAndRisk.map((feature, index) => {
                const Icon = feature.icon;
                return <Card key={index} className="group border border-primary/20 bg-black/70 backdrop-blur-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300">
                      <CardHeader className="relative pb-0">
                        <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xl shadow-lg">
                          {index + 3}
                        </div>
                        <CardTitle className="flex items-center gap-3 text-xl text-white">
                          <Icon className="w-6 h-6 text-primary" />
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-16">
            <Button variant="default" size="lg" className="rounded-full bg-primary hover:bg-primary-dark text-black" onClick={() => window.open('https://plurai.substack.com/p/introducing-intellagent-your-agent', '_blank')}>
              Learn More
            </Button>
            <Link to="/contact-us">
              <Button size="lg" className="rounded-full bg-black text-primary border border-primary hover:bg-primary/10">
                Book A Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};

export default Products;
