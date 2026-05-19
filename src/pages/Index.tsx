import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/ff9e56ad-4173-4b29-8389-1adead3af177.jpg";
const COMMERCIAL_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/d881a839-6c04-4c1d-a4a5-94882d471238.jpg";
const INTERIOR_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/2723bb1f-2ead-4c02-ba78-35a23f95fd99.jpg";

const navLinks = ["Services", "Portfolio", "About", "Testimonials", "Blog", "FAQ", "Contact"];

const services = [
  {
    icon: "Flame",
    title: "Gas Boiler Installation",
    desc: "Supply and installation of new gas boilers for homes and businesses. We fit all major brands with full commissioning and certification.",
    detail: "Gas Safe registered engineers",
  },
  {
    icon: "Home",
    title: "Residential Gas Services",
    desc: "Complete gas works for homes — pipework, gas fires, cooker connections, and new central heating system installs.",
    detail: "From flats to large family homes",
  },
  {
    icon: "Building2",
    title: "Commercial Gas Works",
    desc: "Industrial and commercial gas installations for offices, restaurants, warehouses and multi-unit developments.",
    detail: "Projects of any scale",
  },
  {
    icon: "Zap",
    title: "Emergency Gas Call-Out",
    desc: "24/7 rapid response for gas leaks, boiler breakdowns, and unsafe appliances. Our engineers arrive fast and make it safe.",
    detail: "Same-day response guaranteed",
  },
  {
    icon: "ClipboardCheck",
    title: "Gas Safety Certificates",
    desc: "Annual gas safety inspections and landlord certificates (CP12) for residential and commercial properties.",
    detail: "Legally required for landlords",
  },
  {
    icon: "Wrench",
    title: "Servicing & Maintenance",
    desc: "Regular boiler servicing to keep appliances running safely and efficiently, extending lifespan and preventing breakdowns.",
    detail: "Annual service plans available",
  },
];

const portfolio = [
  {
    img: HERO_IMG,
    label: "Residential",
    title: "Maple Road Development",
    desc: "New gas boiler installations across 18 residential properties, fully commissioned and certified.",
  },
  {
    img: COMMERCIAL_IMG,
    label: "Commercial",
    title: "Northpark Business Park",
    desc: "Full commercial gas pipework and meter installation for a 12-unit business complex.",
  },
  {
    img: INTERIOR_IMG,
    label: "Residential",
    title: "Lakewood Kitchen Fit-Out",
    desc: "Gas hob supply, connection and safety inspection for a full kitchen renovation.",
  },
];

const testimonials = [
  {
    name: "James Thornton",
    role: "Homeowner",
    text: "SM Climate replaced our old boiler quickly and professionally. The engineer was tidy, explained everything clearly, and we had heat back the same day.",
    stars: 5,
  },
  {
    name: "Sandra Mills",
    role: "Lettings Manager, Westside Realty",
    text: "We use SM Climate for all our landlord gas safety certificates. Always on time, thorough, and the paperwork is with us the same day.",
    stars: 5,
  },
  {
    name: "Derek Chung",
    role: "Restaurant Owner",
    text: "Called them out for an emergency gas issue at midnight. Engineer arrived within the hour, sorted it safely, and we opened on time next morning.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "Are your engineers Gas Safe registered?",
    a: "Yes. All our engineers are Gas Safe registered, which is a legal requirement for anyone working on gas appliances in the UK. You can verify our registration on the Gas Safe Register website.",
  },
  {
    q: "How often should I service my gas boiler?",
    a: "Manufacturers and gas safety experts recommend an annual boiler service. This keeps the appliance running safely and efficiently, and maintains your warranty.",
  },
  {
    q: "What is a Landlord Gas Safety Certificate (CP12)?",
    a: "It's a legal requirement for landlords to have all gas appliances inspected annually by a Gas Safe engineer. We issue the CP12 certificate on the same day as the inspection.",
  },
  {
    q: "What should I do if I smell gas?",
    a: "Don't use any switches or flames. Open windows, leave the property, and call the National Gas Emergency line on 0800 111 999. Then call us for a safe follow-up inspection.",
  },
  {
    q: "Do you offer finance on new boiler installations?",
    a: "Yes — we work with finance partners to offer monthly payment options on new boiler installs. Ask us for details when you request a quote.",
  },
];

const blogPosts = [
  {
    date: "May 12, 2026",
    tag: "Safety",
    title: "5 Warning Signs Your Boiler Needs Replacing",
    excerpt: "Strange noises, rising bills, and yellow flames are signs you shouldn't ignore. Here's what to look out for.",
  },
  {
    date: "Apr 28, 2026",
    tag: "Landlords",
    title: "Everything Landlords Need to Know About CP12 Certificates",
    excerpt: "A gas safety certificate isn't optional — here's what's required, when, and what happens if you miss it.",
  },
  {
    date: "Apr 10, 2026",
    tag: "Tips",
    title: "How to Reduce Your Gas Bill This Winter",
    excerpt: "Simple steps from our engineers — from boiler pressure to radiator bleeding — that make a real difference.",
  },
];

const stats = [
  { value: "500+", label: "Gas Jobs Completed" },
  { value: "5 yrs", label: "In Business" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Emergency Call-Out" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-white text-[#1a1a1a] overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8e8e8]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#1a3a5c] rounded-md flex items-center justify-center">
              <Icon name="Flame" size={16} className="text-white" />
            </div>
            <span className="font-serif text-xl text-[#1a3a5c] leading-none">
              SM<span className="text-[#e8851a]">Climate</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-[#555] hover:text-[#1a3a5c] transition-colors">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden lg:inline-flex items-center gap-2 bg-[#e8851a] hover:bg-[#d4740f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Get Free Quote
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-[#1a3a5c]" />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-[#e8e8e8] bg-white px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[#333]">{l}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#e8851a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg text-center">
              Get Free Quote
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 grid lg:grid-cols-2">
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-28">
            <div className="inline-flex items-center gap-2 bg-[#f0f6ff] border border-[#c8daf5] text-[#1a3a5c] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 w-fit animate-fade-in">
              <Icon name="BadgeCheck" size={13} />
              Gas Safe Registered Engineers
            </div>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-[#1a1f2c] mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Gas Services<br />
              <em className="not-italic text-[#1a3a5c]">Done Safely.</em>
            </h1>
            <p
              className="text-lg text-[#555] leading-relaxed max-w-md mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Expert gas installation, servicing, and safety inspections for residential and commercial properties. Certified, reliable, and available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] hover:bg-[#142e4a] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
                Get a Free Quote
                <Icon name="ArrowRight" size={16} />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 border border-[#d0d0d0] text-[#333] hover:border-[#1a3a5c] hover:text-[#1a3a5c] font-semibold px-7 py-3.5 rounded-lg transition-colors">
                View Our Work
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <div className="flex -space-x-2">
                {(["bg-[#e8851a]", "bg-[#1a3a5c]", "bg-[#4a7fa8]"] as const).map((c, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {["JT", "SM", "DC"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Icon key={i} name="Star" size={13} className="text-[#e8851a] fill-[#e8851a]" />)}
                </div>
                <p className="text-xs text-[#777]">Trusted by 3,100+ customers</p>
              </div>
            </div>
          </div>
          <div className="relative bg-[#f5f9ff] hidden lg:block">
            <img src={HERO_IMG} alt="Gas Engineer at Work" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            <div className="absolute bottom-12 left-8 bg-white rounded-2xl shadow-xl p-5 w-60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#e8f5e8] rounded-xl flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-[#2d8a2d]" />
                </div>
                <div>
                  <p className="text-xs text-[#888]">Just completed</p>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Maple Road, Unit 7</p>
                </div>
              </div>
              <div className="text-xs text-[#555]">Boiler install · Gas Safe certified</div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a3a5c] text-white">
          <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
            {stats.map(s => (
              <div key={s.label} className="text-center px-4 py-2 md:py-0">
                <div className="font-serif text-3xl text-[#f5b966]">{s.value}</div>
                <div className="text-xs text-white/70 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c]">Complete Gas Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.title} className="group border border-[#e8e8e8] rounded-2xl p-7 hover:border-[#1a3a5c] hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-[#f0f6ff] group-hover:bg-[#1a3a5c] rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon name={s.icon} size={22} className="text-[#1a3a5c] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg text-[#1a1f2c] mb-2">{s.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-block text-xs text-[#e8851a] font-semibold bg-[#fff5e8] px-3 py-1 rounded-full">{s.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-[#f8f9fb] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c]">Recent Projects</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map(p => (
              <div key={p.title} className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden h-56">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#1a3a5c] text-white text-xs font-semibold px-3 py-1.5 rounded-full">{p.label}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-[#1a1f2c] mb-2">{p.title}</h3>
                  <p className="text-[#666] text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={INTERIOR_IMG} alt="About SM Climate" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1a3a5c] text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="font-serif text-4xl text-[#f5b966]">18</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wide">Years in Gas</div>
            </div>
          </div>
          <div>
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c] mb-6 leading-tight">
              Safety First,<br />Every Single Job
            </h2>
            <p className="text-[#555] leading-relaxed mb-5">
              SM Climate has been delivering professional gas services since 2008. From a single-engineer operation, we've grown into a trusted gas company serving homeowners, landlords, and commercial clients across the region.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Every one of our engineers is Gas Safe registered and undergoes regular training. We don't cut corners — gas safety is not something we compromise on.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "BadgeCheck", text: "Gas Safe Registered" },
                { icon: "Shield", text: "Fully Insured" },
                { icon: "Clock", text: "24/7 Emergency Cover" },
                { icon: "Star", text: "5-Star Rated on Google" },
              ].map(f => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#f0f6ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={f.icon} size={17} className="text-[#1a3a5c]" />
                  </div>
                  <span className="text-sm font-medium text-[#333]">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-[#1a3a5c] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#f5b966] text-sm font-semibold uppercase tracking-widest mb-3">What Customers Say</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Real Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Icon key={i} name="Star" size={15} className="text-[#f5b966] fill-[#f5b966]" />
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-3">Knowledge Base</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c]">From Our Blog</h2>
            </div>
            <a href="#blog" className="hidden md:inline-flex items-center gap-2 text-[#1a3a5c] font-semibold text-sm hover:gap-3 transition-all">
              All Articles <Icon name="ArrowRight" size={16} />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map(b => (
              <article key={b.title} className="group cursor-pointer">
                <div className="bg-[#f8f9fb] rounded-2xl p-7 h-full hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs bg-[#f0f6ff] text-[#1a3a5c] font-semibold px-3 py-1 rounded-full">{b.tag}</span>
                    <span className="text-xs text-[#999]">{b.date}</span>
                  </div>
                  <h3 className="font-semibold text-[#1a1f2c] text-lg mb-3 group-hover:text-[#1a3a5c] transition-colors leading-snug">{b.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{b.excerpt}</p>
                  <div className="mt-6 flex items-center gap-1 text-[#e8851a] text-sm font-semibold">
                    Read More <Icon name="ArrowRight" size={14} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#f8f9fb] px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c]">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[#e8e8e8] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-[#1a1f2c] text-[0.95rem]">{f.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-[#888] flex-shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-[#555] text-sm leading-relaxed border-t border-[#f0f0f0] pt-4">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-4">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c] mb-6 leading-tight">
              Need a Gas<br />Engineer?
            </h2>
            <p className="text-[#555] leading-relaxed mb-10">
              Tell us about your job and we'll get back to you with a no-obligation quote within 24 hours. For emergencies, call us directly — we're available around the clock.
            </p>
            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Call Us", value: "(555) 842-0190" },
                { icon: "Mail", label: "Email", value: "info@smclimate.com" },
                { icon: "Flame", label: "Gas Emergency", value: "24/7 at (555) 842-0911" },
                { icon: "MapPin", label: "Service Area", value: "Metro + 60-mile radius" },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#f0f6ff] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-[#1a3a5c]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#999] uppercase tracking-wide font-medium">{c.label}</p>
                    <p className="text-[#1a1f2c] font-semibold text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#f8f9fb] rounded-3xl p-8 md:p-10">
            <h3 className="font-semibold text-xl text-[#1a1f2c] mb-6">Request a Free Quote</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">First Name</label>
                  <input className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Last Name</label>
                  <input className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Email</label>
                <input type="email" className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Phone</label>
                <input type="tel" className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors" placeholder="(555) 000-0000" />
              </div>
              <div>
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Service Needed</label>
                <select className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors text-[#555]">
                  <option>Boiler Installation</option>
                  <option>Boiler Service</option>
                  <option>Gas Safety Certificate (CP12)</option>
                  <option>Gas Pipework</option>
                  <option>Emergency Call-Out</option>
                  <option>Commercial Gas Works</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Message</label>
                <textarea rows={3} className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors resize-none" placeholder="Describe your gas job or issue..." />
              </div>
              <button className="w-full bg-[#e8851a] hover:bg-[#d4740f] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Request
                <Icon name="ArrowRight" size={16} />
              </button>
              <p className="text-center text-xs text-[#aaa]">We respond within 24 hours · No spam, ever</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111820] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#1a3a5c] rounded-md flex items-center justify-center">
                  <Icon name="Flame" size={16} className="text-white" />
                </div>
                <span className="font-serif text-xl">SM<span className="text-[#f5b966]">Climate</span></span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Professional gas installation, servicing, and safety certificates for residential and commercial properties. Gas Safe registered and trusted since 2008.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Quick Links</p>
              <ul className="space-y-2.5">
                {navLinks.map(l => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-white/40 mb-4">Contact</p>
              <ul className="space-y-2.5 text-sm text-white/70">
                <li>(555) 842-0190</li>
                <li>info@smclimate.com</li>
                <li className="pt-2">Gas Emergency 24/7:<br />(555) 842-0911</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© 2026 SM Climate Gas Services. All rights reserved.</p>
            <p className="text-xs text-white/30">Gas Safe Registered · Fully Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}