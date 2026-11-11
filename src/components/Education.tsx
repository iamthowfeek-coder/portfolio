import { GraduationCap } from "lucide-react";
import { education } from "../data";

export default function Education() {
  return (
    <section id="education" className="section">
      <h2>Education</h2>
      <div className="edu">
        {education.map((e) => (
          <div key={e.degree} className="edu__item">
            <GraduationCap color="#e50914" />
            <div>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
              <p>{e.university}</p>
            </div>
            <span className="edu__years">{e.years}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
