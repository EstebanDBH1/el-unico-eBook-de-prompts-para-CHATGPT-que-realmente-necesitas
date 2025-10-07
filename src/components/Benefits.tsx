import { Zap, Brain, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Prompts Probados",
    description: "Más de 200 prompts testeados y optimizados para resultados inmediatos"
  },
  {
    icon: Brain,
    title: "Maximiza tu IA",
    description: "Aprende a sacarle el máximo provecho a ChatGPT en cualquier situación"
  },
  {
    icon: TrendingUp,
    title: "Aumenta Productividad",
    description: "10x más eficiente en tu trabajo, estudios o proyectos personales"
  },
  {
    icon: Clock,
    title: "Ahorra Tiempo",
    description: "Reduce horas de trabajo a minutos con los prompts correctos"
  }
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por Qué Este Ebook?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para dominar ChatGPT en un solo lugar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
