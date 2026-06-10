import Link from "next/link";
import { phoneDisplay, phoneHref, siteConfig } from "../lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand brand--footer" href="/">
            <img className="brand-logo brand-logo--footer" src="/assets/img/logo.svg" alt={siteConfig.name} width="210" height="105" />
          </Link>
          <p>{siteConfig.name} erbjuder trygga taxiresor i {siteConfig.city} och Dalarna. Ring direkt eller boka online.</p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <p><a href={`tel:${phoneHref}`}>{phoneDisplay}</a></p>
          <p><a href={`mailto:info@${siteConfig.domain}`}>info@{siteConfig.domain}</a></p>
          <p>{siteConfig.city}, Dalarna</p>
        </div>
        <div>
          <h2>Öppettider</h2>
          <p>Öppet dygnet runt alla dagar.</p>
          <p>Förbokning rekommenderas vid längre resor.</p>
        </div>
        <div>
          <h2>Sidor</h2>
          <Link href="/">Startsida</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakta-oss">Kontakta oss</Link>
          <Link href="/integritetspolicy">Integritetspolicy</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© <span data-year></span> {siteConfig.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
