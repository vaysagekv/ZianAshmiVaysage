import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import ashmiPortrait from "../../public/ashmi-portrait.jpeg";
import ashmiZian from "../../public/ashmi-zian.jpeg";
import ashmiZianCafe from "../../public/ashmi-zian-cafe.jpeg";
import familyCeremony from "../../public/family-ceremony.jpeg";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Ashmi — Coming Soon · ZianAshmiVaysage",
  description: "Ashmi's page is coming soon!",
};

export default function AshmiPage() {
  return (
    <main
      className={`${nunito.className} min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center`}
      style={{
        background: "linear-gradient(135deg, #fde68a 0%, #fca5a5 40%, #f9a8d4 80%, #c4b5fd 100%)",
      }}
    >
      {/* Portrait */}
      <div
        className="w-36 h-36 rounded-full overflow-hidden mb-6 ring-4 ring-white/80"
        style={{ boxShadow: "0 8px 40px rgba(236,72,153,0.35)" }}
      >
        <Image
          src={ashmiPortrait}
          alt="Ashmi"
          width={144}
          height={144}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      <h1 className="text-5xl font-black mb-3 text-rose-800">Ashmi</h1>
      <p className="text-2xl font-bold text-rose-700 mb-2">Coming Soon ✨</p>
      <p className="text-lg text-rose-600/80 mb-10 max-w-sm">
        Mom&apos;s page is being lovingly crafted. Check back soon!
      </p>

      {/* Photo strip */}
      <div className="flex gap-4 mb-10 justify-center flex-wrap">
        {[
          { src: ashmiZian,     alt: "Ashmi and Zian at a wedding",  label: "With my boy 💕" },
          { src: ashmiZianCafe, alt: "Ashmi and Zian at a cafe",     label: "Café date ☕"   },
          { src: familyCeremony, alt: "Family at a ceremony",        label: "Family joy 🌸"  },
        ].map(({ src, alt, label }) => (
          <div key={alt} className="flex flex-col items-center gap-2">
            <div
              className="w-32 h-40 rounded-2xl overflow-hidden ring-2 ring-white/70 shadow-lg"
            >
              <Image
                src={src}
                alt={alt}
                width={128}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs font-bold text-rose-700/80">{label}</p>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="px-6 py-3 rounded-full font-bold text-white transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg, #ec4899, #f97316)" }}
      >
        ← Back to Zian&apos;s Page
      </Link>
    </main>
  );
}
