import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
    return (
        <section id="projects">
            <div className="flex min-h-0 flex-col pt-12">
                <div className="flex flex-col gap-y-4 mb-10 items-center justify-center">
                    <div className="flex items-center w-full">
                        <div
                            className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent"

                        />
                        <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                            <span className="text-background text-sm font-medium">projects</span>
                        </div>
                        <div
                            className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent"

                        />
                    </div>
                    <div className="flex flex-col gap-y-3 items-center justify-center">
                        <h2 className="text-xl font-bold tracking-tighter sm:text-xl">stuff i've been working on</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr mb-6">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                            className="h-full"
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>

                <Link
                href={"https://github.com/ss1ngh/"}
                target="_blank"
                className="flex justify-center mb-4">
                    <div className="flex items-center w-fit">
                            <div className="border bg-primary z-10 rounded-xl px-4 flex items-center transition-transform duration-200 ease-out hover:scale-[1.10]">
                                <span className="text-background text-sm font-medium flex items-center">view more on</span>
                                <span className="text-black mx-1"><GitHubLogoIcon/></span>
                            </div>
                    </div>
                </Link>

                <div className="flex items-center w-full">
                    <div className="h-px w-full bg-linear-to-r from-transparent via-foreground/40 to-transparent" />
                </div>
            </div>
        </section>
    );
}

