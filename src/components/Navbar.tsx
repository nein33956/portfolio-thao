import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const links = [
  { to: "/", label: "Giới thiệu", end: true },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "py-2" : "py-4"}`}>
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-grape-500 text-white shadow-glow">
              <Heart className="h-5 w-5" fill="currentColor" />
            </span>
            <span className="font-display text-lg font-bold text-ink">
              Portfolio<span className="gradient-text"> Năng lực số</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `block rounded-full px-5 py-2 text-sm font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-brand-500 to-grape-500 text-white shadow-glow"
                        : "text-ink-soft hover:bg-brand-50 hover:text-brand-600"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="grid h-10 w-10 place-items-center rounded-full text-brand-600 hover:bg-brand-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            type="button"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="glass mt-2 space-y-1 rounded-3xl p-2 shadow-soft md:hidden"
            >
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.end}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm font-bold ${
                        isActive ? "bg-brand-500 text-white" : "text-ink-soft"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
