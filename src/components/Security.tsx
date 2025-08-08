import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Shield, Lock, Cloud, FileCheck } from "lucide-react";

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: "Certificación ISO27001",
      description: "Estándares internacionales de seguridad de la información"
    },
    {
      icon: Lock,
      title: "Entorno hermético",
      description: "Datos completamente aislados y protegidos"
    },
    {
      icon: Cloud,
      title: "Nube privada dedicada",
      description: "Infraestructura exclusiva para tu firma"
    },
    {
      icon: FileCheck,
      title: "Compliance total",
      description: "Ideal para casos judiciales y auditorías"
    }
  ];

  return (
    <section id="seguridad" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Seguridad Máxima
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nube Privada Segura
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Utiliza la potencia de análisis de la IA de manera segura. 
            Contrata tu modelo con protección de tus datos y de tus clientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Card */}
          <Card className="shadow-elegant border-2 border-accent/20">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Protección Garantizada
                  </h3>
                  <p className="text-muted-foreground">
                    Ideal para contratos estratégicos, casos judiciales y compliance regulatorio.
                  </p>
                </div>

                <div className="bg-accent/5 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Certificaciones:</span>
                    <span className="font-medium text-foreground">ISO27001, SOC2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Uptime SLA:</span>
                    <span className="font-medium text-foreground">99.9%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Backup:</span>
                    <span className="font-medium text-foreground">Tiempo real</span>
                  </div>
                </div>

                <Button 
                  className={buttonVariants({ variant: "legal", size: "lg" })}
                  asChild
                >
                  <a href="#contacto">Contáctanos para ser parte de la lista de espera</a>
                </Button>

                <div className="text-xs text-muted-foreground">
                  <span className="inline-flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Disponibilidad limitada
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Security;