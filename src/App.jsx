import { useEffect, useState } from 'react'
import webDevelopmentPhoto from './assets/services/web-development.jpg'
import systemDevelopmentPhoto from './assets/services/system-development.jpg'
import itConsultingPhoto from './assets/services/it-consulting.jpg'
import systemMaintenancePhoto from './assets/services/system-maintenance.jpg'
import dataAnalyticsPhoto from './assets/services/data-analytics.jpg'
import './App.css'

const services = [
  {
    number: '01',
    slug: 'web-development',
    title: 'Web development',
    summary: 'Custom web apps, e-commerce, and responsive sites designed around your customers.',
    detail:
      'We plan, design, and build business websites, e-commerce stores, and custom web applications. Work can include page structure and responsive layouts, customer journeys, enquiry or booking forms, content management, payment and third-party integrations, and testing across common screen sizes. We agree the scope, content responsibilities, and launch requirements with you before development.',
    outcomes: ['Responsive website or application tailored to your goals', 'E-commerce, enquiry, booking, or other agreed features', 'Testing, launch support, and a maintainable handover'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js'],
    plan: {
      positioning: {
        title: 'Positioning: clear, customer-focused websites',
        intro: 'A website should quickly explain what your business offers, who it helps, and how a visitor can take the next step.',
        points: [
          'Lead with a clear value proposition and describe services in terms of customer outcomes.',
          'Build confidence with your real team expertise, approved project examples, credentials, and testimonials.',
          'Make the primary action easy to find, such as an enquiry, booking, or quote request.',
        ],
      },
      requirements: [
        { area: 'Brand', information: 'Approved logo files, brand colours, fonts, imagery, and tagline if available.' },
        { area: 'Company', information: 'Business overview, services, target customers, team information, and any approved company details.' },
        { area: 'Contact', information: 'Preferred phone, WhatsApp, enquiry email, address, opening hours, and location details.' },
        { area: 'Services & pricing', information: 'Confirmed service descriptions, sectors served, and any prices or packages approved for publication.' },
        { area: 'Proof', information: 'Project examples, testimonials, credentials, and client names or logos approved for use.' },
        { area: 'Accounts', information: 'Domain or hosting access, social profile URLs, and any analytics or search accounts to connect.' },
      ],
      structureTitle: 'Website pages',
      structure: [
        { title: 'Home', information: 'Core message, service overview, reasons to choose you, relevant examples, and a clear contact action.' },
        { title: 'About', information: 'Business story, team expertise, values, and other approved details that build trust.' },
        { title: 'Services', information: 'A clear overview of each service, its outcomes, and links to further details or an enquiry.' },
        { title: 'Pricing', information: 'Approved packages or starting prices where supplied; otherwise, invite visitors to request a quote.' },
        { title: 'Portfolio / use cases', information: 'Selected projects showing the challenge, work completed, and result, subject to your approval.' },
        { title: 'Insights', information: 'Optional articles or updates. Initial content and any publishing workflow are agreed in scope.' },
        { title: 'Contact', information: 'Enquiry options, contact details, and an agreed form or direct messaging link.' },
      ],
      included: [
        'Mobile-first, responsive page layouts.',
        'On-page SEO basics, including page titles and meta descriptions; sitemap setup where applicable.',
        'Analytics or search-console connection when requested and account access is provided.',
        'Social account links supplied by you, plus contact and enquiry paths agreed for the site.',
        'Privacy-policy page placement using text supplied or approved by you; legal advice and policy drafting are not implied.',
        'Testing of agreed page layouts and features, plus launch and handover tasks defined in the project scope.',
      ],
    },
    visual: 'browser',
    image: webDevelopmentPhoto,
    imageAlt: 'Laptop displaying a code editor at a web developer workstation',
  },
  {
    number: '02',
    slug: 'system-development',
    title: 'System development',
    summary: 'Tailored software, internal business tools, and API integrations.',
    detail:
      'When standard software does not fit, we design and build tailored applications around your workflows. This can include internal portals, operational tools, role-based access, data capture, and API integrations that connect existing business systems. We clarify user roles, data needs, integrations, and acceptance criteria before implementation, then test the agreed workflows.',
    outcomes: ['Custom internal tools aligned to documented workflows', 'API integrations between compatible business systems', 'Tested features and technical handover'],
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'REST APIs'],
    plan: {
      positioning: {
        title: 'Positioning: software shaped around your workflows',
        intro: 'A purpose-built system is most useful when it solves a specific operational problem and fits the way people already need to work.',
        points: [
          'Start with the business process, users, and outcomes rather than choosing technology first.',
          'Prioritise the essential workflow and agree what belongs in the first release.',
          'Connect existing tools where integrations are feasible, secure, and approved.',
        ],
      },
      requirements: [
        { area: 'Business goals', information: 'The process to improve, current pain points, desired outcomes, and how success will be assessed.' },
        { area: 'Users & access', information: 'User groups, roles, permissions, approval steps, and accessibility or device needs.' },
        { area: 'Data', information: 'Required records, existing data sources, data ownership, retention, and migration expectations.' },
        { area: 'Integrations', information: 'Systems to connect, available API documentation, account owners, and third-party approvals.' },
        { area: 'Security & constraints', information: 'Hosting preferences, security requirements, compliance considerations, budget, and target dates.' },
        { area: 'Decision makers', information: 'Project contacts, reviewers, acceptance criteria, and the people who will support the system after launch.' },
      ],
      structureTitle: 'System components',
      structure: [
        { title: 'Discovery & requirements', information: 'Map the current workflow, user needs, constraints, and agreed first-release scope.' },
        { title: 'Experience & architecture', information: 'Define key screens, data structures, permissions, and how the system components fit together.' },
        { title: 'Core application', information: 'Build the agreed user-facing features and operational workflows.' },
        { title: 'Integrations', information: 'Connect selected external systems where access, documentation, and technical fit are confirmed.' },
        { title: 'Testing & release', information: 'Validate agreed workflows, resolve in-scope issues, and plan deployment and rollback responsibilities.' },
        { title: 'Handover', information: 'Provide agreed technical notes, user guidance, and ownership or support arrangements.' },
      ],
      included: [
        'A written scope, assumptions, and acceptance criteria agreed before implementation.',
        'A technology selection based on requirements and documented with the project approach.',
        'Review points for agreed workflows and progress communication during delivery.',
        'Testing of the features and integrations included in the approved scope.',
        'A handover covering the deliverables and next steps agreed for the project.',
      ],
    },
    visual: 'systems',
    image: systemDevelopmentPhoto,
    imageAlt: 'Close-up of a detailed computer circuit board',
  },
  {
    number: '03',
    slug: 'it-consulting',
    title: 'IT consulting',
    summary: 'Digital transformation strategy, tech stack advice, and architecture planning.',
    detail:
      'Get independent, practical guidance before committing significant time and budget. We review your goals, existing systems, constraints, and priorities, then document options for digital transformation, technology choices, integrations, and system architecture. Recommendations explain trade-offs and next steps; any implementation work is separately scoped and agreed.',
    outcomes: ['Discovery of business needs and existing technology', 'Documented options, trade-offs, and recommendations', 'Architecture direction and a prioritised next-step plan'],
    technologies: ['JavaScript / TypeScript', 'Python', 'Java', 'SQL', 'Cloud platforms', 'APIs'],
    plan: {
      positioning: {
        title: 'Positioning: informed technology decisions',
        intro: 'Consulting helps your team make practical technology choices with a clearer view of needs, constraints, trade-offs, and delivery effort.',
        points: [
          'Assess business priorities and current technology before recommending a direction.',
          'Compare viable options with their benefits, risks, costs, and dependencies.',
          'Provide a roadmap or architecture recommendation that can be reviewed before implementation.',
        ],
      },
      requirements: [
        { area: 'Objectives', information: 'The decision or challenge to address, desired outcomes, urgency, and measures of success.' },
        { area: 'Current environment', information: 'Existing applications, infrastructure, vendors, integrations, and known technical limitations.' },
        { area: 'People & process', information: 'Stakeholders, user needs, team capabilities, decision owners, and affected workflows.' },
        { area: 'Constraints', information: 'Budget range, timeline, security or compliance needs, procurement rules, and operational limits.' },
        { area: 'Available evidence', information: 'Existing plans, diagrams, incident history, contracts, system documentation, or relevant data.' },
        { area: 'Engagement', information: 'Preferred workshop format, access arrangements, expected recommendations, and review participants.' },
      ],
      structureTitle: 'Consulting engagement',
      structure: [
        { title: 'Discovery', information: 'Agree the problem statement, objectives, stakeholders, scope, and information needed.' },
        { title: 'Current-state review', information: 'Review the relevant systems, processes, documentation, risks, and constraints.' },
        { title: 'Options & trade-offs', information: 'Compare suitable approaches, dependencies, and considerations against your priorities.' },
        { title: 'Recommendation', information: 'Present a reasoned direction with assumptions, risks, and proposed next steps.' },
        { title: 'Roadmap & handover', information: 'Document priorities, decision points, and implementation work that may need separate scoping.' },
      ],
      included: [
        'A clearly defined consulting question, scope, and expected outputs.',
        'Recommendations tied to the information and constraints available during the engagement.',
        'Trade-offs and assumptions stated alongside the proposed direction.',
        'A review of findings with your nominated stakeholders.',
        'Implementation, procurement, and ongoing support scoped separately unless explicitly included.',
      ],
    },
    visual: 'consulting',
    image: itConsultingPhoto,
    imageAlt: 'A team collaborating around laptops during a technology planning session',
  },
  {
    number: '04',
    slug: 'system-maintenance',
    title: 'System maintenance',
    summary: 'Security updates, uptime monitoring, bug fixes, and SLA retainers.',
    detail:
      'Keep business-critical websites and applications reliable with maintenance tailored to the existing system. After reviewing the codebase and hosting setup, agreed work may include dependency and security updates, backups, uptime checks, bug investigation, performance improvements, and release support. Response times, access, exclusions, and any ongoing retainer terms are agreed in writing.',
    outcomes: ['Planned updates and agreed health or uptime checks', 'Bug investigation, fixes, and release support', 'Documented maintenance scope and response terms'],
    technologies: ['Existing project stack', 'JavaScript / TypeScript', 'Python', 'Java', 'SQL', 'Git'],
    plan: {
      positioning: {
        title: 'Positioning: reliable, maintainable systems',
        intro: 'Maintenance is planned around the actual system, its business importance, and the support expectations agreed with you.',
        points: [
          'Understand the existing code, hosting, dependencies, and operational risks before proposing work.',
          'Prioritise fixes and updates by impact, compatibility, and available testing or recovery options.',
          'Set clear boundaries for response times, planned work, access, and out-of-scope incidents.',
        ],
      },
      requirements: [
        { area: 'System inventory', information: 'Applications, versions, repositories, hosting providers, domains, and critical dependencies.' },
        { area: 'Access & ownership', information: 'Authorised technical contacts, account access process, permissions, and system owners.' },
        { area: 'Known issues', information: 'Open bugs, incidents, recurring problems, performance concerns, and previous changes.' },
        { area: 'Operations', information: 'Backup and recovery arrangements, monitoring, deployment process, and maintenance windows.' },
        { area: 'Security & policy', information: 'Security requirements, update approvals, data handling rules, and compliance obligations.' },
        { area: 'Support expectations', information: 'Priority levels, contact route, coverage hours, target response terms, and exclusions to agree.' },
      ],
      structureTitle: 'Maintenance plan',
      structure: [
        { title: 'Onboarding & system review', information: 'Confirm access, document the environment, and identify immediate maintenance risks.' },
        { title: 'Baseline & priorities', information: 'Agree system health checks, update priorities, backup status, and a work schedule.' },
        { title: 'Updates & fixes', information: 'Perform approved dependency updates, bug fixes, and maintenance tasks within scope.' },
        { title: 'Monitoring & recovery', information: 'Configure or review agreed checks and document escalation or recovery responsibilities.' },
        { title: 'Testing & releases', information: 'Validate changes using available test environments and agree release windows and rollback steps.' },
        { title: 'Service review', information: 'Share work completed, known risks, and recommended follow-up at the agreed cadence.' },
      ],
      included: [
        'An initial review and a written maintenance scope with clear exclusions.',
        'Change approval and access arrangements agreed before maintenance work.',
        'Testing and deployment steps proportionate to the environment and agreed scope.',
        'Incident communication and response targets only as documented in the service terms.',
        'Ongoing monitoring, hosting fees, emergency coverage, and service-level commitments only when explicitly agreed.',
      ],
    },
    visual: 'maintenance',
    image: systemMaintenancePhoto,
    imageAlt: 'Rows of servers and network cables inside a data center',
  },
  {
    number: '05',
    slug: 'data-analytics',
    title: 'Data analytics',
    summary: 'Business intelligence dashboards, data visualization, and reporting pipelines.',
    detail:
      'Turn business data into reliable reports that support day-to-day decisions. We help identify useful measures, organise and transform available data, build reporting pipelines, and present results through clear dashboards or visualisations. Data sources, definitions, refresh frequency, access, and validation checks are agreed around your reporting needs.',
    outcomes: ['Dashboards and visualisations based on agreed measures', 'Data preparation and repeatable reporting pipelines', 'Documented definitions and data quality checks'],
    technologies: ['SQL', 'Python', 'Power BI', 'Tableau', 'Looker Studio'],
    plan: {
      positioning: {
        title: 'Positioning: clear, decision-ready information',
        intro: 'Analytics work starts with the decisions your team needs to make and the data available to support them.',
        points: [
          'Define measures in business terms so report users understand what each number represents.',
          'Use suitable data sources and repeatable transformations rather than relying on unexplained manual steps.',
          'Present findings in a format and refresh cycle that fits the intended users and decisions.',
        ],
      },
      requirements: [
        { area: 'Questions & decisions', information: 'The questions reports should answer, their users, and decisions they need to support.' },
        { area: 'Measures', information: 'Definitions, targets, calculation rules, reporting periods, and metric owners.' },
        { area: 'Data sources', information: 'Source systems, sample files, data owners, data dictionaries, and update schedules.' },
        { area: 'Access & governance', information: 'Permissions, sensitive-data handling, retention rules, and any compliance requirements.' },
        { area: 'Quality & history', information: 'Known gaps, duplicates, historical coverage, data corrections, and validation expectations.' },
        { area: 'Delivery', information: 'Preferred dashboard or report tools, user groups, refresh frequency, and hosting constraints.' },
      ],
      structureTitle: 'Analytics solution',
      structure: [
        { title: 'Discovery & metric definitions', information: 'Agree report users, decisions, measures, terminology, and success criteria.' },
        { title: 'Source & quality review', information: 'Check data availability, access, completeness, consistency, and known limitations.' },
        { title: 'Data preparation', information: 'Design agreed cleaning, transformation, and repeatable reporting steps.' },
        { title: 'Dashboard & reporting', information: 'Build visualisations and reports around the approved measures and audiences.' },
        { title: 'Validation', information: 'Compare outputs with source records and confirm calculations with data owners.' },
        { title: 'Handover', information: 'Document metric definitions, data assumptions, refresh steps, and agreed maintenance needs.' },
      ],
      included: [
        'Documented measures, assumptions, source data, and agreed reporting scope.',
        'Data validation checks proportionate to the available sources and requirements.',
        'A report or dashboard in the agreed tool and format.',
        'Review of results with nominated stakeholders before handover.',
        'Data licensing, third-party subscriptions, and ongoing refresh operations only when agreed.',
      ],
    },
    visual: 'analytics',
    image: dataAnalyticsPhoto,
    imageAlt: 'Laptop displaying business intelligence charts and analytics',
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg aria-hidden="true" className="arrow-icon" fill="none" viewBox="0 0 20 20">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3 10h13m-5-5 5 5-5 5" />}
    </svg>
  )
}

function SocialIcon({ platform }) {
  const iconPaths = {
    Instagram: <><rect height="16" rx="4" width="16" x="4" y="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17.5" cy="6.5" fill="currentColor" r="1" stroke="none" /></>,
    LinkedIn: <><path d="M5 9v10M5 5v.1M10 19v-6a3 3 0 0 1 6 0v6M10 9v10M4 9h2M4 19h2M10 9h2" /><path d="M16 19h4v-6a5 5 0 0 0-8-4" /></>,
  }

  return (
    <svg aria-hidden="true" className="social-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
      {iconPaths[platform]}
    </svg>
  )
}

function Brand({ onNavigate, footer = false }) {
  return (
    <a aria-label="Atom Technologies home" className={`wordmark${footer ? ' footer-wordmark' : ''}`} href="/" onClick={(event) => onNavigate(event, '/')}>
      <span className="wordmark-symbol" aria-hidden="true">A</span>
      <span>ATOM TECHNOLOGIES<span className="wordmark-period">.</span></span>
    </a>
  )
}

function GlobeVisual() {
  return (
    <div aria-label="Animated digital globe surrounded by orbiting technology signals" className="hero-art" role="img">
      <div className="art-grid" />
      <div className="globe-scene">
        <div className="art-orbit art-orbit-one"><i /></div>
        <div className="art-orbit art-orbit-two"><i /></div>
        <div className="art-orbit art-orbit-three"><i /></div>
        <div className="globe">
          <div className="globe-land" />
          <div className="globe-shine" />
          <div className="globe-latitude" />
          <div className="globe-longitude" />
        </div>
        <span className="orbit-satellite satellite-one" />
        <span className="orbit-satellite satellite-two" />
        <span className="orbit-satellite satellite-three" />
      </div>
      <span className="art-coordinate coordinate-top">AT / 001</span>
      <span className="art-coordinate coordinate-bottom">TECHNOLOGY / PEOPLE</span>
      <span className="art-index">WE BRING YOUR IDEAS TO LIFE</span>
      <span aria-hidden="true" className="art-crosshair crosshair-top">+</span>
      <span aria-hidden="true" className="art-crosshair crosshair-bottom">+</span>
    </div>
  )
}

function WorkstationVisual() {
  return (
    <div aria-label="Illustration of a modern computer workstation showing a website, system dashboard, and analytics" className="workstation" role="img">
      <div className="workstation-glow" />
      <div className="monitor monitor-main">
        <div className="screen-top"><span /><span /><span /><i>ATOM / WORKSPACE</i></div>
        <div className="screen-layout">
          <div className="screen-sidebar"><b /><i /><i /><i /><i /></div>
          <div className="screen-content">
            <div className="screen-heading"><i /><b /></div>
            <div className="screen-panels"><i /><i /><i /></div>
            <div className="screen-chart"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <div className="monitor monitor-side">
        <div className="screen-top"><span /><span /><span /><i>INSIGHTS / LIVE</i></div>
        <div className="side-chart"><i /><i /><i /><i /><i /><i /></div>
        <div className="side-readout"><b>+28.4%</b><i /></div>
      </div>
      <div className="workstation-base" />
      <div className="floating-chip chip-one"><span>WEB</span><b>01</b><i /></div>
      <div className="floating-chip chip-two"><span>SYSTEMS</span><b>02</b><i /></div>
      <div className="floating-chip chip-three"><span>DATA</span><b>03</b><i /></div>
      <div className="workstation-floor" />
    </div>
  )
}

function ServiceVisual({ type }) {
  return (
    <div aria-hidden="true" className={`service-visual visual-${type}`}>
      {type === 'browser' && (
        <div className="visual-window">
          <div className="visual-window-bar"><i /><i /><i /><span>yourbusiness.co</span></div>
          <div className="visual-browser-layout"><div><b>Make your next move.</b><i /><i /><span>EXPLORE</span></div><aside><i /><i /><i /></aside></div>
        </div>
      )}
      {type === 'systems' && (
        <div className="visual-dashboard"><div className="visual-dash-sidebar"><i /><i /><i /><i /></div><div className="visual-dash-main"><b /><div><i /><i /><i /></div><span><i /><i /><i /><i /><i /><i /><i /></span></div></div>
      )}
      {type === 'consulting' && (
        <div className="visual-network"><i /><i /><i /><i /><i /><b /><span /><span /><span /></div>
      )}
      {type === 'maintenance' && (
        <div className="visual-maintenance"><div className="maintenance-ring"><i /></div><b>SYSTEM<br />HEALTHY</b><span>ALL SYSTEMS OPERATIONAL</span></div>
      )}
      {type === 'analytics' && (
        <div className="visual-analytics"><div className="analytics-label"><i /><i /></div><div className="analytics-bars"><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="analytics-line"><i /></div></div>
      )}
      <span className="visual-cross visual-cross-one">+</span>
      <span className="visual-cross visual-cross-two">+</span>
    </div>
  )
}

function ServicePlan({ service }) {
  const { plan } = service

  return (
    <section aria-labelledby="service-plan-title" className="service-plan section-wrap">
      <div className="service-plan-heading">
        <p className="section-kicker">A practical plan / {service.title}</p>
        <h2 id="service-plan-title">How we make it<br /><span>work for you.</span></h2>
      </div>

      <section className="plan-section plan-positioning">
        <p className="section-kicker">02 / Positioning</p>
        <h3>{plan.positioning.title}</h3>
        <p className="plan-intro">{plan.positioning.intro}</p>
        <ul className="plan-points">
          {plan.positioning.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="plan-section">
        <p className="section-kicker">03 / Project inputs</p>
        <h3>What we need from you</h3>
        <div className="plan-table-wrap">
          <table className="plan-table">
            <thead><tr><th scope="col">Area</th><th scope="col">Information or assets required</th></tr></thead>
            <tbody>
              {plan.requirements.map((item) => (
                <tr key={item.area}><th scope="row">{item.area}</th><td>{item.information}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="plan-section">
        <p className="section-kicker">04 / Scope outline</p>
        <h3>{plan.structureTitle}</h3>
        <div className="plan-table-wrap">
          <table className="plan-table">
            <thead><tr><th scope="col">Component</th><th scope="col">Purpose and key content</th></tr></thead>
            <tbody>
              {plan.structure.map((item) => (
                <tr key={item.title}><th scope="row">{item.title}</th><td>{item.information}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="plan-section plan-included">
        <p className="section-kicker">05 / Delivery expectations</p>
        <h3>Included as standard</h3>
        <ul className="plan-points">
          {plan.included.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </section>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    function handlePopState() {
      setPathname(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function navigate(event, href) {
    if (event) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
      event.preventDefault()
    }
    const destination = new URL(href, window.location.origin)
    if (destination.pathname !== window.location.pathname) {
      window.history.pushState({}, '', `${destination.pathname}${destination.search}${destination.hash}`)
      setPathname(destination.pathname)
    } else if (destination.hash || destination.search) {
      window.history.pushState({}, '', `${destination.pathname}${destination.search}${destination.hash}`)
    }
    setMenuOpen(false)
    window.setTimeout(() => {
      if (destination.hash) {
        document.querySelector(destination.hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 0)
  }

  const isServices = pathname === '/services'
  const isContact = pathname === '/contact'
  const isQuote = pathname === '/get-quote'
  const serviceSlug = pathname.startsWith('/services/') ? pathname.slice('/services/'.length) : ''
  const selectedServicePage = services.find((service) => service.slug === serviceSlug)
  const isServiceDetail = Boolean(serviceSlug)
  const requestedService = new URLSearchParams(window.location.search).get('service')

  useEffect(() => {
    document.title = selectedServicePage
      ? `${selectedServicePage.title} | Atom Technologies`
      : isServices
        ? 'Our Services | Atom Technologies'
        : isContact
          ? 'Contacts | Atom Technologies'
          : isQuote
            ? 'Get a Quote for Free | Atom Technologies'
            : 'Atom Technologies — We bring your ideas to life'
    if (!window.location.hash) return undefined
    const scrollToHash = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
    return () => window.clearTimeout(scrollToHash)
  }, [pathname, isContact, isQuote, isServices, selectedServicePage])

  function pageLink(href, text, className = '', key) {
    return <a className={className} href={href} key={key} onClick={(event) => navigate(event, href)}>{text}</a>
  }

  function sendEmail(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const sender = formData.get('email')
    const company = formData.get('company')
    const serviceSlug = formData.get('service')
    const service = services.find((item) => item.slug === serviceSlug)?.title ?? serviceSlug
    const budget = formData.get('budget')
    const message = formData.get('message')
    const subject = `Website enquiry: ${service}`
    const body = `Hello Atom Technologies,\n\n${message}\n\nService needed: ${service}\nEstimated budget: ${budget || 'Not provided'}\nCompany: ${company || 'Not provided'}\nName: ${name}\nEmail: ${sender}`
    window.location.href = `mailto:simbarasheckmarufu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <div aria-hidden="true" className="ambient-background"><span /><span /><span /></div>
      <header className="site-header">
        <Brand onNavigate={navigate} />
        <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} className={`menu-toggle${menuOpen ? ' is-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} type="button">
          <span /><span />
        </button>
        <nav aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {pageLink('/', 'Home')}
          {pageLink('/services', 'Services')}
          {pageLink('/contact', 'Contacts')}
          {pageLink('/#about', 'About Us')}
          {pageLink('/get-quote', 'Get A Quote For Free', 'nav-contact')}
        </nav>
      </header>

      {isServices ? (
        <main>
          <section className="page-intro section-wrap">
            <p className="section-kicker">Atom Technologies / Services</p>
            <h1>Technology with<br /><span>purpose.</span></h1>
            <p>Practical digital solutions, thoughtfully built around the people and businesses that use them.</p>
            {pageLink('/get-quote#quote', <>Get Quote for Free <ArrowIcon diagonal /></>, 'quote-button')}
          </section>
          <section aria-label="Detailed services" className="service-details section-wrap">
            {services.map((service) => (
              <article className="service-detail" id={service.slug} key={service.number}>
                <ServiceVisual type={service.visual} />
                <div className="service-detail-copy">
                  <p className="section-kicker">{service.number} / Atom Technologies</p>
                  <h2>{service.title}</h2>
                  <p className="service-summary">{service.summary}</p>
                  <p className="service-description">{service.detail}</p>
                    <div className="service-technologies"><span>Typical languages &amp; technologies</span><p>{service.technologies.join(' · ')}</p><small>Examples only; final choices depend on your project and are agreed during planning.</small></div>
                    <ul>{service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                  {pageLink(`/services/${service.slug}`, <>Explore {service.title} <ArrowIcon /></>, 'text-link service-learn-more')}
                  {pageLink(`/get-quote?service=${service.slug}#quote`, <>Get Quote for Free <ArrowIcon /></>, 'text-link')}
                </div>
              </article>
            ))}
          </section>
          <section className="closing-banner section-wrap">
            <p className="section-kicker">Ready when you are</p>
            <h2>Let&apos;s bring your<br /><span>idea to life.</span></h2>
            {pageLink('/get-quote#quote', <>Get Quote for Free <ArrowIcon diagonal /></>, 'contact-link')}
          </section>
        </main>
      ) : isServiceDetail && selectedServicePage ? (
        <main>
          <section aria-labelledby="service-page-title" className="service-page-hero">
            <div className="service-page-photo">
              <img alt={selectedServicePage.imageAlt} className="service-page-image" src={selectedServicePage.image} />
            </div>
            <div className="service-page-shade" />
            <div className="section-wrap service-page-hero-content">
              {pageLink('/services', <>All services <ArrowIcon /></>, 'service-back-link')}
              <p className="section-kicker">{selectedServicePage.number} / Atom Technologies services</p>
              <h1 id="service-page-title">{selectedServicePage.title}</h1>
              <p>{selectedServicePage.summary}</p>
              {pageLink(`/get-quote?service=${selectedServicePage.slug}#quote`, <>Get Quote for Free <ArrowIcon diagonal /></>, 'quote-button')}
            </div>
            <span className="service-photo-caption">{selectedServicePage.slug.replaceAll('-', ' ')} / ATOM TECHNOLOGIES</span>
          </section>

          <section className="service-page-content section-wrap">
            <div className="service-page-description">
              <p className="section-kicker">01 / Summary</p>
              <h2>Summary</h2>
              <p>{selectedServicePage.detail}</p>
              <p>We start by understanding what you need, then agree a clear scope, deliverables, and approach before work begins. The result is shaped around your requirements, your people, and the way your business operates.</p>
            </div>
            <aside className="service-outcomes">
              <p className="section-kicker">What we can help with</p>
              <ul>{selectedServicePage.outcomes.map((outcome) => <li key={outcome}><span>↗</span>{outcome}</li>)}</ul>
              <div className="service-technologies"><span>Typical languages &amp; technologies</span><p>{selectedServicePage.technologies.join(' · ')}</p><small>Examples only; final choices depend on your project and are agreed during planning.</small></div>
              {pageLink(`/get-quote?service=${selectedServicePage.slug}#quote`, <>Request a quote <ArrowIcon diagonal /></>, 'quote-button')}
            </aside>
          </section>

          <ServicePlan service={selectedServicePage} />

          <section className="service-page-next section-wrap">
            <p className="section-kicker">More from Atom Technologies</p>
            <div className="service-page-next-links">
              {services.filter((service) => service.slug !== selectedServicePage.slug).slice(0, 2).map((service) => pageLink(`/services/${service.slug}`, <>{service.title}<ArrowIcon diagonal /></>, 'next-service-link', service.slug))}
            </div>
          </section>
        </main>
      ) : isServiceDetail ? (
        <main className="section-wrap service-not-found">
          <p className="section-kicker">Atom Technologies / Services</p>
          <h1>Service not found<span className="red-period">.</span></h1>
          <p>That service page is unavailable. Browse our services to find the right one for your project.</p>
          {pageLink('/services', <>Browse services <ArrowIcon /></>, 'quote-button')}
        </main>
      ) : isContact ? (
        <main>
          <section className="page-intro contact-page-intro section-wrap">
            <p className="section-kicker">Atom Technologies / Contacts</p>
            <h1>We&apos;re here<br /><span>to help.</span></h1>
            <p>Reach out directly using the details below, or follow us on social media.</p>
          </section>
          <section className="contact-page contact-details-only section-wrap">
            <div className="contact-details">
              <p className="section-kicker">Get in touch</p>
              <h2>Talk to a real person.</h2>
              <p>Contact Atom Technologies by email, phone, or WhatsApp. We&apos;re based in Harare and available for enquiries.</p>
              <a className="contact-detail-link" href="mailto:simbarasheckmarufu@gmail.com"><span>Email</span>simbarasheckmarufu@gmail.com<ArrowIcon diagonal /></a>
              <a className="contact-detail-link" href="tel:+263713597242"><span>Phone</span>+263 71 359 7242<ArrowIcon diagonal /></a>
              <a className="contact-detail-link" href="https://wa.me/263713597242" rel="noreferrer" target="_blank"><span>WhatsApp</span>Message us on WhatsApp<ArrowIcon diagonal /></a>
              <div className="contact-detail-link"><span>Location</span>Harare, Zimbabwe</div>
              <div className="contact-location-visual"><span>ATOM / HARARE</span><b>17°49&apos;S<br />31°03&apos;E</b><i /></div>
            </div>
            <div className="contact-socials">
              <p className="section-kicker">Connect with us</p>
              <h2>Find us on social.</h2>
              <p className="contact-social-intro">Follow our profiles to keep in touch with Atom Technologies.</p>
              <div className="contact-social-links">
                <a aria-label="Visit Atom Technologies on Instagram" href="https://www.instagram.com/thee.lion.king/" rel="noreferrer" target="_blank">
                  <SocialIcon platform="Instagram" /><span>Instagram</span><ArrowIcon diagonal />
                </a>
                <a aria-label="Visit Simbarashe Marufu on LinkedIn" href="https://www.linkedin.com/in/simbarashe-ck-marufu-549a90370/" rel="noreferrer" target="_blank">
                  <SocialIcon platform="LinkedIn" /><span>LinkedIn</span><ArrowIcon diagonal />
                </a>
              </div>
            </div>
          </section>
        </main>
      ) : isQuote ? (
        <main>
          <section className="page-intro contact-page-intro section-wrap">
            <p className="section-kicker">Atom Technologies / Get a quote</p>
            <h1>Get Quote<br /><span>for free.</span></h1>
            <p>Tell us what you are working on. We&apos;ll be glad to hear about your idea and discuss how we can help.</p>
          </section>
          <section className="contact-page quote-page section-wrap">
            <form className="contact-form" id="quote" onSubmit={sendEmail}>
              <p className="section-kicker">Get a quote / Send an enquiry</p>
              <label htmlFor="name">Your name</label>
              <input autoComplete="name" id="name" name="name" placeholder="Name" required />
              <label htmlFor="email">Email address</label>
              <input autoComplete="email" id="email" name="email" placeholder="you@company.com" required type="email" />
              <label htmlFor="company">Company <span className="optional-label">Optional</span></label>
              <input autoComplete="organization" id="company" name="company" placeholder="Company or organisation" />
              <label htmlFor="service">What can we help with?</label>
              <select defaultValue={requestedService || ''} id="service" name="service" required>
                <option disabled value="">Choose a service</option>
                {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                <option value="Other enquiry">Something else</option>
              </select>
              <label htmlFor="budget">Estimated budget <span className="optional-label">Optional</span></label>
              <input id="budget" name="budget" placeholder="Amount and currency, or not sure yet" />
              <label htmlFor="message">Tell us a little about your project</label>
              <textarea id="message" name="message" placeholder="What would you like to build or improve?" required rows="5" />
              <button className="submit-button" type="submit">Get a quote <ArrowIcon diagonal /></button>
              <p className="form-note">Your email app will open with your message ready to send to Atom Technologies.</p>
            </form>
          </section>
        </main>
      ) : (
        <main>
          <section aria-labelledby="hero-title" className="hero-section" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> ATOM TECHNOLOGIES <span className="eyebrow-divider">/</span> Technology for business</div>
              <h1 id="hero-title">IDEAS<br /><span className="outline-word">TO LIFE</span><span className="red-period">.</span></h1>
              <div className="hero-bottom">
                <p className="hero-description">We bring your ideas to life</p>
                {pageLink('/get-quote#quote', <>Get Quote for Free <ArrowIcon /></>, 'quote-button')}
              </div>
            </div>
            <GlobeVisual />
            <div className="hero-meta"><span>Scroll to explore</span><span className="meta-line" /><span>Harare, Zimbabwe<span className="red-period">.</span></span></div>
          </section>

          <section aria-labelledby="expertise-title" className="work-section section-wrap" id="work">
            <div className="section-heading">
              <div><p className="section-kicker">01 / Our expertise</p><h2 id="expertise-title">Technology that <span>works for you.</span></h2></div>
              {pageLink('/services', <>View all services <ArrowIcon diagonal /></>, 'text-link desktop-link')}
            </div>
            <div className="project-grid">
              {services.slice(0, 3).map((service) => (
                <a className="project-card" href={`/services/${service.slug}`} key={service.number} onClick={(event) => navigate(event, `/services/${service.slug}`)}>
                  <ServiceVisual type={service.visual} />
                  <div className="project-info"><h3>{service.title}</h3><p>{service.summary}</p></div>
                </a>
              ))}
            </div>
          </section>

          <section className="showcase-section" id="about">
            <div className="section-wrap showcase-inner">
              <div className="showcase-copy">
                <p className="section-kicker">02 / About Atom Technologies</p>
                <h2>People first.<br /><span>Technology that fits.</span></h2>
                <p>Atom Technologies helps businesses turn ideas and operational challenges into useful digital solutions. We work across web development, custom business systems, IT consulting, system maintenance, and data analytics. We begin by understanding your goals, agree the scope and technologies with you, and keep communication clear throughout the work.</p>
                {pageLink('/services', <>See everything we do <ArrowIcon /></>, 'text-link')}
                <a className="text-link about-social-link" href="https://wa.me/263713597242" rel="noreferrer" target="_blank">Connect on WhatsApp <ArrowIcon diagonal /></a>
              </div>
              <WorkstationVisual />
              <span aria-hidden="true" className="showcase-watermark">AT / 01</span>
            </div>
          </section>

          <section aria-labelledby="trust-title" className="trust-section section-wrap">
            <div className="section-heading">
              <div><p className="section-kicker">04 / Confidence built in</p><h2 id="trust-title">A thoughtful partner.<br /><span>Clear from the start.</span></h2></div>
              <p className="services-intro">Good technical work starts with clear expectations, careful communication, and respect for your information.</p>
            </div>
            <div className="trust-grid">
              <article className="trust-card"><span>01 / PRIVACY</span><h3>Your information matters.</h3><p>We respect the privacy of the information you share with us and use project details to respond to your enquiry and discuss your needs.</p></article>
              <article className="trust-card"><span>02 / TECHNOLOGY</span><h3>Tools chosen for the job.</h3><p>We choose languages and tools to fit your goals, existing systems, and support needs. We explain the options and agree the technology stack during planning.</p><div aria-label="Example technologies" className="tech-stack"><span>React</span><span>Python</span><span>SQL</span><span>Java</span><span>APIs</span></div></article>
              <article className="trust-card"><span>03 / TRANSPARENCY</span><h3>Agree the details first.</h3><p>Project scope, ownership, support arrangements, and any uptime or service-level terms should be documented and agreed before work begins.</p></article>
            </div>
          </section>

          <section className="services-section section-wrap">
            <div className="section-heading">
              <div><p className="section-kicker">05 / What we do</p><h2>One partner.<br /><span>Five ways to move forward.</span></h2></div>
              <p className="services-intro">From your first website to the systems and support behind it.</p>
            </div>
            <div className="service-list">
              {services.map((service) => (
                <div className="service-row" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.summary}</p>{pageLink(`/services/${service.slug}`, <ArrowIcon diagonal />, 'service-row-link')}</div>
              ))}
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="section-wrap contact-inner">
              <p className="section-kicker">06 / Your next step</p>
              <h2>Have an idea?<br />Let&apos;s build it<span className="red-period">.</span></h2>
              {pageLink('/get-quote#quote', <>Get Quote for Free <ArrowIcon diagonal /></>, 'contact-link')}
              <span aria-hidden="true" className="contact-glow" />
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <Brand footer onNavigate={navigate} />
        <p>We bring your ideas to life. © 2026 Atom Technologies.</p>
        <div className="footer-contact"><a href="mailto:simbarasheckmarufu@gmail.com">Email us</a><a href="tel:+263713597242">Call us</a></div>
      </footer>
    </>
  )
}

export default App
