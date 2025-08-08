import { Badge } from "@/components/ui/badge";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Puedo integrar AgentHub con mi gestor de expedientes?",
      answer: "Sí, AgentHub cuenta con APIs abiertas y conectores pre-construidos para los principales sistemas de gestión legal como LexisNexis, Thomson Reuters, y sistemas ERP jurídicos. Nuestro equipo técnico te asiste en la integración sin costo adicional."
    },
    {
      question: "¿Cómo protege AgentHub la información confidencial?",
      answer: "Implementamos múltiples capas de seguridad: encriptación end-to-end, certificación ISO27001, auditorías de seguridad continuas, y opcionalmente nube privada dedicada. Todos los datos se procesan bajo estrictos protocolos de confidencialidad abogado-cliente."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar la plataforma?",
      answer: "No. AgentHub está diseñado específicamente para abogados y equipos legales. La interfaz es intuitiva tipo chat, similar a WhatsApp. Incluimos onboarding personalizado y soporte continuo para garantizar una adopción exitosa."
    },
    {
      question: "¿Qué modelos de IA están disponibles?",
      answer: "Tenemos acceso a todos los principales modelos: GPT-4, Claude, Gemini, Grok y más. Puedes cambiar entre modelos según la tarea específica, optimizando costos y resultados para cada tipo de documento legal."
    },
    {
      question: "¿Cómo funciona el precio por uso?",
      answer: "Solo pagas por lo que tu equipo realmente utiliza. No hay licencias fijas por usuario inactivo. El sistema mide automáticamente el consumo real de cada miembro del equipo y factura únicamente esa cantidad."
    },
    {
      question: "¿Ofrecen soporte en español y para legislación local?",
      answer: "Absolutamente. Nuestro equipo de soporte opera en español y los modelos están entrenados específicamente para legislación latinoamericana y española. Incluimos actualizaciones regulares de jurisprudencia local."
    }
  ];

  return (
    <section id="faqs" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-accent border-accent">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber sobre AgentHub
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover:shadow-card transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <a 
            href="#contacto" 
            className="text-accent hover:text-accent/80 font-medium underline underline-offset-4"
          >
            Contáctanos directamente
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;