import { Link, useLocation } from "react-router-dom";
import { Bird } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const links = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
            <Bird className="w-8 h-8" />
            <span className="text-xl font-bold">Bird Detection</span>
          </Link>
          
          <div className="flex gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
