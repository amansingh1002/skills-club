// import React, { useState } from "react";
// import { ArrowRight, Check, Menu, Sparkles, Target, Brain, CalendarDays, X } from "lucide-react";

// const tracks = [
//   {
//     icon: Target,
//     number: "01",
//     title: "Niche Clarity",
//     text: "Turn your interests and strengths into a focused direction you can act on."
//   },
//   {
//     icon: Brain,
//     number: "02",
//     title: "Personality Test",
//     text: "Understand your working style, natural strengths and learning preferences."
//   },
//   {
//     icon: CalendarDays,
//     number: "03",
//     title: "15-Day Curriculum",
//     text: "Build momentum with a practical, guided learning plan designed for graduates."
//   }
// ];

// const qualifications = ["BA", "BSc", "BCom", "MA", "MSc", "MCom"];

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [form, setForm] = useState({ name: "", email: "", qualification: "BA", interest: "" });
//   const [status, setStatus] = useState("");

//   const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

//   const submit = async (event) => {
//     event.preventDefault();
//     setStatus("Submitting…");

//     try {
//       const response = await fetch("http://localhost:5001/api/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form)
//       });
//       const data = await response.json();
//       setStatus(data.message || "Registration received.");
//       if (response.ok || response.status === 202) {
//         setForm({ name: "", email: "", qualification: "BA", interest: "" });
//       }
//     } catch {
//       setStatus("Demo UI is ready. Start the MERN API on port 5000 to submit.");
//     }
//   };

//   return (
//     <div className="page">
//       <div className="announcement">
//         <Sparkles size={15} />
//         <span>Skills Club powered by MyProFunnels Ventures</span>
//         <span className="announcement-dot">•</span>
//         <span>Live learning for graduates</span>
//       </div>

//       <header className="nav-shell">
//         <nav className="nav">
//           <a href="#home" className="brand">
//             <span className="brand-mark">S</span>
//             <span>Skills<span>Club</span></span>
//           </a>

//           <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//             <a href="#program" onClick={() => setMenuOpen(false)}>Program</a>
//             <a href="#curriculum" onClick={() => setMenuOpen(false)}>Curriculum</a>
//             <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
//             <a href="#register" className="nav-cta" onClick={() => setMenuOpen(false)}>Join session <ArrowRight size={16} /></a>
//           </div>

//           <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen((v) => !v)}>
//             {menuOpen ? <X /> : <Menu />}
//           </button>
//         </nav>
//       </header>

//       <main id="home">
//         <section className="hero">
//           <div className="hero-copy">
//             <div className="eyebrow"><span></span> LIVE LEARNING SESSION</div>
//             <h1>Find your direction.<br /><em>Build your edge.</em></h1>
//             <p className="hero-lead">
//               A focused learning experience for BA, BSc, BCom, MA, MSc and MCom graduates who want clarity before their next move.
//             </p>

//             <div className="hero-actions">
//               <a className="primary-btn" href="#register">Take the first step <ArrowRight size={18} /></a>
//               <a className="text-link" href="#program">Explore the program</a>
//             </div>

//             <div className="proof-row">
//               <div className="avatar-stack">
//                 <span>A</span><span>R</span><span>N</span><span>+</span>
//               </div>
//               <div><strong>Built for ambitious graduates</strong><small>Clarity • Personality • Skills</small></div>
//             </div>
//           </div>

//           <div className="hero-card">
//             <div className="hero-orbit orbit-one"></div>
//             <div className="hero-orbit orbit-two"></div>
//             <div className="session-card">
//               <div className="session-top">
//                 <span className="live-dot">LIVE</span>
//                 <span>15 DAY JOURNEY</span>
//               </div>
//               <div className="session-icon"><Sparkles /></div>
//               <h2>Skills Club</h2>
//               <p>Discover what fits you. Learn what moves you forward.</p>
//               <div className="mini-progress">
//                 <div><span>Day 01</span><span>Clarity starts here</span></div>
//                 <div className="progress-line"><i></i></div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="ticker">
//           {qualifications.map((item) => <span key={item}>{item} <b>•</b></span>)}
//           <span>Graduate learning <b>•</b></span>
//           <span>Career clarity <b>•</b></span>
//         </section>

//         <section className="section" id="program">
//           <div className="section-heading">
//             <div>
//               <div className="eyebrow"><span></span> WHAT YOU GET</div>
//               <h2>Less confusion.<br /><em>More direction.</em></h2>
//             </div>
//             <p>Designed as a practical starting point, the session connects self-discovery with a simple action plan.</p>
//           </div>

//           <div className="feature-grid">
//             {tracks.map(({ icon: Icon, number, title, text }) => (
//               <article className="feature-card" key={number}>
//                 <div className="feature-number">{number}</div>
//                 <div className="feature-icon"><Icon size={22} /></div>
//                 <h3>{title}</h3>
//                 <p>{text}</p>
//                 <a href="#register">Learn more <ArrowRight size={15} /></a>
//               </article>
//             ))}
//           </div>
//         </section>

//         <section className="split-section" id="curriculum">
//           <div className="split-visual">
//             <div className="day-card large"><small>YOUR 15-DAY MAP</small><strong>01</strong><span>Discover</span></div>
//             <div className="day-card small top"><strong>07</strong><span>Build</span></div>
//             <div className="day-card small bottom"><strong>15</strong><span>Launch</span></div>
//           </div>
//           <div className="split-copy">
//             <div className="eyebrow"><span></span> THE CURRICULUM</div>
//             <h2>A simple path from <em>“what next?”</em> to action.</h2>
//             <p>The 15-day learning curriculum gives you a sequence to follow instead of another pile of information.</p>
//             <ul>
//               <li><Check size={18} /> Clarify your interests and strengths</li>
//               <li><Check size={18} /> Understand your personality and working style</li>
//               <li><Check size={18} /> Explore a practical learning direction</li>
//               <li><Check size={18} /> Turn insights into your next 15 days</li>
//             </ul>
//             <a className="primary-btn" href="#register">Get started <ArrowRight size={18} /></a>
//           </div>
//         </section>

//         <section className="register-section" id="register">
//           <div className="register-copy" id="about">
//             <div className="eyebrow"><span></span> JOIN THE SESSION</div>
//             <h2>Make your next step <em>intentional.</em></h2>
//             <p>Tell us a little about yourself and start the Skills Club learning journey.</p>
//             <div className="trust-points">
//               <span><Check size={15} /> Graduate-focused</span>
//               <span><Check size={15} /> Practical curriculum</span>
//               <span><Check size={15} /> Self-discovery first</span>
//             </div>
//           </div>

//           <form className="register-form" onSubmit={submit}>
//             <label>Name<input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label>
//             <label>Email<input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
//             <label>Qualification
//               <select value={form.qualification} onChange={(e) => update("qualification", e.target.value)}>
//                 {qualifications.slice(0, 6).map((q) => <option key={q}>{q}</option>)}
//               </select>
//             </label>
//             <label>What do you want clarity on?<input required value={form.interest} onChange={(e) => update("interest", e.target.value)} placeholder="Career, skills, niche..." /></label>
//             <button className="primary-btn full" type="submit">Reserve my spot <ArrowRight size={18} /></button>
//             {status && <p className="form-status" aria-live="polite">{status}</p>}
//           </form>
//         </section>
//       </main>

//       <footer>
//         <div className="brand"><span className="brand-mark">S</span><span>Skills<span>Club</span></span></div>
//         <p>Powered by MyProFunnels Ventures · Live Learning Session</p>
//         <span>© 2026 Skills Club</span>
//       </footer>
//     </div>
//   );
// }

// export default App;
// const response = await fetch(
//   `${import.meta.env.VITE_API_URL}/api/register`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(form)
//   }
// );



import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  Menu,
  Sparkles,
  Target,
  Brain,
  CalendarDays,
  X
} from "lucide-react";

const tracks = [
  {
    icon: Target,
    number: "01",
    title: "Niche Clarity",
    text: "Turn your interests and strengths into a focused direction you can act on."
  },
  {
    icon: Brain,
    number: "02",
    title: "Personality Test",
    text: "Understand your working style, natural strengths and learning preferences."
  },
  {
    icon: CalendarDays,
    number: "03",
    title: "15-Day Curriculum",
    text: "Build momentum with a practical, guided learning plan designed for graduates."
  }
];

const qualifications = ["BA", "BSc", "BCom", "MA", "MSc", "MCom" , "BBA", "BCA", "BTech", "MTech", "MBA", "MCA"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    qualification: "BA",
    interest: ""
  });

  const [status, setStatus] = useState("");

  const update = (key, value) => {
    setForm((current) => ({
      ...current,
      [key]: value
    }));
  };

  const submit = async (event) => {
    event.preventDefault();

    setStatus("Submitting…");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        setStatus("API URL is not configured.");
        console.error("VITE_API_URL is missing.");
        return;
      }

      const response = await fetch(`${apiUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.message || "Registration failed.");
        return;
      }

      setStatus(data.message || "Registration received successfully.");

      setForm({
        name: "",
        email: "",
        qualification: "BA",
        interest: ""
      });
    } catch (error) {
      console.error("Registration error:", error);

      setStatus(
        "Unable to connect to the server. Please make sure the MERN API is running."
      );
    }
  };

  return (
    <div className="page">
      {/* Announcement */}
      <div className="announcement">
        <Sparkles size={15} />

        <span>Skills Club powered by MyProFunnels Ventures</span>

        <span className="announcement-dot">•</span>

        <span>Live learning for graduates</span>
      </div>

      {/* Navigation */}
      <header className="nav-shell">
        <nav className="nav">
          <a href="#home" className="brand">
            <span className="brand-mark">S</span>

            <span>
              Skills<span>Club</span>
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a
              href="#program"
              onClick={() => setMenuOpen(false)}
            >
              Program
            </a>

            <a
              href="#curriculum"
              onClick={() => setMenuOpen(false)}
            >
              Curriculum
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#register"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Join session

              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Main */}
      <main id="home">

        {/* Hero */}
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span></span>
              LIVE LEARNING SESSION
            </div>

            <h1>
              Find your direction.
              <br />
              <em>Build your edge.</em>
            </h1>

            <p className="hero-lead">
              A focused learning experience for BA, BSc, BCom, MA, MSc and
              MCom graduates who want clarity before their next move.
            </p>

            <div className="hero-actions">
              <a
                className="primary-btn"
                href="#register"
              >
                Take the first step

                <ArrowRight size={18} />
              </a>

              <a
                className="text-link"
                href="#program"
              >
                Explore the program
              </a>
            </div>

            <div className="proof-row">
              <div className="avatar-stack">
                <span>A</span>
                <span>R</span>
                <span>N</span>
                <span>+</span>
              </div>

              <div>
                <strong>Built for ambitious graduates</strong>

                <small>
                  Clarity • Personality • Skills
                </small>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-orbit orbit-one"></div>

            <div className="hero-orbit orbit-two"></div>

            <div className="session-card">
              <div className="session-top">
                <span className="live-dot">LIVE</span>

                <span>15 DAY JOURNEY</span>
              </div>

              <div className="session-icon">
                <Sparkles />
              </div>

              <h2>Skills Club</h2>

              <p>
                Discover what fits you. Learn what moves you forward.
              </p>

              <div className="mini-progress">
                <div>
                  <span>Day 01</span>

                  <span>Clarity starts here</span>
                </div>

                <div className="progress-line">
                  <i></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ticker */}
        <section className="ticker">
          {qualifications.map((item) => (
            <span key={item}>
              {item} <b>•</b>
            </span>
          ))}

          <span>
            Graduate learning <b>•</b>
          </span>

          <span>
            Career clarity <b>•</b>
          </span>
        </section>

        {/* Program */}
        <section
          className="section"
          id="program"
        >
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                WHAT YOU GET
              </div>

              <h2>
                Less confusion.
                <br />
                <em>More direction.</em>
              </h2>
            </div>

            <p>
              Designed as a practical starting point, the session connects
              self-discovery with a simple action plan.
            </p>
          </div>

          <div className="feature-grid">
            {tracks.map(
              ({
                icon: Icon,
                number,
                title,
                text
              }) => (
                <article
                  className="feature-card"
                  key={number}
                >
                  <div className="feature-number">
                    {number}
                  </div>

                  <div className="feature-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{title}</h3>

                  <p>{text}</p>

                  <a href="#register">
                    Learn more

                    <ArrowRight size={15} />
                  </a>
                </article>
              )
            )}
          </div>
        </section>

        {/* Curriculum */}
        <section
          className="split-section"
          id="curriculum"
        >
          <div className="split-visual">
            <div className="day-card large">
              <small>YOUR 15-DAY MAP</small>

              <strong>01</strong>

              <span>Discover</span>
            </div>

            <div className="day-card small top">
              <strong>07</strong>

              <span>Build</span>
            </div>

            <div className="day-card small bottom">
              <strong>15</strong>

              <span>Launch</span>
            </div>
          </div>

          <div className="split-copy">
            <div className="eyebrow">
              <span></span>
              THE CURRICULUM
            </div>

            <h2>
              A simple path from{" "}
              <em>“what next?”</em> to action.
            </h2>

            <p>
              The 15-day learning curriculum gives you a sequence to
              follow instead of another pile of information.
            </p>

            <ul>
              <li>
                <Check size={18} />
                Clarify your interests and strengths
              </li>

              <li>
                <Check size={18} />
                Understand your personality and working style
              </li>

              <li>
                <Check size={18} />
                Explore a practical learning direction
              </li>

              <li>
                <Check size={18} />
                Turn insights into your next 15 days
              </li>
            </ul>

            <a
              className="primary-btn"
              href="#register"
            >
              Get started

              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Registration */}
        <section
          className="register-section"
          id="register"
        >
          <div
            className="register-copy"
            id="about"
          >
            <div className="eyebrow">
              <span></span>
              JOIN THE SESSION
            </div>

            <h2>
              Make your next step{" "}
              <em>intentional.</em>
            </h2>

            <p>
              Tell us a little about yourself and start the Skills Club
              learning journey.
            </p>

            <div className="trust-points">
              <span>
                <Check size={15} />
                Graduate-focused
              </span>

              <span>
                <Check size={15} />
                Practical curriculum
              </span>

              <span>
                <Check size={15} />
                Self-discovery first
              </span>
            </div>
          </div>

          {/* Registration Form */}
          <form
            className="register-form"
            onSubmit={submit}
          >
            <label>
              Name

              <input
                required
                type="text"
                value={form.name}
                onChange={(event) =>
                  update("name", event.target.value)
                }
                placeholder="Your name"
              />
            </label>

            <label>
              Email

              <input
                required
                type="email"
                value={form.email}
                onChange={(event) =>
                  update("email", event.target.value)
                }
                placeholder="you@example.com"
              />
            </label>

            <label>
              Qualification

              <select
                value={form.qualification}
                onChange={(event) =>
                  update(
                    "qualification",
                    event.target.value
                  )
                }
              >
                {qualifications.map((qualification) => (
                  <option
                    key={qualification}
                    value={qualification}
                  >
                    {qualification}
                  </option>
                ))}
              </select>
            </label>

            <label>
              What do you want clarity on?

              <input
                required
                type="text"
                value={form.interest}
                onChange={(event) =>
                  update("interest", event.target.value)
                }
                placeholder="Career, skills, niche..."
              />
            </label>

            <button
              className="primary-btn full"
              type="submit"
            >
              Reserve my spot

              <ArrowRight size={18} />
            </button>

            {status && (
              <p
                className="form-status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="brand">
          <span className="brand-mark">S</span>

          <span>
            Skills<span>Club</span>
          </span>
        </div>

        <p>
          Powered by MyProFunnels Ventures · Live Learning Session
        </p>

        <span>
          © 2026 Skills Club
        </span>
      </footer>
    </div>
  );
}

export default App;