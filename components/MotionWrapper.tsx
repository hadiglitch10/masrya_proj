"use client";

import Footer from "./Footer";

export default function MotionWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="page-content flex-1">{children}</main>
      <Footer />
    </div>
  );
}
