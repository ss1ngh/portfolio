"use client";

import { motion } from "motion/react";

const companies = [
  "Supabase",
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Raycast",
  "Supabase",
];

export function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-12 tracking-wide uppercase"
        >
          Trusted by engineering teams at
        </motion.p>

        {/* Scrolling Company Logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <div className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
