import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.group} className="skills__group">
            <h3>{g.group}</h3>
            <div className="tags tags--lg">{g.items.map((i) => <span key={i}>{i}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
