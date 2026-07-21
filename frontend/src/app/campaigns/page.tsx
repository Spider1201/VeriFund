import Image from "next/image";
import Link from "next/link";
import { campaigns } from "./campaigns";

const categoryLabels: Record<string, string> = {
  ALL: "All Categories",
  HEALTH: "Medical",
  EDUCATION: "Education",
  BUSINESS: "Business",
  EMERGENCY: "Emergency",
  COMMUNITY: "Community",
  DISASTER_RELIEF: "Disaster Relief",
  RELIGION: "Religion",
  OTHER: "Others",
};

const donorCounts: Record<string, number> = {
  cmp_001: 120,
  cmp_002: 78,
  cmp_003: 92,
  cmp_004: 87,
  cmp_005: 64,
  cmp_006: 45,
};

function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function CampaignsPage() {
  return (
    <main className="px-4 pb-10 pt-4 sm:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Explore Campaigns</h1>
          <p className="mt-2 text-sm text-slate-500">Browse verified campaigns and make a difference.</p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => {
            const progress = Math.min(100, Math.round((campaign.amountRaised / campaign.amountNeeded) * 100));
            const donors = donorCounts[campaign.id] ?? 30;

            return (
              <Link key={campaign.id} href={`/campaigns/${campaign.id}`} className="block" aria-label={`View ${campaign.campaignTitle}`}>
                <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_-20px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-18px_rgba(15,23,42,0.5)]">
                  <div className="relative h-60 w-full">
                    <Image
                      src={campaign.images[0]}
                      alt={campaign.campaignTitle}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-600">
                      {categoryLabels[campaign.category] ?? campaign.category}
                    </span>
                  </div>

                  <div className="space-y-3 p-4">
                    <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">{campaign.campaignTitle}</h3>

                    <p className="text-sm font-semibold text-slate-800">
                      {formatNaira(campaign.amountRaised)}
                      <span className="ml-1 font-normal text-slate-500">raised of {formatNaira(campaign.amountNeeded)}</span>
                    </p>

                    <div className="space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-slate-100">
                        <div className="h-1.5 rounded-full bg-emerald-500" style={{ width: `${progress}%` }} />
                      </div>
                      <p className="text-right text-xs font-semibold text-slate-500">{progress}%</p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <path
                            d="M13.333 17.5v-1.667a3.333 3.333 0 00-3.333-3.333H4.167a3.333 3.333 0 00-3.334 3.333V17.5m16.667 0v-1.667A3.333 3.333 0 0015 12.592M11.667 2.609a3.333 3.333 0 010 6.466M10.833 5.833a3.333 3.333 0 11-6.666 0 3.333 3.333 0 016.666 0z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {donors} donors
                      </span>
                      <span className="flex items-center gap-1 text-emerald-600">
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
                          <path
                            d="M10 2.5l6.25 2.5v4.167c0 3.858-2.666 7.434-6.25 8.333-3.584-.9-6.25-4.475-6.25-8.333V5L10 2.5z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.5 10l1.667 1.667L12.5 8.333"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Verified
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
