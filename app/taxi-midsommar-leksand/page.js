import BookingForm from "../../components/BookingForm";
import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const faqs = [
  {
    question: "Kan jag boka taxi till Midsommar i Leksand?",
    answer:
      "Ja, du kan boka taxi till och från midsommarfirandet i Leksand. Under midsommarhelgen rekommenderar vi förbokning eftersom många reser samtidigt.",
  },
  {
    question: "Kör ni till Gropen i Leksand?",
    answer:
      "Vi kör så nära det är möjligt beroende på trafik, avstängda vägar och tillfälliga regler under evenemanget. Upphämtningsplats och lämning kan behöva anpassas efter trafikläget.",
  },
  {
    question: "Kan jag boka taxi från Leksand station?",
    answer:
      "Ja, vi kör tågtaxi från Leksand station till hotell, boenden, campingar, Gropen, Arenatorget och andra evenemangsområden i Leksand.",
  },
  {
    question: "Kör ni på kvällen och natten under Midsommar?",
    answer:
      "Ja, Taxi Leksand har öppet dygnet runt. För bästa tillgänglighet under midsommarhelgen rekommenderar vi att du förbokar din resa.",
  },
  {
    question: "Kan grupper boka taxi till Midsommar?",
    answer:
      "Ja, vi hjälper hotellgäster, företag, familjer och mindre grupper med planerade körningar till och från Midsommar i Leksand.",
  },
];

const popularRoutes = [
  "Leksand station - Gropen / Arenatorget",
  "Hotell i Leksand - Midsommarfirandet",
  "Camping - centrum / festivalområdet",
  "Tällberg - Leksand",
  "Insjön - Leksand",
  "Siljansnäs - Leksand",
  "Rättvik - Leksand",
  "Dala Airport - Leksand",
];

const planningTips = [
  "Förboka gärna taxin i god tid, särskilt för kvällar och nätter.",
  "Räkna med extra restid när många besökare rör sig i centrala Leksand.",
  "Bestäm en tydlig mötesplats som fungerar även om vägar nära Gropen är avstängda.",
  "Ha telefonen tillgänglig så att chauffören kan nå dig vid hämtning.",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Taxi till Midsommar i Leksand",
    serviceType: "Taxi till evenemang, Midsommar, Gropen och Arenatorget",
    provider: {
      "@type": "TaxiService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: phoneHref,
    },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
    description:
      "Taxi Leksand erbjuder taxi till Midsommar i Leksand, Gropen, Arenatorget, Leksand station, hotell, campingar och orter runt Siljan.",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export const metadata = {
  title: {
    absolute: "Taxi till Midsommar i Leksand | Boka Taxi dygnet runt",
  },
  description:
    "Behöver du taxi till Midsommar i Leksand? Taxi Leksand kör till Gropen, Arenatorget, hotell, camping, stationen och orter runt Siljan. Ring 0243-20 70 70 eller boka online.",
  alternates: {
    canonical: "/taxi-midsommar-leksand/",
  },
  openGraph: {
    title: "Taxi till Midsommar i Leksand",
    description:
      "Förboka taxi till Gropen, Arenatorget, Leksand station, hotell, campingar och boenden runt Siljan under midsommarhelgen.",
    url: "/taxi-midsommar-leksand/",
    images: [
      {
        url: "/assets/img/hero-taxi.webp",
        width: 1600,
        height: 854,
        alt: "Taxi till Midsommar i Leksand",
      },
    ],
  },
};

export default function TaxiMidsommarLeksandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <img src="/assets/img/hero-taxi.webp" alt="Taxi till Midsommar i Leksand" width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Midsommar i Leksand</p>
          <h1>Taxi till Midsommar i Leksand</h1>
          <p>
            Förboka trygg och smidig taxi till Gropen, Arenatorget, Leksand station, hotell,
            campingar och boenden runt Siljan.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z"/></svg>
              Ring {phoneDisplay}
            </a>
            <a className="btn btn-secondary" href="#boka-midsommar">Boka taxi online</a>
          </div>
          <p className="hero-note">Öppet dygnet runt - förboka gärna under midsommarhelgen.</p>
        </div>
      </section>

      <section className="section booking-section" id="boka-midsommar">
        <div className="container split-grid">
          <BookingForm
            heading="Boka taxi till Midsommar"
            note="Fyll i resedetaljerna så kontaktar vi dig för att bekräfta bokningen. Ring oss för brådskande resor."
          />
          <div className="content-stack">
            <p className="eyebrow">Planera resan</p>
            <h2>Smidig taxi till firandet, boendet och stationen</h2>
            <p>
              Ska du fira Midsommar i Leksand? Taxi Leksand hjälper dig med trygga och smidiga
              taxiresor till och från Gropen, Arenatorget, Leksand station, hotell, campingar och
              boenden runt Siljan.
            </p>
            <p>
              Under midsommarhelgen är det mycket folk i rörelse och begränsad framkomlighet i centrala
              Leksand. Därför rekommenderar vi att du bokar din taxi i god tid och är beredd på att
              hämtning eller lämning kan behöva ske på en plats som fungerar med trafikläget.
            </p>
            <p className="notice-box">
              Taxi Leksand är inte arrangör av Midsommarfirandet, men hjälper dig med resan dit och hem.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Gropen och Arenatorget</p>
            <h2>Taxi till Gropen och Midsommarfirandet</h2>
          </div>
          <div className="article-copy">
            <p>
              Vi kör dig till midsommarfirandet i Leksand och hjälper dig att planera hämtning och
              lämning så smidigt som möjligt. Gropen, Arenatorget och området runt centrum får många
              besökare samtidigt, och under vissa tider påverkas trafik, parkering och framkomlighet.
            </p>
            <p>
              Därför lovar vi inte alltid lämning precis vid entré eller publikplats. I stället planerar vi
              resan utifrån aktuellt trafikläge, tillgängliga vägar och en upphämtningsplats som chaufför
              och resenär enkelt kan hitta.
            </p>
            <ul className="check-list">
              {planningTips.map((tip) => <li key={tip}>{tip}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Populära resor</p>
            <h2>Taxi under Midsommar i Leksand</h2>
            <p>
              Vanliga sökningar är taxi midsommar Leksand, taxi till Gropen Leksand,
              tågtaxi Leksand midsommar och taxi från Tällberg till Leksand.
            </p>
          </div>
          <ul className="route-list route-list--wide">
            {popularRoutes.map((route) => <li key={route}>{route}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <img className="section-bg" src="/assets/img/bg-1.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Tågtaxi, hotell och grupper</p>
            <h2>Förboka resan innan det blir fullt i centrum</h2>
            <p>
              Midsommar i Leksand lockar många besökare till Gropen, Arenatorget och boenden runt Siljan.
              Taxi är ett bekvämt alternativ om du vill slippa leta parkering, resa sent på kvällen eller
              ta dig vidare från stationen till hotell, camping eller festivalområdet.
            </p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <span className="photo-frame">
                <img src="/assets/img/service-train.webp" alt="Tågtaxi Leksand station under Midsommar" width="750" height="500" loading="lazy" />
              </span>
              <div>
                <h3>Tågtaxi från Leksand station</h3>
                <p>Boka taxi från stationen till Gropen, Arenatorget, hotell, campingar och boenden runt Siljan.</p>
              </div>
            </article>
            <article className="service-card">
              <span className="photo-frame">
                <img src="/assets/img/taxi-interior.webp" alt="Taxi från hotell till Midsommar i Leksand" width="750" height="500" loading="lazy" />
              </span>
              <div>
                <h3>Hotell och camping</h3>
                <p>Vi kör från hotell, stugor, campingar och privata boenden till centrum och tillbaka.</p>
              </div>
            </article>
            <article className="service-card">
              <span className="photo-frame">
                <img src="/assets/img/service-airport.webp" alt="Flygtaxi till Leksand Midsommar" width="750" height="500" loading="lazy" />
              </span>
              <div>
                <h3>Flygtaxi och längre resor</h3>
                <p>Planera resor från Dala Airport, Borlänge, Rättvik, Tällberg, Insjön eller Siljansnäs.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om taxi till Midsommar i Leksand</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Förboka gärna</p>
            <h2>Ring {phoneDisplay} för taxi till Midsommar.</h2>
          </div>
          <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring Taxi Leksand</a>
        </div>
      </section>
    </>
  );
}
