import { Lightbulb, Target, Quote } from "lucide-react";

const reflections = [
  {
    lesson: "Ship small, ship often.",
    commitment: "Break down work; daily increments with demos.",
    icon: Target,
  },
  {
    lesson: "Design with constraints.",
    commitment: "Document trade-offs; validate early with users.",
    icon: Lightbulb,
  },
];

const ReflectionsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Reflections</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Quote */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="font-display text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-4">
              "The best code is the code you don't have to explain."
            </blockquote>
            <p className="text-muted-foreground">— Personal philosophy</p>
          </div>

          {/* Reflections Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-widest text-primary font-medium">
                        Lesson
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {item.lesson}
                      </h3>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                        Commitment
                      </span>
                      <p className="text-muted-foreground mt-1 leading-relaxed">
                        {item.commitment}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReflectionsSection;
