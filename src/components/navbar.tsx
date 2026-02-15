import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <TooltipProvider>
        <Dock className="z-50 pointer-events-auto relative h-12 p-1.5 w-fit mx-auto flex gap-1.5 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5 rounded-2xl">

          {DATA.navbar.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a href={item.href}>
                  <DockIcon className="rounded-xl bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border">
                    <item.icon className="h-4 w-4" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={15} className="rounded-lg bg-background text-foreground px-3 py-1.5 text-xs font-mono lowercase border shadow-md">
                <p>{item.label === "Reads" ? "goodreads" : item.label.toLowerCase()}</p>
                <TooltipArrow className="fill-border" />
              </TooltipContent>
            </Tooltip>
          ))}

          <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border mx-1" />


          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <DockIcon className="rounded-xl bg-background text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border">
                      <social.icon className="h-4 w-4" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={15} className="rounded-lg bg-background text-foreground px-3 py-1.5 text-xs font-mono lowercase border shadow-md">
                  <p>{name.toLowerCase()}</p>
                  <TooltipArrow className="fill-border" />
                </TooltipContent>
              </Tooltip>
            ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}