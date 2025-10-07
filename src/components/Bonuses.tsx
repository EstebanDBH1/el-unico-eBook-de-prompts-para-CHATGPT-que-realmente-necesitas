import { Gift, Zap, BookOpen } from "lucide-react";

const bonuses = [
  {
    icon: Gift,
    title: "BONO 1: Plantillas de Prompts",
    description: "50+ plantillas adicionales listas para usar en tu trabajo diario",
    value: "$27"
  },
  {
    icon: Zap,
    title: "BONO 2: Guía de Prompt Engineering",
    description: "Aprende a crear tus propios prompts personalizados desde cero",
    value: "$37"
  },
  {
    icon: BookOpen,
    title: "BONO 3: Casos de Uso Avanzados",
    description: "Ejemplos reales de implementación en diferentes industrias",
    value: "$47"
  }
];

export const Bonuses = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bonos exclusivos
          </h2>
          <p className="text-xl text-muted-foreground">
            Valorados en más de $100, ¡tuyos gratis hoy!
          </p>
        </div>

        <div className="space-y-6">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="relative p-8 rounded-xl bg-card border-2 border-primary hover:shadow-glow transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
                Valor: {bonus.value}
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                  <bonus.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {bonus.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-primary/10 border-2 border-primary rounded-xl">
            <p className="text-2xl font-bold text-foreground mb-2">
              Valor Total: <span className="text-primary">$210+</span>
            </p>
            <p className="text-xl text-muted-foreground">
              Hoy solo pagas: <span className="text-primary font-bold">$10</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
