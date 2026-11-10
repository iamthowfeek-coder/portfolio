// All portfolio content lives here. Save the file and the browser updates by itself.
export const profile = {
  name: "Kother Thowfeek J",
  role: "Full Stack Developer",
  tagline:
    "I love to work, solve problems and communicate clearly, and I build reliable web apps and AI-powered systems.",
  photo: "/profile.jpg",
  email: "iamthowfeek@gmail.com",
  github: "https://github.com/iamthowfeek-coder",
  linkedin: "https://www.linkedin.com/in/kother-thowfeek-1739b22b1",
  resume: "/resume.pdf",
};

export const projects = [
  {
    title: "YOLO Density-Aware Traffic Light System",
    desc: "AI web app that detects real-time vehicle density at intersections and adjusts signal timing, with priority for emergency vehicles. Includes login, video upload, live detection, an analytics dashboard and PDF reports.",
    tech: ["Python", "YOLO", "OpenCV", "Streamlit", "SQLite"],
    live: "",
    repo: "https://github.com/iamthowfeek-coder",
  },
  {
    title: "Online Food Delivery Website",
    desc: "Full-stack app where users browse menus, place orders and track deliveries in real time, with a dynamic cart, a responsive UI and REST APIs backed by MySQL.",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "MySQL"],
    live: "",
    repo: "https://github.com/iamthowfeek-coder",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "JavaScript (ES6+)"] },
  { group: "Web", items: ["HTML5", "CSS3", "React", "TypeScript", "Node.js", "Express.js", "Spring Boot", "REST APIs"] },
  { group: "Databases", items: ["MySQL", "SQL", "SQLite"] },
  { group: "AI & ML", items: ["YOLO", "OpenCV", "Deep Learning", "Streamlit"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vite"] },
];

export const certificates = [
  {
    title: "Agentic AI Certified Foundations Associate",
    issuer: "Oracle University",
    year: "2026",
    link: "/certificates/oracle-agentic-ai.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2026",
    link: "/certificates/cisco-cybersecurity.pdf",
  },
  {
    title: "Full Stack Web Development",
    issuer: "AstaSystech (Training)",
    year: "Internship",
    link: "#certificates",
  },
];
