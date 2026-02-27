import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* ==================== HEADER ==================== */}
      <header className="header">
        <div className="logo">
          <span className="logo-bracket">{'{ '}</span>
          <span className="logo-name">nieric.dev</span>
          <span className="logo-bracket">{' }'}</span>
        </div>
        <nav className="nav">
          <a href="#experience">EXPERIENCE</a>
          <a href="#skills">SKILLS</a>
          <a href="#projects">PROJECTS</a>
          <a href="#contact">CONTACT</a>
        </nav>
        <button className="hire-btn">HIRE ME</button>
      </header>

      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge badge-green">PLAYER 1 READY</span>
          <h1 className="hero-title">NIERIC JAVINAL</h1>
          <p className="hero-subtitle">System Analyst &amp; Full-Stack Engineer</p>
          <p className="hero-desc">
            5+ years turning complex challenges into clean, scalable code. From Flutter mobile apps
            to enterprise cloud systems — I ship products that perform, scale, and delight users.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">START PROJECT</button>
            <button className="btn-secondary">VIEW GITHUB</button>
          </div>
        </div>
        <div
          className="hero-right"
          style={{ backgroundImage: 'url(/images/generated-1772196248973.png)' }}
        >
          <span className="avatar-label">LVL 99 ENGINEER</span>
        </div>
      </section>

      {/* ==================== STATS BAR ==================== */}
      <div className="stats-bar">
        <div className="stat">
          <span className="stat-value blue">5+</span>
          <span className="stat-label">YEARS EXP</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value red">30+</span>
          <span className="stat-label">PROJECTS SHIPPED</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value green">15+</span>
          <span className="stat-label">TECHNOLOGIES</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value white">100%</span>
          <span className="stat-label">SHIP RATE</span>
        </div>
      </div>

      {/* ==================== EXPERIENCE ==================== */}
      <section id="experience" className="section experience">
        <div className="section-label-row">
          <div className="section-accent" style={{ background: '#0066FF' }} />
          <span className="section-tag">QUEST LOG</span>
        </div>
        <h2 className="section-title">Battle-Tested Experience</h2>
        <div className="exp-grid">
          <div className="exp-card">
            <div className="exp-left">
              <span className="exp-date" style={{ color: '#0066FF' }}>MAY 2023 — PRESENT</span>
              <span className="exp-badge" style={{ background: '#0066FF' }}>CURRENT</span>
            </div>
            <div className="exp-right">
              <h3 className="exp-title">System Analyst / Tech Lead</h3>
              <span className="exp-company" style={{ color: '#0066FF' }}>Vertere / Sun Life</span>
              <p className="exp-desc">
                Leading cross-functional teams to architect and deliver enterprise-grade microfrontend
                systems. Building reusable component libraries with React, Angular, and Spring Boot on
                AWS infrastructure with Docker and Kubernetes.
              </p>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-left">
              <span className="exp-date" style={{ color: '#FF3300' }}>SEP 2021 — MAY 2023</span>
              <span className="exp-badge" style={{ background: '#FF3300' }}>FREELANCE</span>
            </div>
            <div className="exp-right">
              <h3 className="exp-title">Mobile &amp; Web Software Engineer</h3>
              <span className="exp-company" style={{ color: '#FF3300' }}>Self-Employed / Multiple Clients</span>
              <p className="exp-desc">
                Delivered end-to-end iOS and Android solutions for diverse clients. Built ride-hailing
                apps, project management tools, and social platforms using Flutter, Firebase, and
                real-time mapping integrations.
              </p>
            </div>
          </div>

          <div className="exp-card">
            <div className="exp-left">
              <span className="exp-date" style={{ color: '#00AA55' }}>JAN 2019 — SEP 2021</span>
              <span className="exp-badge" style={{ background: '#00AA55' }}>PROMOTED 2x</span>
            </div>
            <div className="exp-right">
              <h3 className="exp-title">Senior Mobile Engineer / Fullstack Dev</h3>
              <span className="exp-company" style={{ color: '#00AA55' }}>LEENTech Network Solutions</span>
              <p className="exp-desc">
                Promoted twice in 2 years — from Fullstack Web Dev to Hybrid Mobile Dev to Senior
                Engineer. Led development teams, built Ionic and Flutter apps, and maintained
                Laravel-based enterprise platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section id="skills" className="section skills">
        <div className="section-label-row">
          <div className="section-accent" style={{ background: '#FF3300' }} />
          <span className="section-tag">POWER-UPS</span>
        </div>
        <h2 className="section-title">Technology Arsenal</h2>
        <div className="skills-grid">
          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-dot" style={{ background: '#0066FF' }} />
              <span className="skill-cat-title">MOBILE</span>
            </div>
            <div className="skill-items">
              <div className="skill-tag" style={{ color: '#0066FF' }}>Flutter / Dart</div>
              <div className="skill-tag">Ionic</div>
              <div className="skill-tag">React Native</div>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-dot" style={{ background: '#FF3300' }} />
              <span className="skill-cat-title">FRONTEND</span>
            </div>
            <div className="skill-items">
              <div className="skill-tag" style={{ color: '#FF3300' }}>React / Next.js</div>
              <div className="skill-tag">Angular</div>
              <div className="skill-tag">Vue / Vuex</div>
              <div className="skill-tag">TypeScript / SCSS</div>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-dot" style={{ background: '#00AA55' }} />
              <span className="skill-cat-title">BACKEND</span>
            </div>
            <div className="skill-items">
              <div className="skill-tag" style={{ color: '#00AA55' }}>Node.js / Express</div>
              <div className="skill-tag">PHP / Laravel</div>
              <div className="skill-tag">Spring Boot / Java</div>
            </div>
          </div>

          <div className="skill-cat">
            <div className="skill-cat-header">
              <div className="skill-dot" style={{ background: '#0A0A0A' }} />
              <span className="skill-cat-title">INFRA</span>
            </div>
            <div className="skill-items">
              <div className="skill-tag">AWS / GCP</div>
              <div className="skill-tag">Docker / K8s</div>
              <div className="skill-tag">Firebase / MySQL / MongoDB</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS ==================== */}
      <section id="projects" className="section projects">
        <div className="section-label-row">
          <div className="section-accent" style={{ background: '#00AA55' }} />
          <span className="section-tag">BOSS FIGHTS</span>
        </div>
        <h2 className="section-title">Featured Projects</h2>
        <div className="proj-grid">
          <div className="proj-card">
            <img
              src="/images/generated-1772196384306.png"
              alt="Ride Hailing App"
              className="proj-img"
            />
            <div className="proj-body">
              <span className="proj-tag" style={{ background: '#0066FF' }}>FLUTTER</span>
              <h3 className="proj-title">Ride Hailing App</h3>
              <p className="proj-desc">
                Real-time ride matching with Firebase backend, live GPS tracking, and
                driver-passenger communication. Optimized for low-latency location updates.
              </p>
              <span className="proj-tech">Flutter &nbsp; Firebase &nbsp; Google Maps &nbsp; Socket.IO</span>
            </div>
          </div>

          <div className="proj-card">
            <img
              src="/images/generated-1772196391122.png"
              alt="Social Media Platform"
              className="proj-img"
            />
            <div className="proj-body">
              <span className="proj-tag" style={{ background: '#FF3300' }}>IONIC</span>
              <h3 className="proj-title">Social Media Platform</h3>
              <p className="proj-desc">
                Cross-platform social app with real-time feeds, media sharing, user profiles,
                and push notifications. Seamless experience across iOS and Android.
              </p>
              <span className="proj-tech">Ionic &nbsp; Node.js &nbsp; MongoDB &nbsp; WebSockets</span>
            </div>
          </div>

          <div className="proj-card">
            <img
              src="/images/generated-1772196409421.png"
              alt="Delivery & Logistics App"
              className="proj-img"
            />
            <div className="proj-body">
              <span className="proj-tag" style={{ background: '#00AA55' }}>FLUTTER</span>
              <h3 className="proj-title">Delivery &amp; Logistics App</h3>
              <p className="proj-desc">
                Distance-based pricing engine with real-time delivery tracking, route optimization
                via Google Maps, and automated dispatch for multi-driver fleets.
              </p>
              <span className="proj-tech">Flutter &nbsp; Google Maps &nbsp; Firebase &nbsp; REST API</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section testimonials">
        <div className="section-label-row">
          <div className="section-accent" style={{ background: '#0066FF' }} />
          <span className="section-tag">PLAYER REVIEWS</span>
        </div>
        <h2 className="section-title">Trusted by Teams That Ship</h2>
        <div className="test-grid">
          <div className="test-card">
            <span className="test-stars" style={{ color: '#0066FF' }}>★ ★ ★ ★ ★</span>
            <p className="test-quote">
              "Nieric delivered our Flutter app ahead of schedule. Clean architecture, zero bugs in
              production. He thinks like a product owner, not just a coder."
            </p>
            <span className="test-author" style={{ color: '#0066FF' }}>
              — Startup Founder, On-Demand Platform
            </span>
          </div>

          <div className="test-card">
            <span className="test-stars" style={{ color: '#FF3300' }}>★ ★ ★ ★ ★</span>
            <p className="test-quote">
              "Promoted twice in two years for a reason. Nieric's ability to lead teams while
              staying hands-on with code is rare. A true full-stack problem solver."
            </p>
            <span className="test-author" style={{ color: '#FF3300' }}>
              — Engineering Manager, LEENTech
            </span>
          </div>

          <div className="test-card">
            <span className="test-stars" style={{ color: '#00AA55' }}>★ ★ ★ ★ ★</span>
            <p className="test-quote">
              "His microfrontend architecture saved us months of refactoring. Nieric doesn't just
              write code — he builds systems that scale with your business."
            </p>
            <span className="test-author" style={{ color: '#00AA55' }}>
              — Tech Lead, Enterprise Finance
            </span>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section id="contact" className="cta">
        <h2 className="cta-title">Ready to Start a New Game?</h2>
        <p className="cta-desc">
          Let's build something users love. From concept to deployment, I'll turn your vision
          into production-ready code that scales.
        </p>
        <div className="cta-btns">
          <button className="cta-btn-primary">HIRE NIERIC</button>
          <button className="cta-btn-secondary">VIEW RESUME</button>
        </div>
        <span className="cta-email">nieric.work@gmail.com</span>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="footer-logo">
          <span className="footer-bracket">{'{ '}</span>
          <span className="footer-name">nieric.dev</span>
          <span className="footer-bracket">{' }'}</span>
        </div>
        <span className="footer-center">Adapt. Improvise. Overcome.</span>
        <div className="footer-links">
          <a href="#">GITHUB</a>
          <a href="#">LINKEDIN</a>
          <a href="#">EMAIL</a>
        </div>
        <span className="footer-copyright">© 2026 Nieric Javinal</span>
      </footer>
    </div>
  )
}

export default App
