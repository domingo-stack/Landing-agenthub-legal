import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import agentHubLogo from "@/assets/agenthub-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Caso de Éxito", href: "#caso-exito" },
    { name: "Beneficios", href: "#beneficios" },
    { name: "Cómo Funciona", href: "#como-funciona" },
    { name: "Seguridad", href: "#seguridad" },
    { name: "Casos de Uso", href: "#casos-uso" },
    { name: "Planes", href: "#planes" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={agentHubLogo} 
              alt="AgentHub" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-accent/50"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              className={buttonVariants({ variant: "cta", size: "default" })}
              asChild
            >
              <a href="#planes">Empieza Gratis</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button 
                  className={buttonVariants({ variant: "cta", size: "default" })}
                  asChild
                >
                  <a href="#planes">Empieza Gratis</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;