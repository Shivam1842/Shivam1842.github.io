const resumeSections = [
	{
		title: 'Objective',
		content: (
			<p>
				Driven IT professional and Frontend Developer specializing in building responsive, modern web user interfaces. Passionate about transforming ideas into efficient digital solutions.
			</p>
		),
	},
	{
		title: 'Education',
		content: (
			<ul>
				<li>Master of Computer Applications (MCA) - NMIT, Bengaluru (2025 - 2027)</li>
				<li>Bachelor of Computer Applications (BCA) - KNU, Asansol (2022 - 2025)</li>
			</ul>
		),
	},
	{
		title: 'Skills',
		content: (
			<ul>
				<li><strong>Frontend:</strong> React, Vite, JavaScript, HTML, CSS, Tailwind CSS</li>
				<li><strong>Programming:</strong> Python, Java, SQL</li>
				<li><strong>Data Science &amp; ML:</strong> Scikit-Learn, Pandas, NumPy, Machine Learning (ExtraTreesClassifier)</li>
				<li><strong>Databases &amp; Tools:</strong> Git, VS Code, SQLite, MySQL, Oracle</li>
			</ul>
		),
	},
	{
		title: 'Projects & Experience',
		content: (
			<ul>
				<li><strong>Bone Density Imbalance Analysis:</strong> Independently analyzed structured clinical data (calcium, weight, vitamin D) and implemented ExtraTreesClassifier.</li>
				<li><strong>AI Medical Report Interpretation:</strong> AI/NLP system to interpret medical reports. My Role: Frontend Developer (React, Vite).</li>
				<li><strong>Personal Portfolio:</strong> Built a responsive portfolio website with React and Vite. My Role: Frontend Developer.</li>
			</ul>
		),
	},
	{
		title: 'Languages',
		content: <p>Hindi (Native), English (Fluent), Bengali (Speaking).</p>,
	},
]

function Resume() {
	return (
		<article className="resume-card bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 rounded-xl text-slate-700 dark:text-zinc-300">
			<header className="mb-6 border-b border-slate-200 pb-5 dark:border-white/10">
				<h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Shivam Kumar Singh</h1>
				<div className="mt-4 grid gap-x-5 gap-y-2 text-sm sm:grid-cols-2">
					<a className="break-all hover:text-blue-700 dark:hover:text-blue-300" href="mailto:shivam231806@gmail.com">shivam231806@gmail.com</a>
					<a className="hover:text-blue-700 dark:hover:text-blue-300" href="tel:+917601890338">+91 7601890338</a>
					<a className="break-all hover:text-blue-700 dark:hover:text-blue-300" href="https://github.com/Shivam1842" target="_blank" rel="noreferrer">GitHub: github.com/Shivam1842</a>
					<a className="break-all hover:text-blue-700 dark:hover:text-blue-300" href="https://linkedin.com/in/shivam-singh-it" target="_blank" rel="noreferrer">LinkedIn: linkedin.com/in/shivam-singh-it</a>
				</div>
			</header>
			<div className="grid gap-6">
				{resumeSections.map(({ title, content }) => (
					<section key={title}>
						<h2 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{title}</h2>
						<div aria-hidden="true" className="mt-2 h-0.5 w-full bg-gradient-to-r from-blue-500 to-purple-500" />
						<div className="mt-3 text-sm leading-6 [&_li+li]:mt-2 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_strong]:font-semibold">
							{content}
						</div>
					</section>
				))}
			</div>
		</article>
	)
}

export default Resume
