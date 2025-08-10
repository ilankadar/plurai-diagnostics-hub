import { Crown } from "lucide-react";

const Header = () => {
  return (
    <div className="space-y-6 text-center animate-fade-in">
      <h2 className="flex items-center justify-center gap-4 mb-8 text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
        <Crown className="w-10 h-10 text-gray-700 dark:text-gray-300 flex-shrink-0" />
        CHas-Agent Simulator (CHAS)
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Advancing conversational AI with an open-source diagnostics framework
      </p>
    </div>
  );
};

export default Header;