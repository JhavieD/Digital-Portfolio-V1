import { Code2, Database, Palette, Zap } from "lucide-react";

const skills = [
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "Testing", category: "other" },
  { name: "Git", category: "other" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating intuitive interfaces that users love to interact with.",
  },
  {
    icon: Database,
    title: "Full-Stack",
    description: "End-to-end development from database design to frontend polish.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and efficiency at every layer.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a full-stack developer with a passion for building products that make a difference. 
                Currently pursuing my <span className="text-foreground font-medium">BS in Information Systems</span> at{" "}
                <span className="text-foreground font-medium">De La Salle-College of Saint Benilde</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with curiosity and has evolved into a deep love for 
                crafting seamless digital experiences. I thrive at the intersection of design 
                and engineering, where thoughtful code meets beautiful interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring fellow developers.
              </p>

              {/* Skills */}
              <div className="pt-6">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
