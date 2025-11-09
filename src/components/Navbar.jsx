import { useState, useEffect } from 'react';
import { Menu, X, Ship, Phone } from 'lucide-react';

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm md:text-base text-slate-600 hover:text-slate-900 transition-colors px-3 py-2"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <Ship size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">OceanStar</span>
          </a>

          <nav className="hidden md:flex items-center">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a
              href="tel:+9710000000"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-4 py-2 text-sm shadow hover:shadow-md transition"
            >
              <Phone size={16} /> Call us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <NavLink href="#services" onClick={close}>Services</NavLink>
              <NavLink href="#about" onClick={close}>About</NavLink>
              <NavLink href="#contact" onClick={close}>Contact</NavLink>
              <a
                href="tel:+9710000000"
                className="m-3 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 text-white px-4 py-2 text-sm shadow"
                onClick={close}
              >
                <Phone size={16} /> Call us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
