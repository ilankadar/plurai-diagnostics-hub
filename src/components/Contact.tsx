import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { MessageSquareHeart, Rocket, User, Building2, Mail } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const {
        data,
        error
      } = await supabase.functions.invoke('hubspot-contact', {
        body: {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('workEmail'),
          company: formData.get('company'),
          message: formData.get('message')
        }
      });
      if (error) {
        console.error('Function error:', error);
        throw new Error(error.message || 'Failed to send message');
      }

      // Show success message regardless of whether contact was created or updated
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible."
      });
      form.reset();
    } catch (error: any) {
      console.error('Error sending to HubSpot:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent/5 min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-70 animate-float"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-[#9b87f5]/20 rounded-full blur-3xl -z-10 opacity-70 animate-float" style={{
      animationDelay: "2s"
    }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5]">
            Book a Demo
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">At Plurai, we're committed to accelerating GenAI adoption. Let's make your LLM application reliable, aligned with your business needs, and ready for confident deployment.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact form in card with subtle gradients */}
            <div className="md:col-span-2 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-white/10 to-primary/5 dark:from-gray-800/30 dark:to-primary/10 backdrop-blur-lg rounded-2xl p-8 border border-primary/20 dark:border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-1">
                      <User className="h-4 w-4 text-primary" />
                      First Name
                    </label>
                    <Input id="firstName" name="firstName" type="text" placeholder="Your first name" required className="bg-white/5 dark:bg-gray-900/50 border-primary/20 dark:border-primary/10 focus:border-primary focus:ring-primary/30 placeholder-gray-400 text-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-1">
                      <User className="h-4 w-4 text-[#9b87f5]" />
                      Last Name
                    </label>
                    <Input id="lastName" name="lastName" type="text" placeholder="Your last name" required className="bg-white/5 dark:bg-gray-900/50 border-[#9b87f5]/20 dark:border-[#9b87f5]/10 focus:border-[#9b87f5] focus:ring-[#9b87f5]/30 placeholder-gray-400 text-gray-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="workEmail" className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-1">
                    <Mail className="h-4 w-4 text-[#D946EF]" />
                    Work Email
                  </label>
                  <Input id="workEmail" name="workEmail" type="email" placeholder="you@company.com" required className="bg-white/5 dark:bg-gray-900/50 border-[#D946EF]/20 dark:border-[#D946EF]/10 focus:border-[#D946EF] focus:ring-[#D946EF]/30 placeholder-gray-400 text-gray-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-1">
                    <Building2 className="h-4 w-4 text-[#F97316]" />
                    Company
                  </label>
                  <Input id="company" name="company" type="text" placeholder="Your company" required className="bg-white/5 dark:bg-gray-900/50 border-[#F97316]/20 dark:border-[#F97316]/10 focus:border-[#F97316] focus:ring-[#F97316]/30 placeholder-gray-400 text-gray-200" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-1">
                    <MessageSquareHeart className="h-4 w-4 text-[#0EA5E9]" />
                    Message (Optional)
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us more about your needs..." className="min-h-[100px] bg-white/5 dark:bg-gray-900/50 border-[#0EA5E9]/20 dark:border-[#0EA5E9]/10 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]/30 placeholder-gray-400 text-gray-200" />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-[#9b87f5] hover:from-primary/90 hover:to-[#9b87f5]/90 text-black font-medium rounded-full shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300" disabled={isSubmitting}>
                  <Rocket className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Let\'s Collaborate'}
                </Button>
              </form>
            </div>
            
            {/* Info panel with features/benefits */}
            <div className="animate-fade-in" style={{
            animationDelay: "0.4s"
          }}>
              <div className="bg-gradient-to-br from-white/5 to-[#9b87f5]/10 dark:from-gray-800/20 dark:to-[#9b87f5]/5 backdrop-blur-lg rounded-2xl p-8 border border-[#9b87f5]/20 dark:border-[#9b87f5]/10 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9b87f5]">
                  Why Choose Plurai?
                </h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z" />
                        <path d="M3 6 14 1.3 21 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200">Evaluation</h4>
                      <p className="text-gray-400 text-sm">Identify failures and performance gaps before deployment</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-2 bg-[#9b87f5]/10 dark:bg-[#9b87f5]/20 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9b87f5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V6a4 4 0 0 0-7-2.5A4 4 0 0 0 4 6v6c0 6 8 10 8 10Z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200">SafeGuard</h4>
                      <p className="text-gray-400 text-sm">Robust guardrails to proactively prevent risks</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-2 bg-[#D946EF]/10 dark:bg-[#D946EF]/20 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D946EF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200">Monitor</h4>
                      <p className="text-gray-400 text-sm">Track health, performance, and compliance issues</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 p-2 bg-[#F97316]/10 dark:bg-[#F97316]/20 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F97316]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                        <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M12 2v2" />
                        <path d="M12 22v-2" />
                        <path d="m17 20.66-1-1.73" />
                        <path d="M11 10.27 7 3.34" />
                        <path d="m20.66 17-1.73-1" />
                        <path d="m3.34 7 1.73 1" />
                        <path d="M14 12h8" />
                        <path d="M2 12h2" />
                        <path d="m20.66 7-1.73 1" />
                        <path d="m3.34 17 1.73-1" />
                        <path d="m17 3.34-1 1.73" />
                        <path d="m7 20.66 1-1.73" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-200">Optimize</h4>
                      <p className="text-gray-400 text-sm">Ensure ongoing quality improvements aligned with business needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-4 border-t border-white/10">
                  <p className="text-gray-300 text-sm italic">
                    "Our team will contact you within 24 hours to schedule a personalized demo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;