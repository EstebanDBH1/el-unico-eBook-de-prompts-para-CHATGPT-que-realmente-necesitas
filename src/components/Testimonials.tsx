import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Marketing Manager",
    content: "Este ebook transformó completamente mi forma de trabajar con ChatGPT. Los prompts son increíblemente efectivos y me ahorran horas cada semana.",
    rating: 5
  },
  {
    name: "Carlos Ramírez",
    role: "Desarrollador",
    content: "La mejor inversión que he hecho. Los prompts de programación son oro puro. Ahora codifico 3x más rápido.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Creadora de Contenido",
    content: "Increíble. Antes tardaba horas en crear contenido, ahora con estos prompts lo hago en minutos. 100% recomendado.",
    rating: 5
  },
  {
    name: "Luis Fernández",
    role: "Estudiante",
    content: "Me ayudó muchísimo con mis estudios. Los prompts para aprendizaje son súper útiles. Mejoré mis calificaciones notablemente.",
    rating: 5
  },
  {
    name: "Patricia Silva",
    role: "Emprendedora",
    content: "Vale cada centavo. Los prompts de marketing me ayudaron a crear campañas que realmente convierten.",
    rating: 5
  },
  {
    name: "Roberto Díaz",
    role: "Consultor",
    content: "Excelente recurso. Lo uso diariamente en mi trabajo. Los prompts están muy bien estructurados y son fáciles de adaptar.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground">
            Miles de personas ya están dominando ChatGPT
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
