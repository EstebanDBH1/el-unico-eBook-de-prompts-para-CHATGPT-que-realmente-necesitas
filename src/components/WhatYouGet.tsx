import { Check } from "lucide-react";

const contents = [
  "200+ prompts probados y optimizados para resultados inmediatos",
  "Prompts para productividad personal y profesional",
  "Prompts para creación de contenido y copywriting",
  "Prompts para análisis de datos y reportes",
  "Prompts para aprendizaje y educación",
  "Prompts para programación y desarrollo",
  "Prompts para marketing y ventas",
  "Técnicas avanzadas de prompt engineering",
  "Ejemplos reales de implementación",
  "Plantillas listas para copiar y pegar",
  "Guía de mejores prácticas",
  "Actualizaciones gratuitas de por vida"
];

export const WhatYouGet = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Qué Encontrarás en el eBook?
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas para dominar ChatGPT
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {contents.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors"
            >
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-foreground leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
