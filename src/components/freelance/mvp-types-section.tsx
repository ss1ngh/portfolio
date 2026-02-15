"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const mvpTypes = [
  {
    title: "Website Development",
    gradient: "from-purple-100 to-pink-100",
    borderColor: "border-purple-200/50",
  },
  {
    title: "Mobile App Development",
    gradient: "from-orange-100 to-amber-100",
    borderColor: "border-orange-200/50",
  },
  {
    title: "Landing Page Revamp",
    gradient: "from-cyan-100 to-blue-100",
    borderColor: "border-cyan-200/50",
  },
  {
    title: "AI SaaS",
    gradient: "from-green-100 to-emerald-100",
    borderColor: "border-green-200/50",
  },
];

export function MVPTypesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-background to-muted/20">
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
              3x Faster Execution
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            We build every kind of
            <br />
            MVP fast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Your product, your way. Backed by 40+ successful launches
          </motion.p>
        </div>

        {/* MVP Types Pills */}
        <div className="flex flex-wrap justify-center gap-6">
          {mvpTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`px-8 py-4 bg-gradient-to-r ${type.gradient} rounded-full text-lg font-semibold border ${type.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
            >
              {type.title}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
