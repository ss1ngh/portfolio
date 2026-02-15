"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";

const projects = [
  {
    title: "Digilab",
    description: "The operating system for planetary preservation.",
    category: "UI/UX",
    tech: ["Nextjs", "Tailwind"],
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "UI Hackathon",
    description: "Selected UI screens and interactions",
    category: "UI/UX",
    tech: ["Nextjs", "Tailwind"],
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "Portfolio Design",
    description: "Modern portfolio with smooth animations",
    category: "UI/UX",
    tech: ["Nextjs", "Tailwind"],
    image: "https://picsum.photos/600/400?random=3",
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-semibold"
            >
              Our Work
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            Our Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            A comprehensive showcase of our work including UI/UX designs,
            full-stack applications, freelance projects, and more.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-border transition-all duration-300 hover:shadow-xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 backdrop-blur-sm text-foreground hover:bg-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
