import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Building, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    empresa: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email || !formData.empresa) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto",
    });

    setFormData({ email: "", empresa: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Contacto
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Listo para transformar tu práctica legal?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Déjanos tus datos y te ayudamos a configurar AgentHub para tu despacho
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <Card className="shadow-elegant border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Send className="h-5 w-5 text-accent mr-2" />
                Solicita tu demostración
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email corporativo *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@despacho.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="empresa" className="text-sm font-medium text-foreground">
                    Nombre de la empresa *
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      placeholder="Despacho Legal S.A."
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className={buttonVariants({ variant: "cta", size: "lg" })}
                >
                  Quiero que me contacten
                </Button>

                <p className="text-xs text-muted-foreground">
                  Al enviar este formulario aceptas que nos pongamos en contacto contigo 
                  para mostrarte cómo AgentHub puede ayudar a tu despacho.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Benefits */}
          <div className="space-y-6">
            <Card className="border-2 border-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  ¿Qué incluye la demostración?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Análisis personalizado de tu flujo de trabajo actual",
                    "Demo en vivo con tus propios documentos",
                    "Propuesta de implementación específica",
                    "Cálculo de ROI estimado para tu despacho",
                    "Sesión de Q&A con nuestros expertos legales"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-navy text-white border-2 border-navy">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Setup gratuito incluido
                </h3>
                <p className="text-white/80 text-sm">
                  Nuestro equipo configura AgentHub específicamente para tu tipo de práctica legal, 
                  sin costo adicional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;