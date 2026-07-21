import { ShieldCheck, FileText, HeartHandshake, Wallet } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Campaign",
    description:
      "Create an account, share your story, and upload supporting documents.",
  },
  {
    icon: ShieldCheck,
    title: "Get Verified",
    description:
      "Our team reviews your campaign before it becomes available to donors.",
  },
  {
    icon: HeartHandshake,
    title: "Receive Donations",
    description:
      "Once approved, anyone can donate securely—no account required.",
  },
  {
    icon: Wallet,
    title: "Responsible Disbursement",
    description:
      "Funds are released in stages after payment requests are reviewed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-[5%] bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            How It Works
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            From verification to impact.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            VeriFund makes giving simple, transparent, and accountable in four
            easy steps.
          </p>
        </div>

        {/* Steps */}

        <div className="relative mt-20">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Number */}

                  <div className="absolute -top-4 right-8 rounded-full bg-white px-2 text-sm font-semibold text-slate-400">
                    0{index + 1}
                  </div>

                  {/* Icon */}

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-white">
                    <Icon className="h-9 w-9 text-emerald-600" />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">
            Start a Campaign
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50">
            Browse Campaigns
          </button>
        </div>
      </div>
    </section>
  );
}
