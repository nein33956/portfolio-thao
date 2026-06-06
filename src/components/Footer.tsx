import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { SITE } from "../data/projects";

const links = [
  { to: "/", label: "Giới thiệu" },
  { to: "/du-an", label: "Dự án" },
  { to: "/tong-ket", label: "Tổng kết" },
];

export default function Footer() {
  return (
    <footer className="mt-24">
      {/* Phần sáng: lời cảm ơn */}
      <div className="container-x py-16 text-center">
        <span className="chip">
          <Heart className="h-3.5 w-3.5" fill="currentColor" /> Cảm ơn bạn
        </span>
        <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          Cảm ơn bạn đã <span className="gradient-text">ghé thăm!</span> 🌸
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ink-soft">
          Hy vọng bạn thấy hành trình rèn luyện năng lực số của mình thú vị và truyền cảm hứng.
          Hẹn gặp lại nhé!
        </p>
        <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="inline-block rounded-full bg-brand-50 px-5 py-2 text-sm font-bold text-brand-600 transition hover:-translate-y-0.5 hover:bg-brand-100"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Dải candy mỏng ở đáy */}
      <div className="bg-candy py-5 text-center text-sm font-semibold text-white">
        © {SITE.year} {SITE.fullName} · {SITE.major}
      </div>
    </footer>
  );
}
