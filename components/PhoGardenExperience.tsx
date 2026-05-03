"use client";

import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp, CalendarDays, ChevronRight, Clock, Coffee, Download, Facebook, Gift, Instagram, Leaf, MapPin, Menu as MenuIcon, Moon, Music, Navigation, Phone, Play, Search, Sparkles, Star, Sun, Utensils, X } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { gallery, heroImages, imagePrompts, menu, MenuCategory, navItems, testimonials } from '@/data/content';

const categories: Array<MenuCategory | 'All'> = ['All', 'Starters', 'Pho & Noodle Soups', 'Rice & Vermicelli', 'Grilled & Stir-Fried', 'Vegetarian & Vegan', 'Desserts', 'Beverages'];

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

function cn(...classes: Array<string | false | null | undefined>) { return classes.filter(Boolean).join(' '); }

function Logo() {
  return (
    <a href="#home" aria-label="Pho Garden home" className="group flex items-center gap-3 focus-ring rounded-full">
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-emeraldMain text-rice shadow-gold ring-1 ring-gold/40">
        <Leaf className="h-5 w-5 rotate-[-18deg] text-garden" aria-hidden />
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-gold" />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-semibold tracking-tight text-emeraldMain dark:text-garden">Pho Garden</span>
        <span className="text-[10px] uppercase tracking-[0.34em] text-ink/55 dark:text-rice/60">Rio Rancho</span>
      </span>
    </a>
  );
}

function Header({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 lg:px-8">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-glow">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-medium text-ink/75 transition hover:text-emeraldMain dark:text-rice/75 dark:hover:text-garden">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle background music" className="focus-ring hidden rounded-full border border-gold/40 p-3 text-emeraldMain transition hover:bg-gold/10 dark:text-garden md:grid"><Music className="h-4 w-4" /></button>
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode" className="focus-ring rounded-full border border-gold/40 p-3 text-emeraldMain transition hover:bg-gold/10 dark:text-garden">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          <a href="#reservations" className="focus-ring hidden rounded-full bg-emeraldMain px-5 py-3 text-sm font-semibold text-rice shadow-glow transition hover:-translate-y-0.5 hover:bg-[#085631] md:inline-flex">Reserve</a>
          <button aria-label="Open menu" onClick={() => setOpen(true)} className="focus-ring rounded-full border border-gold/40 p-3 text-emeraldMain dark:text-garden lg:hidden"><MenuIcon className="h-5 w-5" /></button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-emeraldMain/95 p-5 text-rice backdrop-blur-xl lg:hidden">
            <div className="flex items-center justify-between"><Logo /><button aria-label="Close menu" onClick={() => setOpen(false)} className="rounded-full bg-rice/10 p-3"><X /></button></div>
            <div className="mt-14 grid gap-6">
              {navItems.map(([label, id], i) => <motion.a initial={{ x: 24, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * .04 }} onClick={() => setOpen(false)} className="font-serif text-4xl" href={`#${id}`} key={id}>{label}</motion.a>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="garden-noise relative min-h-screen overflow-hidden bg-emeraldMain text-rice">
      <div className="absolute inset-0">
        <Image src={heroImages.garden} alt="Misty Vietnamese garden atmosphere" fill priority className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03150d]/70 via-emeraldMain/55 to-[#07170f]" />
      </div>
      <motion.div aria-hidden className="leaf-float absolute left-[6%] top-32 hidden rounded-full bg-garden/25 p-5 blur-[1px] md:block"><Leaf className="h-20 w-20 text-garden/70" /></motion.div>
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-24 pt-36 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: .9 }}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-rice/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-gold"><Sparkles className="h-4 w-4" /> Chef’s Seasonal Specials Now Blooming</p>
          <h1 className="max-w-5xl font-serif text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl xl:text-8xl">Pho Garden — Fresh Vietnamese Soul in Rio Rancho, New Mexico</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-rice/85 md:text-2xl">Where the Mekong meets the Rio Grande. A serene garden table for slow-simmered broth, fresh herbs, and modern Vietnamese hospitality.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#reservations" className="focus-ring group inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-semibold text-ink shadow-gold transition hover:-translate-y-1">Reserve Your Table <CalendarDays className="ml-2 h-5 w-5 transition group-hover:translate-x-1" /></a>
            <a href="#menu" className="focus-ring inline-flex items-center justify-center rounded-full border border-rice/45 px-7 py-4 font-semibold text-rice transition hover:-translate-y-1 hover:bg-rice/10">View Full Menu <ChevronRight className="ml-2 h-5 w-5" /></a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: .25 }} className="relative mx-auto aspect-square w-full max-w-[560px]">
          <div className="absolute inset-10 rounded-full bg-garden/25 blur-3xl" />
          <Image src={heroImages.pho} alt="Steaming premium pho bowl with fresh herbs" fill priority className="rounded-[42px] object-cover shadow-2xl ring-1 ring-gold/35" />
          <div className="absolute -bottom-6 -left-4 rounded-3xl border border-gold/30 bg-rice/90 p-5 text-ink shadow-gold backdrop-blur md:-left-10">
            <p className="font-serif text-3xl">12-hour broth</p><p className="text-sm text-ink/60">star anise · ginger · charred onion</p>
          </div>
        </motion.div>
      </div>
      <IngredientMarquee />
    </section>
  );
}

function IngredientMarquee() {
  const items = ['basil', 'mint', 'cilantro', 'lime', 'star anise', 'rice noodles', 'ginger', 'lotus root', 'lemongrass', 'pandan'];
  return <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-gold/25 bg-[#04170e]/70 py-4 backdrop-blur"><div className="marquee gap-8">{[...items, ...items].map((item, i) => <span className="flex items-center gap-8 text-sm uppercase tracking-[0.34em] text-rice/75" key={`${item}-${i}`}>{item}<Leaf className="h-4 w-4 text-garden" /></span>)}</div></div>;
}

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65 }} className="mx-auto mb-12 max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.36em] text-emeraldMain dark:text-garden">{eyebrow}</p><h2 className="brush-title mt-3 font-serif text-4xl font-semibold tracking-[-.03em] md:text-6xl">{title}</h2><div className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70 dark:text-rice/72">{children}</div></motion.div>;
}

function Story() {
  return <section id="story" className="relative bg-rice px-6 py-28 dark:bg-[#07170f] lg:px-8"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.9fr_1.1fr]"><motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><p className="text-xs font-bold uppercase tracking-[0.36em] text-emeraldMain dark:text-garden">Our Story</p><h2 className="mt-4 font-serif text-5xl font-semibold leading-tight tracking-[-.04em]">Generations of Hanoi and Saigon recipes, planted in New Mexico.</h2><p className="mt-6 text-lg leading-8 text-ink/72 dark:text-rice/72">Pho Garden is imagined as a family-owned table where northern clarity, southern brightness, and Rio Rancho warmth share the same bowl. Our kitchen honors slow broth, hand-tended herbs, authentic imports, and local New Mexico produce whenever the season allows.</p><div className="mt-8 grid gap-4 sm:grid-cols-3">{['Freshness pledge','Local NM produce','Authentic imports'].map(v=><div key={v} className="rounded-3xl border border-gold/25 bg-white/55 p-5 dark:bg-rice/5"><Star className="mb-3 h-5 w-5 text-gold" /><p className="font-semibold">{v}</p></div>)}</div></motion.div><div className="grid gap-5 sm:grid-cols-2"><ImageCard src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1200&q=85" alt="Garden inspired dining room" label="Lantern-lit garden dining" /><ImageCard src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85" alt="Chef preparing Vietnamese herbs" label="Chef Linh Nguyen · placeholder bio" tall /></div></div></section>;
}

function ImageCard({ src, alt, label, tall=false }: { src: string; alt: string; label: string; tall?: boolean }) {
  return <motion.div whileHover={{ y: -8 }} className={cn('relative overflow-hidden rounded-[34px] shadow-glow ring-1 ring-gold/20', tall && 'sm:translate-y-16')}><Image src={src} alt={alt} width={900} height={1100} className="h-full min-h-[360px] w-full object-cover" /><div className="absolute inset-x-4 bottom-4 rounded-2xl bg-rice/86 p-4 text-sm font-semibold text-ink backdrop-blur">{label}</div></motion.div>;
}

function MenuSection() {
  const [active, setActive] = useState<MenuCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const visible = useMemo(() => menu.filter(item => (active === 'All' || item.category === active) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [active, query]);
  return <section id="menu" className="bg-emeraldMain px-6 py-28 text-rice lg:px-8"><SectionIntro eyebrow="Interactive Menu" title="Garden-fresh classics, refined."><p>Filter by craving, explore spice levels, allergens, chef recommendations, and image-generation prompts for every future dish photo.</p></SectionIntro><div className="mx-auto max-w-7xl"><div className="glass mb-8 flex flex-col gap-4 rounded-[32px] p-4 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap gap-2">{categories.map(cat=><button key={cat} onClick={()=>setActive(cat)} className={cn('focus-ring rounded-full px-4 py-2 text-sm font-semibold transition', active===cat?'bg-gold text-ink':'bg-rice/10 text-rice hover:bg-rice/20')}>{cat}</button>)}</div><label className="relative block md:w-72"><Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45 dark:text-rice/45" /><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search herbs, broth, vegan..." className="w-full rounded-full border border-gold/25 bg-rice/90 py-3 pl-11 pr-4 text-sm outline-none dark:bg-[#07170f]/80" /></label></div><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map(item=><motion.article layout key={item.name} whileHover={{ y: -8 }} className="group overflow-hidden rounded-[34px] bg-rice text-ink shadow-gold dark:bg-[#092416] dark:text-rice"><div className="relative h-72 overflow-hidden"><Image src={item.image} alt={item.name} fill className="object-cover transition duration-700 group-hover:scale-110" /><div className="absolute left-4 top-4 flex gap-2">{item.chef && <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink">Chef’s Recommendation</span>}<span className="rounded-full bg-broth px-3 py-1 text-xs font-bold text-rice">{'🌶'.repeat(item.spice) || 'mild'}</span></div></div><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-serif text-2xl font-semibold">{item.name}</h3><p className="font-serif text-2xl text-emeraldMain dark:text-garden">{item.price}</p></div><p className="mt-3 text-sm leading-6 text-ink/70 dark:text-rice/70">{item.description}</p><div className="mt-4 flex flex-wrap gap-2">{item.allergens.map(a=><span key={a} className="rounded-full bg-emeraldMain/10 px-3 py-1 text-xs font-semibold text-emeraldMain dark:bg-garden/10 dark:text-garden">{a}</span>)}</div><details className="mt-4 text-xs text-ink/55 dark:text-rice/55"><summary className="cursor-pointer font-semibold text-gold">Image prompt</summary><p className="mt-2 leading-5">{item.prompt}</p></details></div></motion.article>)}</div><div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"><a href="/pho-garden-menu-placeholder.pdf" className="focus-ring inline-flex items-center justify-center rounded-full border border-gold/45 px-6 py-4 font-semibold text-rice hover:bg-rice/10"><Download className="mr-2 h-5 w-5" /> Download PDF Menu</a><a href="#" className="focus-ring inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 font-semibold text-ink shadow-gold"><Utensils className="mr-2 h-5 w-5" /> Order Online for Pickup</a></div></div></section>;
}

function SignatureCarousel() {
  const dishes = menu.filter(m => m.chef).slice(0, 6);
  return <section className="bg-rice px-6 py-28 dark:bg-[#07170f] lg:px-8"><SectionIntro eyebrow="Signature Dishes" title="Bowls with a sense of place."><p>Stunning, aromatic plates designed to feel as memorable as the first spoonful of broth.</p></SectionIntro><div className="mx-auto flex max-w-7xl snap-x gap-6 overflow-x-auto pb-6">{dishes.map(d=><article key={d.name} className="min-w-[320px] snap-center overflow-hidden rounded-[36px] bg-white shadow-gold dark:bg-rice/5 md:min-w-[470px]"><Image src={d.image} alt={d.name} width={900} height={700} className="h-80 w-full object-cover" /><div className="p-7"><p className="text-xs font-bold uppercase tracking-[.28em] text-emeraldMain dark:text-garden">{d.category}</p><h3 className="mt-2 font-serif text-3xl font-semibold">{d.name}</h3><p className="mt-3 text-ink/65 dark:text-rice/65">{d.description}</p></div></article>)}</div></section>;
}

function Testimonials() { return <section className="bg-[#07170f] px-6 py-24 text-rice lg:px-8"><div className="mx-auto max-w-7xl"><SectionIntro eyebrow="Review Highlights" title="Loved across Rio Rancho & Albuquerque."><p>Placeholder review highlights ready to replace with Google/Yelp quotes.</p></SectionIntro><div className="grid gap-6 md:grid-cols-3">{testimonials.map(t=><motion.blockquote whileHover={{ y: -6 }} key={t.name} className="rounded-[32px] border border-gold/20 bg-rice/7 p-7"><div className="mb-5 flex text-gold">{Array.from({length:5}).map((_,i)=><Star key={i} className="h-4 w-4 fill-current" />)}</div><p className="font-serif text-2xl leading-9">“{t.quote}”</p><footer className="mt-6 text-sm text-rice/65">{t.name} · {t.detail}</footer></motion.blockquote>)}</div></div></section>; }

function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);
  return <section id="gallery" className="bg-rice px-6 py-28 dark:bg-[#07170f] lg:px-8"><SectionIntro eyebrow="Gallery" title="A restaurant that blooms after sunset."><p>Food, interior atmosphere, events, and behind-the-scenes moments. Includes a 360° virtual tour placeholder.</p></SectionIntro><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">{gallery.map(([cat, src], i)=><button key={src} onClick={()=>setSelected(src)} className={cn('focus-ring group relative overflow-hidden rounded-[30px]', i%3===0?'md:col-span-2 md:row-span-2':'')}><Image src={src} alt={`${cat} gallery image`} width={900} height={900} className="h-full min-h-[260px] w-full object-cover transition duration-700 group-hover:scale-110" /><span className="absolute bottom-4 left-4 rounded-full bg-rice/85 px-4 py-2 text-sm font-bold text-ink backdrop-blur">{cat}</span></button>)}</div><div className="mx-auto mt-6 max-w-7xl rounded-[32px] border border-dashed border-gold/50 p-8 text-center"><Play className="mx-auto mb-3 h-8 w-8 text-emeraldMain dark:text-garden" /><p className="font-serif text-2xl">360° Virtual Tour Placeholder</p><p className="mt-2 text-ink/60 dark:text-rice/60">Replace with Matterport, Google Street View, or high-resolution panorama embed.</p></div><AnimatePresence>{selected&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelected(null)} className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4"><button className="absolute right-6 top-6 rounded-full bg-rice p-3 text-ink"><X /></button><Image src={selected} alt="Expanded gallery view" width={1400} height={950} className="max-h-[84vh] rounded-[28px] object-contain" /></motion.div>}</AnimatePresence></section>;
}

function FormsAndContact() {
  const handleSubmit = (e: FormEvent) => e.preventDefault();
  return <section id="reservations" className="bg-garden-radial bg-rice px-6 py-28 dark:bg-[#07170f] lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_.95fr]"><div><SectionIntro eyebrow="Reservations" title="Your garden table awaits."><p>Tock/OpenTable-style booking form with date, time, party size, and special requests. Ready to wire into a booking provider.</p></SectionIntro><form onSubmit={handleSubmit} className="grid gap-4 rounded-[36px] border border-gold/25 bg-white/70 p-6 shadow-gold backdrop-blur dark:bg-rice/5 md:grid-cols-2"><Field label="Date" type="date" /><Field label="Time" as="select" options={['5:00 PM','5:30 PM','6:00 PM','6:30 PM','7:00 PM','7:30 PM','8:00 PM']} /><Field label="Party Size" as="select" options={['2 guests','3 guests','4 guests','5 guests','6 guests','Private dining inquiry']} /><Field label="Name" /><Field label="Email" type="email" /><Field label="Phone" type="tel" /><label className="md:col-span-2"><span className="mb-2 block text-sm font-semibold">Special requests</span><textarea className="min-h-28 w-full rounded-2xl border border-gold/25 bg-rice/80 p-4 dark:bg-[#07170f]/80" placeholder="Allergies, celebrations, preferred seating..." /></label><button className="focus-ring rounded-full bg-emeraldMain px-7 py-4 font-semibold text-rice shadow-glow md:col-span-2">Request Reservation</button></form></div><div id="contact" className="rounded-[36px] bg-emeraldMain p-7 text-rice shadow-glow"><p className="text-xs font-bold uppercase tracking-[.32em] text-gold">Visit Us in Rio Rancho</p><h3 className="mt-3 font-serif text-4xl font-semibold">[INSERT ACTUAL ADDRESS WHEN AVAILABLE]</h3><div className="mt-6 grid gap-4 text-rice/80"><p className="flex gap-3"><MapPin className="h-5 w-5 text-gold" /> Rio Rancho, New Mexico · directions from Albuquerque: approximately 25–35 minutes depending on traffic.</p><p className="flex gap-3"><Clock className="h-5 w-5 text-gold" /> Sun–Thu 11am–9pm · Fri–Sat 11am–10pm</p><p className="flex gap-3"><Phone className="h-5 w-5 text-gold" /> [INSERT PHONE] · hello@phogarden.example</p></div><div className="mt-8 aspect-[4/3] overflow-hidden rounded-[28px] border border-gold/30 bg-rice/10"><iframe title="Rio Rancho map placeholder" src="https://www.google.com/maps?q=Rio%20Rancho%2C%20New%20Mexico&output=embed" className="h-full w-full" loading="lazy" /></div><form onSubmit={handleSubmit} className="mt-6 grid gap-3"><input aria-label="Newsletter email" className="rounded-full border border-gold/30 bg-rice/90 px-5 py-4 text-ink" placeholder="Mailchimp-ready email signup" /><button className="rounded-full bg-gold px-5 py-4 font-bold text-ink">Join the Garden List</button></form></div></div></section>;
}

function Field({ label, type='text', as, options=[] }: { label: string; type?: string; as?: 'select'; options?: string[] }) { return <label><span className="mb-2 block text-sm font-semibold">{label}</span>{as==='select'?<select className="w-full rounded-2xl border border-gold/25 bg-rice/80 p-4 dark:bg-[#07170f]/80">{options.map(o=><option key={o}>{o}</option>)}</select>:<input type={type} className="w-full rounded-2xl border border-gold/25 bg-rice/80 p-4 dark:bg-[#07170f]/80" />}</label>; }

function Extras() { return <section className="bg-rice px-6 py-24 dark:bg-[#07170f] lg:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{[{icon:Gift,title:'Gift Cards',body:'Coming soon: elegant digital and physical gift cards for celebrations.'},{icon:Coffee,title:'Private Dining',body:'Host refined birthdays, business dinners, and family celebrations in a garden setting.'},{icon:Sparkles,title:'Chef’s Specials',body:'Seasonal broths, local produce features, and limited weekend dishes.'}].map(({icon:Icon,title,body})=><div key={title} className="rounded-[32px] border border-gold/25 bg-white/65 p-7 dark:bg-rice/5"><Icon className="mb-5 h-8 w-8 text-emeraldMain dark:text-garden" /><h3 className="font-serif text-3xl font-semibold">{title}</h3><p className="mt-3 text-ink/65 dark:text-rice/65">{body}</p></div>)}</div></section>; }

function AssetPrompts() { return <section className="bg-[#07170f] px-6 py-24 text-rice lg:px-8"><div className="mx-auto max-w-5xl"><SectionIntro eyebrow="Asset Direction" title="Image-generator prompts included."><p>Use these prompts to replace placeholder photography with a proprietary visual system.</p></SectionIntro><div className="grid gap-4">{imagePrompts.map((p,i)=><div key={p} className="rounded-3xl border border-gold/20 bg-rice/7 p-5"><p className="text-sm uppercase tracking-[.25em] text-gold">Prompt {i+1}</p><p className="mt-2 leading-7 text-rice/78">{p}</p></div>)}</div></div></section>; }

function Footer() { return <footer className="bg-emeraldMain px-6 py-14 text-rice lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr_1fr]"><div><Logo /><p className="mt-4 text-rice/70">Proudly serving Rio Rancho & Greater Albuquerque since [year].</p></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3">{navItems.map(([label,id])=><a key={id} href={`#${id}`} className="text-rice/75 hover:text-gold">{label}</a>)}</div><div className="flex gap-3 md:justify-end"><a aria-label="Instagram" className="rounded-full bg-rice/10 p-3" href="#"><Instagram /></a><a aria-label="Facebook" className="rounded-full bg-rice/10 p-3" href="#"><Facebook /></a><a aria-label="TikTok" className="rounded-full bg-rice/10 p-3" href="#">♪</a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-rice/15 pt-6 text-sm text-rice/55">© {new Date().getFullYear()} Pho Garden. Placeholder concept site by LoboByte/Hermes.</div></footer>; }

function BackToTop() { return <a href="#home" aria-label="Back to top" className="focus-ring fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-gold text-ink shadow-gold"><ArrowUp className="h-5 w-5 leaf-float" /></a>; }

export default function PhoGardenExperience() {
  const [dark, setDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return <main className={cn(dark && 'dark')}><motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[90] h-1 origin-left bg-gold" /><Header dark={dark} setDark={setDark} /><Hero /><Story /><SignatureCarousel /><MenuSection /><Gallery /><Testimonials /><FormsAndContact /><Extras /><AssetPrompts /><Footer /><BackToTop /></main>;
}
