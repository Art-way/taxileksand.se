"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, phoneDisplay, phoneHref, siteConfig } from "../lib/site";

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  return (
    <header className="site-header" data-header>
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} startsida`}>
          <span className="brand-mark">T</span>
          <span>
            <strong>{siteConfig.name}</strong>
            <small>Dalarna Taxi</small>
          </span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Meny</span>
        </button>
        <nav className="site-nav" id="site-nav" data-nav>
          {navItems.map((item) => {
            const isActive = item.href === "/" ? normalizedPath === "/" : normalizedPath === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={isActive ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className="header-call" href={`tel:${phoneHref}`} aria-label={`Ring ${phoneDisplay}`}>
          {phoneDisplay}
        </a>
      </div>
    </header>
  );
}
