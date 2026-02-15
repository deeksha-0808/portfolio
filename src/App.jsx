import { useState } from "react";
import "./App.css";

const DATA = {
  name: "Deeksha",
  title: "Computer Science & Engineering Student",
  bio: "Computer Science and Engineering student with a keen interest in technology and continuous learning.\n\nFocused on building strong technical foundations through projects and hands-on experience, while seeking opportunities to grow and contribute meaningfully in the tech industry.",
  email: "deekshasatish038@gmail.com",
  linkedin: "https://www.linkedin.com/in/deekshasatish038/",
  github: "https://github.com/deeksha-0808",
  photo: "/photo.jpeg",

  education: [
    {
      degree: "Bachelor of Engineering (BE)",
      school: "K S Institute of Technology",
      date: "2022 - 2026",
      desc: "Computer Science and Engineering",
    },
    {
      degree: "Pre-University",
      school: "Sri Kumaran Composite Junior College - PU College",
      date: "2020 - 2022",
      desc: "PCM with Computer Science.",
    },
       {
      degree: "SSLC",
      school: "Sri Kumaran Children Home",
      date: "2019 - 2020",
    },
  ],

  experience: [
    {
      role: "Intern",
      company: "CSIR-NAL",
      date: "Jan 2026 – May 2026",
      desc: "Part of a team working on flight simulation project in Flight Simulation and Controls Division. Contributing to a map-based aircraft route and position visualization module using Qt/QML, C++ and JavaScript under guidance.",
    },
    {
      role: "Business Analytics Intern",
      company: "Plasmid Innovation",
      date: "Dec 2024 – Feb 2025",
      desc: "Worked on a project in Business Analytics to explore a field beyond core Computer Science curriculum. Gained exposure to how data is used to support business decisions.",
    },
    {
      role: "Web Development Intern",
      company: "Prinston Smart Engineers",
      date: "Mar 2024 – Sep 2024",
      desc: "Contributed to web development projects, building and maintaining frontend interfaces using modern web technologies.",
    },
  ],
  achievements: [
    {
      title: "Business Analytics Internship Certificate",
      org: "PLASMID INNOVATION",
      date: "Dec 2024",
      desc: "Completed the Business Analytics Intership and also obtained a Letter of Recommendation.",
    },
    {
      title: "Web Development Intership Certificate",
      org: "Prinston Smart Engineers",
      date: "2024",
      desc: "Completed the Web development Internship",
    },
     {
      title: "Research Paper Published – IJRCCE",
      org: "International Journal of Innovative Research in Computer and Communication Engineering (IJRCCE)",
      date: "2024",
      desc: "Successfully published a research paper in IJRCCE, an internationally recognized journal in the field of Computer and Communication Engineering.",
    },
      {
      title: "Research Paper Published – IJRTI",
      org: "International Journal for Research Trends and Innovation",
      date: "2024",
      desc: "Successfully published a research paper in IJRTI, an internationally recognized journal for Research Trends and Innovation.",
    },
  ],
};

// =====================
// NAVBAR
// =====================
function Navbar({ active, setActive }) {
  const tabs = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
  ];
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>D</span>S
      </div>
      <div className="nav-links">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-btn ${active === tab.id ? "active" : ""}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// =====================
// HOME / HERO
// =====================
function Home({ setActive }) {
  return (
    <div className="hero">
      <div className="hero-photo-wrap">
        <div className="hero-photo-ring">
          <div className="hero-photo">
            <img
              src={DATA.photo}
              alt="Deeksha"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerText = "👤";
              }}
            />
          </div>
        </div>
      </div>

      <div className="hero-greeting">Hello, I'm</div>
      <div className="hero-name">
        <span>Deeksha</span> Satish
      </div>
      <div className="hero-title">{DATA.title}</div>
      <div className="hero-bio">{DATA.bio}</div>

      <div className="hero-btns">
  <a href={`mailto:${DATA.email}`} className="btn-primary">
    📧 Contact Me
  </a>
  <a href="/cv.pdf" download className="btn-secondary">
    📄 Download CV
  </a>
  <a href={DATA.github} target="_blank" className="btn-secondary">
    GitHub
  </a>
  <a href={DATA.linkedin} target="_blank" className="btn-secondary">
    LinkedIn
  </a>
</div>

      <div className="scroll-hint">
        <div className="scroll-line"></div>
        Scroll Down
      </div>
    </div>
  );
}

// =====================
// CARD
// =====================
function Card({ item }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-title">
          {item.title || item.degree || item.role}
        </div>
        <div className="card-date">{item.date}</div>
      </div>
      <div className="card-subtitle">
        {item.org || item.school || item.company}
      </div>
      {item.desc && <div className="card-desc">{item.desc}</div>}
      {item.percentage && (
        <div className="card-percentage">🎯 Score: {item.percentage}</div>
      )}
    </div>
  );
}

// =====================
// INNER PAGE
// =====================
function InnerPage({ tag, title, items }) {
  return (
    <div className="inner-page">
      <div className="page-header">
        <div className="page-tag">{tag}</div>
        <div className="page-title">{title}</div>
      </div>
      {items.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
}

// =====================
// MAIN APP
// =====================
export default function App() {
  const [active, setActive] = useState("home");

  return (
    <div>
      <Navbar active={active} setActive={setActive} />

      {active === "home" && <Home setActive={setActive} />}

      {active === "education" && (
        <InnerPage
          tag="Academic Background"
          title="Education"
          items={DATA.education}
        />
      )}

      {active === "experience" && (
        <InnerPage
          tag="Work History"
          title="Experience"
          items={DATA.experience}
        />
      )}

      {active === "achievements" && (
        <InnerPage
          tag="Certificates & Awards"
          title="Achievements"
          items={DATA.achievements}
        />
      )}
    </div>
  );
}