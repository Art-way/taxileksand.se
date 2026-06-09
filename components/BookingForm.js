"use client";

import Script from "next/script";
import { bookingAppId } from "../lib/site";

export default function BookingForm({ variant = "light" }) {
  return (
    <div className={`booking-box booking-box--${variant}`}>
      <p className="eyebrow">Boka online</p>
      <h2>Boka Taxi Online</h2>
      <p className="form-note">Fyll i formuläret så kontaktar vi dig för att bekräfta bokningen.</p>
      <div className={bookingAppId} data-elfsight-app-lazy></div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </div>
  );
}
