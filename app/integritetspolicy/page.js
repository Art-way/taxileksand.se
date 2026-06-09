import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

export const metadata = {
  title: "Integritetspolicy",
  description: `Integritetspolicy för ${siteConfig.name}.`,
  alternates: {
    canonical: "/integritetspolicy/",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero page-hero--small">
        <img src="/assets/img/bg-1.webp" alt="" width="1600" height="900" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Information</p>
          <h1>Integritetspolicy</h1>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Personuppgifter</h2>
          <p>{siteConfig.name} hanterar de uppgifter du skickar när du kontaktar oss eller använder bokningsformuläret. Det kan inkludera namn, telefonnummer, e-postadress, hämtningsadress, destination och önskad tid.</p>
          <h2>Syfte</h2>
          <p>Uppgifterna används för att kunna besvara din förfrågan, bekräfta bokningen och utföra taxiresan.</p>
          <h2>Elfsight</h2>
          <p>Webbplatsen använder Elfsight för bokningsformulär. När du skickar formuläret kan uppgifter behandlas av Elfsight enligt deras villkor.</p>
          <h2>Kontakt</h2>
          <p>Har du frågor om dina uppgifter kan du kontakta oss på <a href={`mailto:info@${siteConfig.domain}`}>info@{siteConfig.domain}</a> eller ringa <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>.</p>
        </div>
      </section>
    </>
  );
}
