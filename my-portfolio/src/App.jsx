import React from "react";

export default function App() {
  return (
    <div className="site">
      <header className="nav">
        <nav className="links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="avatar">
          <img src="./images/avatar.jpg" alt="Avatar" />
        </div>

        <div>
          <h1>Hi, I'm Thu Ya Hlang</h1>
          <p className="tagline">
            Frontend developer who loves building fast, accessible UIs.
          </p>
          <div className="cta">
            <a className="btn primary" href="mailto:thuyahlaing04@gmail.com">Email me</a>
            <a className="btn" href="https://github.com/HarryYin03" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="./images/Thu-Ya-Hlaing-CV.pdf">Download CV</a>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p className="muted">A few things I’m proud of.</p>
        </div>

        <div className="grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card">
              <div className="thumb" style={{ backgroundImage: `url(${p.image})` }} />
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="actions">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer">Code ↗</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-head">
          <h2>About</h2>
        </div>
        <p className="muted">
          Front-end focused developer with hands-on experience in building responsive web apps and dashboards using React and
          JavaScript. Comfortable with backend and cloud basics, and eager to learn in fast-paced start-up environments.
        </p>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <h2>Contact</h2>
        </div>
        <div className="cta">
          <a className="btn primary" href="mailto:thuyahlaing04@gamil.com">Email Me</a>
          <a className="btn" href="https://www.linkedin.com/in/thuya-hlaing-5308782a5" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Thu Ya Hlaing</p>
      </footer>
    </div>
  );
}

const PROJECTS = [
  {
    title: "Nest Finder",
    description: "Developed a CRUD-based rental platform with authentication and booking features.",
    tags: ["Node", "Express", "MongoDB"],
    live: "https://github.com/HarryYin03/nest_finder1",
    code: "https://github.com/HarryYin03/nest_finder1",
    image:
      "./images/project1.png",
  },
  {
    title: "First with GSAP",
    description: "Implemented smooth animations and transitions using GSAP to enhance user interaction",
    tags: ["JavaScript", "GSAP"],
    live: "https://gsap-first-project.vercel.app/",
    code: "https://github.com/HarryYin03/GSAP-First-project",
    image:
      "./images/project2.png",
  },
  {
    title: "Shopping Cart",
    description: "A React shopping cart app with dynamic item management and real-time total updates",
    tags: ["React", "JavaScript", "CSS"],
    live: "https://shopping-cart-flame-delta.vercel.app/",
    code: "https://github.com/HarryYin03/Shopping-cart",
    image:
      "./images/project3.png",
  },
  {
    title: "Movie Card",
    description: "A React app that displays movie cards with details fetched dynamically, showcasing clean UI and component reusability.",
    tags: ["React", "JavaScript", "API"],
    live: "https://movie-card-x6c2.vercel.app/",
    code: "https://github.com/HarryYin03/Movie-card",
    image:
      "./images/project4.png",
  },
  {
    title: "Pawsitive",
    description: "A pet adoption database app for managing animal records, built to streamline searching and organizing pet profiles.",
    tags: ["MYSQL", "PHP", "Database"],
    live: "https://lucas1792003.github.io/Pawsitive/",
    code: "https://github.com/HarryYin03/Pawsitive_Database",
    image:
      "./images/project5.png",
  },
  
  
];
