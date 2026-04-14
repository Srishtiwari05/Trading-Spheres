import Link from "next/link";
import Image from "next/image";
import { Globe, Video, Send, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800 pt-12 pb-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <Image 
                src="/logo.png" 
                alt="Trading Spheres Icon" 
                width={32} 
                height={32} 
                className="w-8 h-8 object-contain"
              />
              <div className="flex flex-col">
                <p className="text-sm font-black text-white tracking-[0.2em] leading-none uppercase font-outfit">Trading</p>
                <p className="text-[8px] font-bold text-[#00f59b] tracking-[0.4em] leading-none uppercase mt-1">Spheres</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">Empowering traders with elite <br /> knowledge & discipline.</p>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <li><Link href="/" className="hover:text-[#00f59b] transition-colors">Home</Link></li>
              <li><Link href="#courses" className="hover:text-[#00f59b] transition-colors">Programs</Link></li>
              <li><Link href="/about" className="hover:text-[#00f59b] transition-colors">About</Link></li>
              <li><Link href="#blog" className="hover:text-[#00f59b] transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">Core Focus</h4>
            <ul className="space-y-3 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <li>Technical Analysis</li>
              <li>Options Trading Pro</li>
              <li>Offline Bootcamp</li>
              <li>Risk Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-xs font-bold uppercase tracking-widest">
                  <li className="flex items-center gap-2"><Phone size={14} className="text-[#00f59b]" /> +91 94648 07614</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-[#00f59b]" /> support@sphere.com</li>
              <li className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-4">SBC walk, Kurali Road, Shop No. 1-2, Kharar</li>
              <li className="flex gap-4 mt-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#00f59b] hover:text-black transition-all"><Globe size={18} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#00f59b] hover:text-black transition-all"><Video size={18} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#00f59b] hover:text-black transition-all"><Send size={18} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Trading Spheres. All rights reserved.
        </div>
      </div>
    </footer>
  );
}