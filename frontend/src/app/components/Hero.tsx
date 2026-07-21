import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const impactStats = [
    {
      title: "Campaigns",
      value: "1,248",
      caption: "Verified campaigns",
      className: "left-[6%] top-[45%]",
    },
    {
      title: "Total impact",
      value: "N126,450,000",
      caption: "Total funds disbursed",
      className: "right-[2%] top-[8%]",
    },
    {
      title: "Lives Impacted",
      value: "8,932",
      caption: "Across Nigeria",
      className: "right-[4%] bottom-[8%]",
    },
  ];

  const trustPoints = [
    {
      title: "Verified Campaigns",
      description: "Every campaign is reviewed by our admin team.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
          <path d="m8.5 12.5 2.2 2.1 4.8-5" />
        </svg>
      ),
    },
    {
      title: "Transparent Disbursements",
      description: "Funds are released responsibly with clear receipts.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 4h10l3 4v12H4V8l3-4Z" />
          <path d="M4 10h16" />
          <path d="M9 14h6" />
        </svg>
      ),
    },
    {
      title: "Fraud Prevention",
      description: "We prioritize trust, safety and accountability.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" />
          <path d="M16.2 8.8 7.8 17.2" />
          <path d="m7.8 8.8 8.4 8.4" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Create Campaign",
      description: "Share your story and upload proof.",
    },
    {
      number: "2",
      title: "Admin Reviews",
      description: "We verify your story and documents.",
    },
    {
      number: "3",
      title: "Receive Donations",
      description: "Donors contribute to support your need.",
    },
    {
      number: "4",
      title: "Funds Released",
      description: "Disbursements are approved and tracked.",
    },
  ];

  return (
    <section className="px-[5%] pb-12 pt-4 lg:pb-16">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_1fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold leading-[1.05] text-slate-900 sm:text-5xl md:text-6xl">
              Verified needs.
              <br />
              <span className="text-emerald-600">Trusted</span> impact.
            </h1>

            <p className="max-w-[33rem] text-lg leading-relaxed text-slate-600 sm:text-2xl">
              VeriFund ensures every donation is verified, every disbursement
              is approved, and every naira makes a difference.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/campaigns"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                <span aria-hidden="true">♡</span>
                Donate Now
              </Link>
              <Link
                href="/campaigns"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-700"
              >
                <span aria-hidden="true">◌</span>
                Start a Campaign
              </Link>
            </div>
          </div>

          <div className="relative isolate min-h-[340px] sm:min-h-[430px]">
            <div className="absolute inset-x-6 top-8 -z-10 h-[82%] rounded-full bg-gradient-to-b from-emerald-100/90 to-slate-100/60 blur-[1px]" />
            <Image
              src="/hero.png"
              alt="Smiling beneficiary"
              width={760}
              height={620}
              priority
              className="mx-auto h-full max-h-[530px] w-auto object-contain"
            />

            {impactStats.map((stat) => (
              <article
                key={stat.title}
                className={`absolute hidden rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-[0_20px_45px_-26px_rgba(15,23,42,0.45)] backdrop-blur md:block ${stat.className}`}
              >
                <p className="text-xs font-semibold text-slate-500">{stat.title}</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-slate-500">{stat.caption}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 border-y border-slate-100 py-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <article key={point.title} className="flex items-start gap-3">
              <div className="mt-0.5 text-emerald-600">{point.icon}</div>
              <div className="space-y-1">
                <h2 className="text-base font-semibold text-slate-900">{point.title}</h2>
                <p className="text-sm leading-relaxed text-slate-600">{point.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl bg-[linear-gradient(100deg,#04214a_0%,#041733_52%,#031428_100%)] px-6 py-6 text-slate-100 shadow-[0_22px_56px_-30px_rgba(2,14,38,0.9)] lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_3fr] lg:items-start">
            <div>
              <p className="text-2xl font-semibold text-white">How VeriFund Works</p>
              <p className="mt-1 text-sm text-slate-300">A safer way to give and receive.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/70 text-sm font-semibold text-emerald-300">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
