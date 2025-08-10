
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Research = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section with enhanced visual styling */}
          <div className="text-center space-y-6 animate-fade-in relative">
            {/* Enhanced decorative elements */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-text-shimmer">
              Deliver Reliable Optimized GenAI Apps Faster
            </h1>
            <p className="text-xl text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Our Research Creates Innovative Tools to Accelerate GenAI adoption in Production. 
              We Share Insights to Advance AI and Foster Open Collaboration
            </p>
          </div>

          {/* Blog Post Cards - enhanced with better colors and contrast */}
          <div className="space-y-12">
            {/* First Blog Post Card */}
            <Card className="p-8 bg-gradient-to-br from-black/80 to-primary/5 backdrop-blur-sm border border-primary/20 dark:border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/4a9906d7-0aac-4314-9110-a3db59c8125c.png')] opacity-5 blur-xl bg-cover bg-center"></div>
              <div className="max-w-3xl mx-auto relative z-10">
                <article className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="aspect-video w-full md:w-2/5 overflow-hidden rounded-lg shadow-lg">
                      <img src="/lovable-uploads/4a9906d7-0aac-4314-9110-a3db59c8125c.png" 
                           alt="IntellAgent Logo" 
                           className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="w-full md:w-3/5 space-y-4">
                      <h2 className="text-2xl font-bold text-foreground">
                        Introducing IntellAgent: Your Agent Evaluation Framework
                      </h2>
                      <p className="text-foreground/80">
                        Uncover Your Agent's Blind Spots to Unlock Its Full Potential
                      </p>
                      <p className="text-primary font-medium text-sm">
                        January 21, 2025
                      </p>
                      <div className="flex items-start">
                        <Button asChild className="bg-[#5CEBB1] hover:bg-[#43D79E] text-black rounded-full shadow-md hover:shadow-lg transition-all">
                          <a href="https://plurai.substack.com/p/introducing-intellagent-your-agent" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="inline-flex items-center gap-2">
                            Read on Substack <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Card>

            {/* Second Blog Post Card */}
            <Card className="p-8 bg-gradient-to-br from-black/80 to-secondary/5 backdrop-blur-sm border border-secondary/20 dark:border-secondary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/4188380f-9f98-4e0d-863a-217abad8f092.png')] opacity-5 blur-xl bg-cover bg-center"></div>
              <div className="max-w-3xl mx-auto relative z-10">
                <article className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="aspect-video w-full md:w-2/5 overflow-hidden rounded-lg shadow-lg">
                      <img src="/lovable-uploads/4188380f-9f98-4e0d-863a-217abad8f092.png" 
                           alt="Time Engineering Graph" 
                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="w-full md:w-3/5 space-y-4">
                      <h2 className="text-2xl font-bold text-foreground">
                        Time Engineering: Controlling Latency in Reasoning LLMs
                      </h2>
                      <p className="text-foreground/80">
                        Controlling Reasoning Complexity with Prompting
                      </p>
                      <p className="text-secondary font-medium text-sm">
                        February 10, 2025
                      </p>
                      <div className="flex items-start">
                        <Button asChild className="bg-[#5CEBB1] hover:bg-[#43D79E] text-black rounded-full shadow-md hover:shadow-lg transition-all">
                          <a href="https://plurai.substack.com/p/time-engineering-controlling-latency" 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="inline-flex items-center gap-2">
                            Read on Substack <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </Card>
          </div>

          {/* Newsletter Subscription Card */}
          <Card className="p-8 bg-gradient-to-br from-black/80 to-primary/10 backdrop-blur-sm border border-primary/20 shadow-xl overflow-hidden relative">
            {/* Dynamic background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-float"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="flex flex-col items-center text-center space-y-6 relative">
              <h2 className="text-3xl font-bold text-foreground">
                Stay Ahead in AI Innovation
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Subscribe to Plurai's newsletter to stay updated on the latest advancements, open-source releases, 
                and cutting-edge tools that accelerate the adoption of reliable GenAI in production
              </p>
              <a href="https://plurai.substack.com" target="_blank" rel="noopener noreferrer" className="group">
                <Button className="w-fit bg-[#5CEBB1] hover:bg-[#43D79E] text-black rounded-full shadow-md group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                  Subscribe Now
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Research;
