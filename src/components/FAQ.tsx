import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué incluye el ebook?",
    answer: "Más de 200 prompts categorizados por uso (trabajo, estudio, creatividad, productividad), guías paso a paso, y ejemplos prácticos de implementación."
  },
  {
    question: "¿Es compatible con GPT-4?",
    answer: "Sí, todos los prompts funcionan con GPT-3.5, GPT-4 y versiones futuras de ChatGPT. Los prompts están diseñados para ser universales."
  },
  {
    question: "¿Recibiré actualizaciones?",
    answer: "Absolutamente. Todas las actualizaciones futuras del ebook son completamente gratuitas para todos los compradores."
  },
  {
    question: "¿Hay garantía de reembolso?",
    answer: "Sí, ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas."
  },
  {
    question: "¿Cómo recibo el ebook?",
    answer: "Inmediatamente después de la compra recibirás un email con el enlace de descarga. El acceso es instantáneo."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas saber
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
