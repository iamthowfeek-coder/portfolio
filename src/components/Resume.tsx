import { Download } from "lucide-react";
import { profile } from "../data";

export default function Resume() {
  return (
    <section id="resume" className="section section--center">
      <h2>Resume</h2>
      <p className="muted">Download my resume for the full picture of my experience and education.</p>
      <a className="btn btn--red" href={profile.resume} download><Download size={18} /> Download resume</a>
    </section>
  );
}
