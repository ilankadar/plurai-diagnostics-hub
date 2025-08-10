import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">© 2025 Plurai</span>
            <span className="text-gray-600 dark:text-gray-400">•</span>
            <Link 
              to="/privacy" 
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              Privacy
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://discord.gg/qhbc8j74"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Discord"
            >
              <img 
                src="/lovable-uploads/80c3ddd5-ccff-472a-b7ef-287a7136b5c4.png" 
                alt="Discord" 
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://plurai.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Newsletter"
            >
              <img 
                src="/lovable-uploads/94f6affd-e42a-4a4f-a34d-ff9543b4aa9a.png" 
                alt="Newsletter" 
                className="h-5 w-5"
              />
            </a>
            <a
              href="https://linkedin.com/company/plurai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="LinkedIn"
            >
              <img 
                src="/lovable-uploads/f2cf40bf-a362-47cc-b853-2ea3e439a264.png" 
                alt="LinkedIn" 
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;