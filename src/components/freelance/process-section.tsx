"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Code2, Rocket, Target, Sparkles, ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We kick things off with a quick discovery call to understand your product idea, goals, and user needs.",
    visual: (
      <div className="flex gap-6 flex-wrap justify-center items-center">
        {["Discovery Call", "Planning", "Idea", "Strategy", "Roadmap"].map(
          (item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium border border-blue-200/50"
            >
              {item}
            </motion.div>
          )
        )}
      </div>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.",
    visual: (
      <div className="relative h-64 overflow-hidden rounded-2xl border border-border/50">
        <img
          src="https://picsum.photos/800/400?random=10"
          alt="Strategy"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Target className="w-16 h-16 text-blue-600" />
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Code",
    description:
      "We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.",
    visual: (
      <div className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700">
        <div className="absolute top-4 right-4 text-xs text-slate-500">
          Clean, scalable code. Supercharged by AI
        </div>
        <div className="flex gap-4 justify-center items-center mt-8">
          <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-white/20">
            <Code2 className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">CURSOR</span>
          </div>
          <div className="px-6 py-3 bg-pink-500/20 backdrop-blur-sm rounded-lg flex items-center gap-2 border border-pink-400/30">
            <Sparkles className="w-5 h-5 text-pink-300" />
            <span className="text-pink-100 font-semibold">Lovable</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once launched, your product is ready to test with users, pitch to investors, or go to market — with support from our team along the way.",
    visual: (
      <div className="flex gap-6 flex-wrap justify-center items-center">
        {[
          { label: "MVP IN 21 DAYS", color: "from-green-100 to-emerald-100" },
          { label: "SPEED TO MARKET", color: "from-blue-100 to-cyan-100" },
          {
            label: "AI LEAD DEVELOPMENT",
            color: "from-purple-100 to-pink-100",
          },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`px-4 py-2 bg-gradient-to-r ${item.color} rounded-full text-xs font-bold tracking-wide`}
          >
            {item.label}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="p-4 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl border border-orange-200/50"
        >
          <Rocket className="w-8 h-8 text-orange-600" />
        </motion.div>
      </div>
    ),
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
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
              Our Process
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Move at Startup Speed
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our 4-step process is built for momentum. We keep it lean, focused,
            and validation-ready so you can launch without delays.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white px-8 py-6 text-base rounded-full shadow-xl"
            >
              Book a slot
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Process Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="text-8xl font-bold text-muted-foreground/10">
                  {step.number}
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Content */}
              <div className="flex-1 w-full">{step.visual}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
