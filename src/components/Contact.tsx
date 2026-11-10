import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section section--center">
      <h2>Contact</h2>
      <p className="muted">Have a project or opportunity in mind? Send me a message.</p>
      <a className="btn btn--red" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
      <div className="hero__social">
        <a href={profile.github} aria-label="GitHub"><Github /></a>
        <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin /></a>
      </div>
    </section>
  );
}
