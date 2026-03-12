import { DATA } from "@/data/resume";
import PixelTree from "@/components/pixelTree";
import { StatusIndicator } from "@/components/ui/statusIndicator";
import { ProjectList } from "@/components/projects/project-list";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col min-h-dvh max-w-5xl mx-auto px-6 pt-12 pb-24 items-center selection:bg-[#3235F8] selection:text-white">
      {/* Banner Section */}
      <section className="w-full max-w-4xl relative mb-12">
        <div className="relative w-full h-56 rounded-4xl overflow-hidden border border-neutral-100 shadow-sm bg-[#F5F5F3]">
          <div
            className="absolute inset-0 z-0 opacity-100"
            style={{
              backgroundImage: 'url("/banner.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
            <div className="absolute top-4 left-6 w-32 h-20 bg-white/30 blur-2xl rounded-full" />
            <div className="absolute bottom-4 right-12 w-48 h-24 bg-white/40 blur-3xl rounded-full" />
          </div>
          <div className="absolute right-8 bottom-4 z-20 scale-90">
            <PixelTree />
          </div>
        </div>
        <div className="absolute right-8 top-58 z-30">
          <StatusIndicator />
        </div>
        <div className="absolute -bottom-14 left-10 z-30 flex flex-col items-start gap-4">
          <div className="p-1 bg-white rounded-full shadow-sm">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white bg-[#3235F8]">
              <Image
                src="/pfp.webp"
                alt={DATA.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="w-full max-w-2xl flex flex-col items-center mt-10">
        <div className="pl-14 border-l border-transparent w-full max-w-3xl">
          <div className="space-y-1 mb-10">
            <h1 className="text-[15px] font-medium lowercase tracking-tight">
              hi,{" "}
              <span className="text-base font-bold text-[#0A0A0A]">
                {DATA.name}
              </span>{" "}
              here
            </h1>
            <p className="text-[15px] text-[#737373] lowercase italic leading-relaxed">
              learning by building, breaking and over-engineering.
            </p>
          </div>
          <div className="space-y-12">
            <div className="space-y-1">
              <p className="text-[15px] leading-relaxed lowercase text-[#0A0A0A]">
                currently learning{" "}
                <span className="text-[#3235F8] font-medium">
                  how distributed systems work
                </span>
                ,
              </p>
              <p className="text-[15px] leading-relaxed lowercase text-[#0A0A0A]">
                and exploring database internals
              </p>
            </div>
            <div className="space-y-4 w-full lg:max-w-2xl">
              <h3 className="text-[15px] text-[#0A0A0A] font-bold tracking-wider">
                stack
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-3">
                {DATA.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-[15px] font-semibold italic text-[#A3A3A3] hover:text-[#404040] transition-colors duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-4xl px-4 mt-20 mb-14">
        <div className="w-full h-0.5 bg-neutral-100" />
      </div>

      <section id="projects-section">
        <ProjectList projects={DATA.projects} />
      </section>
    </main>
  );
}
