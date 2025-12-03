import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { WhatYouGet } from "@/components/WhatYouGet";
import { CTA } from "@/components/CTA";
import { Bonuses } from "@/components/Bonuses";
import { Testimonials } from "@/components/Testimonials";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { BadgeConteo } from "@/components/page-badge/Badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

 
      <Hero />
      
      <CTA id="first-cta" showFeatures={true} />
      
      <WhatYouGet />
      
      <CTA showFeatures={false} />
      
      <Benefits />
      
      <Bonuses />
      
      <CTA showFeatures={false} />
      
      <Testimonials />
      
      <CTA showFeatures={false} />
      
      <Guarantee />
      
      <FAQ />
      
      <CTA showFeatures={true} />
      
      <footer className="py-12 bg-card border-t border-border">
        <div className="container px-4 mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Prompts ChatGPT. Todos los derechos reservados. xd
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            🔒 Pago seguro • Garantía de satisfacción 30 días
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
