import { Github, FileText, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const LinksSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <a 
        href="https://github.com/plurai-ai/chas" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Button
          variant="outline"
          className="w-full py-6 text-gray-700 dark:text-gray-300 hover:bg-accent/50 border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300"
        >
          <Github className="mr-2 h-5 w-5" />
          <span className="font-medium">GitHub</span>
        </Button>
      </a>
      
      <Button
        variant="outline"
        className="w-full py-6 text-gray-700 dark:text-gray-300 hover:bg-accent/50 border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300"
      >
        <FileText className="mr-2 h-5 w-5" />
        <span className="font-medium">Research Paper</span>
      </Button>

      <a 
        href="https://chas-doc.plurai.ai" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <Button
          variant="outline"
          className="w-full py-6 text-gray-700 dark:text-gray-300 hover:bg-accent/50 border border-gray-200 dark:border-gray-700 rounded-full transition-all duration-300"
        >
          <BookOpen className="mr-2 h-5 w-5" />
          <span className="font-medium">Documentation</span>
        </Button>
      </a>
    </div>
  );
};

export default LinksSection;