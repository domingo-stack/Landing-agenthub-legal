import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, FileText, Search, MessageSquare } from "lucide-react";

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const useCases = [
    {
      icon: FileText,
      title: "Resume, analiza y toma decisiones de tus contratos en segundos",
      description: "Procesa cientos de contratos simultáneamente. Extrae cláusulas clave, identifica riesgos y genera resúmenes ejecutivos automáticamente.",
      benefits: ["Análisis en tiempo real", "Detección de riesgos", "Resúmenes ejecutivos"],
      color: "text-blue-600"
    },
    {
      icon: Search,
      title: "Investigación y análisis de jurisprudencia potenciada con IA",
      description: "Encuentra precedentes relevantes, analiza tendencias judiciales y construye argumentos sólidos basados en jurisprudencia actualizada.",
      benefits: ["Búsqueda inteligente", "Análisis de tendencias", "Precedentes relevantes"],
      color: "text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Abogado AI que responde sobre todas las leyes y regulaciones 24/7",
      description: "Consulta instantánea sobre cualquier aspecto legal. Tu asistente jurídico inteligente disponible las 24 horas del día.",
      benefits: ["Disponibilidad 24/7", "Respuestas precisas", "Múltiples jurisdicciones"],
      color: "text-green-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  return (
    <section id="casos-uso" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Casos de Uso
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transforma tu práctica legal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo AgentHub revoluciona cada aspecto de tu trabajo jurídico
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent/30 group">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                    <useCase.icon className={`h-8 w-8 ${useCase.color}`} />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground leading-tight">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center justify-center text-sm text-accent">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="relative">
            <Card className="shadow-elegant border-2">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center mx-auto">
                    {React.createElement(useCases[currentSlide].icon, {
                      className: `h-10 w-10 ${useCases[currentSlide].color}`
                    })}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground leading-tight">
                    {useCases[currentSlide].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {useCases[currentSlide].description}
                  </p>
                  
                  <div className="space-y-3">
                    {useCases[currentSlide].benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center justify-center text-accent">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="border-accent/30 hover:bg-accent/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {useCases.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-accent' : 'bg-accent/30'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="border-accent/30 hover:bg-accent/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;