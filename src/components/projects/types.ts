import React from "react";

export interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  href: string;
  active: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly ProjectLink[];
  image: string;
  video: string;
}
