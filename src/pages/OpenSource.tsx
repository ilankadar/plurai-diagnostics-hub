
import Header from "@/components/open-source/Header";
import LinksSection from "@/components/open-source/LinksSection";
import MainContent from "@/components/open-source/MainContent";
import KeyFeatures from "@/components/open-source/KeyFeatures";
import Navigation from "@/components/Navigation";

const OpenSource = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-16 relative pb-16">
          <Header />
          <LinksSection />
          <MainContent />
          <KeyFeatures />
          <section className="space-y-6 bg-black/80 backdrop-blur-sm rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl border border-primary/20 dark:border-primary/10">
            <h2 className="text-2xl font-semibold text-white">
              Join the Open-Source Revolution
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Plurai believes that open-source innovation drives the future of AI. By using CHAS, 
              you're not just diagnosing your agents—you're contributing to a community redefining 
              chatbot reliability.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default OpenSource;
