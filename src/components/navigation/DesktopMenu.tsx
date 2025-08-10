import { Link } from "react-router-dom";
import { NavItem } from "./types";

interface DesktopMenuProps {
  navItems: NavItem[];
  handleNavigation: (href: string) => void;
}

const DesktopMenu = ({ navItems, handleNavigation }: DesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center space-x-10">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavigation(item.href);
          }}
          className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
          aria-label={item.name}
        >
          {item.icon}
          {item.displayText}
        </a>
      ))}
      <Link 
        to="/contact-us"
        className="text-gray-700 hover:text-primary transition-colors text-sm font-medium"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default DesktopMenu;