import { Award } from "lucide-react";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <h2>Certificates</h2>
      <div className="row">
        {certificates.map((c, i) => (
          <a key={i} href={c.link} className="cert">
            <Award color="#e50914" />
            <h3>{c.title}</h3>
            <p>{c.issuer} · {c.year}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
