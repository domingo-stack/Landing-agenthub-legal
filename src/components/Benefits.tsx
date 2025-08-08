import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Zap, 
  FileCheck, 
  Palette, 
  Clock, 
  Users 
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Pago por uso real",
      description: "No pagas licencias que no uses. Solo por lo que tu equipo realmente utiliza.",
      color: "text-green-600"
    },
    {
      icon: Zap,
      title: "Revisión masiva en minutos",
      description: "Due diligence y análisis contractual ultrarrápido. De días a minutos.",
      color: "text-blue-600"
    },
    {
      icon: FileCheck,
      title: "Trazabilidad total",
      description: "Historial de cambios y autores listo para auditorías y compliance.",
      color: "text-purple-600"
    },
    {
      icon: Palette,
      title: "Whitelabel",
      description: "Personaliza colores y logo a la imagen de tu firma legal.",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Setup rápido",
      description: "Listo en menos de 3 minutos. Sin instalaciones complicadas.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Interfaz intuitiva",
      description: "Familiar y fácil de usar para abogados y asistentes legales.",
      color: "text-primary"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Beneficios Clave
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            ¿Por qué elegir AgentHub?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Diseñado específicamente para las necesidades del sector legal moderno
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent/30"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-accent/10 px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-accent">⚡ Bonus:</span>
            <span className="text-sm text-foreground">
              Integración directa con sistemas existentes sin disrupciones
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;