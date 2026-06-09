import { siteConfig } from "../lib/site";

export default function sitemap() {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/om-oss/", priority: 0.7 },
    { path: "/kontakta-oss/", priority: 0.7 },
    { path: "/integritetspolicy/", priority: 0.5 },
  ];

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path === "/" ? "/" : page.path}`,
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
