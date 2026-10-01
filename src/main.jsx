import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download, Menu, X,
  Code2, Database, Server, Smartphone, Globe, Terminal, Sparkles,
  ChevronDown, ExternalLink, Send, BriefcaseBusiness, GraduationCap
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    featured: true,
    number: "01",
    title: "ChatSphere",
    subtitle: "Real-Time MERN Chat Application",
    description:
      "A full-stack real-time messaging platform built end-to-end with authentication, instant messaging, online/offline presence, delivery status, file sharing, replies, emojis and message management.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
    icon: "💬",
    github: "https://github.com/Yashika10219",
    demo: "#contact"
  },
  {
    number: "02",
    title: "Event Crowd Management",
    subtitle: "Admin Dashboard & Crowd Monitoring",
    description:
      "An event management system focused on the admin module for monitoring attendance, QR-based check-ins, live visitor counts, statistics and capacity alerts.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "REST API"],
    icon: "🎟️",
    github: "https://github.com/Yashika10219",
    demo: "#contact"
  },
  {
    number: "03",
    title: "E-Commerce Furniture",
    subtitle: "Responsive Shopping Website",
    description:
      "A responsive furniture website with clean product presentation, intuitive navigation and interactive front-end functionality.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    icon: "🛋️",
    github: "https://github.com/Yashika10219",
    demo: "#contact"
  },
  {
    number: "04",
    title: "Smoke Detector",
    subtitle: "Arduino-Based IoT System",
    description:
      "An IoT prototype that monitors smoke levels through a sensor and triggers an alert when the detected level crosses a defined threshold.",
    tags: ["Arduino", "IoT", "Sensors", "C/C++"],
    icon: "🔥",
    github: "https://github.com/Yashika10219",
    demo: "#contact"
  }
];

const skillGroups = [
  { title: "Frontend", icon: <Code2 />, items: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"] },
  { title: "Backend", icon: <Server />, items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT Authentication"] },
  { title: "Database & Tools", icon: <Database />, items: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman", "VS Code"] },
  { title: "Programming", icon: <Terminal />, items: ["Java", "Python Basics", "C Basics", "Data Structures"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <div className="noise" />
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">Y</span>
          <span>Yashika<span className="accent">.</span></span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Talk <ArrowUpRight size={16}/></a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <div className="hero-content reveal">
            <div className="profile-photo">
  <img src="/profile.jpg" alt="Yashika Singh" />
</div>
            <div className="eyebrow"><span className="pulse-dot" /> Available for opportunities</div>
            <h1>Building digital<br /><span className="gradient-text">experiences</span> that work.</h1>
            <p className="hero-copy">
              Hi, I'm <strong>Yashika Singh</strong> — a Full-Stack / MERN Developer
              who enjoys turning ideas into responsive, practical and user-friendly web applications.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">View My Work <ArrowUpRight size={18}/></a>
              <a href="#contact" className="btn btn-ghost">Get In Touch <Mail size={17}/></a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/Yashika10219" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </div>

          <div className="hero-visual reveal delay-1">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="code-card">
              <div className="code-top">
                <div className="window-dots"><i/><i/><i/></div>
                <span>developer.js</span>
              </div>
              <pre><code><span className="pink">const</span> developer = {"{"}
{"\n"}  name: <span className="green">"Yashika"</span>,
{"\n"}  role: <span className="green">"MERN Developer"</span>,
{"\n"}  skills: [
{"\n"}    <span className="green">"React"</span>, <span className="green">"Node.js"</span>,
{"\n"}    <span className="green">"MongoDB"</span>, <span className="green">"Socket.IO"</span>
{"\n"}  ],
{"\n"}  passion: <span className="green">"building"</span>
{"\n"}{"}"}</code></pre>
              <div className="code-status"><span /> open to build something great</div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={16}/> Clean Code</div>
            <div className="floating-chip chip-two"><Sparkles size={16}/> Problem Solver</div>
          </div>
          <a href="#about" className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={18}/></a>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading reveal">
            <span className="section-kicker">01 — About me</span>
            <h2>Curious mind.<br /><span className="muted">Practical builder.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-text reveal">
              <p className="lead">
                I'm a B.Tech Computer Science student and aspiring software developer focused on
                <span className="accent"> full-stack web development</span>.
              </p>
              <p>
                I like working across the frontend and backend — from creating clean interfaces
                with React to building APIs, authentication, databases and real-time features with Node.js.
              </p>
              <p>
                My strongest project so far is <strong>ChatSphere</strong>, a real-time MERN chat
                application that helped me understand how frontend, backend, database and Socket.IO
                work together as one system.
              </p>
              <a href="#contact" className="text-link">Let's connect <ArrowUpRight size={17}/></a>
            </div>
            <div className="about-cards reveal delay-1">
              <div className="mini-card"><Globe/><strong>Web Development</strong><span>Responsive & modern interfaces</span></div>
              <div className="mini-card"><Server/><strong>Backend Development</strong><span>APIs, auth & server logic</span></div>
              <div className="mini-card"><Smartphone/><strong>User Focused</strong><span>Simple and intuitive experiences</span></div>
              <div className="mini-card"><Sparkles/><strong>Always Learning</strong><span>Improving through projects</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading center reveal">
            <span className="section-kicker">02 — Skills</span>
            <h2>Tools I <span className="gradient-text">work with.</span></h2>
            <p>My current development toolkit, from UI to APIs and databases.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <div className="skill-card reveal" style={{"--delay": `${i * 80}ms`}} key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="skill-list">{group.items.map(x => <span key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading reveal">
            <span className="section-kicker">03 — Selected work</span>
            <h2>Projects that <span className="gradient-text">solve problems.</span></h2>
            <p>Built to learn, experiment and turn concepts into working applications.</p>
          </div>

          <div className="projects-list">
            {projects.map((project, i) => (
              <article className={`project-card ${project.featured ? "featured" : ""} reveal`} key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-icon">{project.icon}</div>
                <div className="project-main">
                  <div className="project-title-row">
                    <div>
                      <span className="project-subtitle">{project.subtitle}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
                      <a href={project.demo} aria-label="Open project"><ExternalLink size={19}/></a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading reveal">
            <span className="section-kicker">04 — Experience & Education</span>
            <h2>Where I've <span className="gradient-text">learned.</span></h2>
          </div>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-dot"><BriefcaseBusiness size={16}/></div>
              <div className="timeline-content">
                <span className="timeline-date">Internship</span>
                <h3>SkillSpardha</h3>
                <h4>MERN / Full-Stack Development</h4>
                <p>Worked on an Event Crowd Management System and contributed to the admin dashboard, live attendance monitoring, statistics and alert-related functionality.</p>
              </div>
            </div>
            <div className="timeline-item reveal">
              <div className="timeline-dot"><GraduationCap size={16}/></div>
              <div className="timeline-content">
                <span className="timeline-date">B.Tech — Computer Science</span>
                <h3>Shri Ram Murti Smarak College of Engineering Technology and Research</h3>
                <h4>Computer Science & Engineering</h4>
                <p>Building a strong foundation in programming, web development, databases, software engineering and problem solving through academic and personal projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="cta-box reveal">
            <div>
              <span className="section-kicker">05 — Let's build</span>
              <h2>Have an idea?<br /><span className="gradient-text">Let's talk.</span></h2>
              <p>I'm open to internships, entry-level opportunities and interesting development projects.</p>
            </div>
            <a href="#contact" className="btn btn-primary">Start a Conversation <ArrowUpRight size={18}/></a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading center reveal">
            <span className="section-kicker">06 — Contact</span>
            <h2>Let's connect.</h2>
            <p>Whether it's an opportunity, project or just a tech conversation.</p>
          </div>
          <div className="contact-grid">
            <a className="contact-card reveal" href="mailto:yashika@example.com">
              <span className="contact-icon"><Mail/></span>
              <span><small>Email</small><strong>yashikasinghyashika10@gmail.com</strong></span>
              <ArrowUpRight/>
            </a>
            <a className="contact-card reveal" href="https://www.linkedin.com/in/yashika-singh-0a6769343" target="_blank" rel="noreferrer">
              <span className="contact-icon"><Linkedin/></span>
              <span><small>LinkedIn</small><strong>Connect with me</strong></span>
              <ArrowUpRight/>
            </a>
            <a className="contact-card reveal" href="https://github.com/Yashika10219" target="_blank" rel="noreferrer">
              <span className="contact-icon"><Github/></span>
              <span><small>GitHub</small><strong>Yashika10219</strong></span>
              <ArrowUpRight/>
            </a>
          </div>
          <div className="location reveal"><MapPin size={16}/> Based in Uttar Pradesh, India</div>
        </section>
      </main>

      <footer>
        <div className="footer-brand"><span className="brand-mark">Y</span><span>Yashika<span className="accent">.</span></span></div>
        <p>Designed & built with React. © {new Date().getFullYear()} Yashika Singh.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
