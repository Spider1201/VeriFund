import Image from "next/image";

const developers = [
	{
		name: "Ifeoluwa Oduwaiye",
		role: "Frontend Developer",
		bio: "Builds clean, responsive interfaces and focuses on creating smooth user experiences across devices.",
		image: "/team/ifeoluwa-oduwaiye.svg",
		socials: {
			github: "https://github.com/ifeoluwaoduwaiye",
			x: "https://x.com/ifeoluwaoduwaiye",
			linkedin: "https://www.linkedin.com/in/ifeoluwa-oduwaiye",
		},
	},
	{
		name: "Abdulmajeed Onatade",
		role: "Backend Developer",
		bio: "Designs scalable backend systems, APIs, and data flows that keep the platform secure and reliable.",
		image: "/team/abdulmajeed-onatade.svg",
		socials: {
			github: "https://github.com/abdulmajeedonatade",
			x: "https://x.com/abdulmajeedonat",
			linkedin: "https://www.linkedin.com/in/abdulmajeed-onatade",
		},
	},
];

const techStack = {
	frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
	backend: ["Node.js", "REST APIs", "Authentication", "Data Validation"],
	tools: ["GitHub", "Vercel", "Postman", "Figma"],
};

function SocialLink({ href, label }: { href: string; label: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="inline-flex items-center rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700"
		>
			{label}
		</a>
	);
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
	return (
		<div>
			<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
			<div className="mt-3 flex flex-wrap gap-2">
				{items.map((item) => (
					<span
						key={item}
						className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700"
					>
						{item}
					</span>
				))}
			</div>
		</div>
	);
}

export default function ContactPage() {
	return (
		<main className="px-4 pb-14 pt-6 sm:px-8 lg:px-12">
			<section className="mx-auto max-w-6xl space-y-8">
				<header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">Contact</p>
					<h1 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Meet The Team</h1>
					<p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
						We are a small team of two developers building VeriFund with a focus on trust, performance, and a smooth
						donor experience.
					</p>
				</header>

				<section className="grid gap-5 md:grid-cols-2">
					{developers.map((developer) => (
						<article key={developer.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
							<div className="flex items-start gap-4">
								<Image
									src={developer.image}
									alt={developer.name}
									width={80}
									height={80}
									className="h-20 w-20 rounded-xl object-cover"
								/>
								<div>
									<h2 className="text-xl font-bold text-slate-900">{developer.name}</h2>
									<p className="text-sm font-semibold text-emerald-700">{developer.role}</p>
								</div>
							</div>

							<p className="mt-4 text-sm leading-6 text-slate-600">{developer.bio}</p>

							<div className="mt-4 flex flex-wrap gap-2">
								<SocialLink href={developer.socials.github} label="GitHub" />
								<SocialLink href={developer.socials.x} label="X" />
								<SocialLink href={developer.socials.linkedin} label="LinkedIn" />
							</div>
						</article>
					))}
				</section>

				<section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
					<h2 className="text-2xl font-bold text-slate-900">Tech Stack</h2>
					<p className="mt-2 text-sm text-slate-600">Tools and technologies we use to build and run VeriFund.</p>

					<div className="mt-6 grid gap-6 md:grid-cols-3">
						<StackGroup title="Frontend" items={techStack.frontend} />
						<StackGroup title="Backend" items={techStack.backend} />
						<StackGroup title="Tools" items={techStack.tools} />
					</div>
				</section>
			</section>
		</main>
	);
}
