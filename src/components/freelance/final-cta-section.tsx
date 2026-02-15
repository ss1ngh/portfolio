"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { motion } from "motion/react";
import { Code2, Rocket, Target, ArrowUpRight } from "lucide-react";

const founders = [
  { name: "Founder 1", image: "https://i.pravatar.cc/150?u=founder1" },
  { name: "Founder 2", image: "https://i.pravatar.cc/150?u=founder2" },
  { name: "Founder 3", image: "https://i.pravatar.cc/150?u=founder3" },
];

const features = [
  {
    title: "MVP in 21 days",
    icon: Target,
    gradient: "from-green-100 to-emerald-100",
    iconColor: "text-green-600",
  },
  {
    title: "AI Driven Development",
    icon: Code2,
    gradient: "from-cyan-100 to-blue-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Scalable Tech Stack",
    icon: Rocket,
    gradient: "from-orange-100 to-amber-100",
    iconColor: "text-orange-600",
  },
];

export function FinalCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50" />

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-10 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {founders.map((founder, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-muted"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            Trusted by 20+ visionary founders
          </span>
          <Badge className="px-3 py-1 bg-rose-100 text-rose-700 border-rose-200/50 font-bold text-xs">
            FAST
          </Badge>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Heading */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Build{" "}
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-200 to-emerald-300 rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" />
                </span>
              </span>{" "}
              and Validate
              <br />
              in 21 days{" "}
              <span className="inline-flex items-center gap-2">
                <span className="inline-block w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-200 to-amber-300 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-orange-700" />
                </span>
              </span>
            </motion.h2>
          </div>

          {/* Right: Description & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to clickable product. We handle strategy, design, and
              launch — so you can focus on building momentum.
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Book a slot
              <ArrowUpRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-6 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${feature.gradient} rounded-full border border-white/50 shadow-lg`}
              >
                <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                <span className="font-semibold text-foreground">
                  {feature.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
