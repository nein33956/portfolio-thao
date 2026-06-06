import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { SITE } from "../data/projects";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-slate-300">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px 240px at 20% 0%, rgba(219,110,135,0.22), transparent), radial-gradient(500px 240px at 90% 100%, rgba(143,40,64,0.25), transparent)",
        }}
      />
      <div className="container-x relative py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 text-white">
                <Plus className="h-5 w-5" strokeWidth={3} />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                Portfolio Năng lực số
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Hành trình rèn luyện năng lực số của sinh viên ngành Y Khoa — tổng hợp 6
              dự án thực hành, hướng tới sử dụng công nghệ & AI một cách hiệu quả và có
              trách nhiệm.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-white">Điều hướng</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-300">Giới thiệu</Link></li>
              <li><Link to="/du-an" className="hover:text-brand-300">Dự án</Link></li>
              <li><Link to="/tong-ket" className="hover:text-brand-300">Tổng kết</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {SITE.year} {SITE.fullName} · {SITE.major}</p>
        </div>
      </div>
    </footer>
  );
}
