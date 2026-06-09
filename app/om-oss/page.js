import { phoneDisplay, siteConfig } from "../../lib/site";

export const metadata = {
  title: `Om ${siteConfig.name}`,
  description: `Läs mer om ${siteConfig.name}, lokal taxi i ${siteConfig.city} med bokning via telefon och onlineformulär.`,
  alternates: {
    canonical: "/om-oss/",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/assets/img/hero-taxi.webp" alt={siteConfig.name} width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Om oss</p>
          <h1>Om {siteConfig.name}</h1>
          <p>{siteConfig.about}</p>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Lokal taxi</p>
            <h2>En enklare taxitjänst för {siteConfig.city} och Dalarna</h2>
          </div>
          <div className="article-copy">
            <p>{siteConfig.intro}</p>
            <p>Vi arbetar med tydliga bokningar, punktlig upphämtning och trevlig service. Du kan ringa direkt för snabb hjälp eller använda onlineformuläret när resan kan planeras i förväg.</p>
            <p>Behöver du resa till stationen, flygplatsen, arbetet, hotellet eller en annan ort i Dalarna hjälper vi dig gärna.</p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container value-grid">
          <div>
            <h2>Dygnet runt</h2>
            <p>Ring när du behöver resa. Vi finns tillgängliga alla dagar i veckan.</p>
          </div>
          <div>
            <h2>Lokal service</h2>
            <p>Resor i {siteConfig.city} med omnejd, plus längre körningar i Dalarna.</p>
          </div>
          <div>
            <h2>Enkel bokning</h2>
            <p>Boka via telefon eller skicka din förfrågan med Elfsight-formuläret.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Boka {siteConfig.name}</p>
            <h2>Ring {phoneDisplay} eller boka online.</h2>
          </div>
          <a className="btn btn-primary" href="/kontakta-oss">Kontakta oss</a>
        </div>
      </section>
    </>
  );
}
