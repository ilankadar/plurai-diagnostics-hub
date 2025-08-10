
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Github } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  displayText?: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { 
      name: "Product", 
      href: "#products",
      displayText: "Product"
    },
    { 
      name: "Research", 
      href: "research",
      displayText: "Research"
    },
    { 
      name: "Github", 
      href: "https://github.com/plurai-ai/intellagent", 
      displayText: "Github",
      icon: <Github size={20} className="text-white" />
    },
    { 
      name: "About", 
      href: "about",
      displayText: "About"
    }
  ];

  const communityItems = [
    {
      name: "Discord",
      href: "https://discord.gg/qhbc8j74",
      icon: <img src="/lovable-uploads/dcdd9565-2973-4004-9550-4fe212576cff.png" alt="Discord" className="w-4 h-4" />,
    },
    {
      name: "Newsletter",
      href: "https://plurai.substack.com",
      icon: <img src="/lovable-uploads/750913b9-b8cf-4e9c-9ff7-452cd066945c.png" alt="Newsletter" className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (href.startsWith('http')) {
      // Ensure the URL is properly formatted before opening
      try {
        const url = new URL(href);
        window.open(url.toString(), '_blank', 'noopener,noreferrer');
      } catch (e) {
        console.error('Invalid URL:', href);
      }
    } else {
      navigate(`/${href}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (location.pathname === '/' && location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/', { replace: true });
    } else if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const CommunityDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors text-sm font-medium">
        Community <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {communityItems.map((item) => (
          <DropdownMenuItem key={item.name}>
            <a
              href={item.href}
              className="w-full flex items-center gap-2 text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              {item.name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo section - aligned left */}
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img 
                src="/lovable-uploads/dfe5fd89-c9ab-411f-aef6-e7634abc55b4.png" 
                alt="Plurai" 
                className="h-10"
              />
            </Link>
          </div>

          {/* Navigation items - centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`/${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm font-medium"
                aria-label={item.name}
              >
                {item.icon}
                {item.displayText}
              </a>
            ))}
            <CommunityDropdown />
          </div>

          {/* CTA button - aligned right */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact-us"
              className="bg-primary hover:bg-primary/90 text-black px-4 py-2 rounded-full transition-colors text-sm font-medium flex items-center gap-2"
            >
              Book A Demo
              <span className="bg-white/20 rounded-full p-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background shadow-lg border-t border-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`/${item.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.href);
                }}
                className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.icon}
                {item.displayText || item.name}
              </a>
            ))}
            {communityItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
            <Link
              to="/contact-us"
              className="block px-4 py-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book A Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
