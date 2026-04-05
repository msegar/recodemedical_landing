import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ReCODE Medical — Acquired",
  description:
    "ReCODE Medical has been acquired. A sincere thank you to all of our users.",
  openGraph: {
    title: "ReCODE Medical — Acquired",
    description:
      "ReCODE Medical has been acquired. A sincere thank you to all of our users.",
    type: "website",
    url: "https://recodemedical.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReCODE Medical — Acquired",
    description:
      "ReCODE Medical has been acquired. A sincere thank you to all of our users.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GP5G8TC21H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted'
            });
            gtag('config', 'G-GP5G8TC21H');
          `}
        </Script>
      </head>
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
