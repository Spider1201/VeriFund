import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { campaigns } from "../campaigns";
import DonateDrawer from "./DonateDrawer";

type CampaignDetailPageProps = {
  params: Promise<{ id: string }>;
};

function formatNaira(amount: number) {
	return `₦${amount.toLocaleString("en-NG")}`;
}

function getDaysLeft(deadline: string) {
	const today = new Date();
	const target = new Date(deadline);
	const diff = target.getTime() - today.getTime();
	const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
	return Math.max(days, 0);
}

export function generateStaticParams() {
	return campaigns.map((campaign) => ({ id: campaign.id }));
}

export default async function CampaignDetailPage({ params }: CampaignDetailPageProps) {
	const { id } = await params;
	const campaign = campaigns.find((item) => item.id === id);

	if (!campaign) {
		notFound();
	}

	const progress = Math.min(100, Math.round((campaign.amountRaised / campaign.amountNeeded) * 100));
	const daysLeft = getDaysLeft(campaign.verificationDeadline);
	const remaining = Math.max(campaign.amountNeeded - campaign.amountRaised, 0);

	return (
		<main className="px-4 pb-10 pt-4 sm:px-8 lg:px-12">
			<section className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
				<Link href="/campaigns" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700">
					<span aria-hidden>←</span>
					Back to campaigns
				</Link>

				<div className="mt-4 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
					<div>
						<div className="grid gap-4 md:grid-cols-[320px_1fr]">
							<div className="relative h-60 w-full overflow-hidden rounded-xl">
								<Image
									src={campaign.images[0]}
									alt={campaign.campaignTitle}
									fill
									className="object-cover object-top"
									sizes="(max-width: 768px) 100vw, 320px"
								/>
							</div>

							<div>
								<span className="inline-flex rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-700">
									{campaign.category}
								</span>
								<h1 className="mt-2 text-4xl font-extrabold leading-tight text-slate-900">{campaign.campaignTitle}</h1>

								<div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
									<span>Campaign by {campaign.name}</span>
									<span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-emerald-700">
										<svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
											<path d="M10 2.5l6.25 2.5v4.167c0 3.858-2.666 7.434-6.25 8.333-3.584-.9-6.25-4.475-6.25-8.333V5L10 2.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M7.5 10l1.667 1.667L12.5 8.333" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
										Verified Campaign
									</span>
								</div>

								<p className="mt-4 text-sm leading-6 text-slate-600">{campaign.story}</p>

								<div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500">
									<span>{campaign.location}</span>
									<div className="flex items-center gap-3">
										<span>Share Campaign</span>
										<span className="text-emerald-600">X</span>
										<span className="text-emerald-600">WhatsApp</span>
									</div>
								</div>
							</div>
						</div>

						<div className="mt-6 flex border-b border-slate-200 text-sm font-semibold text-slate-500">
							<button className="border-b-2 border-emerald-500 px-4 py-3 text-emerald-600">Overview</button>
							<button className="px-4 py-3">Proof and Documents</button>
							<button className="px-4 py-3">Disbursement History</button>
							<button className="px-4 py-3">Updates</button>
						</div>

						<div className="mt-5 rounded-xl border border-slate-200 p-5">
							<h2 className="text-lg font-bold text-slate-900">The Story</h2>
							<p className="mt-3 text-sm leading-6 text-slate-600">{campaign.story}</p>

							<h3 className="mt-6 text-sm font-semibold text-slate-800">Supporting Documents</h3>
							<ul className="mt-2 space-y-2 text-sm">
								{campaign.supportingDocuments.map((docPath) => {
									const fileName = docPath.split("/").pop() ?? docPath;
									return (
										<li key={docPath}>
											<a href={docPath} target="_blank" rel="noreferrer" className="text-emerald-700 underline underline-offset-2">
												{fileName}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					<aside className="space-y-4">
						<div className="rounded-xl border border-slate-200 p-5">
							<p className="text-4xl font-extrabold text-slate-900">{formatNaira(campaign.amountRaised)}</p>
							<p className="mt-1 text-sm text-slate-500">raised of {formatNaira(campaign.amountNeeded)} goal</p>

							<div className="mt-4 h-2.5 w-full rounded-full bg-slate-100">
								<div className="h-2.5 rounded-full bg-emerald-500" style={{ width: `${progress}%` }} />
							</div>
							<p className="mt-2 text-right text-sm font-semibold text-slate-500">{progress}%</p>

							<div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 text-sm">
								<div>
									<p className="text-2xl font-bold text-slate-900">120</p>
									<p className="text-slate-500">Donors</p>
								</div>
								<div>
									<p className="text-2xl font-bold text-slate-900">{daysLeft}</p>
									<p className="text-slate-500">Days left</p>
								</div>
								<div>
									<p className="text-lg font-bold text-emerald-700">Verified</p>
									<p className="text-slate-500">Campaign</p>
								</div>
							</div>

							<DonateDrawer campaignTitle={campaign.campaignTitle} imageSrc={campaign.images[0]} />
						</div>

						<div className="rounded-xl border border-slate-200 p-5">
							<h3 className="text-base font-bold text-slate-900">Transparency</h3>
							<div className="mt-4 space-y-2 text-sm">
								<div className="flex items-center justify-between text-slate-500">
									<span>Total Raised</span>
									<span className="font-semibold text-slate-700">{formatNaira(campaign.amountRaised)}</span>
								</div>
								<div className="flex items-center justify-between text-slate-500">
									<span>Total Released</span>
									<span className="font-semibold text-slate-700">{formatNaira(campaign.amountSpent)}</span>
								</div>
								<div className="flex items-center justify-between text-slate-500">
									<span>Remaining Balance</span>
									<span className="font-semibold text-slate-700">{formatNaira(remaining)}</span>
								</div>
								<div className="flex items-center justify-between text-slate-500">
									<span>Verification Status</span>
									<span className="font-semibold text-emerald-700">Verified</span>
								</div>
							</div>
						</div>
					</aside>
				</div>
			</section>
		</main>
	);
}
