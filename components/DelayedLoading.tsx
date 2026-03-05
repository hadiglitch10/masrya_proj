"use client";

import { useEffect, useState } from "react";

const DELAY_MS = 200;

export default function DelayedLoading({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className={`flex min-h-[40vh] items-center justify-center ${className}`}>
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  );
}
