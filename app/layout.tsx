import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionWrapper from "@/components/MotionWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://el-masrya.example.com"),
  title: {
    default: "El Masrya | Facility Management & Maintenance",
    template: "%s | El Masrya"
  },
  description:
    "El Masrya is a leading Egyptian facility management and maintenance contracting company, operating clubs, compounds, and commercial facilities with excellence in every detail.",
  openGraph: {
    title: "El Masrya | Facility Management & Maintenance",
    description:
      "Comprehensive operation and maintenance services for clubs, compounds, and commercial facilities across Egypt.",
    type: "website",
    url: "https://el-masrya.example.com"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-shell">
        <Navbar />
        <MotionWrapper>
          <main className="page-content">{children}</main>
          <Footer />
        </MotionWrapper>
      </body>
    </html>
  );
}

