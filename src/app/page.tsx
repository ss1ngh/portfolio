/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
// import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
// import WorkSection from "@/components/section/work-section";
import { ArrowUpRight } from "lucide-react";
import GlitchPFP from "@/components/section/pfp";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-4 relative">
      <section id="hero">
        <div className="w-full max-w-xl mx-auto space-y-8">
          <div className="gap-2 gap-y-4 flex flex-col md:flex-row justify-between items-center">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold italic tracking-tighter sm:text-2xl lg:text-3xl"
                yOffset={8}
                text={`hi, ${DATA.name.split(" ")[0]} here`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <GlitchPFP />
            </BlurFade>
          </div>
        </div>
      </section>


      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-3 max-w-xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-md font-bold transition-transform duration-300 ease-out hover:scale-110 w-fit">about me</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty text-base font-sans leading-relaxed text-muted-foreground dark:prose-invert prose-p:my-0">
              <Markdown>
                {DATA.summary}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section >

      {/* <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">work experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section> */}

      {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-lg font-bold">education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + index * 0.05}
              >
                <div className="flex items-center gap-x-3 justify-between group">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="text-sm font-semibold leading-none flex items-center gap-2">
                        {education.school}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section> */}

      <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
        <div className="max-w-xl mx-auto overflow-hidden rounded-md">
          <img src="/coding-pixel.gif" className="w-full scale-[1.15]" />
        </div>
      </BlurFade>

      <section id="skills">
        <div className="pt-4 flex min-h-0 flex-col gap-y-4 max-w-xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-base font-bold transition-transform duration-300 ease-out hover:scale-110 w-fit">skills and technologies</h2>
          </BlurFade>
          <div className="flex flex-wrap justify-center gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill.name} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <div className="border bg-white rounded-sm h-5 px-3 flex items-center gap-2">
                  <span className="text-sm font-semibold text-black">{skill.name}</span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>


      {/* <section id="hackathons">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <HackathonsSection />
        </BlurFade>
      </section> */}


      <section id="contact">
        <div className="max-w-xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <ContactSection />
          </BlurFade>
        </div>
      </section>
    </main >
  );
}
