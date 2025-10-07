import { Shield } from "lucide-react";

export const Guarantee = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Garantía de Satisfacción 100%
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Prueba el ebook durante 30 días completos. Si no estás completamente satisfecho con los resultados, 
            te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">30</div>
              <div className="text-muted-foreground">Días de garantía</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Reembolso completo</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <div className="text-muted-foreground">Preguntas incómodas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
