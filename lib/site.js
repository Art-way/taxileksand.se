export const phoneDisplay = "0243-20 70 70";
export const phoneHref = "+46243207070";
export const bookingAppId = "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326";

export const siteConfig = {
  "folder": "taxileksand.se",
  "packageName": "taxi-leksand",
  "domain": "taxileksand.se",
  "name": "Taxi Leksand",
  "city": "Leksand",
  "title": "Taxi Leksand | Boka taxi dygnet runt",
  "description": "Taxi Leksand erbjuder bekväm taxi i Leksand och Siljanområdet. Ring 0243-20 70 70 eller boka online för tågtaxi, flygtaxi och lokala resor.",
  "areaServed": [
    "Leksand",
    "Insjön",
    "Tällberg",
    "Siljansnäs",
    "Dalarna"
  ],
  "intro": "Taxi Leksand kör lokala resor, tågtaxi, flygtaxi och transporter till hotell, evenemang och besöksmål runt Siljan.",
  "about": "Vi gör det lätt att boka taxi i Leksand med tydliga kontaktvägar, snabb återkoppling och service som passar både vardagsresor och planerade resor.",
  "routes": [
    "Leksand station",
    "Insjön",
    "Tällberg",
    "Siljansnäs",
    "Rättvik",
    "Dala Airport"
  ],
  "mapQuery": "Leksand,Dalarna,Sweden",
  "url": "https://taxileksand.se",
  "phoneDisplay": "0243-20 70 70",
  "phoneHref": "+46243207070",
  "bookingAppId": "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"
};

export const navItems = [
  { href: "/", label: "Startsida" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakta-oss", label: "Kontakta oss" },
];

export const taxiSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: phoneHref,
  priceRange: "$$",
  image: `${siteConfig.url}/assets/img/hero-taxi.webp`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: "Dalarna",
    addressCountry: "SE",
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Cash, Credit Card, Swish, Invoice",
};
