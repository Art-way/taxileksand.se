import Script from "next/script";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { phoneHref, siteConfig, taxiSchema } from "../lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/assets/img/hero-taxi.webp",
        width: 1600,
        height: 854,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/assets/img/favicon.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
        />
        <a className="skip-link" href="#main">Hoppa till innehåll</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a className="floating-call" href={`tel:${phoneHref}`} aria-label={`Ring ${siteConfig.phoneDisplay}`}>Ring</a>
        <Script src="/assets/js/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
