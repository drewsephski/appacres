import Link from "next/link";

const NAV_LINKS = [
  { label: "The World", href: "#world" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Builders", href: "#builders" },
  { label: "About", href: "#about" },
];

const GROWTH_STEPS = [
  { title: "Ship", description: "Push a repo, launch a site, deploy an app." },
  { title: "Plant", description: "Each build becomes a new acre on your land." },
  { title: "Grow", description: "Your world remembers it all and keeps expanding." },
];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4";

function Logo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="#1B133C"
      aria-hidden="true"
    >
      <path d="M 128 112 L 256 176 L 128 240 L 0 176 Z" />
      <path d="M 128 16 L 192 64 L 128 112 L 64 64 Z" opacity="0.55" />
    </svg>
  );
}

export default function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          className="h-[130%] w-full object-cover object-top"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </div>

      <header className="relative z-10 flex justify-center pt-4 md:pt-6">
        <nav
          aria-label="Main"
          className="flex items-center gap-8 rounded-xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur-md md:px-6"
        >
          <Link href="/" aria-label="AppAcres home" className="flex items-center gap-2">
            <Logo />
            <span className="text-sm font-semibold tracking-tight">AppAcres</span>
          </Link>
          <ul className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#1B133C]/80 transition-opacity hover:text-[#1B133C]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="relative z-10 mt-8 flex flex-col items-center px-4 text-center md:mt-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-[#1B133C]/10 bg-white/70 px-4 py-2 text-sm font-medium backdrop-blur-sm">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          The world is open — Season 01
        </div>

        <h1 className="max-w-4xl font-['Instrument_Serif'] text-4xl leading-[0.95] tracking-tight text-[#1B133C] sm:text-5xl md:text-7xl lg:text-8xl">
          Everything you build
          <br />
          becomes <em className="italic">a world</em>
        </h1>

        <p className="mt-5 max-w-2xl text-xs leading-relaxed text-[#1B133C]/70 sm:mt-6 sm:text-sm md:text-base">
          AppAcres turns your apps, repos, and side projects into land. Every
          thing you ship plants a new acre in a persistent world that remembers
          all of it, and keeps growing as long as you keep building.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row">
          <a
            href="#claim"
            className="rounded-xl bg-[#FEFEFE] px-6 py-3 text-sm font-semibold text-[#1B133C] shadow-[0px_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)] sm:px-8 sm:py-3.5"
          >
            Claim your acres
          </a>
          <a
            href="#world"
            className="rounded-xl border border-[#1B133C]/15 bg-white/40 px-6 py-3 text-sm font-semibold text-[#1B133C] backdrop-blur-sm transition-colors duration-300 hover:bg-white/60 sm:px-8 sm:py-3.5"
          >
            Explore the world
          </a>
        </div>
      </div>

      <ol className="relative z-10 mx-auto mt-auto mb-6 hidden w-full max-w-4xl grid-cols-3 gap-3 px-4 md:grid md:mb-10">
        {GROWTH_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="rounded-xl border border-[#1B133C]/10 bg-white/60 px-5 py-4 text-left backdrop-blur-md"
          >
            <p className="text-xs font-medium text-[#1B133C]/50">
              0{index + 1}
            </p>
            <p className="mt-1 font-['Instrument_Serif'] text-2xl leading-none">
              {step.title}
            </p>
            <p className="mt-2 text-sm text-[#1B133C]/70">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
