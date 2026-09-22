import { useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ArrowRight, Check, ChevronDown, Code2, Cpu, Globe2, Mail, Menu, MonitorSmartphone, Send, Sparkles, Target, X, Zap } from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import logo from '@/assets/zyqen-logo.png';

const queryClient = new QueryClient();
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbygy8-hhIC3Vi7bP05tlrFN4VXrtJMowdSnBncJCKW2UOLsm3vnb2ECim1T8c2cPJe1LA/exec';
const services = [
  { title: 'Digital Marketing & Social Media', short: 'Make your presence matter.', icon: Target, number: '01', detail: 'Clear strategy, focused content, and considered social media direction for brands ready to be seen for the right reasons.' },
  { title: 'AI Automation', short: 'Put the repetitive work on autopilot.', icon: Cpu, number: '02', detail: 'Practical AI systems that connect the work behind the scenes, reduce friction, and give teams more room to think.' },
  { title: 'Website Solutions', short: 'Give your digital home a point of view.', icon: Globe2, number: '03', detail: 'Fast, intentional websites that bring your message, experience, and next action into focus.' },
  { title: 'Software & App Development', short: 'Turn a strong idea into a working product.', icon: Code2, number: '04', detail: 'Purpose-built digital products shaped around the way your people and customers actually work.' },
  { title: 'Training & Internship', short: 'Learn by building what matters.', icon: Sparkles, number: '05', detail: 'Hands-on learning experiences for people who want practical exposure to today’s digital tools and disciplines.' },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const navigate = (id: string) => {
    onToggle();
    scrollToId(id);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/[0.08] bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button type="button" onClick={() => scrollToId('home')} className="zyqen-focus flex items-center gap-3" data-testid="button-logo-home" aria-label="Zyqen Technologies home">
          <img src={logo} alt="Zyqen Technologies logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-mono text-[12px] font-bold tracking-[0.12em] text-slate-100">Zyqen Technologies</span>
        </button>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary navigation">
          {[['Home', 'home'], ['About', 'about'], ['Services', 'services'], ['Contact', 'contact']].map(([label, id]) => (
            <button type="button" key={id} onClick={() => scrollToId(id)} className="zyqen-focus text-[13px] font-medium text-slate-400 transition-colors hover:text-cyan-200" data-testid={`link-nav-${id}`}>{label}</button>
          ))}
        </nav>
        <button type="button" onClick={() => scrollToId('contact')} className="hidden items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-[13px] font-semibold text-cyan-100 transition hover:bg-cyan-300/20 md:flex" data-testid="button-header-enquiry">
          Start a conversation <ArrowRight size={15} />
        </button>
        <button type="button" onClick={onToggle} className="zyqen-focus rounded-lg p-2 text-slate-300 md:hidden" data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/[0.08] bg-[#09111f] px-5 py-5 md:hidden" aria-label="Mobile navigation">
          {['Home', 'About', 'Services', 'Contact'].map((label) => {
            const id = label.toLowerCase();
            return <button type="button" key={id} onClick={() => navigate(id)} className="zyqen-focus block w-full border-b border-white/[0.07] py-4 text-left text-base text-slate-200 last:border-b-0" data-testid={`link-mobile-${id}`}>{label}</button>;
          })}
        </nav>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <div className="mb-5 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-300"><span className="h-px w-8 bg-cyan-300" />{children}</div>;
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[720px] overflow-hidden border-b border-white/[0.07] pt-[74px]">
      <div className="absolute inset-0 zyqen-grid opacity-50" />
      <div className="absolute -right-44 -top-36 h-[620px] w-[620px] rounded-full bg-cyan-400/[0.09] blur-[110px] zyqen-orb" />
      <div className="absolute bottom-[-300px] left-[-180px] h-[520px] w-[520px] rounded-full bg-blue-500/[0.08] blur-[100px]" />
      <div className="relative mx-auto grid min-h-[646px] max-w-7xl items-center gap-14 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-24 lg:pt-24">
        <div className="zyqen-reveal">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" /> Technology, with intent
          </div>
          <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.75rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-slate-50">
             Building <span className="text-cyan-300">digital solutions</span><br />for growing <em className="font-serif font-normal text-slate-300">businesses.</em>
          </h1>
          <p className="mt-9 max-w-lg text-[17px] leading-8 text-slate-400">Zyqen Technologies delivers practical digital, software, automation and technology solutions designed around your business needs.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => scrollToId('services')} className="group flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#06101b] transition hover:bg-cyan-200" data-testid="button-hero-services">Explore Our Services <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
            <button type="button" onClick={() => scrollToId('contact')} className="flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200" data-testid="button-hero-enquiry"><Send size={14} /> Send an Enquiry</button>
          </div>
        </div>
        <div className="zyqen-reveal-delay relative mx-auto aspect-square w-full max-w-[510px]">
          <div className="absolute inset-[12%] rounded-full border border-cyan-300/20" />
          <div className="absolute inset-[23%] rounded-full border border-blue-400/20" />
          <div className="absolute inset-[34%] rounded-full border border-white/10" />
          <div className="absolute inset-[18%] rounded-full bg-cyan-300/[0.05] blur-2xl" />
          <div className="absolute left-[7%] top-[26%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_7px_rgba(34,211,238,.45)]" />
          <div className="absolute right-[10%] top-[42%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_18px_6px_rgba(96,165,250,.5)]" />
          <div className="absolute bottom-[21%] left-[27%] h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_15px_5px_rgba(207,250,254,.45)]" />
          <div className="absolute inset-[38%] flex items-center justify-center rounded-full border border-cyan-200/40 bg-[#0a1828]/90 shadow-[0_0_70px_rgba(24,196,255,.22)]">
            <img src={logo} alt="Zyqen Technologies logo" className="h-[68%] w-[68%] rounded-full object-cover" />
          </div>
          <div className="absolute bottom-[6%] left-[8%] max-w-[170px] border-l border-cyan-300/60 pl-3 font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-slate-500">Ideas into systems<br /><span className="text-cyan-300/80">Ready when you are</span></div>
          <div className="absolute right-[6%] top-[12%] text-right font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-slate-600">Digital<br />by design</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.24em] text-slate-600 lg:flex"><span className="h-10 w-px bg-gradient-to-b from-transparent to-cyan-300/70" />Scroll to explore</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative border-b border-white/[0.07] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <SectionLabel>01 / About Zyqen</SectionLabel>
            <h2 className="max-w-sm text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-slate-100 sm:text-5xl">Technology should feel <em className="font-serif font-normal text-cyan-300">human.</em></h2>
          </div>
          <div>
            <p className="max-w-2xl text-2xl leading-[1.35] tracking-[-0.025em] text-slate-200 sm:text-3xl">Zyqen Technologies is a service-based technology and digital solutions company focused on helping businesses, organizations and individuals use technology in practical and meaningful ways.</p>
            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-slate-400">We work across digital marketing, social media, AI automation, websites, software and app development, and learning opportunities — with a focus on useful outcomes.</p>
            <div className="mt-12 grid gap-8 border-t border-white/[0.1] pt-8 sm:grid-cols-3">
              <div><Zap size={20} className="mb-4 text-cyan-300" /><h3 className="text-lg font-semibold text-slate-100">Digital Solutions</h3><p className="mt-2 text-sm leading-6 text-slate-500">Practical technology solutions for real business needs.</p></div>
              <div><MonitorSmartphone size={20} className="mb-4 text-cyan-300" /><h3 className="text-lg font-semibold text-slate-100">Technology Support</h3><p className="mt-2 text-sm leading-6 text-slate-500">Reliable assistance focused on solving technology requirements.</p></div>
              <div><Sparkles size={20} className="mb-4 text-cyan-300" /><h3 className="text-lg font-semibold text-slate-100">Learning &amp; Growth</h3><p className="mt-2 text-sm leading-6 text-slate-500">Training and internship opportunities focused on practical skills.</p></div>
            </div>
          </div>
        </div>
        <div className="mt-24 border-y border-white/[0.09] py-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">A better way to move forward</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400"><span>Think clearly</span><span className="text-cyan-300">/</span><span>Build carefully</span><span className="text-cyan-300">/</span><span>Keep improving</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const points = [
    ['Practical Solutions', 'Solutions focused on real requirements and usable outcomes.'],
    ['Clear Communication', 'Simple and transparent communication throughout the process.'],
    ['Flexible Approach', 'Solutions adapted to different business and project requirements.'],
    ['Technology Focused', 'Modern digital, software and automation approaches.'],
    ['Continuous Learning', 'Focused on improving skills, processes and technology adoption.'],
    ['Support', 'Clear communication and assistance wherever applicable.'],
  ];
  return (
    <section className="relative border-b border-white/[0.07] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div><SectionLabel>02 / Why Zyqen</SectionLabel><h2 className="max-w-sm text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-slate-100 sm:text-5xl">Your goals, <em className="font-serif font-normal text-cyan-300">our focus.</em></h2></div>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {points.map(([title, detail]) => <div key={title} className="border-t border-white/[0.1] pt-5"><Check size={18} className="mb-4 text-cyan-300" /><h3 className="text-lg font-semibold text-slate-100">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="services" className="relative border-b border-white/[0.07] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div><SectionLabel>03 / What we do</SectionLabel><h2 className="max-w-xl text-4xl font-semibold leading-[1] tracking-[-0.055em] text-slate-100 sm:text-6xl">The right tools for the <span className="text-cyan-300">next chapter.</span></h2></div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">Focused services for the moments when your digital presence, process, or product needs to move forward.</p>
        </div>
        <div className="grid gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = active === index;
            return (
              <button type="button" key={service.title} onClick={() => setActive(index)} className={`zyqen-card group grid w-full gap-5 rounded-xl p-5 text-left transition-all duration-300 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:p-7 ${isActive ? 'border-cyan-300/45 bg-cyan-300/[0.06]' : ''}`} data-testid={`button-service-${index + 1}`}>
                <span className={`font-mono text-xs ${isActive ? 'text-cyan-300' : 'text-slate-600'}`}>{service.number}</span>
                <span><span className="flex items-center gap-4"><Icon size={20} className={isActive ? 'text-cyan-300' : 'text-slate-500'} /><span className="text-xl font-semibold tracking-[-0.025em] text-slate-100 sm:text-2xl">{service.title}</span></span><span className={`block overflow-hidden text-sm leading-6 text-slate-400 transition-all duration-300 ${isActive ? 'mt-3 max-h-24 opacity-100' : 'max-h-0 opacity-0 sm:max-h-6 sm:opacity-100'}`}>{isActive ? service.detail : service.short}</span></span>
                <ChevronDown size={19} className={`text-slate-500 transition-transform duration-300 ${isActive ? 'rotate-180 text-cyan-300' : 'group-hover:text-cyan-300'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-32">
      <div className="absolute right-[-180px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div><SectionLabel>04 / How we work</SectionLabel><h2 className="max-w-sm text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-slate-100 sm:text-5xl">Good work has a <em className="font-serif font-normal text-cyan-300">rhythm.</em></h2><p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">A straightforward process keeps the work grounded, collaborative, and pointed in the right direction.</p></div>
          <div className="grid gap-0 sm:grid-cols-2">{[['01', 'Understand', 'Understand the client’s requirements and goals.'], ['02', 'Plan', 'Define the right approach and solution.'], ['03', 'Build', 'Develop or implement the required solution.'], ['04', 'Support', 'Provide communication, guidance and support where applicable.']].map(([number, title, detail]) => <div key={number} className="border-t border-white/[0.1] py-6 sm:pr-8"><span className="font-mono text-[10px] tracking-[0.18em] text-cyan-300">{number}</span><h3 className="mt-5 text-lg font-semibold text-slate-100">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}

type FormState = { name: string; email: string; phone: string; service: string };
const initialForm: FormState = { name: '', email: '', phone: '', service: '' };

function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    try {
      const body = new URLSearchParams({ name: form.name, email: form.email, phone: form.phone, service: form.service });
      await fetch(FORM_ENDPOINT, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, body });
      setForm(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_45%,rgba(0,205,255,.11),transparent_32%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
          <div><SectionLabel>05 / Contact</SectionLabel><h2 className="max-w-lg text-5xl font-semibold leading-[.97] tracking-[-0.06em] text-slate-100 sm:text-7xl">Have an idea or <span className="text-cyan-300">requirement?</span></h2><p className="mt-8 max-w-md text-[16px] leading-8 text-slate-400">Tell us what you need and our team can review your enquiry.</p><div className="mt-10 flex items-center gap-3 text-sm text-slate-400"><Mail size={16} className="text-cyan-300" /><a href="mailto:zyqentechnologies@gmail.com" className="transition hover:text-cyan-200" data-testid="link-contact-email">zyqentechnologies@gmail.com</a></div></div>
          <form onSubmit={submit} className="zyqen-card rounded-2xl p-6 sm:p-9" data-testid="form-enquiry">
            <div className="mb-8 flex items-center justify-between border-b border-white/[0.09] pb-5"><div><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">Enquiry form</p><p className="mt-2 text-sm text-slate-500">A few details to get the conversation started.</p></div><Send size={20} className="text-slate-600" /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2"><span className="mb-2 block text-xs font-medium text-slate-400">Full Name</span><input required value={form.name} onChange={(event) => update('name', event.target.value)} className="zyqen-focus w-full rounded-lg border border-white/[0.12] bg-[#080f1b] px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-600" placeholder="Your full name" data-testid="input-full-name" /></label>
              <label><span className="mb-2 block text-xs font-medium text-slate-400">Gmail Address</span><input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className="zyqen-focus w-full rounded-lg border border-white/[0.12] bg-[#080f1b] px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-600" placeholder="you@gmail.com" data-testid="input-gmail-address" /></label>
              <label><span className="mb-2 block text-xs font-medium text-slate-400">Phone Number</span><input required type="tel" value={form.phone} onChange={(event) => update('phone', event.target.value)} className="zyqen-focus w-full rounded-lg border border-white/[0.12] bg-[#080f1b] px-4 py-3.5 text-sm text-slate-100 placeholder:text-slate-600" placeholder="+91 00000 00000" data-testid="input-phone-number" /></label>
              <label className="sm:col-span-2"><span className="mb-2 block text-xs font-medium text-slate-400">Select Service</span><select required value={form.service} onChange={(event) => update('service', event.target.value)} className="zyqen-focus w-full appearance-none rounded-lg border border-white/[0.12] bg-[#080f1b] px-4 py-3.5 text-sm text-slate-100" data-testid="select-service"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}</select></label>
            </div>
            <button type="submit" disabled={status === 'sending'} className="mt-7 flex w-full items-center justify-center gap-3 rounded-lg bg-cyan-300 px-5 py-3.5 text-sm font-bold text-[#06101b] transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60" data-testid="button-submit-enquiry">{status === 'sending' ? 'Sending enquiry...' : 'Send enquiry'} {status !== 'sending' && <ArrowRight size={16} />}</button>
             {status === 'success' && <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-emerald-300" data-testid="status-success"><Check size={16} className="mt-1 shrink-0" /> Thank you! Your enquiry has been submitted successfully. We will get back to you soon.</p>}
             {status === 'error' && <p className="mt-4 text-sm leading-6 text-rose-300" data-testid="status-error">Something went wrong. Please try again or contact us directly at zyqentechnologies@gmail.com.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050910]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div><button type="button" onClick={() => scrollToId('home')} className="zyqen-focus flex items-center gap-3" data-testid="button-footer-home"><img src={logo} alt="Zyqen Technologies logo" className="h-11 w-11 rounded-full object-cover" /><span className="font-mono text-[12px] font-bold tracking-[0.12em] text-slate-100">Zyqen Technologies</span></button><p className="mt-6 max-w-xs text-sm leading-6 text-slate-600">Digital and technology solutions designed around practical business needs.</p></div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3"><div><p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">Quick Links</p><div className="space-y-3 text-sm text-slate-400"><button type="button" onClick={() => scrollToId('home')} className="block hover:text-cyan-300" data-testid="link-footer-home">Home</button><button type="button" onClick={() => scrollToId('about')} className="block hover:text-cyan-300" data-testid="link-footer-about">About</button><button type="button" onClick={() => scrollToId('services')} className="block hover:text-cyan-300" data-testid="link-footer-services">Services</button><button type="button" onClick={() => scrollToId('contact')} className="block hover:text-cyan-300" data-testid="link-footer-contact">Contact</button></div></div><div><p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">Services</p><div className="space-y-3 text-sm leading-5 text-slate-500">{services.map((service) => <button type="button" key={service.title} onClick={() => scrollToId('contact')} className="block text-left transition hover:text-cyan-300" data-testid={`link-footer-service-${service.number}`}>{service.title}</button>)}</div></div><div className="col-span-2 sm:col-span-1"><p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">Contact</p><a href="mailto:zyqentechnologies@gmail.com" className="text-sm leading-6 text-slate-400 transition hover:text-cyan-300" data-testid="link-footer-email">zyqentechnologies@gmail.com</a></div></div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-700 sm:flex-row"><span>© 2026 Zyqen Technologies. All rights reserved.</span><span>Digital solutions, thoughtfully made.</span></div>
      </div>
    </footer>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="zyqen-noise min-h-[100dvh] bg-[#070b14] text-slate-100"><Header open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} /><main><Hero /><About /><WhyChoose /><Services /><Process /><Contact /></main><Footer /></div>;
}

function Router() {
  return <ErrorBoundary resetKey="home"><Home /></ErrorBoundary>;
}

function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><Router /><Toaster /></TooltipProvider></QueryClientProvider>;
}

export default App;