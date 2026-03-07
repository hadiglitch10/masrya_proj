import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MotionWrapper from "@/components/MotionWrapper";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://ece-eg.com"),
  title: {
    default: "ECE | Egyptian Company for Commerce & Engineering",
    template: "%s | ECE"
  },
  description:
    "ECE – Egyptian Company for Commerce & Engineering. Engineering trust since day one. Telephone networks, CCTV, fire alarm, audio systems, facility maintenance, and more across Egypt.",
  openGraph: {
    title: "ECE | Egyptian Company for Commerce & Engineering",
    description: "Engineering Trust Since Day One. Serving government and private sectors nationwide.",
    type: "website",
    url: "https://ece-eg.com"
  },
  icons: {
    icon: "/img/logof-nobg.png",
    shortcut: "/img/logof-nobg.png",
    apple: "/img/logof-nobg.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="page-shell">
        <Navbar />
        <ScrollToTop />
        <MotionWrapper>{children}</MotionWrapper>
      </body>
    </html>
  );
}
