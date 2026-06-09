import BookingForm from "../../components/BookingForm";
import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

export const metadata = {
  title: `Kontakta ${siteConfig.name}`,
  description: `Kontakta ${siteConfig.name}. Ring ${phoneDisplay} eller boka taxi online i ${siteConfig.city}.`,
  alternates: {
    canonical: "/kontakta-oss/",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <img src="/assets/img/hero-taxi.webp" alt={`Kontakta ${siteConfig.name}`} width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Kontakta oss</p>
          <h1>Boka taxi i {siteConfig.city}</h1>
          <p>Ring direkt på {phoneDisplay} eller fyll i bokningsformuläret.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container split-grid">
          <div className="contact-panel">
            <p className="eyebrow">Dygnet runt</p>
            <h2>Vi finns här för din nästa resa</h2>
            <p>För snabbast bokning, ring oss direkt. För planerade resor kan du använda formuläret.</p>
            <div className="contact-list">
              <a href={`tel:${phoneHref}`}><span>Telefon</span><strong>{phoneDisplay}</strong></a>
              <a href={`mailto:info@${siteConfig.domain}`}><span>E-post</span><strong>info@{siteConfig.domain}</strong></a>
              <div><span>Område</span><strong>{siteConfig.city}, Dalarna</strong></div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="map-section" aria-label={`Karta ${siteConfig.city}`}>
        <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`} title={`${siteConfig.name} karta`} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
}
