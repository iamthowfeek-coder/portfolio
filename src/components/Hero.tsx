import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero__text"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="hero__role">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero__tag">{profile.tagline}</p>
        <div className="hero__cta">
          <a className="btn btn--red" href="#projects">View projects</a>
          <a className="btn btn--grey" href="#contact">Contact me</a>
        </div>
        <div className="hero__social">
          <a href={profile.github} aria-label="GitHub"><Github /></a>
          <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </motion.div>
      <motion.img
        className="hero__photo"
        src={profile.photo}
        alt={`${profile.name} profile`}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      />
    </section>
  );
}
