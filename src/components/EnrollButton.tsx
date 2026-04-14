"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface EnrollButtonProps {
  children?: ReactNode;
  className?: string;
  courseName?: string;
}

export default function EnrollButton({ children, className = "", courseName }: EnrollButtonProps) {
  const url = "https://whatsapp.com/channel/0029VbBuIo82f3EAVdmBiT3d";

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-2.5 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all duration-300 uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.2)] ${className}`}
    >
      {children || "Enroll Now"}
    </Link>
  );
}