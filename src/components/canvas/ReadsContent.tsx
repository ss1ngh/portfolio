"use client";

import { DATA } from "@/data/resume";
import { FileIcon, ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export function ReadsContent() {
  return (
    <div className="relative flex flex-col justify-start min-h-fit md:min-h-dvh w-full md:w-[1152px] px-4 md:px-6 pt-12 md:pt-20 pb-24 items-center selection:bg-[#3235F8] selection:text-white overflow-hidden md:overflow-visible">
      {/* label */}
      <span className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-16 text-[15rem] font-black lowercase tracking-tight text-[#0A0A0A]/5 select-none pointer-events-none whitespace-nowrap">
        reading corner
      </span>
      <section className="w-full max-w-[800px] flex flex-col items-center px-2 md:px-4">
        <div className="w-full flex flex-col gap-y-4 mb-12 md:mb-18 items-center justify-center cursor-default">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            <div className="bg-[#3235F8] z-10 rounded-2xl px-5 py-1.5 mx-4 shadow-sm flex items-center gap-2">
              <FileIcon size={16} weight="fill" className="text-white" />
              <span className="text-white text-[14px] font-medium lowercase tracking-wide pt-0.5">
                reading corner
              </span>
            </div>

            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-neutral-200 to-transparent" />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          {DATA.reads.map((read) => (
            <a
              key={read.title}
              href={read.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl border border-neutral-200/60 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
            >
              {/* Left Icon */}
              <div className="flex-shrink-0 text-[#A3A3A3] group-hover:text-[#3235F8] transition-colors duration-200">
                <read.icon size={20} weight="regular" />
              </div>

              {/* Center Title */}
              <span className="flex-1 text-[15px] font-medium text-[#0A0A0A] lowercase group-hover:text-[#3235F8] transition-colors duration-200">
                {read.title}
              </span>

              {/* Right Arrow Animation */}
              <ArrowUpRightIcon
                size={18}
                weight="bold"
                className="text-[#A3A3A3] group-hover:text-[#3235F8] transition-all duration-200 md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
