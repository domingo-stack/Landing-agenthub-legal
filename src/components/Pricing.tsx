import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Check, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      users: "0-3 usuarios",
      price: "Gratis",
      priceDetail: "Para siempre",
      features: [
        "Acceso a modelos básicos de IA",
        "5 consultas por día",
        "Soporte por email",
        "Documentos básicos"
      ],
      cta: "Comenzar",
      popular: false,
      icon: null
    },
    {
      name: "Professional",
      users: "4-10 usuarios",
      price: "$49",
      priceDetail: "por mes",
      features: [
        "Acceso completo a todos los modelos",
        "Consultas ilimitadas",
        "Trazabilidad completa",
        "Soporte prioritario",
        "Whitelabel básico"
      ],
      cta: "Comenzar",
      popular: true,
      icon: Zap
    },
    {
      name: "Business",
      users: "11-25 usuarios",
      price: "$119",
      priceDetail: "por mes",
      features: [
        "Todo de Professional",
        "Análisis masivo de documentos",
        "Integraciones avanzadas",
        "Soporte telefónico",
        "Whitelabel completo"
      ],
      cta: "Comenzar",
      popular: false,
      icon: null
    },
    {
      name: "Enterprise",
      users: "26-75 usuarios",
      price: "$349",
      priceDetail: "por mes",
      features: [
        "Todo de Business",
        "Gerente de cuenta dedicado",
        "SLA garantizado",
        "Configuración personalizada",
        "Onboarding especializado"
      ],
      cta: "Comenzar",
      popular: false,
      icon: null
    },
    {
      name: "Scale",
      users: "+75 usuarios",
      price: "$499",
      priceDetail: "por mes",
      features: [
        "Todo de Enterprise",
        "Volúmenes ilimitados",
        "Infraestructura dedicada",
        "Desarrollos a medida",
        "Compliance especializado"
      ],
      cta: "Comenzar",
      popular: false,
      icon: Crown
    }
  ];

  return (
    <section id="planes" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Planes de Precios
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Elige el plan perfecto para tu equipo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precios transparentes. Sin sorpresas. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-accent shadow-glow transform scale-105' 
                  : 'border-2 hover:border-accent/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-semibold px-4 py-1">
                    Más Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {plan.icon && (
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center mr-2">
                      <plan.icon className="h-4 w-4 text-accent" />
                    </div>
                  )}
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{plan.users}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.priceDetail}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={buttonVariants({ 
                    variant: plan.popular ? "cta" : "outline-gold", 
                    size: "default" 
                  })}
                  asChild
                >
                  <a href="#contacto">{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Service */}
        <div className="mt-12">
          <Card className="max-w-2xl mx-auto border-2 border-navy/20 shadow-card">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-navy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crown className="h-8 w-8 text-navy" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Nube Privada
              </h3>
              <p className="text-muted-foreground mb-4">
                Servicio adicional para máxima seguridad y compliance
              </p>
              <Button 
                className={buttonVariants({ variant: "legal", size: "default" })}
                asChild
              >
                <a href="#contacto">Consultar Precios</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          ✓ Todos los planes incluyen soporte técnico · ✓ Sin compromisos de permanencia · ✓ Migración gratuita
        </div>
      </div>
    </section>
  );
};

export default Pricing;