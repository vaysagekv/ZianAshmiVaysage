import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import familyMatching from "../../public/family-matching.jpeg";

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
  },
  twitter: {
    card: "summary",
    title: "Vaysage KV — Backend / Python Engineer | Open to Remote",
    description:
      "15+ years in Python & Java. FastAPI, microservices, OAuth2/OIDC. Open to remote roles.",
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

const skills = [
  {
    category: "Languages",
    color: "bg-violet-900/60 text-violet-200 border-violet-700",
    items: ["Python", "Java", "SQL", "JavaScript", "C#", "Bash"],
  },
  {
    category: "Backend & APIs",
    color: "bg-cyan-900/60 text-cyan-200 border-cyan-700",
    items: ["FastAPI", "Spring Boot", "Spring", "JPA", "REST", "Microservices", "async/await", "WebSockets"],
  },
  {
    category: "Auth & Security",
    color: "bg-green-900/60 text-green-200 border-green-700",
    items: ["OAuth2", "OIDC", "Microsoft Entra ID", "BFF Pattern", "HttpOnly Cookies"],
  },
  {
    category: "Real-time & Streaming",
    color: "bg-yellow-900/60 text-yellow-200 border-yellow-700",
    items: ["WebSocket", "gRPC", "WebRTC", "LiveKit"],
  },
  {
    category: "Databases",
    color: "bg-blue-900/60 text-blue-200 border-blue-700",
    items: ["PostgreSQL", "MySQL", "Oracle", "SQLite", "Supabase", "Complex SQL & CTEs"],
  },
  {
    category: "ML / CV Integration",
    color: "bg-pink-900/60 text-pink-200 border-pink-700",
    items: ["YOLOv8 (Ultralytics)", "ByteTrack", "ArcFace", "SCRFD", "InsightFace", "MediaPipe", "ONNX"],
  },
  {
    category: "Tooling & DevOps",
    color: "bg-orange-900/60 text-orange-200 border-orange-700",
    items: ["Git", "Docker", "Dev Containers", "Linux", "Sentry", "uv / pip"],
  },
  {
    category: "Frontend (working knowledge)",
    color: "bg-slate-700/60 text-slate-300 border-slate-600",
    items: ["React", "Vite"],
  },
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

export default function VaysagePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-slate-950 text-slate-100 min-h-screen font-sans">
        {/* ── Navigation ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
              ← Back to Family
            </Link>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800 animate-glow">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                Open to Remote
              </span>
              <a
                href="mailto:kvvaysage@gmail.com"
                className="hidden sm:block text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
              >
                kvvaysage@gmail.com
              </a>
            </div>
          </div>
        </nav>

        {/* ── Hero ── */}
        <header className="pt-32 pb-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10">
            {/* Text side */}
            <div className="flex-1">
              <p className="text-cyan-400 font-semibold tracking-widest text-sm uppercase mb-4 animate-fadeInUp">
                Software Engineer · 15+ Years Experience
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none animate-fadeInUp delay-100">
                Vaysage KV
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-400 mb-6 animate-fadeInUp delay-200">
                Backend / Python Engineer
              </h2>
              <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8 animate-fadeInUp delay-300">
                I build production-grade backend systems — async Python services, secure auth flows, and
                real-time data pipelines. Currently leading the backend of an in-house computer-vision
                platform. Based in Kerala, India.{" "}
                <span className="text-cyan-400 font-semibold">Available to overlap US time zones.</span>
              </p>
            </div>

            {/* Profile photo */}
            <div className="flex-shrink-0 flex justify-center md:justify-end animate-fadeInUp delay-200 mb-8 md:mb-0 md:pt-6">
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-cyan-500/40"
                style={{ boxShadow: "0 0 40px rgba(6,182,212,0.2)" }}
              >
                <Image
                  src={familyMatching}
                  alt="Vaysage KV with family"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover object-right"
                  priority
                />
              </div>
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3 animate-fadeInUp delay-500">
            <a
              href="mailto:kvvaysage@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors"
            >
              ✉ Email Me
            </a>
            <a
              href="https://linkedin.com/in/vaysage-kv-44b84a18"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/vaysagekv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
            >
              GitHub ↗
            </a>
            <a
              href="/Vaysage_KV_Resume.docx"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-colors border border-slate-700"
            >
              ⬇ Resume
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fadeInUp delay-700">
            {[
              { value: "15+",      label: "Years Experience" },
              { value: "Python",   label: "Primary Language" },
              { value: "Remote",   label: "Work Mode" },
              { value: "US tz",    label: "Overlap Available" },
            ].map(({ value, label }) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 text-center">
                <div className="text-2xl font-black text-cyan-400">{value}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ── About ── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-16" aria-labelledby="about-heading">
          <h2 id="about-heading" className="text-2xl font-bold mb-5 text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">//</span> About
          </h2>
          <blockquote className="border-l-2 border-cyan-500 pl-6 text-slate-300 text-lg leading-relaxed">
            Backend engineer with 15+ years building production services across Python and Java,
            currently leading backend development of an in-house computer-vision platform. Strong with
            FastAPI, asynchronous service design, microservices, REST APIs, and OAuth2/OIDC
            authentication (Microsoft Entra ID, Backend-for-Frontend pattern). Owns systems end to end
            — from real-time data pipelines and streaming to SQL data modeling and security hardening —
            and works effectively across distributed, fully remote teams.
          </blockquote>
        </section>

        {/* ── Skills ── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-16" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">//</span> Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(({ category, color, items }) => (
              <div key={category} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-16" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="text-2xl font-bold mb-8 text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">//</span> Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-800 hidden sm:block" />

            <div className="flex flex-col gap-8">
              {experience.map(({ company, location, role, period, current, highlights, tags }) => (
                <article
                  key={`${company}-${period}`}
                  className="sm:pl-10 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`hidden sm:block absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 ${
                      current
                        ? "bg-cyan-500 border-cyan-400"
                        : "bg-slate-800 border-slate-600"
                    } flex items-center justify-center`}
                    style={{ transform: "translateX(calc(-50% + 3px))" }}
                  />

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-slate-700 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-100">{role}</h3>
                        <p className="text-cyan-400 font-semibold">
                          {company}
                          <span className="text-slate-400 font-normal"> · {location}</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {current && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-900/50 text-emerald-400 border border-emerald-800">
                            Current
                          </span>
                        )}
                        <time className="text-sm text-slate-400 whitespace-nowrap">{period}</time>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <span className="text-cyan-500 mt-0.5 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education & Certifications ── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-16" aria-labelledby="education-heading">
          <h2 id="education-heading" className="text-2xl font-bold mb-6 text-slate-100 flex items-center gap-2">
            <span className="text-cyan-400">//</span> Education & Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="text-2xl mb-2">🎓</div>
              <h3 className="font-bold text-slate-100">B.E., Electronics & Communication Engineering</h3>
              <p className="text-cyan-400 font-medium text-sm mt-0.5">Reva Institute of Technology & Management</p>
              <p className="text-slate-400 text-sm mt-0.5">Bangalore · 2005 – 2009</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="text-2xl mb-2">📜</div>
              <h3 className="font-bold text-slate-100">Oracle Certified Java Professional</h3>
              <p className="text-cyan-400 font-medium text-sm mt-0.5">OCJP</p>
              <p className="text-slate-400 text-sm mt-0.5">Oracle</p>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section className="px-4 sm:px-6 max-w-5xl mx-auto pb-24" aria-labelledby="contact-heading">
          <div className="rounded-3xl border border-cyan-900/50 bg-gradient-to-br from-slate-900 via-cyan-950/30 to-slate-900 p-10 text-center">
            <h2 id="contact-heading" className="text-3xl font-black mb-3">Let&apos;s build something together</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-lg mx-auto">
              I&apos;m actively looking for remote backend/Python engineering roles.
              If you&apos;re building something interesting, I&apos;d love to hear about it.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="mailto:kvvaysage@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors text-base"
              >
                ✉ kvvaysage@gmail.com
              </a>
              <a
                href="tel:+917353977190"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors border border-slate-700 text-base"
              >
                📞 +91 73539 77190
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-slate-400 text-sm">
              <a
                href="https://linkedin.com/in/vaysage-kv-44b84a18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                LinkedIn ↗
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="https://github.com/vaysagekv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors font-medium"
              >
                GitHub ↗
              </a>
              <span className="text-slate-700">·</span>
              <a href="/Vaysage_KV_Resume.docx" download className="hover:text-cyan-400 transition-colors font-medium">
                Download Resume ↓
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-4 sm:px-6 py-6 max-w-5xl mx-auto text-center text-slate-500 text-sm">
          <p>
            Vaysage KV · Thrissur, Kerala, India ·{" "}
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Back to Family Site
            </Link>
          </p>
        </footer>
      </div>
    </>
  );
}
