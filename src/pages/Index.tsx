import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/3f509f71-df15-4165-b09b-aae8e7061c07.jpg";
const COMMERCIAL_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/bc0a9ddc-33b2-46f7-8f9a-e407f74e9bf9.jpg";
const INTERIOR_IMG = "https://cdn.ezst.app/projects/82a010da-7af7-4685-accf-b1b02cf4806d/files/38ddc283-4676-4a58-8875-657be0deeea0.jpg";

const navLinks = ["Services", "Portfolio", "About", "Testimonials", "Blog", "FAQ", "Contact"];

const services = [
  {
    icon: "Home",
    title: "Residential Installation",
    desc: "New HVAC system installations for homes of any size. We handle everything from ductwork to smart thermostat setup.",
    detail: "From 1-bedroom apartments to 5,000 sq ft estates",
  },
  {
    icon: "Building2",
    title: "Commercial Installation",
    desc: "Industrial-grade systems for offices, retail spaces, warehouses and multi-unit buildings.",
    detail: "Projects from 500 to 100,000+ sq ft",
  },
  {
    icon: "Wrench",
    title: "Maintenance & Tune-Up",
    desc: "Preventive care programs to extend equipment life, lower utility bills, and avoid costly breakdowns.",
    detail: "Annual contracts available",
  },
  {
    icon: "Zap",
    title: "Emergency Repairs",
    desc: "24/7 rapid response for system failures. Our certified technicians arrive fast and fix it right the first time.",
    detail: "Same-day service guaranteed",
  },
  {
    icon: "Thermometer",
    title: "Smart Climate Control",
    desc: "Upgrade to smart thermostats and zoned systems for precise room-by-room temperature management.",
    detail: "Save up to 30% on energy bills",
  },
  {
    icon: "ShieldCheck",
    title: "System Inspection",
    desc: "Comprehensive inspection reports for real estate transactions, insurance, or peace of mind.",
    detail: "Certified documentation included",
  },
];

const portfolio = [
  {
    img: HERO_IMG,
    label: "Residential",
    title: "Maple Ridge Estates",
    desc: "Full HVAC installation across 24 luxury townhomes.",
  },
  {
    img: COMMERCIAL_IMG,
    label: "Commercial",
    title: "Northpark Office Complex",
    desc: "Industrial rooftop units serving 60,000 sq ft of office space.",
  },
  {
    img: INTERIOR_IMG,
    label: "Residential",
    title: "Lakewood Modern Home",
    desc: "Ductless mini-split system with smart zoning for a 3,200 sq ft home.",
  },
];

const testimonials = [
  {
    name: "James Thornton",
    role: "Homeowner",
    text: "SM Climate installed a complete system in our new build. On time, clean, and the house has never been more comfortable. Absolutely recommend.",
    stars: 5,
  },
  {
    name: "Sandra Mills",
    role: "Property Manager, Westside Realty",
    text: "We've used them for three commercial properties now. Professional crew, fair pricing, and zero callbacks. They get it right the first time.",
    stars: 5,
  },
  {
    name: "Derek Chung",
    role: "Restaurant Owner",
    text: "Fast response on our emergency call. They had our dining room cooling again the same afternoon. Saved our dinner service.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "How long does a typical residential installation take?",
    a: "Most residential installations are completed in 1–2 days. Larger homes with complex ductwork may take up to 3 days. We always provide a clear timeline before starting.",
  },
  {
    q: "Do you offer financing for new systems?",
    a: "Yes. We partner with several lenders to offer 0% APR financing for qualified customers on installations over $3,000.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "All our technicians are NATE-certified, state-licensed, and fully insured. We carry both general liability and workers' compensation coverage.",
  },
  {
    q: "What brands do you install?",
    a: "We install all major brands including Carrier, Trane, Lennox, Rheem, and Daikin. We'll recommend the best fit for your property and budget.",
  },
  {
    q: "Do you offer maintenance plans?",
    a: "Yes — our annual service plans include two tune-ups per year, priority scheduling, and discounts on repairs.",
  },
];

const blogPosts = [
  {
    date: "May 12, 2026",
    tag: "Tips",
    title: "5 Signs Your HVAC System Needs Replacing",
    excerpt: "Rising energy bills, uneven temperatures, and frequent repairs are warning signs you shouldn't ignore.",
  },
  {
    date: "Apr 28, 2026",
    tag: "Efficiency",
    title: "How Zoned Systems Can Cut Your Energy Bill by 30%",
    excerpt: "Smart zoning means only heating or cooling the rooms you actually use — and the savings add up fast.",
  },
  {
    date: "Apr 10, 2026",
    tag: "Commercial",
    title: "HVAC Planning for New Commercial Builds",
    excerpt: "Getting HVAC right from the start saves significant cost and headaches down the road.",
  },
];

const stats = [
  { value: "2,400+", label: "Installations Completed" },
  { value: "18 yrs", label: "In Business" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Emergency Service" },
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
              <Icon name="Wind" size={16} className="text-white" />
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
              Licensed & NATE-Certified Technicians
            </div>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] text-[#1a1f2c] mb-6 animate-fade-up"
              style={{ animationDelay: "0.1s", opacity: 0 }}
            >
              Climate Control<br />
              <em className="not-italic text-[#1a3a5c]">Done Right.</em>
            </h1>
            <p
              className="text-lg text-[#555] leading-relaxed max-w-md mb-8 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              Expert HVAC installation for residential and commercial properties. We design, install, and service systems built to last — on time and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-[#1a3a5c] hover:bg-[#142e4a] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors">
                Get a Free Estimate
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
                <p className="text-xs text-[#777]">Trusted by 2,400+ customers</p>
              </div>
            </div>
          </div>
          <div className="relative bg-[#f5f9ff] hidden lg:block">
            <img src={HERO_IMG} alt="HVAC Installation" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            <div className="absolute bottom-12 left-8 bg-white rounded-2xl shadow-xl p-5 w-60">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#e8f5e8] rounded-xl flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-[#2d8a2d]" />
                </div>
                <div>
                  <p className="text-xs text-[#888]">Last installed</p>
                  <p className="text-sm font-semibold text-[#1a1a1a]">Maple Ridge, Unit 14</p>
                </div>
              </div>
              <div className="text-xs text-[#555]">Carrier 4-ton system · 2.5 hrs</div>
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
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c]">Complete HVAC Solutions</h2>
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
              <img src={INTERIOR_IMG} alt="About Arctic Comfort" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#1a3a5c] text-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="font-serif text-4xl text-[#f5b966]">18</div>
              <div className="text-xs text-white/80 mt-1 uppercase tracking-wide">Years of Excellence</div>
            </div>
          </div>
          <div>
            <p className="text-[#e8851a] text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1f2c] mb-6 leading-tight">
              Built on Trust,<br />Driven by Quality
            </h2>
            <p className="text-[#555] leading-relaxed mb-5">
              SM Climate has been delivering premium HVAC solutions since 2008. What started as a two-man residential service has grown into a full-service installation company trusted by homeowners, developers, and facilities managers across the region.
            </p>
            <p className="text-[#555] leading-relaxed mb-8">
              Every member of our team is NATE-certified and undergoes ongoing training on the latest equipment and installation standards. We don't just install — we engineer comfort.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: "BadgeCheck", text: "NATE-Certified Technicians" },
                { icon: "Shield", text: "Fully Licensed & Insured" },
                { icon: "Clock", text: "24/7 Emergency Response" },
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
              Ready to Get<br />Comfortable?
            </h2>
            <p className="text-[#555] leading-relaxed mb-10">
              Tell us about your project and we'll provide a detailed, no-obligation estimate within 24 hours.
            </p>
            <div className="space-y-5">
              {[
                { icon: "Phone", label: "Call Us", value: "(555) 842-0190" },
                { icon: "Mail", label: "Email", value: "info@arcticcomfort.com" },
                { icon: "Clock", label: "Emergency Line", value: "24/7 at (555) 842-0911" },
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
            <h3 className="font-semibold text-xl text-[#1a1f2c] mb-6">Request a Free Estimate</h3>
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
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Property Type</label>
                <select className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors text-[#555]">
                  <option>Residential — Single Family</option>
                  <option>Residential — Condo/Apartment</option>
                  <option>Commercial — Office</option>
                  <option>Commercial — Retail</option>
                  <option>Commercial — Industrial</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-[#555] uppercase tracking-wide mb-1.5 block">Message</label>
                <textarea rows={3} className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#1a3a5c] transition-colors resize-none" placeholder="Describe your project or service need..." />
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
                  <Icon name="Wind" size={16} className="text-white" />
                </div>
                <span className="font-serif text-xl">SM<span className="text-[#f5b966]">Climate</span></span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Professional HVAC installation and service for residential and commercial properties. Licensed, insured, and trusted since 2008.
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
                <li>info@arcticcomfort.com</li>
                <li className="pt-2">Emergency 24/7:<br />(555) 842-0911</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© 2026 SM Climate HVAC. All rights reserved.</p>
            <p className="text-xs text-white/30">Licensed · Bonded · Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}