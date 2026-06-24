"use client";

import Script from "next/script";
import { bookingAppId } from "../lib/site";

export default function BookingForm({
  appId = bookingAppId,
  variant = "light",
  eyebrow = "Boka online",
  heading = "Boka Taxi Online",
  note = "Fyll i formuläret så kontaktar vi dig för att bekräfta bokningen.",
}) {
  return (
    <div className={`booking-box booking-box--${variant}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{heading}</h2>
      <p className="form-note">{note}</p>
      <div className={appId} data-elfsight-app-lazy></div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </div>
  );
}
