import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((p) => (
          <motion.article key={p.title} className="card" whileHover={{ scale: 1.05, y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
            <div className="card__thumb">{p.title[0]}</div>
            <div className="card__body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="card__links">
                {p.live && <a href={p.live}><ExternalLink size={16} /> Live</a>}
                {p.repo && <a href={p.repo}><Github size={16} /> Code</a>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
