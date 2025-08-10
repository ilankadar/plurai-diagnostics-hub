import { Link } from "react-router-dom";
import { NavItem } from "./types";

interface MobileMenuProps {
  navItems: NavItem[];
  isOpen: boolean;
  handleNavigation: (href: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenu = ({ navItems, isOpen, handleNavigation, setIsOpen }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.href);
            }}
            className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
          >
            {item.icon}
            {item.displayText || item.name}
          </a>
        ))}
        <Link
          to="/talk-to-founders"
          className="block px-4 py-2 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;