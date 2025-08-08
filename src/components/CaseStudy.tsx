import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import clientLogo from "@/assets/client-logo.jpg";

const CaseStudy = () => {
  return (
    <section id="caso-exito" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Caso de Éxito
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resultados reales con clientes reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo LegalTech Partners transformó su operación jurídica
          </p>
        </div>

        <Card className="max-w-5xl mx-auto shadow-card border-2">
          <CardContent className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Quote and Company */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={clientLogo} 
                    alt="LegalTech Partners" 
                    className="h-12 w-auto"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">LegalTech Partners</h3>
                    <p className="text-muted-foreground">Despacho de Abogados</p>
                  </div>
                </div>

                <blockquote className="text-2xl font-medium text-foreground leading-relaxed">
                  "Reducimos el tiempo de revisión de contratos de{" "}
                  <span className="text-primary font-bold">3 días a 4 horas</span>{" "}
                  gracias a AgentHub."
                </blockquote>

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">MP</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">María Pérez</p>
                    <p>Socia Senior, LegalTech Partners</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">85%</div>
                  <div className="text-sm text-muted-foreground">Reducción en tiempo</div>
                </div>

                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">$45K</div>
                  <div className="text-sm text-muted-foreground">Ahorro mensual</div>
                </div>

                <div className="text-center p-6 bg-gradient-subtle rounded-xl">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">300%</div>
                  <div className="text-sm text-muted-foreground">ROI primer año</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudy;