import { useState } from "react";
import { ChevronRight, ExternalLink, Building2, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "internship",
    company: "ACME Corp",
    role: "Software Development Intern",
    period: "2024",
    description: "Built dashboards & QA automation POC, contributing to improved development workflows.",
    achievements: [
      "Developed a Customer Relationship Management system",
      "Streamlined client data handling and internal workflows",
      "Built interactive calendar with real-time registration tracking",
    ],
  },
];

const projects = [
  {
    title: "CRM for Rakso CT",
    category: "Internship Project",
    description: "Contributed to a Customer Relationship Management system, streamlining client data handling and improving workflows for sales and support teams.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Event Hub Module",
    category: "Internship Project",
    description: "Developed a centralized event management module integrated into the Schoolaide app, featuring an interactive calendar and real-time registration tracking.",
    tags: ["TypeScript", "REST API", "Calendar"],
    link: "#",
  },
  {
    title: "Blockbot Training Program",
    category: "Leadership",
    description: "Planned and coordinated the Blockbot training series, handling logistics and participant onboarding for a comprehensive learning experience.",
    tags: ["Project Management", "Training", "Coordination"],
    link: "#",
  },
  {
    title: "EdTech Partner Onboarding",
    category: "Leadership",
    description: "Led the on-site onboarding flow for EdTech partners, ensuring smooth integration and successful partnerships.",
    tags: ["Onboarding", "Partnerships", "Communication"],
    link: "#",
  },
];

const academicWork = [
  {
    title: "Capstone: Smart Campus",
    challenge: "Unify disparate campus services into one portal.",
    role: "Lead frontend, UX flows, integration with auth.",
    tags: ["React", "UX Design", "Authentication"],
  },
  {
    title: "Case Study: Accessibility",
    challenge: "Improve WCAG compliance for core journeys.",
    role: "Audit + remediation plan; shipped component fixes.",
    tags: ["WCAG", "Accessibility", "Audit"],
  },
];

const ExperienceSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Timeline Experience */}
          <div className="mb-20">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l border-border">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <Building2 className="w-3 h-3 text-primary" />
                </div>
                <div className="ml-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-primary">@</span>
                    <span className="text-foreground font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mb-20">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Key Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-widest text-primary font-medium">
                      {project.category}
                    </span>
                    <a
                      href={project.link}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-primary/5 transition-opacity duration-500 pointer-events-none ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Academic Work */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Academic Work
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {academicWork.map((work, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 bg-gradient-card"
                >
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                    {work.title}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-primary font-medium">Challenge: </span>
                      <span className="text-muted-foreground">{work.challenge}</span>
                    </div>
                    <div>
                      <span className="text-primary font-medium">My Role: </span>
                      <span className="text-muted-foreground">{work.role}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
