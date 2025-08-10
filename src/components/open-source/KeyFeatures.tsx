import { Microscope, Bot, BarChart3, Shield } from "lucide-react";

const KeyFeatures = () => {
  return (
    <div className="space-y-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Key Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <div className="absolute -top-4 -right-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
            <Microscope className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Realistic Edge-Case Simulation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Tailored to your chatbot's unique architecture and system data schema, ensuring comprehensive testing coverage.
            </p>
          </div>
        </div>

        <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <div className="absolute -top-4 -right-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
            <Bot className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Dynamic User Interaction Modeling
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Simulates authentic user interactions with your agent for deeper insights and better understanding of user behavior.
            </p>
          </div>
        </div>

        <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <div className="absolute -top-4 -right-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
            <BarChart3 className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Comprehensive Performance Reporting
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Detailed metrics on success rates, policy and tool failure points, and complexity-level analyses for informed decision-making.
            </p>
          </div>
        </div>

        <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
          <div className="absolute -top-4 -right-4 bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
            <Shield className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white">
              Confidence in Deployment
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Deploy with assurance knowing your chatbot agents are thoroughly tested and ready for enterprise-level challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;