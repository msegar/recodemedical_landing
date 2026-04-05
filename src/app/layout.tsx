import type { Metadata } from "next";
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
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
