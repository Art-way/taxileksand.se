import BookingForm from "../components/BookingForm";
import { phoneDisplay, phoneHref, siteConfig } from "../lib/site";

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src="/assets/img/hero-taxi.webp" alt={`Taxi i ${siteConfig.city}`} width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="eyebrow">Taxi i {siteConfig.city} dygnet runt</p>
          <h1>{siteConfig.name}</h1>
          <p className="hero-lead">{siteConfig.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z"/></svg>
              {phoneDisplay}
            </a>
            <a className="btn btn-secondary" href="#boka">Boka online</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar">
        <div className="container trust-grid">
          <div><strong>24/7</strong><span>Öppet dygnet runt</span></div>
          <div><strong>{phoneDisplay}</strong><span>Snabb bokning via telefon</span></div>
          <div><strong>Online</strong><span>Elfsight bokningsformulär</span></div>
        </div>
      </section>

      <section className="section booking-section" id="boka">
        <div className="container split-grid">
          <BookingForm />
          <div className="content-stack">
            <p className="eyebrow">Välkommen till {siteConfig.name}</p>
            <h2>Trygg och smidig taxi i {siteConfig.city}</h2>
            <p>{siteConfig.about}</p>
            <div className="image-pair">
              <img src="/assets/img/service-train.webp" alt={`Taxi service i ${siteConfig.city}`} width="750" height="500" loading="lazy" />
              <img src="/assets/img/taxi-interior.webp" alt="Bekväm taxiresa i Dalarna" width="750" height="500" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <img className="section-bg" src="/assets/img/bg-1.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Våra tjänster</p>
            <h2>Taxitjänster för vardag, resa och företag</h2>
            <p>Välj {siteConfig.name} för lokala resor, stationstransfer, flygplatstransfer och planerade körningar i Dalarna.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <img src="/assets/img/service-train.webp" alt={`Tågtaxi ${siteConfig.city}`} width="750" height="500" loading="lazy" />
              <div>
                <h3>Tågtaxi</h3>
                <p>Vi hjälper dig till och från stationen med god marginal och enkel bokning.</p>
              </div>
            </article>
            <article className="service-card">
              <img src="/assets/img/service-airport.webp" alt={`Flygtaxi ${siteConfig.city}`} width="750" height="500" loading="lazy" />
              <div>
                <h3>Flygtaxi</h3>
                <p>Förbokad taxi till flygplatsen med tydlig hämtningstid och trygg resa.</p>
              </div>
            </article>
            <article className="service-card">
              <img src="/assets/img/taxi-interior.webp" alt={`Företagstaxi ${siteConfig.city}`} width="750" height="500" loading="lazy" />
              <div>
                <h3>Företag & grupper</h3>
                <p>Flexibla körningar för möten, personalresor, hotellgäster och små grupper.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section local-section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Lokala resor</p>
            <h2>Populära körningar från {siteConfig.city}</h2>
            <p>Ring oss på <a href={`tel:${phoneHref}`}>{phoneDisplay}</a> för snabb bokning eller använd formuläret om du vill förboka.</p>
          </div>
          <ul className="route-list">
            {siteConfig.routes.map((route) => <li key={route}>{route}</li>)}
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Frågor</p>
            <h2>Vanliga frågor om taxi i {siteConfig.city}</h2>
          </div>
          <div className="faq-list">
            <details>
              <summary>Kan jag boka taxi online?</summary>
              <p>Ja. Använd bokningsformuläret på sidan så kontaktar vi dig för bekräftelse. För brådskande resor rekommenderar vi telefon.</p>
            </details>
            <details>
              <summary>Kör ni dygnet runt?</summary>
              <p>Ja, du kan ringa oss dygnet runt på {phoneDisplay}. Vid längre resor är förbokning alltid bäst.</p>
            </details>
            <details>
              <summary>Kan jag boka flygtaxi eller tågtaxi?</summary>
              <p>Ja. Vi kör både flygtaxi och tågtaxi från {siteConfig.city} och närliggande orter.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Behöver du taxi nu?</p>
            <h2>Ring {phoneDisplay}</h2>
          </div>
          <a className="btn btn-primary" href={`tel:${phoneHref}`}>Klicka för att ringa</a>
        </div>
      </section>
    </>
  );
}
