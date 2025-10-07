import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "✅ Acceso instantáneo al ebook completo",
  "✅ Más de 200 prompts categorizados",
  "✅ Actualizaciones gratuitas de por vida",
  "✅ Soporte por email",
  "✅ Garantía de satisfacción 30 días"
];

interface CTAProps {
  id?: string;
  showFeatures?: boolean;
}

export const CTA = ({ id, showFeatures = true }: CTAProps) => {
  return (
    <section id={id} className="py-16">
      <div className="container px-4 mx-auto max-w-2xl">
        <div className="bg-card border-2 border-primary rounded-2xl p-8 md:p-12 shadow-intense text-center">
          {showFeatures && (
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="text-lg text-foreground">
                  {feature}
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-6xl font-black text-primary">$10</span>
                <span className="text-3xl text-muted-foreground line-through">$29</span>
              </div>
              <p className="text-xl text-muted-foreground">
                Oferta especial de lanzamiento
              </p>
            </div>
            
           <a 
        href="https://pay.hotmart.com/K99381988U" 
        className="
            bg-red-700 
            hover:bg-red-800 
            active:bg-red-900 
            text-white 
            font-extrabold 
            uppercase 
            text-xl
            py-4 
            px-12 
            rounded-xl 
            shadow-lg 
            shadow-red-900/50 
            transition duration-150 ease-in-out
            inline-block
            tracking-wider
            min-w-[300px]
            text-center
        "
        aria-label="Comprar ahora por diez dólares"
    >
        COMPRAR AHORA - $10
    </a>

            <p className="text-sm text-muted-foreground">
              🔒 Pago 100% seguro • Garantía 30 días • Acceso inmediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
