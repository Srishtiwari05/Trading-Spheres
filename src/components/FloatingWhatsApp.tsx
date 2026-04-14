"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919464807614";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent("Hi, I'm interested in Trading Spheres courses.")}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>
  );
}