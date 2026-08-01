import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vaysage KV — Backend / Python Engineer | Open to Remote",
  description:
    "Backend engineer with 15+ years building production services in Python and Java. Expert in FastAPI, microservices, OAuth2/OIDC, and real-time systems. Open to remote roles, available to overlap US time zones.",
  keywords: [
    "Python engineer",
    "FastAPI developer",
    "backend engineer",
    "remote software engineer",
    "microservices",
    "Python developer India",
    "FastAPI microservices",
    "OAuth2 OIDC engineer",
    "Spring Boot developer",
    "software engineer Kerala",
    "remote backend engineer",
    "computer vision backend",
  ],
  authors: [{ name: "Vaysage KV", url: "https://zianashmivaysage.me/vaysage" }],
  openGraph: {
    title: "Vaysage KV — Backend / Python Engineer | Open to Remote",
    description:
      "15+ years building production services in Python & Java. FastAPI, microservices, OAuth2/OIDC, real-time systems. Open to remote roles.",
    url: "https://zianashmivaysage.me/vaysage",
    type: "profile",
    firstName: "Vaysage",
    lastName: "KV",
    images: [
      {
        url: "/family-matching.jpeg",
        alt: "Vaysage KV with family",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaysage KV — Backend / Python Engineer | Open to Remote",
    description:
      "15+ years in Python & Java. FastAPI, microservices, OAuth2/OIDC. Open to remote roles.",
    images: ["/family-matching.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vaysage KV",
  jobTitle: "Backend / Python Engineer",
  description:
    "Backend engineer with 15+ years building production services across Python and Java.",
  email: "kvvaysage@gmail.com",
  telephone: "+91-73539-77190",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thrissur",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/in/vaysage-kv-44b84a18",
    "https://github.com/vaysagekv",
  ],
  knowsAbout: [
    "Python", "FastAPI", "Java", "Spring Boot", "Microservices",
    "OAuth2", "OIDC", "PostgreSQL", "Docker", "WebSocket", "gRPC",
    "REST APIs", "Computer Vision", "Real-time Systems",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Reva Institute of Technology & Management",
  },
};

const skillsListing = [
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Languages             [Python] [Java] [SQL] [JavaScript] [C#] [Bash]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Backend & APIs        [FastAPI] [Spring Boot] [Spring] [JPA] [REST] [Microservices] [async/await] [WebSockets]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Auth & Security       [OAuth2] [OIDC] [Microsoft Entra ID] [BFF Pattern] [HttpOnly Cookies]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Real-time & Streaming [WebSocket] [gRPC] [WebRTC] [LiveKit]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Databases             [PostgreSQL] [MySQL] [Oracle] [SQLite] [Supabase] [Complex SQL & CTEs]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 ML / CV Integration   [YOLOv8 (Ultralytics)] [ByteTrack] [ArcFace] [SCRFD] [InsightFace] [MediaPipe] [ONNX]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Tooling & DevOps      [Git] [Docker] [Dev Containers] [Linux] [Sentry] [uv / pip]",
  "drwxr-xr-x  2 vaysage vaysage 4096 Apr 16 2025 Frontend (working kno) [React] [Vite]",
];

const experience = [
  {
    company: "Citrus Informatics",
    location: "Kochi, India",
    role: "Project Lead Engineer",
    period: "Jan 2019 – Present",
    current: true,
    highlights: [
      "Lead a two-engineer team building VisionLog AI — an internal computer-vision platform on FastAPI that orchestrates multiple concurrent camera streams in real time.",
      "Designed OAuth2/OIDC authentication with Microsoft Entra ID using a Backend-for-Frontend (BFF) pattern and HttpOnly session cookies, keeping access tokens out of the browser.",
      "Architected async Python services running a multi-stage ML pipeline: YOLOv8 detection → ByteTrack tracking → ArcFace/SCRFD face recognition → gait recognition for occluded faces.",
      "Built a gait-recognition subsystem fusing MediaPipe pose features with OSNet re-ID embeddings via weighted score fusion.",
      "Led remediation of CVE-2026-39363 (exposed Vite dev server), upgrading toolchain and hardening deployment config.",
      "Delivered Neorevv (Spring Boot, auth + commission/payment for a Middle East real-estate client), an LMS on Supabase with CTE-driven reporting, and backend microservices for CitusHealth (ResMed) email/SMS notifications.",
      "Prototyped real-time voice/video features evaluating WebSocket, gRPC, WebRTC, and LiveKit; designed a Malayalam TTS voice-agent architecture.",
    ],
    tags: ["FastAPI", "Python", "OAuth2", "OIDC", "YOLOv8", "gRPC", "WebRTC", "Spring Boot", "Supabase"],
  },
  {
    company: "Ridgecone Technologies",
    location: "Alappuzha, India",
    role: "Team Lead",
    period: "May 2018 – Nov 2018",
    current: false,
    highlights: [
      "Led the development team and built a SaaS web application from scratch for Halo using Java 8, Spring Boot, Spring, and JPA.",
    ],
    tags: ["Java 8", "Spring Boot", "Spring", "JPA"],
  },
  {
    company: "Mindcurv TSPL",
    location: "Kochi, India",
    role: "Software Engineer",
    period: "Oct 2015 – Feb 2018",
    current: false,
    highlights: [
      "Built and maintained B2B e-commerce features for the Delixl/Bidfood platform on the ATG stack (Java, Oracle).",
      "Developed a web application for collecting and managing customer quotations.",
    ],
    tags: ["Java", "Oracle", "ATG", "E-Commerce"],
  },
  {
    company: "LXI Technologies",
    location: "Palakkad, India",
    role: "Software Engineer",
    period: "Oct 2012 – Oct 2015",
    current: false,
    highlights: [
      "Built SERVEASE, a point-of-sale system for hotels and supermarkets (Java, MySQL).",
      "Built SWADISHTA, a companion mobile ordering app (J2EE, Struts 2, jQuery Mobile).",
    ],
    tags: ["Java", "MySQL", "J2EE", "Struts 2"],
  },
  {
    company: "Robosoft Technologies",
    location: "Udupi, India",
    role: "Software Engineer",
    period: "Jul 2010 – Jul 2012",
    current: false,
    highlights: [
      "Developed the NDTV News Reader Windows Phone app (C#, Silverlight, XAML, MVVM).",
      "Diagnosed and fixed a long-standing AES encryption bug; built paint app and Snake game during training.",
    ],
    tags: ["C#", "Silverlight", "MVVM", "Windows Phone"],
  },
  {
    company: "OnMobile Global",
    location: "Bangalore, India",
    role: "Associate QA Engineer",
    period: "Aug 2009 – Feb 2010",
    current: false,
    highlights: [
      "Functional and user-acceptance testing of value-added telecom services; automated backups with shell scripts.",
    ],
    tags: ["QA", "Bash", "Telecom"],
  },
];

function formatExperienceLog() {
  return experience
    .map(
      (exp) =>
        `[${exp.period}] ${exp.company.toUpperCase()} (${exp.location}) — ${exp.role}\n` +
        exp.highlights.map((h) => `  * ${h}`).join("\n") +
        `\n  { ${exp.tags.join(" | ")} }`
    )
    .join("\n\n");
}

export default function VaysagePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CRT scanlines overlay – fixed, behind all content */}
      <div className="fixed inset-0 pointer-events-none z-50 scanlines-overlay" />

      {/* Terminal document */}
      <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono p-4 sm:p-6 md:p-8 max-w-4xl mx-auto relative text-sm sm:text-base">
        
        {/* ASCII banner */}
        <pre className="text-center text-xs sm:text-sm md:text-base leading-none overflow-x-auto mb-6 mt-4 text-[#00ff41]">
{`==============================
   V A Y S A G E   K V
==============================`}
        </pre>

        {/* Prompt */}
        <div className="mb-6">
          <span>guest@zianashmivaysage.me:~$ finger vaysage</span>
          <span className="animate-blink text-[#00ff41]">█</span>
        </div>

        {/* WHOAMI block + photo */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <pre className="text-sm sm:text-base leading-relaxed border border-green-900 p-4 overflow-x-auto mb-2">
{`Login: vaysage          Name: Vaysage KV
Directory: /home/vaysage    Shell: /bin/zsh
Office: Thrissur, Kerala, IN
Project: Backend / Python Engineer — Open to Remote (US tz overlap)
Plan:
  Build production-grade backend systems — async Python services,
  secure auth flows, and real-time data pipelines. Currently leading
  backend of an in-house computer-vision platform. Based in Kerala, India.
  Available to overlap US time zones.`}
            </pre>
            <div className="flex items-center gap-2">
              <span className="animate-pulse text-green-400 text-lg">●</span>
              <span className="text-green-400 font-bold">ONLINE</span>
            </div>
          </div>

        </div>

        {/* Skills: ls -la */}
        <div className="mb-8">
          <div className="mb-1">$ ls -la skills/</div>
          <pre className="text-xs sm:text-sm leading-snug overflow-x-auto whitespace-pre-wrap">
{skillsListing.join("\n")}
          </pre>
        </div>

        {/* Experience: syslog */}
        <div className="mb-8">
          <div className="mb-1">$ cat /var/log/experience.log</div>
          <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap border-l-2 border-green-900 pl-4">
{formatExperienceLog()}
          </pre>
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="mb-1">$ cat /etc/credentials</div>
          <pre className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
{`[BE] Electronics & Communication Engineering
     Reva Institute of Technology & Management, Bangalore (2005 – 2009)

[OCJP] Oracle Certified Java Professional
     Oracle Corporation`}
          </pre>
        </div>

        {/* Contact finger */}
        <div className="mb-8">
          <div className="mb-1">$ finger vaysage@vaysage.net</div>
          <pre className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">
{`Email:   kvvaysage@gmail.com
Phone:   +91-73539-77190
LinkedIn: https://linkedin.com/in/vaysage-kv-44b84a18
GitHub:   https://github.com/vaysagekv

"First, solve the problem. Then, write the code." — John Johnson`}
          </pre>
        </div>

        {/* Footer */}
        <footer className="border-t-2 border-dashed border-green-900 pt-4 text-xs sm:text-sm text-center">
          <Link href="/" className="underline hover:text-cyan-400 transition-colors">
            ← Back to Family Site
          </Link>
        </footer>
      </div>
    </>
  );
}
