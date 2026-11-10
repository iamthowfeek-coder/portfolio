import { useEffect, useState } from "react";
import { profile } from "../data";

const links = ["projects", "skills", "certificates", "resume", "contact"];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <a href="#home" className="logo">{profile.name}</a>
      <nav className="nav__links">
        {links.map((l) => (
          <a key={l} href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a>
        ))}
      </nav>
    </header>
  );
}
