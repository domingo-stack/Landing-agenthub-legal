import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { UserPlus, Settings, Users, Play } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Regístrate con tu correo",
      description: "Proceso simple y rápido. Solo necesitas tu email corporativo.",
      highlight: "30 segundos"
    },
    {
      icon: Settings,
      title: "Te ayudamos con la configuración",
      description: "Configuramos Chat GPT para uso más económico y eficiente.",
      highlight: "Asistencia incluida"
    },
    {
      icon: Users,
      title: "Invita a tu equipo",
      description: "Agrega miembros y comienza a ahorrar tiempo y dinero inmediatamente.",
      highlight: "Sin límites"
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Cómo Funciona
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Listo en 3 pasos simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde registro hasta productividad total en menos de 3 minutos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 right-0 w-full h-0.5 bg-gradient-to-r from-accent to-accent/30 transform translate-x-8 z-0"></div>
              )}
              
              <Card className="relative z-10 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent/30">
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-card">
                      <step.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <Badge variant="secondary" className="text-accent border-accent/30">
                    {step.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-navy/5 rounded-xl p-8 mb-6 border-2 border-dashed border-accent/30">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center">
                  <Play className="h-10 w-10 text-accent ml-1" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Video de Onboarding Legal
              </h3>
              <p className="text-muted-foreground">
                Ve exactamente cómo configurar AgentHub para tu despacho en 2 minutos
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                className={buttonVariants({ variant: "cta", size: "lg" })}
                asChild
              >
                <a href="#planes">Regístrate acá</a>
              </Button>
              
              <p className="text-sm text-muted-foreground">
                ✓ Sin tarjeta de crédito · ✓ Setup gratuito · ✓ Soporte incluido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;