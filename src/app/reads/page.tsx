import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ReadsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-4 relative pt-12">
      <section id="reads">
        <div className="flex min-h-0 flex-col">
          <div className="flex flex-col gap-y-4 mb-10 items-center justify-center">
            <div className="flex items-center w-full max-w-[800px] mx-auto">
              <div
                className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"
              />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">reads</span>
              </div>
              <div
                className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"
              />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <h2 className="text-xl font-bold tracking-tighter sm:text-xl">stuff worth reading</h2>
            </div>
          </div>

          <div className="flex flex-col gap-3 max-w-[800px] mx-auto w-full px-4">
            {DATA.reads.map((read, id) => (
              <BlurFade
                key={read.title}
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              >
                <Link
                  href={read.href}
                  target="_blank"
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card/30 
                             hover:bg-card/60 hover:border-border transition-all duration-200"
                >
                  <div className="flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                    <read.icon className="size-5" />
                  </div>
                  <span className="flex-1 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {read.title}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground/50 group-hover:text-foreground transition-all 
                                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </BlurFade>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}