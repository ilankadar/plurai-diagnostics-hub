const MainContent = () => {
  return (
    <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Introducing CHAS: The Chatbot-Agent Simulator
        </h2>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            CHAS is an AI-powered diagnostic framework driven by Large Language Models (LLMs) and AI agents. 
            It redefines how chatbot agents are evaluated by simulating thousands of edge-case scenarios 
            across a wide range of complexity levels.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            With CHAS, you can stress-test your chatbot like never before, uncovering hidden weaknesses 
            and performance gaps. This comprehensive analysis empowers developers to refine their agents, 
            ensuring reliable, enterprise-grade deployments.
          </p>
        </div>
      </section>

      <section className="bg-accent/50 dark:bg-gray-800/50 p-8 rounded-xl border border-accent dark:border-gray-700 backdrop-blur-sm">
        <blockquote className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white italic">
          "Don't limit your chatbot's potential because of what you don't know. CHAS helps you know exactly 
          what your agent can handle, fix its blind spots, and deploy with confidence."
        </blockquote>
      </section>
    </div>
  );
};

export default MainContent;