import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
	ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Braces,
	Check, Code2, Database, Download, ExternalLink, GraduationCap, Mail,
	MapPin, Menu, Moon, Phone, Send, Sparkles, Sun, Terminal, X,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import Resume from './Resume.jsx'
import './App.css'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE'

const navigation = [
	['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
	['Resume', 'resume'], ['Contact', 'contact'],
]

const socialLinks = [
	{ label: 'GitHub', href: 'https://github.com/Shivam1842', icon: FaGithub },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/shivam-singh-it', icon: FaLinkedinIn },
]

const skillGroups = [
	{ title: 'Frontend', icon: Code2, items: ['HTML', 'CSS', 'JavaScript', 'React'] },
	{ title: 'Backend', icon: Terminal, items: ['Node.js', 'Express.js', 'Java'] },
	{ title: 'Database', icon: Database, items: ['MySQL', 'MongoDB', 'Oracle'] },
	{ title: 'Data Science & ML', icon: Sparkles, items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'] },
	{ title: 'Tools & Others', icon: Braces, items: ['Git', 'GitHub', 'VS Code', 'Docker'] },
	{ title: 'Learning...', icon: BookOpen, items: ['FastAPI', 'TypeScript', 'AWS', 'Docker', 'Linux'] },
]

const projects = [
	{ title: 'Personal Portfolio', description: 'My personal portfolio website with a dark theme and a considered, modern interface.', icon: Braces, tags: ['React', 'Vite', 'GitHub Pages'] },
	{ title: 'Women Safety & Security', description: 'A MERN application for women’s safety, with complaint reporting and trusted contacts.', icon: Sparkles, tags: ['MERN', 'MongoDB'] },
	{ title: 'AI Medical Report Interpretation', description: 'A team project exploring AI and NLP to make medical reports easier to understand.', icon: BookOpen, tags: ['React', 'Vite', 'Python'] },
	{ title: 'Bone Density Imbalance Analysis', description: 'Analyzed bone density measurements to identify imbalances and explore data-driven health insights.', icon: Database, tags: ['Python', 'Data Analysis'] },
]

function SectionHeading({ eyebrow, children, note }) {
	return (
		<div className="section-heading flex flex-col items-start">
			<span className="eyebrow text-slate-700 dark:text-zinc-400">{eyebrow}</span>
			<h2 className="font-display text-slate-900 dark:text-white">{children}<span className="heading-period">.</span></h2>
			{note && <p className="text-slate-700 dark:text-zinc-400">{note}</p>}
		</div>
	)
}

function Navigation({ theme, onThemeToggle }) {
	const [active, setActive] = useState('home')
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActive(entry.target.id)
			})
		}, { rootMargin: '-35% 0px -55% 0px' })
		document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section))
		return () => observer.disconnect()
	}, [])

	return (
		<header className="site-header">
			<nav className="nav-wrap" aria-label="Main navigation">
				<a className="brand" href="#home" aria-label="Shivam Kumar Singh home"><span>SK</span><i /></a>
				<button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
					{menuOpen ? <X size={21} /> : <Menu size={21} />}
				</button>
				<div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
					{navigation.map(([label, id]) => (
						<a key={id} className={`${active === id ? 'active text-blue-700 dark:text-blue-400' : 'text-slate-800 dark:text-zinc-300'} hover:text-blue-700 dark:hover:text-blue-400 after:bg-gradient-to-r after:from-blue-700 after:to-purple-700 dark:after:from-blue-400 dark:after:to-purple-500`} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>
					))}
					<a className="nav-hire" href="#contact" onClick={() => setMenuOpen(false)}>Hire Me <ArrowUpRight size={14} /></a>
				</div>
				<button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
					{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
				</button>
			</nav>
		</header>
	)
}

function LaptopArtwork() {
	return (
		<div className="hero-art anti-gravity" aria-label="Illustration of a laptop displaying code">
			<div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
			<div className="hero-glow" />
			<div className="laptop-screen">
				<div className="editor-top"><span /><span /><span /><small>shivam.dev / portfolio.jsx</small><i>•••</i></div>
				<div className="editor-code">
					<span className="line-no">01</span><code><b>const</b> <em>ideas</em> = <strong>[</strong></code>
					<span className="line-no">02</span><code>&nbsp;&nbsp;<q>code</q>, <q>data</q>, <q>impact</q></code>
					<span className="line-no">03</span><code><strong>]</strong>;</code>
					<span className="line-no">04</span><code><b>export default</b> ideas;</code>
					<span className="line-no">05</span><code><i>// building what's next</i></code>
				</div>
				<div className="editor-status"><span><i /> main</span><span>React · JavaScript</span></div>
			</div>
			<div className="laptop-base"><div /></div>
			<div className="impact-card glass-panel"><span className="impact-mark"><Sparkles size={16} /></span><div><small>MY APPROACH</small><strong>Code, Data, Impact</strong></div><span className="impact-pulse" /></div>
			<div className="floating-metric glass-panel"><span className="metric-symbol">&lt;/&gt;</span><span><small>CREATIVE MODE</small><strong>always on</strong></span></div>
			<span className="art-coordinate coordinate-one text-slate-700 dark:text-zinc-400">12° 58′ N</span>
			<span className="art-coordinate coordinate-two text-slate-700 dark:text-zinc-400">SHIP / REPEAT</span>
		</div>
	)
}

function HeroSection() {
	return (
		<section className="hero-section" id="home">
			<div className="hero-grid page-width">
				<motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
					<span className="eyebrow hero-eyebrow text-slate-700 dark:text-zinc-400"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
					<p className="intro-line text-slate-700 dark:text-zinc-400">Hello, I’m</p>
					<h1 className="font-display text-slate-900 dark:text-white">Shivam Kumar<br /><span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text !text-transparent dark:from-blue-400 dark:to-purple-500">Singh</span></h1>
					<p className="hero-role text-blue-700 dark:text-cyan-300">MCA <i /> Data Science <i /> Web Developer</p>
					<p className="hero-bio text-slate-700 dark:text-zinc-400">I build modern web applications and love working with data. Passionate about turning ideas into real-world solutions.</p>
					<div className="hero-actions">
						<a className="button button-primary bg-gradient-to-r from-blue-700 to-purple-700 text-white dark:from-blue-400 dark:to-purple-500" href="#projects">View My Work <ArrowRight size={16} /></a>
						<button className="button button-outline gradient-outline from-blue-700 to-purple-700 text-slate-900 hover:text-slate-900 dark:from-blue-400 dark:to-purple-500 dark:text-white dark:hover:text-white" onClick={() => window.print()}><Download size={15} /> Download Resume</button>
					</div>
					<SocialLinks className="hero-socials" />
				</motion.div>
				<motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
					<LaptopArtwork />
				</motion.div>
			</div>
			<a className="scroll-cue text-slate-700 dark:text-zinc-400" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
			<span className="hero-index text-slate-700 dark:text-zinc-400">01 <i /> 06</span>
		</section>
	)
}

function SocialLinks({ className = '' }) {
	return (
		<div className={`social-links ${className}`} aria-label="Social profiles">
			{socialLinks.map(({ label, href, icon: Icon }) => (
				<a className="text-slate-800 hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-400" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17} /></a>
			))}
		</div>
	)
}

function AboutSection() {
	const details = [
		{ icon: GraduationCap, label: 'Education', value: 'MCA · Data Science' },
		{ icon: MapPin, label: 'Location', value: 'Asansol, West Bengal, India' },
		{ icon: Mail, label: 'Email', value: 'shivam231806@gmail.com', href: 'mailto:shivam231806@gmail.com' },
		{ icon: FaGithub, label: 'GitHub', value: 'github.com/Shivam1842', href: 'https://github.com/Shivam1842' },
		{ icon: FaLinkedinIn, label: 'LinkedIn', value: 'linkedin.com/in/shivam-singh-it', href: 'https://linkedin.com/in/shivam-singh-it' },
	]

	return (
		<section className="section about-section" id="about">
			<div className="page-width about-grid">
				<motion.div className="portrait-stage" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
					<div className="portrait-frame">
						<div className="portrait-surface">
							<img className="absolute inset-0 z-0 h-full w-full rounded-xl object-cover object-center" src="/profile.jpeg" alt="Portrait of Shivam Kumar Singh" />
							<div className="portrait-sun" /><div className="portrait-grid" />
							<span className="portrait-initials">SK<span>.</span></span>
							<span className="portrait-caption">BENGALURU · INDIA</span>
						</div>
						<span className="frame-corner corner-tl" /><span className="frame-corner corner-br" />
					</div>
					<div className="about-badge badge-learning glass-panel anti-gravity"><span className="badge-check"><Check size={13} /></span><span>Always Learning</span></div>
					<div className="about-badge badge-code glass-panel anti-gravity"><Braces size={17} /><span>&lt;build /&gt;</span></div>
					<div className="portrait-coordinate text-slate-700 dark:text-zinc-400">FIG. 01&nbsp; / &nbsp;THE MAKER</div>
				</motion.div>
				<motion.div className="about-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
					<SectionHeading eyebrow="A LITTLE ABOUT ME">Curiosity, meet<br />creation</SectionHeading>
					<p className="body-copy text-slate-700 dark:text-zinc-400">I am Shivam Kumar Singh, currently pursuing MCA at NMIT Bengaluru with a specialization in Data Science. I have a strong interest in web development, data analysis and building useful digital solutions.</p>
					<div className="about-details">
						{details.map(({ icon: Icon, label, value, href }) => (
							<div className="detail-row" key={label}><span className="detail-icon"><Icon size={16} /></span><span className="detail-label text-slate-700 dark:text-zinc-400">{label}</span>{href ? <a className="text-slate-800 dark:text-zinc-300" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{value}</a> : <span className="detail-value text-slate-800 dark:text-zinc-300">{value}</span>}</div>
						))}
					</div>
					<div className="signature">Shivam Singh<span>✳</span></div>
				</motion.div>
			</div>
		</section>
	)
}

function CubeArtwork() {
	return (
		<div className="cube-art anti-gravity" aria-label="Floating blue glass cubes">
			<div className="cube cube-large"><i /><i /><i /><i /><i /><i /></div>
			<div className="cube cube-small"><i /><i /><i /><i /><i /><i /></div>
			<div className="cube cube-tiny"><i /><i /><i /><i /><i /><i /></div>
			<div className="cube-floor" />
		</div>
	)
}

function SkillsSection() {
	return (
		<section className="section skills-section" id="skills">
			<div className="page-width">
				<div className="section-topline"><SectionHeading eyebrow="MY TOOLKIT" note="A growing set of tools for turning good questions into useful things.">Skills &amp; craft</SectionHeading><div className="skills-count text-slate-700 dark:text-zinc-400"><span>06</span> AREAS OF CURIOSITY</div></div>
				<div className="skills-layout">
					<div className="skills-grid">
						{skillGroups.map(({ title, icon: Icon, items }, index) => (
							<motion.article className="skill-card glass-panel bg-slate-50 border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.055 }}>
								<div className="skill-card-top"><span className="skill-icon"><Icon size={17} /></span><span className="skill-number text-slate-700 dark:text-zinc-400">0{index + 1}</span></div>
									<h3 className="font-display text-slate-900 dark:text-white">{title}</h3><div className="skill-tags">{items.map((item) => <span className="text-slate-700 dark:text-zinc-400" key={item}>{item}</span>)}</div>
							</motion.article>
						))}
					</div>
					<div className="skills-art-column"><CubeArtwork /><p className="text-slate-700 dark:text-zinc-400">Curious by default.<br /><span className="text-slate-700 dark:text-zinc-400">Better every build.</span></p></div>
				</div>
			</div>
		</section>
	)
}

function ProjectsSection() {
	return (
		<section className="section projects-section" id="projects">
			<div className="page-width">
				<div className="section-topline"><SectionHeading eyebrow="SELECTED WORK" note="Small steps, real problems, and a lot learned along the way.">Things I’ve built</SectionHeading><span className="projects-total text-slate-700 dark:text-zinc-400">04 <i /> PROJECTS</span></div>
				<div className="projects-grid">
					{projects.map(({ title, description, icon: Icon, tags }, index) => (
						<motion.article className="project-card relative rounded-xl border p-6 transition-all duration-300 group bg-white border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 dark:bg-slate-800/40 dark:border-white/10 dark:backdrop-blur-sm hover:dark:bg-slate-800/60 hover:dark:border-white/20 dark:shadow-none" key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay: index * 0.07 }}>
							<div className="project-card-head"><span className="project-icon"><Icon size={20} /></span><span className="project-id text-slate-700 dark:text-zinc-400">PROJECT / 0{index + 1}</span><a className="project-arrow" href="#contact" aria-label={`Ask about ${title}`}><ArrowRight size={17} /></a></div>
							<h3 className="font-display text-slate-900 dark:text-white">{title}</h3><p className="text-slate-700 dark:text-zinc-400">{description}</p>
							<div className="project-tags">{tags.map((tag) => <span className="bg-slate-100 text-slate-600 dark:bg-white/5 dark:text-zinc-300" key={tag}>{tag}</span>)}</div>
							<div className="project-card-line" />
						</motion.article>
					))}
				</div>
				<div className="projects-footer"><span className="text-slate-700 dark:text-zinc-400">MORE IDEAS IN PROGRESS<span className="typing-dot">_</span></span><a className="button button-outline gradient-outline from-blue-700 to-purple-700 text-slate-900 hover:text-slate-900 dark:from-blue-400 dark:to-purple-500 dark:text-white dark:hover:text-white" href="https://github.com/Shivam1842" target="_blank" rel="noreferrer">View All Projects <ExternalLink size={15} /></a></div>
			</div>
		</section>
	)
}

function ResumeSection() {
	return (
		<section className="section resume-contact-section" id="resume">
			<div className="page-width resume-contact-grid">
				<Resume />
				<ContactSection />
			</div>
		</section>
	)
}

function ContactSection() {
	const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
	const [submissionState, setSubmissionState] = useState('idle')

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
		if (submissionState !== 'submitting') setSubmissionState('idle')
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		if (submissionState === 'submitting') return

		setSubmissionState('submitting')
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					...formValues,
				}),
			})
			const data = await response.json()
			if (!response.ok || data.success !== true) {
				throw new Error(data.message || `Web3Forms request failed (${response.status})`)
			}

			setFormValues({ name: '', email: '', message: '' })
			setSubmissionState('success')
		} catch (error) {
			console.log('Web3Forms submission failed:', error)
			setSubmissionState('error')
		}
	}

	return (
		<div className="contact-panel" id="contact">
			<SectionHeading eyebrow="YOUR TURN">Let’s make<br />something matter</SectionHeading>
			<p className="contact-intro text-slate-700 dark:text-zinc-400">I’m always open to new opportunities, collaborations or just a friendly hello!</p>
			<div className="contact-methods">
				<a className="text-slate-800 dark:text-zinc-300" href="mailto:shivam231806@gmail.com"><span><Mail size={16} /></span><small className="text-slate-700 dark:text-zinc-400">EMAIL</small><strong className="text-slate-800 dark:text-zinc-300">shivam231806@gmail.com</strong><ArrowUpRight size={14} /></a>
				<a className="text-slate-800 dark:text-zinc-300" href="tel:+917601890338"><span><Phone size={16} /></span><small className="text-slate-700 dark:text-zinc-400">PHONE</small><strong className="text-slate-800 dark:text-zinc-300">+91 7601890338</strong><ArrowUpRight size={14} /></a>
				<div><span><MapPin size={16} /></span><small className="text-slate-700 dark:text-zinc-400">LOCATION</small><strong className="text-slate-800 dark:text-zinc-300">Asansol, West Bengal, India</strong></div>
			</div>
			<SocialLinks className="contact-socials" />
			<form className="contact-form bg-slate-50 border border-slate-200 shadow-sm dark:bg-white/5 dark:border-white/10 dark:shadow-none p-4" onSubmit={handleSubmit}>
				<div className="form-row"><label className="text-slate-700 dark:text-zinc-400">Your name<input name="name" type="text" placeholder="Jane Smith" autoComplete="name" value={formValues.name} onChange={handleInputChange} required /></label><label className="text-slate-700 dark:text-zinc-400">Email address<input name="email" type="email" placeholder="jane@company.com" autoComplete="email" value={formValues.email} onChange={handleInputChange} required /></label></div>
				<label className="text-slate-700 dark:text-zinc-400">What’s on your mind?<textarea name="message" placeholder="Tell me a little about it..." rows="3" value={formValues.message} onChange={handleInputChange} required /></label>
				<button className="button button-primary send-button bg-gradient-to-r from-blue-700 to-purple-700 text-white dark:from-blue-400 dark:to-purple-500 disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={submissionState === 'submitting'}>{submissionState === 'submitting' ? 'Sending...' : 'Send Message'} {submissionState === 'success' ? <Check size={15} /> : <Send size={15} />}</button>
				{submissionState === 'success' && <p className="text-sm text-emerald-700 dark:text-emerald-300" role="status" aria-live="polite">Message sent successfully!</p>}
				{submissionState === 'error' && <p className="text-xs text-slate-600 dark:text-zinc-400" role="alert">Unable to send your message. Please try again.</p>}
			</form>
			<div className="paper-plane anti-gravity" aria-hidden="true"><span className="plane-trail" /><Send size={38} /></div>
		</div>
	)
}

function Footer() {
	return <footer className="site-footer page-width"><a className="footer-brand" href="#home">SK<span>.</span></a><span className="text-slate-700 dark:text-zinc-400">DESIGNED WITH INTENTION · BUILT WITH CURIOSITY</span><a className="text-slate-800 dark:text-zinc-300" href="#home">BACK TO TOP ↑</a></footer>
}

function App() {
	const [theme, setTheme] = useState(() => {
		const savedTheme = window.localStorage.getItem('portfolio-theme')
		return savedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
	})

	useEffect(() => {
		window.localStorage.setItem('portfolio-theme', theme)
	}, [theme])

	return (
		<div className="portfolio-app min-h-screen" data-theme={theme}>
			<Navigation theme={theme} onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
			<main className="relative z-[1]">
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<ProjectsSection />
				<ResumeSection />
			</main>
			<Footer />
		</div>
	)
}

export default App
