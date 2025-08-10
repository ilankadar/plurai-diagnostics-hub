import { Shield, Rocket, BarChart3, Cpu, Award, BookOpen, GraduationCap, User, CircleCheck, Lightbulb, Lock, Sparkles, Share2, Users, Shield as ShieldIcon, Target, Zap, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const About = () => {
  return <div className="min-h-screen bg-background">
      {/* Mission Section with enhanced styling and colorful backgrounds */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background to-accent/5">
        {/* Decorative background elements with more vibrant colors */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9b87f5]/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5] animate-fade-in">
            Shaping the Future of an Agentic World
          </h1>
          <div className="bg-white/10 dark:bg-[#1A1F2C]/40 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 dark:border-[#9b87f5]/20 shadow-lg animate-fade-in hover:shadow-xl transition-all duration-300">
            <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              At Plurai, we believe the future is agentic, set to disrupt industries in ways we can't yet fully imagine. However, businesses need reliable, high-performing Generative AI (GenAI) applications to succeed without risking their reputation. Many hesitate to deploy GenAI due to reliability concerns, slowing adoption and missing opportunities. Plurai was founded to change that by equipping businesses with the AI infrastructure to confidently deploy impactful GenAI at scale. Our focus is on building trust and ensuring GenAI consistently deliver reliable performance in real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section with improved card design and color scheme */}
      <section className="py-24 px-4 relative bg-gradient-to-b from-[#6E59A5]/10 to-[#D6BCFA]/5">
        <div className="absolute inset-0 bg-[linear-gradient(109.6deg,rgba(223,234,247,0.2)_11.2%,rgba(244,248,252,0.1)_91.1%)] dark:bg-[linear-gradient(109.6deg,rgba(26,31,44,0.8)_11.2%,rgba(30,36,50,0.8)_91.1%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col items-center relative mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5]">
              Our Core Values
            </h2>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-primary to-[#9b87f5] rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission-Driven, Customer-Focused */}
            <div className="group relative p-8 rounded-2xl transition-all duration-300 animate-fade-in hover:shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white/10 via-white/5 to-[#FDE1D3]/10 dark:from-[#1A1F2C]/40 dark:via-[#1A1F2C]/30 dark:to-[#1A1F2C]/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-primary/10 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground/90">Mission-Driven, Customer-Focused</h3>
              <p className="text-foreground/80 leading-relaxed relative z-10 text-center">
                Eyes on the mission, gears on the customer
              </p>
            </div>

            {/* Move Fast, Fearlessly */}
            <div className="group relative p-8 rounded-2xl transition-all duration-300 animate-fade-in hover:shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white/10 via-white/5 to-[#D3E4FD]/10 dark:from-[#1A1F2C]/40 dark:via-[#1A1F2C]/30 dark:to-[#1A1F2C]/20 backdrop-blur-sm border border-[#9b87f5]/10 hover:border-[#9b87f5]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9b87f5]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-[#9b87f5]/10 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-[#9b87f5]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground/90">Move Fast, Fearlessly</h3>
              <p className="text-foreground/80 leading-relaxed relative z-10 text-center">
                Adapt quickly, tackle challenges boldly, and embrace the unknown
              </p>
            </div>

            {/* Open and Collaborative */}
            <div className="group relative p-8 rounded-2xl transition-all duration-300 animate-fade-in hover:shadow-lg hover:-translate-y-2 bg-gradient-to-br from-white/10 via-white/5 to-[#FEF7CD]/10 dark:from-[#1A1F2C]/40 dark:via-[#1A1F2C]/30 dark:to-[#1A1F2C]/20 backdrop-blur-sm border border-[#0EA5E9]/10 hover:border-[#0EA5E9]/30">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0EA5E9]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-[#0EA5E9]/10 dark:bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Users2 className="w-8 h-8 text-[#0EA5E9]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-foreground/90">Open and Collaborative</h3>
              <p className="text-foreground/80 leading-relaxed relative z-10 text-center">
                Teamwork, transparency, and sharing to drive collaboration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section with improved layout and visual styling */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#E5DEFF]/10 to-background border-t border-primary/10 dark:border-[#9b87f5]/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#D6BCFA]/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center relative mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5]">
              Built on Deep Expertise: Meet Our Founders
            </h2>
            <div className="mt-4 w-32 h-1 bg-gradient-to-r from-primary to-[#9b87f5] rounded-full"></div>
          </div>

          {/* Group photo of founders */}
          <div className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-[#9b87f5]/20 to-[#0EA5E9]/20 rounded-2xl blur-lg"></div>
              <img src="/lovable-uploads/f2ff0abf-95b9-4ce6-8d40-d393cbbd6935.png" alt="Plurai Founders - Ohad Mandelbaum, Dr. Ilan Kadar, and Dr. Elad Levi" className="relative z-10 w-full max-w-2xl h-auto object-cover rounded-2xl ring-4 ring-white/20 dark:ring-[#1A1F2C]/50 shadow-xl" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Ohad Mandelbaum */}
            <div className="flex flex-col space-y-6 bg-gradient-to-br from-white/5 to-[#0EA5E9]/5 dark:from-[#1A1F2C]/40 dark:to-[#1A1F2C]/20 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#0EA5E9]/20 dark:border-[#0EA5E9]/10">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0EA5E9]/40 to-primary/40 rounded-xl blur-lg"></div>
                  <img src="/lovable-uploads/b0bb635c-4105-423a-92cf-d13f7c6a5840.png" alt="Ohad Mandelbaum" className="relative z-10 w-48 h-48 object-cover rounded-xl ring-4 ring-white/20 dark:ring-[#1A1F2C]/50" />
                </div>
                <h3 className="text-2xl font-bold mt-2 text-foreground">Ohad Mandelbaum</h3>
                <p className="text-[#0EA5E9] font-semibold">Co-Founder & CEO</p>
                <a href="https://www.linkedin.com/in/ohad-mandelbaum/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#0EA5E9] hover:text-[#0284C7] transition-colors">
                  <img src="/lovable-uploads/2fedd162-37f8-4f2e-be1d-037a533c0860.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
              <div className="bg-white/5 dark:bg-[#1A1F2C]/30 p-6 rounded-xl border border-[#0EA5E9]/10 dark:border-[#0EA5E9]/5">
                <p className="text-foreground/80 leading-relaxed">
                  Ohad Mandelbaum brings over 20 years of global go-to-market leadership to Plurai, where he drives company vision and growth. He previously served as Chief Revenue Officer at Perimeter 81, SVP Global Sales at BrainsWay, and spent over a decade in executive roles at Alma Lasers and Good Energies. Across cybersecurity, AI, and medtech, Ohad has built and scaled high-impact sales, marketing, and business development operations. With an engineering background and an EMBA from Kellogg, he combines strategic depth with executional excellence to turn innovation into category-defining companies.
                </p>
              </div>
            </div>

            {/* Dr. Ilan Kadar */}
            <div className="flex flex-col space-y-6 bg-gradient-to-br from-white/5 to-primary/5 dark:from-[#1A1F2C]/40 dark:to-[#1A1F2C]/20 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/20 dark:border-primary/10">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-[#9b87f5]/40 rounded-xl blur-lg"></div>
                  <img src="/lovable-uploads/9f225bd6-6cec-469d-838d-701253bee991.png" alt="Dr. Ilan Kadar" className="relative z-10 w-48 h-48 object-cover rounded-xl ring-4 ring-white/20 dark:ring-[#1A1F2C]/50" />
                </div>
                <h3 className="text-2xl font-bold mt-2 text-foreground">Dr. Ilan Kadar</h3>
                <p className="text-primary font-semibold">Co-Founder and CTO</p>
                <a href="https://www.linkedin.com/in/ilan-kadar-b57ba511b/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                  <img src="/lovable-uploads/2fedd162-37f8-4f2e-be1d-037a533c0860.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
              <div className="bg-white/5 dark:bg-[#1A1F2C]/30 p-6 rounded-xl border border-primary/10 dark:border-primary/5">
                <p className="text-foreground/80 leading-relaxed">
                  Dr. Ilan Kadar brings over a decade of AI leadership and expertise to Plurai, where he spearheads innovation in AI-driven products. Formerly the Executive VP of AI & Automotive at Nexar and Deep Learning Group Leader at Cortica, he has a proven track record of leading end-to-end productization and development of cutting-edge AI solutions with real-world impact. With a PhD in Machine Learning and Computer Vision and publications in top-tier machine-learning conferences, Dr. Kadar is a recognized thought leader in the AI community.
                </p>
              </div>
            </div>

            {/* Dr. Elad Levi */}
            <div className="flex flex-col space-y-6 bg-gradient-to-br from-white/5 to-[#9b87f5]/5 dark:from-[#1A1F2C]/40 dark:to-[#1A1F2C]/20 p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#9b87f5]/20 dark:border-[#9b87f5]/10">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/40 to-primary/40 rounded-xl blur-lg"></div>
                  <img src="/lovable-uploads/207201cb-1325-4455-bd43-4ffe838a33ea.png" alt="Dr. Elad Levi" className="relative z-10 w-48 h-48 object-cover rounded-xl ring-4 ring-white/20 dark:ring-[#1A1F2C]/50" />
                </div>
                <h3 className="text-2xl font-bold mt-2 text-foreground">Dr. Elad Levi</h3>
                <p className="text-[#9b87f5] font-semibold">Co-Founder and CSO</p>
                <a href="https://www.linkedin.com/in/elad-levi-a938a3121/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#9b87f5] hover:text-[#7E69AB] transition-colors">
                  <img src="/lovable-uploads/2fedd162-37f8-4f2e-be1d-037a533c0860.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
              </div>
              <div className="bg-white/5 dark:bg-[#1A1F2C]/30 p-6 rounded-xl border border-[#9b87f5]/10 dark:border-[#9b87f5]/5">
                <p className="text-foreground/80 leading-relaxed">
                  Dr. Elad Levi is a distinguished AI expert with over a decade of experience developing groundbreaking AI products. As the creator of <a href="https://github.com/Eladlev/AutoPrompt" target="_blank" rel="noopener noreferrer" className="text-[#9b87f5] hover:underline">AutoPrompt</a>, an open-source tool that has earned over 2,700 GitHub stars and 100,000+ downloads, he has demonstrated exceptional innovation in the field. Previously, Dr. Levi served as Principal Scientist at Sightful and AI Architect at Nexar. Holding a PhD in Mathematics, he has published significant research in top-tier machine learning conferences and is recognized as a leading expert in artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Get Started Section with improved visuals */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#FEC6A1]/10 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#9b87f5]/20 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/5 to-[#D946EF]/5 dark:from-[#1A1F2C]/40 dark:to-[#1A1F2C]/20 backdrop-blur-sm rounded-2xl p-12 border border-[#D946EF]/20 dark:border-[#D946EF]/10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#D946EF]">
                Let's Get Started
              </h2>
              <p className="text-xl text-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
                At Plurai, we're committed to accelerating Generative AI adoption. Let's make your GenAI App reliable, aligned with your business needs, and ready for confident deployment. Book a demo to see how we can help!
              </p>
              <Link to="/contact-us">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-full transition-colors text-base font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Book A Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default About;