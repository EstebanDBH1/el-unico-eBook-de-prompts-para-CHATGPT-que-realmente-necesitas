import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpeg";
import { ArrowDown } from "lucide-react";
import { BadgeConteo } from "./page-badge/Badge";

export const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById('first-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-20">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-4xl">
        <div className="text-center space-y-12">
          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black  libre-baskerville-regular">
              <span className="block text-foreground">El único</span>
              <span className="block">
                eBook DE PROMPTS
              </span>
              <span className="block text-foreground">de CHATGPT</span>
              <span className="block  mt-2">que realmente necesitas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
             Desbloquea todo el potencial de ChatGPT con los mejores prompts. Ahorra tiempo, mejora tu productividad y lleva tus proyectos al siguiente nivel con nuestro eBook definitivo.
            </p>
          </div>

          {/* Ebook Cover - Smaller */}
          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-3xl opacity-30 animate-pulse"></div>
            <img 
              src={ebookCover} 
              alt="El Único Ebook de Prompts de ChatGPT que Realmente Necesitas" 
              className="relative w-full rounded-lg shadow-2xl shadow-primary/50 hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* CTA Button */}
          <div className="space-y-4">
            <Button 
              onClick={scrollToCTA}
              size="lg" 
              className="text-xl px-12 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-glow hover:shadow-intense transition-all duration-300 w-full md:w-auto"
            >
              CONSEGUIR AHORA
            </Button>
            <p className="text-sm text-muted-foreground">
              🔒 Pago 100% seguro • Acceso inmediato
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8 animate-bounce">
            <ArrowDown className="w-6 h-6 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
