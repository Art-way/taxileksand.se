import BookingForm from "../../components/BookingForm";
import { budPackageAppId, phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const faqs = [
  {
    question: "Kör Taxi Leksand bud och paket?",
    answer:
      "Ja, Taxi Leksand hjälper privatpersoner och företag med bud, paket och mindre leveranser i Leksand, Siljanområdet och vidare i Dalarna efter överenskommelse.",
  },
  {
    question: "Hur snabbt kan ett taxibud hämta mitt paket?",
    answer:
      "Ring oss för snabbast besked. Vid ledig bil kan vi ofta planera upphämtning direkt, och för tidskritiska leveranser rekommenderar vi att du bokar via telefon.",
  },
  {
    question: "Kan jag boka budtransport online?",
    answer:
      "Ja, du kan använda formuläret på sidan. Fyll i upphämtning, leveransadress, tid och vad som ska skickas, så kontaktar vi dig för bekräftelse.",
  },
  {
    question: "Kör ni bud åt företag?",
    answer:
      "Ja, vi kör bud för företag, butiker, kontor, hotell och föreningar. Återkommande körningar och faktura kan diskuteras vid bokning.",
  },
  {
    question: "Vad kostar bud och paket med taxi?",
    answer:
      "Priset beror på avstånd, tidpunkt, väntetid och storlek på försändelsen. Vi lämnar ett tydligt pris innan körningen bekräftas.",
  },
];

const deliveryTypes = [
  "Dokument och avtal som behöver komma fram samma dag",
  "Nycklar, små reservdelar och viktiga personliga tillhörigheter",
  "Paket mellan företag, hotell, boenden och privatpersoner",
  "Planerade budkörningar mellan Leksand, Insjön, Tällberg och Siljansnäs",
  "Expressbud vidare mot Rättvik, Borlänge, Falun och Dala Airport",
];

const routes = [
  "Bud Leksand centrum",
  "Bud Leksand station",
  "Bud Leksand - Insjön",
  "Bud Leksand - Tällberg",
  "Bud Leksand - Siljansnäs",
  "Bud Leksand - Rättvik",
  "Bud Leksand - Borlänge",
  "Bud Leksand - Dala Airport",
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bud och paket med Taxi Leksand",
    serviceType: "Taxibud, budtransport och paketleverans",
    provider: {
      "@type": "TaxiService",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: phoneHref,
    },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
    description:
      "Taxi Leksand erbjuder bud och paket med taxi för snabb, trygg och personlig leverans i Leksand, Siljanområdet och Dalarna.",
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      availability: "https://schema.org/InStock",
      description: "Pris enligt överenskommelse efter sträcka, tid och försändelse.",
    },
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
  title: "Bud & Paket i Leksand | Taxibud och snabb leverans",
  description:
    "Behöver du bud eller pakettransport i Leksand? Taxi Leksand kör taxibud, expressbud och mindre paket dygnet runt. Ring 0243-20 70 70 eller boka online.",
  alternates: {
    canonical: "/bud-paket/",
  },
  openGraph: {
    title: "Bud & Paket i Leksand | Taxi Leksand",
    description:
      "Snabb och säker budtransport med taxi i Leksand, Siljanområdet och Dalarna. Boka taxibud via telefon eller online.",
    url: "/bud-paket/",
    images: [
      {
        url: "/assets/img/taxi-interior.webp",
        width: 750,
        height: 500,
        alt: "Bud och paket med Taxi Leksand",
      },
    ],
  },
};

export default function BudPaketPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="page-hero">
        <img src="/assets/img/taxi-interior.webp" alt="Bud och paket med Taxi Leksand" width="750" height="500" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Taxibud i Leksand</p>
          <h1>Bud & Paket med Taxi Leksand</h1>
          <p>
            Snabb, personlig och trygg budtransport för paket, dokument och viktiga leveranser i Leksand,
            Siljanområdet och Dalarna.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.3 1.3.4 2.6.6 4 .6.7 0 1.2.5 1.2 1.2v3.5c0 .7-.5 1.2-1.2 1.2C10.4 22 2 13.6 2 3.4 2 2.7 2.5 2 3.2 2h3.6C7.5 2 8 2.5 8 3.2c0 1.4.2 2.8.6 4 .1.4 0 .9-.3 1.2l-1.7 2.4z"/></svg>
              Ring {phoneDisplay}
            </a>
            <a className="btn btn-secondary" href="#boka-bud">Boka bud online</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar med taxibud">
        <div className="container trust-grid">
          <div><strong>Direkt</strong><span>Utan omlastning när körningen är bokad</span></div>
          <div><strong>24/7</strong><span>Budförfrågan dygnet runt</span></div>
          <div><strong>Dörr till dörr</strong><span>Personlig hämtning och leverans</span></div>
        </div>
      </section>

      <section className="section booking-section" id="boka-bud">
        <div className="container split-grid">
          <BookingForm
            appId={budPackageAppId}
            heading="Boka Bud & Paket"
            note="Fyll i formuläret med upphämtning, leveransadress, önskad tid och vad som ska skickas. Vi kontaktar dig för pris och bekräftelse."
          />
          <div className="content-stack">
            <p className="eyebrow">Snabb leverans</p>
            <h2>Taxibud när vanlig frakt tar för lång tid</h2>
            <p>
              När ett paket behöver fram snabbt är taxibud ett smidigt alternativ. Taxi Leksand hämtar
              försändelsen hos dig och kör den direkt till mottagaren, utan onödiga stopp eller
              omlastningscentraler.
            </p>
            <p>
              Tjänsten passar både privatpersoner och företag som behöver budbil i Leksand, paketleverans
              samma dag, expressbud i Dalarna eller en trygg transport mellan hotell, station, kontor,
              butik och boende.
            </p>
            <div className="inline-actions">
              <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring för snabbast svar</a>
              <a className="btn btn-outline" href="/kontakta-oss">Kontakta oss</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div>
            <p className="eyebrow">Trygg hantering</p>
            <h2>Budservice för paket, dokument och viktiga saker</h2>
          </div>
          <div className="article-copy">
            <p>
              Vår bud- och paketservice är byggd för försändelser där tid, personlig service och
              tydlig kommunikation är viktigare än masshantering. Föraren tar hand om paketet från
              upphämtning till överlämning, och du får veta hur bokningen går till innan körningen startar.
            </p>
            <p>
              Du kan boka taxibud i Leksand för lokala körningar, leveranser till närliggande orter runt
              Siljan och längre budtransporter i Dalarna. För akuta bud rekommenderar vi alltid telefon,
              eftersom vi då kan kontrollera tillgänglighet och ge snabbare besked.
            </p>
            <ul className="check-list">
              {deliveryTypes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="notice-box">
              Vi transporterar inte farligt gods eller försändelser som kräver särskilda tillstånd, kylkedja
              eller specialutrustning. Berätta vad som ska skickas när du bokar, så hjälper vi dig hitta rätt upplägg.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Varför taxibud?</p>
            <h2>Fördelar med bud och paket via Taxi Leksand</h2>
          </div>
          <div className="value-grid">
            <div>
              <h2>Snabbare väg</h2>
              <p>Direkt transport från upphämtning till mottagare när paketet behöver prioriteras.</p>
            </div>
            <div>
              <h2>Säker leverans</h2>
              <p>Försändelsen hanteras personligt av föraren och lämnas över enligt bokningen.</p>
            </div>
            <div>
              <h2>Tydligt pris</h2>
              <p>Du får pris efter sträcka, tidpunkt och behov innan budkörningen bekräftas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section local-section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Lokala körningar</p>
            <h2>Populära budkörningar i Leksand och Dalarna</h2>
            <p>
              Vi hjälper med taxibud i Leksand, bud paket runt Siljan och expressleverans till flera orter i
              Dalarna. Ring <a href={`tel:${phoneHref}`}>{phoneDisplay}</a> om leveransen är brådskande.
            </p>
          </div>
          <ul className="route-list">
            {routes.map((route) => <li key={route}>{route}</li>)}
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om bud & paket</h2>
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
            <p className="eyebrow">Behöver du skicka något?</p>
            <h2>Ring {phoneDisplay} för bud i Leksand.</h2>
          </div>
          <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring och boka bud</a>
        </div>
      </section>
    </>
  );
}
