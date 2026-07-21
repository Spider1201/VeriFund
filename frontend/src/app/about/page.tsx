const howItWorksSteps = [
	{
		title: "Submit a Campaign",
		description:
			"Beneficiaries create an account and submit their story, supporting images, verification documents, funding goal, and proof of need.",
	},
	{
		title: "Verification",
		description:
			"Our administrators carefully review every campaign to verify authenticity before it is published. Only approved campaigns become available for donations.",
	},
	{
		title: "Receive Donations",
		description:
			"Verified campaigns are listed publicly where anyone can contribute. Donors do not need to create an account to support a campaign.",
	},
	{
		title: "Responsible Disbursement",
		description:
			"Beneficiaries receive funds in stages. Additional disbursements require supporting evidence and are reviewed before funds are released.",
		points: [
			"Medical invoices",
			"Tuition bills",
			"Rent invoices",
			"Business quotations",
			"Other approved documentation",
		],
	},
	{
		title: "Campaign Completion",
		description:
			"When the goal is achieved and approved payments are completed, the campaign is marked complete with a full financial history available for transparency.",
	},
];

const differentiators = [
	{
		title: "Campaign Verification",
		description: "Every fundraising campaign is reviewed before publication.",
	},
	{
		title: "Controlled Fund Disbursement",
		description:
			"Funds are released in stages instead of all at once, reducing the risk of misuse.",
	},
	{
		title: "Transparent Spending",
		description: "Campaigns clearly display funding and disbursement metrics.",
		points: ["Amount Needed", "Amount Raised", "Amount Released", "Remaining Balance"],
	},
	{
		title: "Downloadable Statements",
		description:
			"Beneficiaries and administrators can download detailed account statements showing all donations and approved disbursements.",
	},
	{
		title: "Secure Administration",
		description: "Our administrators can:",
		points: [
			"Approve campaigns",
			"Reject fraudulent submissions",
			"Review disbursement requests",
			"Suspend suspicious accounts",
			"Audit campaign activity",
		],
	},
];

const coreValues = [
	{
		title: "Trust",
		description:
			"We believe generosity grows when people have confidence that their contributions are protected.",
	},
	{
		title: "Transparency",
		description:
			"Every naira donated should be accounted for through clear records and responsible reporting.",
	},
	{
		title: "Accountability",
		description:
			"Verification does not stop after campaign approval. Every disbursement is monitored until campaign completion.",
	},
	{
		title: "Compassion",
		description:
			"Behind every campaign is a real person, a real family, and a real story. We treat every beneficiary with dignity and respect.",
	},
];

const supportedNeeds = [
	"Medical emergencies",
	"Surgery and healthcare",
	"School fees",
	"Rent assistance",
	"Emergency financial support",
	"Small business recovery",
	"Community initiatives",
	"Disaster relief",
	"Other verified causes",
];

const donorBenefits = [
	"Every campaign has been verified.",
	"Funds are monitored before disbursement.",
	"Spending remains transparent.",
	"Your generosity supports genuine needs.",
];

export default function AboutPage() {
	return (
		<main className="px-4 pb-16 pt-6 sm:px-8 lg:px-12">
			<section className="mx-auto max-w-5xl space-y-12">
				<header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">About VeriFund</p>
					<h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
						Every Verified Need Deserves a Chance
					</h1>
					<p className="mt-4 text-base leading-7 text-slate-600">
						VeriFund is a transparent crowdfunding platform built to help individuals facing genuine financial
						emergencies access support from compassionate donors while ensuring every contribution is used
						responsibly.
					</p>
					<p className="mt-4 text-base leading-7 text-slate-600">
						Unlike traditional fundraising platforms where funds are transferred directly to beneficiaries, VeriFund
						uses a verified disbursement model. Every campaign is reviewed before it goes live, and every withdrawal
						request is assessed to ensure donated funds are spent for their intended purpose.
					</p>
					<blockquote className="mt-6 border-l-4 border-emerald-500 bg-emerald-50 px-4 py-3 text-lg font-semibold text-emerald-900">
						Help people in need while protecting the trust of those who give.
					</blockquote>
				</header>

				<section className="grid gap-4 md:grid-cols-2">
					<article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
						<p className="mt-3 text-slate-600">
							To make charitable giving more transparent, accountable, and trustworthy by ensuring every verified
							donation reaches its intended purpose.
						</p>
					</article>
					<article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
						<p className="mt-3 text-slate-600">
							To become Africa&apos;s most trusted platform for verified fundraising, where every donor can give with
							confidence and every beneficiary receives support with dignity.
						</p>
					</article>
				</section>

				<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<h2 className="text-2xl font-bold text-slate-900">Why VeriFund?</h2>
					<p className="mt-4 leading-7 text-slate-600">
						Trust is the foundation of generosity. Many people want to help, but concerns about fraud and misuse often
						discourage them from donating.
					</p>
					<p className="mt-3 leading-7 text-slate-600">
						VeriFund bridges this gap through a verification-first approach that protects both donors and
						beneficiaries. Every campaign follows a structured review process before becoming visible to the public,
						and every disbursement is monitored until the campaign is completed.
					</p>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-bold text-slate-900">How VeriFund Works</h2>
					<div className="space-y-3">
						{howItWorksSteps.map((step, index) => (
							<article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
								<h3 className="text-lg font-bold text-slate-900">
									{index + 1}. {step.title}
								</h3>
								<p className="mt-2 leading-7 text-slate-600">{step.description}</p>
								{step.points && (
									<ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
										{step.points.map((point) => (
											<li key={point}>{point}</li>
										))}
									</ul>
								)}
							</article>
						))}
					</div>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-bold text-slate-900">What Makes VeriFund Different?</h2>
					<div className="grid gap-4 md:grid-cols-2">
						{differentiators.map((item) => (
							<article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
								<h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
								<p className="mt-2 text-slate-600">{item.description}</p>
								{item.points && (
									<ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
										{item.points.map((point) => (
											<li key={point}>{point}</li>
										))}
									</ul>
								)}
							</article>
						))}
					</div>
				</section>

				<section className="space-y-4">
					<h2 className="text-2xl font-bold text-slate-900">Our Core Values</h2>
					<div className="grid gap-4 sm:grid-cols-2">
						{coreValues.map((value) => (
							<article key={value.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
								<h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
								<p className="mt-2 text-slate-600">{value.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<h2 className="text-2xl font-bold text-slate-900">Who Can Use VeriFund?</h2>
					<p className="mt-3 text-slate-600">VeriFund supports verified fundraising across a variety of needs, including:</p>
					<ul className="mt-4 grid list-disc gap-2 pl-6 text-slate-600 sm:grid-cols-2">
						{supportedNeeds.map((need) => (
							<li key={need}>{need}</li>
						))}
					</ul>
				</section>

				<section className="grid gap-4 md:grid-cols-2">
					<article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-2xl font-bold text-slate-900">For Donors</h2>
						<p className="mt-3 text-slate-600">Donate confidently knowing that:</p>
						<ul className="mt-3 list-disc space-y-1 pl-6 text-slate-600">
							{donorBenefits.map((benefit) => (
								<li key={benefit}>{benefit}</li>
							))}
						</ul>
						<p className="mt-4 text-slate-600">No account is required to make a donation.</p>
					</article>

					<article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
						<h2 className="text-2xl font-bold text-slate-900">For Beneficiaries</h2>
						<p className="mt-3 text-slate-600">
							VeriFund provides a trusted platform to tell your story, receive community support, and access funding
							responsibly through a structured verification process.
						</p>
					</article>
				</section>

				<section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
					<h2 className="text-2xl font-bold text-slate-900">Our Promise</h2>
					<p className="mt-3 leading-7 text-slate-700">
						At VeriFund, we believe generosity should never be overshadowed by uncertainty. By combining compassionate
						giving with careful verification and transparent fund management, we are building a platform where every
						donation creates real impact and every act of kindness is protected.
					</p>
					<p className="mt-6 text-xl font-extrabold text-emerald-700">VeriFund</p>
					<p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">Verified Giving. Trusted Impact.</p>
				</section>
			</section>
		</main>
	);
}
