import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  BadgeCheck,
  Bot,
  BriefcaseBusiness,
  ClipboardCheck,
  CheckCircle2,
  Globe2,
  Github,
  HeartPulse,
  Layers3,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PhoneCall,
  Rocket,
  Send,
  Server,
  ShieldCheck,
  ShoppingBag,
  Star,
  Timer,
  Terminal,
  X
} from "lucide-react";
import "./styles.css";

const contactEmail = "tsharun26@gmail.com";
const whatsappNumber = "+880 1710071135";
const whatsappLink = "https://wa.me/8801710071135";

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height={size}
      viewBox="0 0 32 32"
      width={size}
    >
      <path d="M16.02 3.2c-7.06 0-12.8 5.66-12.8 12.63 0 2.23.6 4.4 1.74 6.3L3.1 28.8l6.9-1.79a12.93 12.93 0 0 0 6.02 1.5c7.06 0 12.8-5.67 12.8-12.64S23.08 3.2 16.02 3.2Zm0 23.15c-1.9 0-3.76-.5-5.38-1.46l-.38-.22-4.09 1.06 1.1-3.9-.25-.4a10.36 10.36 0 0 1-1.6-5.56c0-5.78 4.72-10.47 10.5-10.47 5.79 0 10.5 4.7 10.5 10.47 0 5.78-4.71 10.48-10.5 10.48Zm5.77-7.84c-.32-.16-1.86-.9-2.15-1-.29-.11-.5-.16-.72.16-.21.31-.82 1-.99 1.2-.18.22-.37.24-.68.08-.32-.15-1.33-.48-2.54-1.54-.94-.83-1.57-1.85-1.75-2.16-.18-.32-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.15-.72-1.7-.98-2.33-.26-.6-.52-.52-.72-.53h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.07-1.11 2.6s1.14 3.02 1.3 3.23c.16.21 2.25 3.38 5.45 4.74.76.33 1.36.52 1.82.67.76.24 1.46.2 2.01.12.61-.09 1.86-.75 2.13-1.48.26-.72.26-1.34.18-1.48-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

const projects = [
  {
    title: "ShebaSathi",
    type: "Healthcare Service Platform",
    summary:
      "Bangla healthcare support platform for doctor appointments, patient transport, accommodation assistance, and 24/7 service contact.",
    stack: ["Next.js", "React", "Service UX", "Responsive UI"],
    accent: "healthcare",
    live: "https://shebasathi-next.vercel.app/",
    status: "Live project",
    result: "Service-first UX for healthcare users",
    role: "Frontend + product flow",
    preview: {
      label: "Care Portal",
      metric: "24/7",
      icon: HeartPulse
    }
  },
  {
    title: "FlowPilot CRM",
    type: "CRM SaaS Application",
    summary:
      "SaaS-style CRM experience for managing business workflows, customer pipelines, team operations, and modern dashboard interactions.",
    stack: ["React", "SaaS UI", "Dashboard", "Vercel"],
    accent: "productivity",
    live: "https://flowpilot-crm-saas.vercel.app/",
    status: "Live project",
    result: "Dashboard-ready CRM SaaS interface",
    role: "SaaS UI + workflow design",
    preview: {
      label: "CRM Pipeline",
      metric: "SaaS",
      icon: BarChart3
    }
  },
  {
    title: "ShopVerse",
    type: "E-commerce Storefront",
    summary:
      "Modern shopping client with product browsing, polished storefront sections, cart-focused user flow, and responsive commerce UI.",
    stack: ["React", "E-commerce", "Client App", "Vercel"],
    accent: "commerce",
    live: "https://shopverse-client-silk.vercel.app/",
    status: "Live project",
    result: "Responsive product browsing flow",
    role: "Storefront UI + cart flow",
    preview: {
      label: "Storefront",
      metric: "Cart",
      icon: ShoppingBag
    }
  },
  {
    title: "BookWise AI",
    type: "AI Appointment SaaS",
    summary:
      "AI-assisted booking platform concept for clinics, salons, consultants, and service businesses with calendar, reminders, and admin dashboard.",
    stack: ["Next.js", "OpenAI API", "Express", "MongoDB"],
    accent: "learning",
    status: "Build-ready concept",
    result: "High-demand SaaS idea for service businesses",
    role: "AI workflow + booking system",
    preview: {
      label: "Booking Suite",
      metric: "AI",
      icon: Bot
    }
  },
  {
    title: "VendorHub",
    type: "Multi-Vendor Marketplace",
    summary:
      "Marketplace admin concept with vendor onboarding, product approval, order tracking, role-based dashboards, and payout-ready data structure.",
    stack: ["React", "Node.js", "MongoDB", "RBAC"],
    accent: "api",
    status: "Build-ready concept",
    result: "Strong proof for e-commerce and admin-panel clients",
    role: "Marketplace architecture",
    preview: {
      label: "Vendor Admin",
      metric: "RBAC",
      icon: LayoutDashboard
    }
  },
  {
    title: "InsightDesk CRM",
    type: "Analytics CRM Dashboard",
    summary:
      "Sales and customer analytics concept with lead pipeline, revenue cards, team activity, filters, and export-friendly reporting views.",
    stack: ["React", "Charts", "Express", "MongoDB"],
    accent: "analytics",
    status: "Build-ready concept",
    result: "Attractive for SaaS, agency, and startup dashboard work",
    role: "Analytics UI + API planning",
    preview: {
      label: "Growth Desk",
      metric: "KPI",
      icon: BarChart3
    }
  }
];

const stats = [
  ["3", "Live projects"],
  ["3", "Build concepts"],
  ["24h", "Reply window"],
  ["MERN", "Specialized stack"]
];

const heroMetrics = [
  ["Web Apps", "Dashboards, SaaS, portals"],
  ["API Work", "Auth, CRUD, integrations"],
  ["Launch Help", "Vercel, Render, MongoDB"]
];

const clientProblems = [
  "Need a modern business website or dashboard",
  "Want a React/Next.js frontend from Figma or idea",
  "Need MongoDB, Express API, auth, and deployment",
  "Have bugs, slow pages, or unfinished MERN features"
];

const deliverables = [
  "Responsive React/Next.js frontend",
  "Express REST API with clean routes",
  "MongoDB schema and integration",
  "Deployment guidance and handover notes"
];

const marketplaceOffers = [
  {
    title: "Landing page or business website",
    scope: "Best for service businesses, portfolios, agencies, and lead generation.",
    delivery: "3-5 days",
    includes: ["Responsive sections", "Contact/WhatsApp CTA", "SEO-ready structure"]
  },
  {
    title: "Dashboard or admin panel",
    scope: "Best for CRM, inventory, booking, reporting, and internal business tools.",
    delivery: "7-14 days",
    includes: ["Role-ready UI", "API integration", "Reusable data views"]
  },
  {
    title: "Full MERN MVP",
    scope: "Best for startup ideas that need frontend, backend, database, and launch support.",
    delivery: "2-4 weeks",
    includes: ["Auth flow", "MongoDB models", "Deploy-ready handover"]
  }
];

const buyerChecklist = [
  "Project goal or reference website",
  "Pages/features you need",
  "Brand colors, logo, or content if available",
  "Preferred deadline and budget range",
  "Hosting/domain access only when deployment starts"
];

const packages = [
  {
    name: "Starter Landing",
    fit: "For personal brands and small businesses",
    timeline: "3-5 days",
    items: ["1-3 page responsive website", "Contact form", "SEO-ready structure", "Vercel deployment"]
  },
  {
    name: "MERN Business App",
    fit: "For dashboards, portals, booking, CRM",
    timeline: "7-14 days",
    items: ["React frontend", "Express API", "MongoDB database", "Auth and admin flow"]
  },
  {
    name: "Fix & Upgrade",
    fit: "For existing React or MERN projects",
    timeline: "1-4 days",
    items: ["Bug fixing", "UI polish", "API integration", "Performance cleanup"]
  }
];

const trustSignals = [
  ["Clear scope", "No confusing technical talk"],
  ["Frequent updates", "Progress shared during build"],
  ["Clean handover", "Readable code and setup notes"],
  ["Remote-ready", "Comfortable with async work"]
];

const faqs = [
  [
    "Can you work with a fixed budget?",
    "Yes. After understanding the scope, I can suggest a fixed price and timeline so the work stays predictable."
  ],
  [
    "Can you build from Figma or a reference website?",
    "Yes. I can convert Figma, screenshots, or reference websites into responsive React/Next.js interfaces."
  ],
  [
    "Do you help with deployment?",
    "Yes. I can help deploy the frontend, backend, and MongoDB setup using Vercel, Render, Railway, or MongoDB Atlas."
  ],
  [
    "Can you fix an existing MERN project?",
    "Yes. I can review the current code, fix bugs, improve UI, connect APIs, and clean up responsive issues."
  ]
];

const proofPoints = [
  ["ShebaSathi", "Healthcare service platform with Bangla-first user flow."],
  ["FlowPilot CRM", "SaaS dashboard experience for workflow and customer management."],
  ["ShopVerse", "E-commerce storefront with product-focused responsive UI."],
  ["BookWise AI", "AI appointment SaaS concept for service businesses."],
  ["VendorHub", "Multi-vendor marketplace concept with admin workflows."],
  ["InsightDesk", "Analytics CRM dashboard concept for SaaS clients."]
];

const techGroups = [
  ["Frontend", "React, Next.js, Tailwind CSS, responsive UI"],
  ["Backend", "Node.js, Express.js, REST API, JWT auth"],
  ["Database", "MongoDB, Mongoose, schema design"],
  ["Launch", "Vercel, Render, MongoDB Atlas, GitHub"]
];

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "JWT Auth",
  "Tailwind CSS",
  "Git/GitHub",
  "Vercel"
];

const services = [
  {
    title: "MERN Web Application",
    summary:
      "Custom dashboards, portals, booking systems, CRM tools, and business web apps with clean frontend and reliable backend.",
    points: ["React UI", "Express REST API", "MongoDB schema", "Deployment support"]
  },
  {
    title: "E-commerce & SaaS UI",
    summary:
      "Conversion-focused storefronts, SaaS landing dashboards, admin panels, and responsive product experiences.",
    points: ["Modern layout", "Cart flow", "Role views", "Reusable components"]
  },
  {
    title: "Bug Fix & Feature Upgrade",
    summary:
      "Improve existing React or MERN projects with API fixes, UI polish, performance cleanup, and production-ready changes.",
    points: ["Code audit", "Feature add-on", "Responsive fixes", "API integration"]
  }
];

const processSteps = [
  ["01", "Discuss", "We define scope, pages, features, deadline, and reference style."],
  ["02", "Build", "I create the UI, backend routes, database model, and integration flow."],
  ["03", "Review", "You test the work, request changes, and I polish the final delivery."],
  ["04", "Launch", "I help deploy to Vercel, Render, Railway, or your preferred hosting."]
];

const testimonials = [
  {
    quote:
      "Clear communication, fast delivery, and a polished MERN application that matched the brief.",
    name: "Marketplace Client",
    role: "Web App Project"
  },
  {
    quote:
      "The dashboard UI was responsive, clean, and easy for our team to understand.",
    name: "Startup Founder",
    role: "CRM Dashboard"
  },
  {
    quote:
      "Great support after delivery and thoughtful fixes for small user experience issues.",
    name: "Business Owner",
    role: "E-commerce Store"
  }
];

function ProjectPreview({ project }) {
  const PreviewIcon = project.preview.icon;

  return (
    <div className="project-preview">
      <div className="preview-browser">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-layout">
          <aside>
            <i />
            <i />
            <i />
          </aside>
          <section>
            <div className="preview-head">
              <strong>{project.preview.label}</strong>
              <span>{project.preview.metric}</span>
            </div>
            <div className="preview-chart">
              <b />
              <b />
              <b />
              <b />
            </div>
            <div className="preview-row">
              <small />
              <small />
            </div>
          </section>
        </div>
      </div>
      <div className="preview-badge">
        <PreviewIcon size={22} />
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = React.useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      setFormState({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const navItems = [
    ["Offers", "#offers"],
    ["Projects", "#projects"],
    ["Packages", "#packages"],
    ["Process", "#process"],
    ["Contact", "#contact"]
  ];

  const scrollToSection = (event, href) => {
    if (!href?.startsWith("#")) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    const header = document.querySelector(".site-header");

    if (!target) {
      return;
    }

    const headerHeight = header?.getBoundingClientRect().height || 0;
    const offset = headerHeight + 8;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    window.history.pushState(null, "", href);
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Harun portfolio home" onClick={(event) => scrollToSection(event, "#top")}>
          <span className="brand-mark">H</span>
          <span>Harun</span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={(event) => scrollToSection(event, href)}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              <BadgeCheck size={16} />
              Available for remote freelance work
            </p>
            <h1>Harun Ar Rashid</h1>
            <h2>I build MERN web apps that help businesses launch faster.</h2>
            <p className="hero-text">
              Hire me for dashboards, SaaS tools, e-commerce storefronts,
              booking portals, landing pages, API integration, and bug fixing.
              You bring the idea; I turn it into a clean, responsive product.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
                Start a Project
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-button whatsapp-button" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
                <WhatsAppIcon size={18} />
              </a>
              <a className="secondary-button" href="#projects" onClick={(event) => scrollToSection(event, "#projects")}>
                View Projects
              </a>
              <a className="secondary-button" href="#packages" onClick={(event) => scrollToSection(event, "#packages")}>
                See Packages
                <BriefcaseBusiness size={18} />
              </a>
            </div>
            <div className="marketplace-badges" aria-label="Freelance trust signals">
              <span>
                <CheckCircle2 size={16} />
                Fixed scope friendly
              </span>
              <span>
                <Timer size={16} />
                Quick communication
              </span>
              <span>
                <Globe2 size={16} />
                Remote-ready workflow
              </span>
            </div>
          </div>

          <div className="hero-panel" aria-label="Freelance offer preview">
            <div className="proposal-card">
              <div className="proposal-top">
                <span>Client Project Board</span>
                <strong>Open</strong>
              </div>
              <h3>MERN app delivery</h3>
              <p>
                From landing page to full-stack dashboard with API, database,
                authentication, responsive UI, and deployment support.
              </p>
              <div className="proposal-metrics">
                {heroMetrics.map(([title, summary]) => (
                  <div key={title}>
                    <strong>{title}</strong>
                    <span>{summary}</span>
                  </div>
                ))}
              </div>
              <div className="delivery-list" aria-label="Delivery includes">
                {deliverables.map((item) => (
                  <span key={item}>
                    <CheckCircle2 size={15} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="offer-summary">
              <img className="profile-photo" src="/harun.jpg" alt="Harun Ar Rashid" />
              <div>
                <p>Best for</p>
                <strong>Founders, agencies, and business owners who need a reliable web app builder.</strong>
              </div>
              <Rocket size={30} />
            </div>
          </div>
        </section>

        <section className="stats-band" aria-label="Portfolio highlights">
          {stats.map(([value, label]) => (
            <div className="stat-item" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="content-section marketplace-section" id="offers">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Marketplace Ready</p>
              <h2>Offers shaped like real Upwork and Fiverr projects</h2>
            </div>
            <a className="section-link" href={whatsappLink} target="_blank" rel="noreferrer">
              Quick WhatsApp
              <WhatsAppIcon size={18} />
            </a>
          </div>
          <div className="marketplace-grid">
            {marketplaceOffers.map((offer) => (
              <article className="marketplace-card" key={offer.title}>
                <div className="marketplace-card-top">
                  <BriefcaseBusiness size={22} />
                  <span>{offer.delivery}</span>
                </div>
                <h3>{offer.title}</h3>
                <p>{offer.scope}</p>
                <ul>
                  {offer.includes.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section about-grid" id="about">
          <div>
            <p className="section-kicker">About</p>
            <h2>A practical MERN developer for business-focused web apps.</h2>
          </div>
          <div className="about-copy">
            <p>
              I focus on the work clients actually care about: clear UI,
              working features, smooth user flow, stable backend, and a final
              project that can be launched, shared, and improved.
            </p>
            <div className="feature-list">
              <span>
                <Terminal size={18} />
                Clean React components
              </span>
              <span>
                <Server size={18} />
                Express API design
              </span>
              <span>
                <ShieldCheck size={18} />
                Auth and validation
              </span>
            </div>
          </div>
        </section>

        <section className="content-section client-fit-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Hire Fit</p>
              <h2>When you should hire me</h2>
            </div>
          </div>
          <div className="client-fit-grid">
            {clientProblems.map((problem) => (
              <div className="client-fit-item" key={problem}>
                <CheckCircle2 size={18} />
                <span>{problem}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section trust-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Client Confidence</p>
              <h2>Less uncertainty before you hire</h2>
            </div>
          </div>
          <div className="trust-grid">
            {trustSignals.map(([title, summary]) => (
              <div className="trust-card" key={title}>
                <ShieldCheck size={20} />
                <strong>{title}</strong>
                <span>{summary}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section" id="services">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Services</p>
              <h2>Services that map to common freelance jobs</h2>
            </div>
            <a className="section-link" href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
              Hire Me
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Server size={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.points.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section packages-section" id="packages">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Packages</p>
              <h2>Simple offers clients can understand quickly</h2>
            </div>
          </div>
          <div className="packages-grid">
            {packages.map((item) => (
              <article className="package-card" key={item.name}>
                <div className="package-head">
                  <h3>{item.name}</h3>
                  <span>{item.timeline}</span>
                </div>
                <p>{item.fit}</p>
                <ul>
                  {item.items.map((point) => (
                    <li key={point}>
                      <CheckCircle2 size={16} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Proof</p>
              <h2>Live projects with business context</h2>
            </div>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-visual">
                  <ProjectPreview project={project} />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <p>{project.type}</p>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <span>{project.summary}</span>
                  <div className="project-outcome">
                    <strong>{project.result}</strong>
                    <small>{project.role}</small>
                  </div>
                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <small key={item}>{item}</small>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                  {!project.live && !project.code && (
                    <a href="#contact" onClick={(event) => scrollToSection(event, "#contact")}>
                      Build This for Me
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Stack</p>
              <h2>Technical stack clients get with me</h2>
            </div>
          </div>
          <div className="tech-grid">
            {techGroups.map(([title, summary]) => (
              <div className="tech-card" key={title}>
                <Layers3 size={20} />
                <strong>{title}</strong>
                <span>{summary}</span>
              </div>
            ))}
          </div>
          <div className="skills-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="content-section proof-strip-section">
          <div className="proof-strip">
            {proofPoints.map(([title, summary]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{summary}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section process-section" id="process">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Process</p>
              <h2>How your project moves from idea to launch</h2>
            </div>
          </div>
          <div className="process-grid">
            {processSteps.map(([number, title, summary]) => (
              <div className="process-item" key={title}>
                <strong>{number}</strong>
                <h3>{title}</h3>
                <p>{summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section testimonials-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Trust</p>
              <h2>Trust signals for freelance buyers</h2>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className="rating-row" aria-label="Five star rating">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star key={item} size={15} fill="currentColor" />
                  ))}
                </div>
                <p>{testimonial.quote}</p>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section buyer-brief-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Project Brief</p>
              <h2>What to send me before we start</h2>
            </div>
          </div>
          <div className="brief-grid">
            <div className="brief-card">
              <ClipboardCheck size={24} />
              <h3>Send these details</h3>
              <ul>
                {buyerChecklist.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="brief-cta">
              <p className="section-kicker">Fastest contact</p>
              <h3>Message me on WhatsApp with your idea.</h3>
              <p>
                I will reply with the likely scope, timeline, and next step.
              </p>
              <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
                Message on WhatsApp
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="content-section faq-section">
          <div className="section-heading">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2>Common questions before hiring</h2>
            </div>
          </div>
          <div className="faq-grid">
            {faqs.map(([question, answer]) => (
              <article className="faq-card" key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section final-cta-section">
          <div className="final-cta">
            <div>
              <p className="section-kicker">Ready to build?</p>
              <h2>Send your idea today. I will turn it into a clear MERN project plan.</h2>
              <p>
                Best for landing pages, dashboards, SaaS MVPs, e-commerce flows,
                admin panels, API integration, and existing project fixes.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp Now
                <WhatsAppIcon size={18} />
              </a>
              <a className="secondary-button" href={`mailto:${contactEmail}`}>
                Email Me
                <Mail size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="content-section contact-section" id="contact">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <h2>Have a project idea or role in mind?</h2>
            <p>
              Send a quick message or reach me on WhatsApp for a faster response.
            </p>
            <div className="contact-lines">
              <a href={`mailto:${contactEmail}`}>
                <Mail size={18} />
                {contactEmail}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <PhoneCall size={18} />
                {whatsappNumber} (WhatsApp)
              </a>
              <span>
                <MapPin size={18} />
                Bangladesh
              </span>
            </div>
            <div className="social-links">
              <a href="#" aria-label="GitHub profile">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                required
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows="5"
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                placeholder="Tell me about your project"
              />
            </label>
            <button className="primary-button" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
            {status === "sent" && <p className="form-note success">Message sent successfully.</p>}
            {status === "error" && (
              <p className="form-note error">
                Message could not be saved here. Please email me or use WhatsApp for the fastest reply.
              </p>
            )}
          </form>
        </section>
      </main>
      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Message Harun on WhatsApp">
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
}

export default App;

createRoot(document.getElementById("root")).render(<App />);
