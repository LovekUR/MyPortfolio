import { useEffect, useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check,
  Code2, CodeXml, ExternalLink, Github, GraduationCap, Linkedin, Mail,
  Menu, MousePointer2, Sparkles, Terminal, X, Zap
} from 'lucide-react'

const profile = {
  name: 'Lovepreet Kaur',
  location: 'Punjab, India',
  email: 'lovepkaur001@gmail.com',
  phone: '+91 9115545393',
  github: 'https://github.com/LovekUR',
  linkedin: 'https://www.linkedin.com/in/lovepreetkaur004/',
  portfolio: 'https://lovekur.github.io/portfolio/',
  gmailCompose: 'https://mail.google.com/mail/?view=cm&fs=1&to=lovepkaur001%40gmail.com&su=Hello%20Lovepreet',
}

const projects = [
  {
    number: '01', category: 'WEB APP · ROLE-BASED WORKFLOWS',
    title: 'TransTrack Pro', subtitle: 'Truck Management System',
    description: 'A role-aware logistics experience designed around the different needs of admins, managers, and drivers.',
    tags: ['React', 'Firebase Auth', 'Cloud Firestore'],
    accent: 'lime', type: 'transport',
    status: 'COMPLETED',
    github: 'https://github.com/LovekUR/Truck-_Management',
    details: 'Built separate interfaces and login flows for Admin, Manager, and Driver roles. Firebase Authentication and Cloud Firestore support identity and application data.',
  },
  {
    number: '02', category: 'CAMPUS TECH · MULTI-PAGE UI',
    title: 'CampusOS', subtitle: 'Smart Campus Management System', status: 'ONGOING',
    description: 'A connected campus dashboard concept for keeping everyday student information in one place.',
    tags: ['React', 'Tailwind CSS', 'React Router'],
    accent: 'violet', type: 'campus',
    details: 'Organized schedules, results, fees, messages, and campus information into reusable components and navigable page sections. Selected frontend interactions use browser local storage.',
  },
  {
    number: '03', category: 'E-COMMERCE · UI PRACTICE',
    title: 'Style Studio', subtitle: 'Fashion Store UI / Myntra Clone',
    description: 'A fashion-shopping interface exploring product-led layouts, visual hierarchy, and responsive presentation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'pink', type: 'fashion',
    details: 'Practised product presentation, shopping-style navigation, responsive layout, and familiar e-commerce interface patterns. This is a learning project inspired by Myntra, not an official Myntra product.',
  },
  {
    number: '04', category: 'E-COMMERCE · INTERACTIVE BUILD',
    title: 'Functional Myntra Clone', subtitle: 'Interactive fashion shopping UI', status: 'ONGOING',
    description: 'A more interactive Myntra-inspired shopping experience focused on product browsing and shopping flows.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'pink', type: 'fashion',
    details: 'Listed on LinkedIn as a separate project from the static Myntra homepage clone. Explore the project entry on LinkedIn for the latest description and any available demo or repository links.',
  },
  {
    number: '05', category: 'JAVASCRIPT · MINI GAME',
    title: 'Bat, Ball & Stump', subtitle: 'Browser game', status: 'COMPLETED',
    description: 'A small interactive game project built to practise JavaScript logic and user interactions.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'lime', type: 'game',
    details: 'A beginner-friendly browser game listed on LinkedIn. This portfolio entry describes the project at a high level; use the LinkedIn profile to locate the original project/demo if available.',
  },
  {
    number: '06', category: 'JAVASCRIPT · UTILITY',
    title: 'Simple Calculator', subtitle: 'Interactive calculator', status: 'COMPLETED',
    description: 'A compact utility project for practising input handling, calculations, and interface states.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'violet', type: 'calculator',
    details: 'A simple calculator project listed on LinkedIn. This portfolio entry does not claim additional features that were not specified in the public project listing.',
  },
  {
    number: '07', category: 'JAVASCRIPT · PRODUCTIVITY',
    title: 'To-Do App', subtitle: 'Task list interface', status: 'COMPLETED',
    description: 'A small productivity app concept focused on organizing everyday tasks in a clear interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    accent: 'blue', type: 'todo',
    details: 'A To-Do app is listed among your LinkedIn projects. Use your LinkedIn profile or GitHub profile to find the original implementation and its current status.',
  },
  {
    number: '08', category: 'IOT CONCEPT · SAFETY',
    title: 'Doctor Safety', subtitle: 'Emergency Alert System', status: 'ONGOING',
    description: 'An IoT-based concept focused on emergency detection, alert generation, and notification workflows.',
    tags: ['C++', 'IoT', 'Logic Design'],
    accent: 'blue', type: 'safety',
    details: 'Worked on software logic for emergency detection and alert workflows with a focus on timely notifications and doctor safety.',
  },
]

const skills = [
  { name: 'React.js', level: 'Building', width: '82%' },
  { name: 'JavaScript', level: 'Growing', width: '72%' },
  { name: 'Tailwind CSS', level: 'Building', width: '84%' },
  { name: 'HTML & CSS', level: 'Confident', width: '90%' },
  { name: 'Firebase', level: 'Hands-on', width: '65%' },
  { name: 'Git & GitHub', level: 'Hands-on', width: '73%' },
]

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number} /</span><span>{children}</span><i /></div>
}

function ProjectVisual({ type }) {
  if (type === 'transport') return <div className="visual transport-visual"><div className="visual-top"><span>FLEET MANAGEMENT</span><span className="live-dot">TRACKING</span></div><div className="route-line"><span/><span/><span/></div><div className="truck-shape"><div className="truck-cab"/><div className="truck-body"/><i/><i/></div><div className="visual-stats"><b>FLEET <small>TRIP MANAGEMENT</small></b><b>GPS <small>ROUTE TRACKING</small></b></div><div className="visual-grid"/></div>
  if (type === 'campus') return <div className="visual campus-visual"><div className="campus-orb orb-one"/><div className="campus-orb orb-two"/><div className="campus-window"><div className="window-bar"><i/><i/><i/></div><div className="window-content"><span className="fake-side"/><div className="fake-main"><b>Student Dashboard</b><span/><span/><div className="fake-cards"><i/><i/><i/></div></div></div></div><div className="float-chip">CAMPUS · STUDENTS · SCHEDULES</div></div>
  if (type === 'fashion') return <div className="visual fashion-visual"><div className="fashion-sun"/><div className="fashion-copy"><span>FASHION / COLLECTION</span><b>STYLE<br/>YOUR<br/><em>WORLD.</em></b><i>DISCOVER THE LOOK ↗</i></div><div className="fashion-silhouette"><div className="sil-head"/><div className="sil-body"/><div className="sil-leg left"/><div className="sil-leg right"/></div><span className="fashion-side">FASHION / STORE</span></div>
  if (type === 'game') return <div className="visual game-visual"><div className="game-label">BAT · BALL · STUMP</div><div className="game-score">YOUR TURN<span>01 / PLAY</span></div><div className="game-equipment"><div className="game-bat">BAT</div><div className="game-ball">●</div><div className="game-stumps"><i/><i/><i/></div></div><div className="game-footer">A JAVASCRIPT MINI GAME</div></div>
  if (type === 'calculator') return <div className="visual calculator-visual"><div className="calculator-window"><div className="calculator-header"><span>CALCULATOR</span><span>● ● ●</span></div><div className="calculator-display"><small>RESULT</small><b>123 + 456</b><strong>579</strong></div><div className="calculator-keys">{['AC','±','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0','.','='].map((key,index)=><span key={key+index} className={['÷','×','−','+','='].includes(key)?'operator-key':''}>{key}</span>)}</div></div></div>
  if (type === 'todo') return <div className="visual todo-visual"><div className="todo-heading"><span>MY WORKSPACE</span><b>Today's Tasks<span>.</span></b><small>PLAN · TRACK · COMPLETE</small></div><div className="todo-list"><div><i className="task-checked">✓</i><span>Review project</span><small>DONE</small></div><div><i className="task-checked">✓</i><span>Practise JavaScript</span><small>DONE</small></div><div><i/><span>Build a new feature</span><small>TODO</small></div><div><i/><span>Review daily goals</span><small>TODO</small></div></div><div className="todo-progress"><span/></div><p className="todo-caption">SMALL STEPS. REAL PROGRESS.</p></div>
  return <div className="visual safety-visual"><div className="pulse-ring ring-a"/><div className="pulse-ring ring-b"/><div className="shield-icon">✚</div><div className="safety-tag tag-one">EMERGENCY ALERTS</div><div className="safety-tag tag-two">DOCTOR SAFETY</div><div className="safety-bottom"><span>SAFETY PROTOCOL</span><b>ALERT<span>_</span></b></div></div>
}

function ProjectCard({ project, onOpen }) {
  return <article className={`project-card ${project.accent}`} onClick={() => { onOpen(project); }} role="button" tabIndex={0} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onOpen(project) } }}> 
    <div className="project-visual-wrap"><ProjectVisual type={project.type}/><span className="project-number">{project.number}</span>{project.status === 'ONGOING' && <span className="project-status"><i/> ONGOING</span>}</div>
    <div className="project-info">
      <p className="eyebrow">{project.category}</p>
      <h3>{project.title}<span>{project.subtitle}</span></h3>
      <p className="project-desc">{project.description}</p>
      <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="project-actions">
        <button type="button" className="text-action" onClick={event => { event.stopPropagation(); onOpen(project) }}>Explore project <ArrowUpRight size={16}/></button>
        {project.github && <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label="Open project GitHub" onClick={event => event.stopPropagation()}><Github size={17}/></a>}
      </div>
    </div>
  </article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [copied, setCopied] = useState(false)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [kittyMessage, setKittyMessage] = useState('Psst… welcome! Explore Lovepreet’s little universe ✨')
  const [showKitties, setShowKitties] = useState(true)
  const headlines = ['FRONTEND DEVELOPER · COMPUTER SCIENCE UNDERGRAD', 'AI-POWERED BUILDER · HEAVY AI WORKFLOW USER', 'IDEA → PROMPT → PROTOTYPE → POLISHED UI', 'BUILDING WEBSITES WITH CURIOSITY + AI']
  useEffect(() => { const timer = window.setInterval(() => setHeadlineIndex(i => (i + 1) % headlines.length), 75000); return () => window.clearInterval(timer) }, [])
  useEffect(() => { const move = event => { document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`); document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`) }; window.addEventListener('pointermove', move, { passive: true }); return () => window.removeEventListener('pointermove', move) }, [])
  useEffect(() => { const update = () => { const section = [...document.querySelectorAll('#work, #about, #toolkit, #contact')].find(el => { const r = el.getBoundingClientRect(); return r.top < window.innerHeight * .55 && r.bottom > window.innerHeight * .25 }); if (section?.id === 'work') setKittyMessage('Do you like Lovepreet’s projects? Tap a card to explore! 🐾'); else if (section?.id === 'contact') setKittyMessage('You found the mail zone! Say hi to Lovepreet 💌'); else if (section?.id === 'toolkit') setKittyMessage('AI is my creative sidekick. What would you build? ✨'); else if (section?.id === 'about') setKittyMessage('A curious human, two cats, and lots of code. 🐈') }; window.addEventListener('scroll', update, { passive: true }); update(); return () => window.removeEventListener('scroll', update) }, [])
  const nav = [['Work', '#work'], ['About', '#about'], ['Toolkit', '#toolkit'], ['Contact', '#contact']]
  const copyEmail = async () => {
    let didCopy = false
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(profile.email)
        didCopy = true
      }
    } catch { /* Use the legacy fallback below. */ }
    if (!didCopy) {
      const field = document.createElement('textarea')
      field.value = profile.email
      field.setAttribute('readonly', '')
      field.style.position = 'fixed'
      field.style.opacity = '0'
      document.body.appendChild(field)
      field.select()
      try { didCopy = document.execCommand('copy') } catch { didCopy = false }
      field.remove()
    }
    setCopied(didCopy)
    if (didCopy) window.setTimeout(() => setCopied(false), 2200)
  }

  return <div className="site-shell">
    <div className="noise" aria-hidden="true"/>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Lovepreet Kaur home"><span className="brand-mark">L<span>K</span></span><span>lovepreet<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>{nav.map(([label, href], i) => <a key={label} href={href} onClick={() => setMenuOpen(false)}><span>0{i+1}</span>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-grid" aria-hidden="true"/>
        <div className="hero-copy">
          <div className="availability"><span className="status-pulse"/> OPEN TO OPPORTUNITIES <span className="availability-line"/></div>
          <p className="hero-kicker hero-kicker-rotating" key={headlineIndex}>{headlines[headlineIndex]} <span>✳</span></p>
          <h1>Building digital<br/>things with <span className="headline-accent">purpose.</span><span className="headline-period">_</span></h1>
          <p className="hero-intro">Hey, I’m <strong>Lovepreet</strong> — a developer who enjoys turning ideas into clean, responsive, and thoughtful web experiences. Curious by nature. Pixel-aware by choice.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><i/> BASED IN {profile.location.toUpperCase()}</span><span>GRADUATING 2027</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract animated neon geometric artwork">
          <div className="art-coordinate coord-a">30.7046° N</div><div className="art-coordinate coord-b">76.7179° E</div>
          <div className="art-orbit orbit-outer"/><div className="art-orbit orbit-mid"/><div className="art-orbit orbit-inner"/>
          <div className="art-core"><div className="core-glyph">L<span>K</span></div><span className="core-caption">CREATIVE<br/>DEVELOPER</span></div>
          <div className="art-node node-a"><Code2 size={19}/></div><div className="art-node node-b"><Zap size={18}/></div><div className="art-node node-c"><MousePointer2 size={19}/></div>
          <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div><div className="art-ring-label">IDEATE · BUILD · REFINE · REPEAT</div>
          <div className="art-status"><span className="status-pulse"/> SYSTEM ONLINE <b>v.2026</b></div>
        </div>
        <div className="hero-bottomline"><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span><span>DESIGNED WITH CURIOSITY <Sparkles size={14}/></span></div>
      </section>

      <section className="ticker" aria-label="Areas of interest"><div className="ticker-track">{Array.from({length: 2}, (_, i) => <span key={i}>REACT.JS <i>✳</i> INTERFACE DESIGN <i>✳</i> CREATIVE CODING <i>✳</i> RESPONSIVE UI <i>✳</i> ALWAYS LEARNING <i>✳</i></span>)}</div></section>

      <section className="section-wrap work-section" id="work">
        <SectionLabel number="01">SELECTED WORK</SectionLabel>
        <div className="section-heading-row"><div><h2>Projects with a<br/><span>purpose.</span></h2></div><p className="section-intro">A few things I’ve built, explored, and learned from. Each project is a new chance to make something a little better.</p></div>
        <div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} onOpen={project => { setActiveProject(project); setKittyMessage(`Do you like ${project.title}? I can tell you about it! 🐾`) }}/>)}</div>
        <div className="work-footer"><span>MORE EXPERIMENTS, MORE LEARNING.</span><a href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="about-section" id="about"><div className="section-wrap about-layout">
        <div className="about-left"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel><h2>Thoughtful by<br/>design. <span>Curious</span><br/>by default.</h2><div className="about-stamp"><span>LEARNING</span><b>IN<br/>PUBLIC<span>↗</span></b><i>EST. 2023</i></div></div>
        <div className="about-right"><p className="about-lead">I’m a Computer Science student at Chandigarh University, graduating in 2027, building my way toward a career in frontend development.</p><p>I like the intersection of logic and visual detail — where a component is reusable, an interface feels intuitive, and a small interaction makes the whole experience click. Through projects and internship work, I’ve explored React, Tailwind CSS, Firebase, and the craft of building for real screens and real people.</p><p>Still learning. Still shipping. Always asking how it can work better.</p>
          <div className="timeline"><div className="timeline-item"><span className="timeline-year">2023 — 2027</span><div><b>B.E. Computer Science & Engineering</b><span>Chandigarh University · Mohali, Punjab</span></div><span className="timeline-mark"><GraduationCap size={17}/></span></div><div className="timeline-item"><span className="timeline-year">MAY 2025</span><div><b>Frontend Development Intern</b><span>Zoro Innovations · Virtual</span></div><span className="timeline-mark"><BriefcaseBusiness size={17}/></span></div><div className="timeline-item"><span className="timeline-year">ONGOING</span><div><b>Wipro TalentNext</b><span>Python, data science & ML fundamentals</span></div><span className="timeline-mark"><CodeXml size={17}/></span></div></div>
        </div>
      </div></section>

      <section className="section-wrap toolkit-section" id="toolkit">
        <SectionLabel number="03">THE TOOLKIT</SectionLabel><div className="section-heading-row toolkit-heading"><h2>Tools I use.<br/><span>Skills I grow.</span></h2><p className="section-intro">My current toolkit is a work in progress — built through hands-on projects, curiosity, and a lot of practice.</p></div>
        <div className="toolkit-layout"><div className="skill-panel"><div className="panel-top"><span><Terminal size={17}/> CURRENT STACK</span><span className="panel-live"><i/> LEARNING MODE</span></div>{skills.map((skill, i) => <div className="skill-row" key={skill.name}><div className="skill-name"><span className="skill-index">0{i+1}</span><b>{skill.name}</b><span>{skill.level}</span></div><div className="skill-track"><i style={{width: skill.width}}/></div></div>)}</div>
          <div className="toolkit-side"><div className="code-card"><div className="code-card-head"><span>hello-world.jsx</span><span>● ● ●</span></div><pre><code><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}{'\n'}  name: <span className="code-green">'Lovepreet'</span>,{'\n'}  mindset: <span className="code-green">'keep learning'</span>,{'\n'}  focus: <span className="code-green">'frontend'</span>,{'\n'}  coffee: <span className="code-orange">true</span>,{'\n'}{'}'}{'\n\n'}<span className="code-purple">while</span> (curious) {'{'}{'\n'}  buildSomething();{'\n'}  learnSomething();{'\n'}{'}'}<span className="cursor-blink">▌</span></code></pre></div><div className="learning-note"><Sparkles size={18}/><div><b>Currently exploring</b><span>UI/UX fundamentals, Figma, and better ways to build accessible interfaces.</span></div></div></div></div>
        <div className="tool-pills"><span>PYTHON <i>·</i> FUNDAMENTALS</span><span>C++ <i>·</i> FUNDAMENTALS</span><span>SQL <i>·</i> BASICS</span><span>REACT ROUTER</span><span>GIT / GITHUB</span><span>FIREBASE AUTH</span></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-glow"/><div className="section-wrap contact-inner"><SectionLabel number="04">LET'S CONNECT</SectionLabel><p className="contact-eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</p><h2>Let’s make<br/>something <span>matter.</span></h2><p className="contact-copy">I’m interested in junior frontend opportunities, collaborative projects, and connecting with people who love building useful things.</p><div className="contact-actions"><a className="button button-primary" href={profile.gmailCompose} target="_blank" rel="noopener noreferrer" onClick={() => setKittyMessage("Hi from the mail zone! Thanks for saying hello 💌")}>Say hello <ArrowUpRight size={17}/></a><button type="button" className="button button-ghost" onClick={copyEmail}>{copied ? <Check size={16}/> : <Mail size={16}/>} {copied ? 'Email copied!' : 'Copy email'}</button></div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={13}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={13}/></a><a href={profile.gmailCompose} target="_blank" rel="noreferrer"><Mail size={17}/> Email <ArrowUpRight size={13}/></a></div></div></section>
    </main>

    <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">L<span>K</span></span><span>lovepreet<span className="brand-dot">.</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY <span className="footer-heart">✳</span></span><a href="#home">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} LOVEPreet KAUR</span></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}><button type="button" className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X/></button><p className="eyebrow">{activeProject.category}</p><h2 id="modal-title">{activeProject.title}</h2><p className="modal-subtitle">{activeProject.subtitle}</p><p className="modal-description">{activeProject.details}</p><div className="tag-list">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="modal-actions">{activeProject.status === 'ONGOING' ? <span className="project-modal-status">✦ IN PROGRESS · DETAILS ONLY</span> : activeProject.github ? <a className="button button-primary" href={activeProject.github} target="_blank" rel="noreferrer">View source <ExternalLink size={16}/></a> : <a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">Browse GitHub <Github size={16}/></a>}<a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn project list <ExternalLink size={15}/></a><button type="button" className="button button-ghost" onClick={() => setActiveProject(null)}>Close <X size={15}/></button></div><p className="modal-note"><Sparkles size={14}/> Project descriptions reflect the work and concepts listed in my resume.</p></section></div>}

    {showKitties && <aside className="kitty-companions" aria-label="Interactive cat companions">
      <div className="kitty-speech" key={kittyMessage}>{kittyMessage}</div>
      <button className="kitty kitty-one" aria-label="Ask the white cat for a message" onClick={() => setKittyMessage(activeProject ? `Want to know more about ${activeProject.title}? This little cat says: open the project card! 🐾` : 'Meow! Click a project card and I’ll tell you about it. 🐾')}><span className="cat-ear ear-left"/><span className="cat-ear ear-right"/><span className="cat-face"><i className="cat-eye eye-left"/><i className="cat-eye eye-right"/><i className="cat-nose"/><i className="cat-mouth"/><i className="cat-whisker whisker-left"/><i className="cat-whisker whisker-right"/></span><span className="cat-tail"/><span className="cat-body"/></button>
      <button className="kitty kitty-two" aria-label="Ask the second white cat for a message" onClick={() => setKittyMessage(document.querySelector('#contact')?.getBoundingClientRect().top < window.innerHeight ? 'The email button opens a message to Lovepreet. Go on, say hi! 💌' : 'We’re your tiny coding guides! Scroll to see the projects ✨')}><span className="cat-ear ear-left"/><span className="cat-ear ear-right"/><span className="cat-face"><i className="cat-eye eye-left"/><i className="cat-eye eye-right"/><i className="cat-nose"/><i className="cat-mouth"/><i className="cat-whisker whisker-left"/><i className="cat-whisker whisker-right"/></span><span className="cat-tail"/><span className="cat-body"/></button>
      <button className="kitty-hide" onClick={() => setShowKitties(false)} aria-label="Hide cats">×</button>
    </aside>}
    {!showKitties && <button className="kitty-reopen" onClick={() => setShowKitties(true)} aria-label="Bring the cats back">🐾</button>}

  </div>
}

export default App
