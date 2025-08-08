import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import heroImage from "@/assets/hero-legal-ai.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Analiza, redacta y revisa documentos legales en{" "}
                <span className="text-primary">minutos</span> con IA
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Automatiza la redacción, revisión y análisis de documentos jurídicos, 
                y libera tiempo para lo que realmente importa: la estrategia y el cliente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={buttonVariants({ variant: "hero", size: "xl" })}
                asChild
              >
                <a href="#planes">Empieza gratis ahora</a>
              </Button>
              
              <Button 
                className={buttonVariants({ variant: "outline-gold", size: "xl" })}
                asChild
              >
                <a href="#como-funciona">Ver cómo funciona</a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Setup en 3 minutos</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>ISO27001</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Abogados trabajando con IA para documentos legales"
                className="w-full h-auto rounded-2xl shadow-elegant"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-card text-sm font-medium">
              ⚡ 90% más rápido
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-card text-sm font-medium">
              🔒 100% seguro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;