import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Ashmi — Coming Soon · ZianAshmiVaysage",
  description: "Ashmi's page is coming soon!",
};

export default function AshmiPage() {
  return (
    <main
      className={`${nunito.className} min-h-screen flex flex-col items-center justify-center px-4 text-center`}
      style={{
        background: "linear-gradient(135deg, #fde68a 0%, #fca5a5 40%, #f9a8d4 80%, #c4b5fd 100%)",
      }}
    >
      <div className="text-6xl mb-4" style={{ animation: "bounce-gentle 2s ease-in-out infinite" }}>
        👩
      </div>
      <h1 className="text-5xl font-black mb-3 text-rose-800">Ashmi</h1>
      <p className="text-2xl font-bold text-rose-700 mb-2">Coming Soon ✨</p>
      <p className="text-lg text-rose-600/80 mb-10 max-w-sm">
        Mom&apos;s page is being lovingly crafted. Check back soon!
      </p>
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
