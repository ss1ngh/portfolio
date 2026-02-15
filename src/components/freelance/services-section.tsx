"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function ServicesSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-6"
        >
          <Badge
            variant="outline"
            className="px-4 py-2 text-sm font-semibold border-border/50"
          >
            Our Services
          </Badge>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Anything you need.
          <br />
          Done for you.
        </motion.h2>
      </div>
    </section>
  );
}
