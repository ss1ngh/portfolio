import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DATA.url,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly", // Since everything is on one page, updates happen here
      priority: 1.0,
    },
  ];
}
