import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Hi! I'm Zian 🌟 — ZianAshmiVaysage",
  description: "Welcome to Zian's little corner of the internet! A 3½ year old full of magic.",
};

const floatingElements = [
  { emoji: "⭐", top: "8%",  left: "5%",  size: "text-4xl", delay: "0ms",    duration: "3.5s" },
  { emoji: "🌙", top: "12%", left: "88%", size: "text-3xl", delay: "400ms",  duration: "4s"   },
  { emoji: "✨", top: "25%", left: "92%", size: "text-2xl", delay: "800ms",  duration: "3s"   },
  { emoji: "🌈", top: "70%", left: "3%",  size: "text-4xl", delay: "1200ms", duration: "5s"   },
  { emoji: "🦋", top: "18%", left: "15%", size: "text-2xl", delay: "600ms",  duration: "4.5s" },
  { emoji: "🌸", top: "75%", left: "90%", size: "text-3xl", delay: "200ms",  duration: "3.8s" },
  { emoji: "💫", top: "55%", left: "94%", size: "text-2xl", delay: "1000ms", duration: "4.2s" },
  { emoji: "🎈", top: "85%", left: "12%", size: "text-3xl", delay: "1400ms", duration: "3.6s" },
  { emoji: "⭐", top: "40%", left: "96%", size: "text-xl",  delay: "700ms",  duration: "5.5s" },
  { emoji: "🌟", top: "90%", left: "70%", size: "text-2xl", delay: "1600ms", duration: "4s"   },
  { emoji: "🎀", top: "6%",  left: "50%", size: "text-2xl", delay: "900ms",  duration: "3.2s" },
  { emoji: "🍭", top: "60%", left: "6%",  size: "text-3xl", delay: "300ms",  duration: "4.8s" },
];

export default function ZianPage() {
  return (
    <main
      className={`${nunito.className} relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-16`}
      style={{
        background: "linear-gradient(135deg, #a8edea 0%, #c9b8f5 30%, #f8b4d4 60%, #ffd89b 100%)",
        backgroundSize: "400% 400%",
        animation: "rainbow-shift 12s ease infinite",
      }}
    >
      {/* Floating decorative elements */}
      {floatingElements.map(({ emoji, top, left, size, delay, duration }, i) => (
        <span
          key={i}
          className={`absolute select-none pointer-events-none ${size} animate-float`}
          style={{ top, left, animationDelay: delay, animationDuration: duration }}
          aria-hidden="true"
        >
          {emoji}
        </span>
      ))}

      {/* Big glowing card */}
      <div
        className="relative z-10 text-center max-w-2xl w-full"
        style={{ filter: "drop-shadow(0 8px 40px rgba(0,0,0,0.08))" }}
      >
        {/* Avatar circle */}
        <div className="flex justify-center mb-6">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center text-6xl animate-bounce-gentle"
            style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)" }}
          >
            👶
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-6xl sm:text-7xl font-black mb-3 leading-tight"
          style={{
            background: "linear-gradient(90deg, #7c3aed, #db2777, #ea580c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Hi! I'm Zian! ✨
        </h1>

        {/* Age badge */}
        <div className="flex justify-center mb-4">
          <span
            className="inline-block text-xl font-bold px-6 py-2 rounded-full text-white animate-wiggle"
            style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)", animationDuration: "2s" }}
          >
            3½ years old 🎂
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl font-semibold text-purple-900/80 mb-12 px-4">
          Explorer of worlds, builder of blocks,<br className="hidden sm:block" /> and the biggest joy of our lives 💖
        </p>

        {/* Parent links */}
        <p className="text-lg font-bold text-purple-800/70 mb-5 uppercase tracking-widest text-sm">
          Meet my family
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Link
            href="/vaysage"
            className="group flex flex-col items-center gap-2 px-8 py-6 rounded-3xl font-bold text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #7c3aed 100%)",
              boxShadow: "0 8px 32px rgba(99,102,241,0.4)",
              minWidth: "200px",
            }}
          >
            <span className="text-4xl group-hover:animate-wiggle">🧑‍💻</span>
            <span className="text-2xl font-black">Dad</span>
            <span className="text-base font-semibold opacity-90">Vaysage — Software Engineer</span>
            <span className="text-xs font-semibold mt-1 bg-white/20 px-3 py-1 rounded-full">
              Visit Dad&apos;s Page →
            </span>
          </Link>

          <Link
            href="/ashmi"
            className="group flex flex-col items-center gap-2 px-8 py-6 rounded-3xl font-bold text-white transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb923c 100%)",
              boxShadow: "0 8px 32px rgba(244,63,94,0.4)",
              minWidth: "200px",
            }}
          >
            <span className="text-4xl group-hover:animate-wiggle">👩</span>
            <span className="text-2xl font-black">Mom</span>
            <span className="text-base font-semibold opacity-90">Ashmi — The Heart of Home</span>
            <span className="text-xs font-semibold mt-1 bg-white/20 px-3 py-1 rounded-full">
              Visit Mom&apos;s Page →
            </span>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-14 text-purple-800/60 font-semibold text-sm">
          Made with 💖 by our little family · zianashmivaysage.in
        </p>
      </div>
    </main>
  );
}
