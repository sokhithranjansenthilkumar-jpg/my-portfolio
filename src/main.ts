import './style.css';
import profileImg from './assets/profile-suit.jpg';
import project1Img from './assets/project1.png';

// Icon SVG Paths helper
const ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9" rx="1"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  sun: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`,
  moon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`,
  externalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>`,
  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`
};

// Configurable Portfolio Content
const PORTFOLIO_DATA = {
  name: 'Sokhith Ranjan',
  role: 'Information Technology Student',
  location: 'Chennai, India',
  email: 'sokhithranjansenthilkumar@gmail.com',
  github: 'https://github.com/sokhithranjansenthilkumar-jpg',
  linkedin: 'https://www.linkedin.com/in/sokhith-ranjan-s-3a0353327?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  instagram: 'https://www.instagram.com/sokhith_15?igsh=MXNuMGRtaWlzYW03bg==',
  bio: 'I build highly interactive, modern, and responsive web applications. Passionate about learning new technologies and creating sleek user experiences.',
  stats: [
    { value: '3rd Year', label: 'B.Tech IT' },
    { value: '8.9', label: 'Current CGPA' },
    { value: '1', label: 'Project' },
    { value: '250+', label: 'LeetCode Solved' }
  ],
  skills: [
    // Frontend
    { name: 'HTML5 & CSS3', category: 'frontend', level: 95, iconName: 'code' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 90, iconName: 'code' },
    { name: 'React.js', category: 'frontend', level: 85, iconName: 'code' },
    // Backend
    { name: 'Django Framework', category: 'backend', level: 85, iconName: 'database' },
    { name: 'Python Programming', category: 'backend', level: 88, iconName: 'database' },
    // Tools
    { name: 'Git & GitHub', category: 'tools', level: 90, iconName: 'terminal' },
    { name: 'VS Code & CLI', category: 'tools', level: 92, iconName: 'terminal' }
  ],
  projects: [
    {
      title: 'Autoscaling in Machine Learning',
      description: 'An automated infrastructure pipeline designed to dynamically autoscale machine learning models and server allocation based on real-time request traffic. Optimizes compute resources and ensures high service availability.',
      image: project1Img,
      tags: ['Python', 'Django', 'Machine Learning', 'Docker', 'Autoscaling'],
      demoLink: '#',
      codeLink: '#'
    }
  ]
};

// Render Main App Structure
const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `
  <!-- Animated Background Blobs -->
  <div class="bg-blobs-container">
    <div class="blob blob-indigo"></div>
    <div class="blob blob-fuchsia"></div>
    <div class="blob blob-cyan"></div>
  </div>

  <!-- Navigation Header -->
  <header>
    <div class="container nav-container">
      <a href="#home" class="logo-container" aria-label="Sokhith Ranjan Portfolio home">
        <img class="logo-photo" src="${profileImg}" alt="Sokhith Ranjan" />
      </a>
      <nav>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skill</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#certificate">Certificate</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="hero-section">
    <div class="container grid-2">
      <div class="hero-content">
        <h1 class="hero-title">This is<br /><span class="text-gradient">Sokhith Ranjan S</span></h1>
        <p class="hero-subtitle"><span id="typed-role" class="typewriter-text" aria-live="polite"></span></p>
        <p class="hero-description">${PORTFOLIO_DATA.bio}</p>
        <div class="hero-buttons">
          <a href="/Sokhith-Ranjan-S-Resume.pdf" class="btn btn-primary" download>Download Resume</a>
          <a href="#contact" class="btn btn-secondary">Contact</a>
        </div>
        <div class="hero-socials" aria-label="Social links">
          <a href="${PORTFOLIO_DATA.github}" class="hero-social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            ${ICONS.github}
          </a>
          <a href="${PORTFOLIO_DATA.linkedin}" class="hero-social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            ${ICONS.linkedin}
          </a>
          <a href="${PORTFOLIO_DATA.instagram}" class="hero-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            ${ICONS.instagram}
          </a>
        </div>
      </div>
      <div class="hero-image-container">
        <div class="image-glow"></div>
        <div class="hero-avatar-frame">
          <img class="hero-avatar" src="${profileImg}" alt="${PORTFOLIO_DATA.name}" />
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">About <span class="text-gradient">Me</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
      </div>
      <div class="about-content">
        <div class="about-intro">
          <p>I am a passionate computer science student with a strong foundation in modern web technologies. My journey in tech started with a curiosity about how things work on the internet, which quickly escalated into a deep dive into frontend and full-stack development. I enjoy building pixel-perfect, engaging, and accessible digital experiences.</p>
          <div class="about-highlights">
            <article class="about-highlight-card glass-card">
              <div class="about-highlight-icon">${ICONS.briefcase}</div>
              <h3>Experience</h3>
              <p>3+ Years coding</p>
            </article>
            <article class="about-highlight-card glass-card">
              <div class="about-highlight-icon">${ICONS.code}</div>
              <h3>Education</h3>
              <p>B.Tech</p>
            </article>
          </div>
        </div>
        <div class="education-area">
          <h3 class="education-heading"><span aria-hidden="true">🎓</span> Education Timeline</h3>
          <div class="education-timeline">
            <span class="education-dot" aria-hidden="true">🎓</span>
            <article class="education-card glass-card">
              <div class="education-title-row">
                <h4>Bachelor of Technology (B.Tech)</h4>
                <div class="education-years"><span>2024</span><i aria-hidden="true"></i><span>2028</span></div>
              </div>
              <p class="education-college">SRM Institute of Science and Technology, Trichy</p>
              <p>"Full-stack developer with strong foundation in modern web technologies. CGPA: 8.9 (Current)</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title heading-accent">My <span class="text-gradient">Skill</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
        <p>I constantly learn and adopt modern technologies, focusing on creating efficient, maintainable applications.</p>
      </div>

      <div class="skills-tabs">
        <button class="tab-btn active" data-category="all">All Skills</button>
        <button class="tab-btn" data-category="frontend">Frontend</button>
        <button class="tab-btn" data-category="backend">Backend</button>
        <button class="tab-btn" data-category="tools">Tools/DevOps</button>
      </div>

      <div class="skills-content">
        <div id="skills-display-grid" class="skills-grid">
          <!-- Rendered programmatically -->
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" style="background-color: var(--bg-tertiary);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title heading-accent">Feature <span class="text-gradient">Project</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
        <p>A selection of projects that showcase my software engineering, cloud architecture, and user experience design skills.</p>
      </div>

      <div class="projects-grid">
        ${PORTFOLIO_DATA.projects.map(proj => `
          <article class="project-card glass-card">
            <div class="project-image-wrapper">
              <img class="project-image" src="${proj.image}" alt="${proj.title}" />
              <div class="project-overlay">
                <span class="badge" style="background: var(--bg-secondary); border-color: var(--border-color);">Source Code</span>
              </div>
            </div>
            <div class="project-content">
              <div class="project-tags">
                ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
              </div>
              <h3 class="project-title">${proj.title}</h3>
              <p class="project-description">${proj.description}</p>
              <div class="project-links">
                <a href="${proj.demoLink}" class="project-link" target="_blank">
                  Live Demo ${ICONS.externalLink}
                </a>
                <a href="${proj.codeLink}" class="project-link" style="color: var(--text-secondary);" target="_blank">
                  GitHub Repository ${ICONS.github}
                </a>
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="experience">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title heading-accent">My <span class="text-gradient">Experience</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
        <p>Click the internship below to view my responsibilities and contributions.</p>
      </div>
      <div class="experience-list">
        <details class="experience-card glass-card">
          <summary>
            <div>
              <h3>Full Stack Developer Intern</h3>
              <p class="experience-company">VDart Academy, Trichy</p>
            </div>
            <div class="experience-meta">
              <span>July 2026</span>
              <span class="experience-toggle" aria-hidden="true">+</span>
            </div>
          </summary>
          <div class="experience-details">
            <ul>
              <li>Collaborated in a team to build a Supply Chain &amp; Warehouse Management System using Python Django, React 18, Tailwind CSS, SQLite, and REST APIs.</li>
              <li>Implemented Role-Based Access Control (RBAC), JWT authentication, OTP multi-factor verification, and login activity logging with IP tracking.</li>
              <li>Developed inbound shipment workflows including GRN processing, Code128 barcode generation, and automated putaway algorithms with zone and shelf matching.</li>
              <li>Built interactive role-specific dashboards with Recharts for real-time inventory analytics, stock movements, vendor scoring, and low-stock alerts.</li>
              <li>Implemented PDF parsing with pdfplumber for vendor agreement uploads, GSTIN validation, and automated column mapping.</li>
              <li>Configured and tested REST APIs using Postman, managed local development environments, and collaborated through Git and GitHub.</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </section>

  <section id="certificate" style="background-color: var(--bg-tertiary);">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title heading-accent">Achievements &amp; <span class="text-gradient">Certifications</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
        <p>Click a certificate to view the original credential.</p>
      </div>
      <div class="certificates-grid">
        <button class="certificate-card glass-card infosys-certificate-card" type="button" id="open-infosys-certificates" aria-haspopup="dialog" aria-controls="infosys-certificates-modal">
          <span class="certificate-icon" aria-hidden="true">🏅</span>
          <span class="certificate-type">Professional Learning</span>
          <h3>Infosys Certificates</h3>
          <span class="certificate-action">View 3 Certificates ${ICONS.externalLink}</span>
        </button>
        <a class="certificate-card glass-card" href="/certificates/aws-certificate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open AWS Certificate">
          <span class="certificate-icon" aria-hidden="true">☁</span>
          <span class="certificate-type">Cloud Computing</span>
          <h3>AWS Certificate</h3>
          <span class="certificate-action">View Certificate ${ICONS.externalLink}</span>
        </a>
        <a class="certificate-card glass-card" href="/certificates/ibm-certificate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open IBM Certificate">
          <span class="certificate-icon" aria-hidden="true">⌘</span>
          <span class="certificate-type">Professional Learning</span>
          <h3>IBM Certificate</h3>
          <span class="certificate-action">View Certificate ${ICONS.externalLink}</span>
        </a>
        <a class="certificate-card glass-card" href="/certificates/hackathon-certificate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Hackathon Certificate">
          <span class="certificate-icon" aria-hidden="true">🏆</span>
          <span class="certificate-type">Competition</span>
          <h3>Hackathon Certificate</h3>
          <span class="certificate-action">View Certificate ${ICONS.externalLink}</span>
        </a>
        <a class="certificate-card glass-card" href="/certificates/accenture-certificate.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Accenture Certificate">
          <span class="certificate-icon" aria-hidden="true">✦</span>
          <span class="certificate-type">Virtual Experience</span>
          <h3>Accenture Certificate</h3>
          <span class="certificate-action">View Certificate ${ICONS.externalLink}</span>
        </a>
      </div>
    </div>
  </section>

  <div class="certificate-modal" id="infosys-certificates-modal" role="dialog" aria-modal="true" aria-labelledby="infosys-modal-title" hidden>
    <div class="certificate-modal-backdrop" data-close-infosys-modal></div>
    <div class="certificate-modal-content glass-card">
      <div class="certificate-modal-header">
        <div>
          <p class="certificate-type">Infosys</p>
          <h2 id="infosys-modal-title">Infosys Certificates</h2>
        </div>
        <button class="certificate-modal-close" type="button" aria-label="Close certificates" data-close-infosys-modal>×</button>
      </div>
      <div class="infosys-certificates-list">
        <a href="/certificates/infosys-certificate.pdf" target="_blank" rel="noopener noreferrer">Infosys Certificate 1 ${ICONS.externalLink}</a>
        <a href="/certificates/infosys-certificate1.pdf" target="_blank" rel="noopener noreferrer">Infosys Certificate 2 ${ICONS.externalLink}</a>
        <a href="/certificates/infosys-certificate2.pdf" target="_blank" rel="noopener noreferrer">Infosys Certificate 3 ${ICONS.externalLink}</a>
      </div>
    </div>
  </div>

  <!-- Contact Section -->
  <section id="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title heading-accent">Let's <span class="text-gradient">Connect</span></h2>
        <span class="section-title-underline" aria-hidden="true"></span>
        <p>Have an opportunity, question, or want to discuss a project? Drop a message!</p>
      </div>

      <div class="contact-container">
        <div class="contact-info">
          <div class="contact-cards">
            <div class="contact-detail-card glass-card">
              <div class="contact-detail-icon">👤</div>
              <div class="contact-detail-content">
                <h5>Name</h5>
                <p>SOKHITH RANJAN.S</p>
              </div>
            </div>
            
            <div class="contact-detail-card glass-card">
              <div class="contact-detail-icon">${ICONS.mail}</div>
              <div class="contact-detail-content" style="flex-grow: 1;">
                <h5>Email Id</h5>
                <p id="email-text" style="font-size: 0.95rem; word-break: break-all;">${PORTFOLIO_DATA.email}</p>
              </div>
              <button id="copy-email" class="btn-icon" title="Copy to Clipboard" style="margin-left: 0.5rem; flex-shrink: 0;">
                ${ICONS.copy}
              </button>
            </div>
            
            <div class="contact-detail-card glass-card">
              <div class="contact-detail-icon">📞</div>
              <div class="contact-detail-content">
                <h5>Contact no</h5>
                <p>+91 6374195426</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container footer-content">
      <div class="social-links">
        <a href="${PORTFOLIO_DATA.github}" class="social-link" aria-label="GitHub" target="_blank">
          ${ICONS.github}
        </a>
        <a href="${PORTFOLIO_DATA.linkedin}" class="social-link" aria-label="LinkedIn" target="_blank">
          ${ICONS.linkedin}
        </a>
        <a href="${PORTFOLIO_DATA.instagram}" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          ${ICONS.instagram}
        </a>
        <a href="mailto:${PORTFOLIO_DATA.email}" class="social-link" aria-label="Email">
          ${ICONS.mail}
        </a>
      </div>
      <p class="footer-copyright">&copy; ${new Date().getFullYear()} ${PORTFOLIO_DATA.name}. All rights reserved.</p>
    </div>
  </footer>
`;

// Render Skills grid based on filter
function renderSkills(category: string) {
  const grid = document.querySelector<HTMLDivElement>('#skills-display-grid')!;
  
  // Apply a quick fade transition
  grid.classList.add('fade-out');
  
  setTimeout(() => {
    const filtered = PORTFOLIO_DATA.skills.filter(s => category === 'all' || s.category === category);
    
    grid.innerHTML = filtered.map(skill => {
      let icon = ICONS.code;
      if (skill.iconName === 'database') icon = ICONS.database;
      if (skill.iconName === 'terminal') icon = ICONS.terminal;
      
      return `
        <div class="skill-card glass-card">
          <div class="skill-icon">${icon}</div>
          <div class="skill-info">
            <h4>${skill.name}</h4>
            <div class="skill-bar">
              <div class="skill-progress" data-level="${skill.level}" style="width: 0%;"></div>
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    grid.classList.remove('fade-out');
    
    // Animate progress bars on render
    setTimeout(() => {
      const bars = grid.querySelectorAll<HTMLDivElement>('.skill-progress');
      bars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
      });
    }, 50);

  }, 150);
}

// Initialize Skills Tab click handlers
const tabButtons = document.querySelectorAll<HTMLButtonElement>('.tab-btn');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-category') || 'all';
    renderSkills(category);
  });
});

// Render all skills initially
renderSkills('all');

// Type each role, hold it for three seconds, then move to the next role.
const typedRole = document.querySelector<HTMLSpanElement>('#typed-role')!;
const typedRoles = ['Full Stack Developer', 'B.Tech Student'];
let typedRoleIndex = 0;

function typeRole(characterIndex = 0) {
  const role = typedRoles[typedRoleIndex];
  typedRole.textContent = role.slice(0, characterIndex + 1);

  if (characterIndex < role.length - 1) {
    setTimeout(() => typeRole(characterIndex + 1), 75);
  } else {
    setTimeout(() => eraseRole(role.length), 3000);
  }
}

function eraseRole(characterIndex: number) {
  typedRole.textContent = typedRoles[typedRoleIndex].slice(0, characterIndex - 1);

  if (characterIndex > 0) {
    setTimeout(() => eraseRole(characterIndex - 1), 45);
  } else {
    typedRoleIndex = (typedRoleIndex + 1) % typedRoles.length;
    setTimeout(() => typeRole(), 250);
  }
}

typeRole();

// Infosys certificate gallery
const infosysModal = document.querySelector<HTMLDivElement>('#infosys-certificates-modal')!;
const openInfosysCertificates = document.querySelector<HTMLButtonElement>('#open-infosys-certificates')!;
const closeInfosysModalButtons = infosysModal.querySelectorAll<HTMLElement>('[data-close-infosys-modal]');

function closeInfosysCertificates() {
  infosysModal.hidden = true;
  document.body.classList.remove('modal-open');
  openInfosysCertificates.focus();
}

openInfosysCertificates.addEventListener('click', () => {
  infosysModal.hidden = false;
  document.body.classList.add('modal-open');
  infosysModal.querySelector<HTMLButtonElement>('.certificate-modal-close')?.focus();
});
closeInfosysModalButtons.forEach(button => button.addEventListener('click', closeInfosysCertificates));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !infosysModal.hidden) closeInfosysCertificates();
});

// Copy Email to clipboard functionality
const copyEmailBtn = document.querySelector<HTMLButtonElement>('#copy-email')!;
copyEmailBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(PORTFOLIO_DATA.email).then(() => {
    // Show copy visual feedback
    copyEmailBtn.innerHTML = ICONS.check;
    copyEmailBtn.style.color = '#10b981'; // Green accent
    copyEmailBtn.style.borderColor = '#10b981';
    
    setTimeout(() => {
      copyEmailBtn.innerHTML = ICONS.copy;
      copyEmailBtn.style.color = '';
      copyEmailBtn.style.borderColor = '';
    }, 2000);
  });
});
