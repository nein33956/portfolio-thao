import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Rocket,
  User,
  FolderKanban,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Calendar,
} from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "6", lbl: "Dự án thực hành", icon: FolderKanban, tint: "bg-brand-50", ic: "from-brand-400 to-brand-600" },
  { big: "100%", lbl: "Bài đã nộp", icon: CheckCircle2, tint: "bg-grape-100/60", ic: "from-grape-400 to-grape-600" },
  { big: "12+", lbl: "Công cụ & AI đã dùng", icon: Sparkles, tint: "bg-peach-100/60", ic: "from-peach-300 to-brand-400" },
  { big: "2026", lbl: "Năm hoàn thành", icon: Calendar, tint: "bg-brand-50", ic: "from-brand-400 to-grape-500" },
];

const goals = [
  {
    icon: User,
    title: "Thông tin cá nhân",
    grad: "from-brand-400 to-brand-600",
    body: (
      <>
        <b>Họ tên:</b> {SITE.fullName}
        <br />
        <b>Ngành:</b> {SITE.major}
        <br />
        <b>Trường:</b> {SITE.school}
        <br />
        <b>Sở thích:</b> {SITE.hobbies}
      </>
    ),
  },
  {
    icon: Target,
    title: "Mục tiêu học tập",
    grad: "from-grape-400 to-grape-600",
    body: "Nắm vững năng lực số nền tảng phục vụ học tập & nghiên cứu y khoa: quản lý tài liệu khoa học, tra cứu thông tin đáng tin cậy, sử dụng AI hiệu quả và có đạo đức.",
  },
  {
    icon: Rocket,
    title: "Định hướng phát triển",
    grad: "from-peach-300 to-brand-400",
    body: "Trở thành người làm y khoa biết tận dụng công nghệ số: ứng dụng AI hỗ trợ học tập/chẩn đoán, đảm bảo an toàn dữ liệu bệnh nhân và liêm chính học thuật.",
  },
];

const portfolioGoals = [
  "Thể hiện các kỹ năng số đã học qua 6 dự án thực hành cụ thể.",
  "Lưu trữ sản phẩm cá nhân có hệ thống, dễ truy cập & chia sẻ.",
  "Ghi lại quá trình tự học và sự tiến bộ về năng lực số.",
  "Phản ánh tư duy học thuật: minh bạch nguồn, dùng AI có trách nhiệm.",
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
        <Aurora />
        <div className="container-x text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" /> Portfolio cá nhân · Môn Năng lực số
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mx-auto mt-7 max-w-4xl font-display text-5xl font-bold leading-[1.08] text-ink sm:text-7xl"
          >
            Hello, I'm <br />
            <span className="gradient-text">{SITE.fullName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
          >
            Sinh viên <b className="text-brand-600">{SITE.major}</b> — đây là hành trình rèn luyện
            năng lực số của mình: quản lý dữ liệu, khai thác thông tin học thuật và ứng dụng AI một
            cách có trách nhiệm. 🌷
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.19 }}
            className="mt-9 flex flex-wrap justify-center gap-3"
          >
            <Link to="/du-an" className="btn-primary">
              Khám phá 6 dự án <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/tong-ket" className="btn-outline">
              Tổng kết hành trình
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.lbl}
                className={`rounded-3xl ${s.tint} p-5 text-center shadow-soft transition-transform hover:-translate-y-1`}
              >
                <span
                  className={`mx-auto grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br ${s.ic} text-white shadow-soft`}
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 font-display text-3xl font-bold text-ink">{s.big}</div>
                <div className="mt-0.5 text-xs font-semibold text-ink-muted">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU — Hồ sơ ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Thẻ hồ sơ + avatar blob */}
            <Reveal>
              <div className="card-surface p-8 text-center">
                <div className="relative mx-auto h-32 w-32 animate-blob overflow-hidden bg-candy shadow-glow">
                  <span className="absolute inset-0 grid place-items-center text-5xl text-white">🌸</span>
                  <img
                    src="/img/thao.jpg"
                    alt={SITE.fullName}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink">{SITE.fullName}</h3>
                <p className="mt-1 text-sm text-ink-muted">{SITE.major}</p>
                <p className="text-sm text-ink-muted">{SITE.school}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {SITE.hobbies.split(",").map((h) => (
                    <span key={h} className="chip">{h.trim()}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Bio + mục tiêu/định hướng */}
            <Reveal delay={0.1}>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-500">Về mình</span>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                Đôi nét giới thiệu
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Mình là {SITE.fullName}, sinh viên {SITE.major}. Với mình, môn Năng lực số là dịp
                để rèn một lối tư duy và làm việc trong môi trường số: hiệu quả, cẩn thận và có
                trách nhiệm. 💕
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-brand-50/70 p-5">
                  <div className="flex items-center gap-2 font-bold text-brand-600">
                    <Target className="h-4 w-4" /> Mục tiêu học tập
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{goals[1].body}</p>
                </div>
                <div className="rounded-2xl bg-grape-100/70 p-5">
                  <div className="flex items-center gap-2 font-bold text-grape-600">
                    <Rocket className="h-4 w-4" /> Định hướng
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{goals[2].body}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MỤC TIÊU PORTFOLIO ===== */}
      <section className="py-16">
        <div className="container-x">
          <div className="card-surface relative overflow-hidden p-8 sm:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-100 blur-2xl" />
            <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-grape-100 blur-2xl" />
            <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="chip"><Target className="h-3.5 w-3.5" /> Mục tiêu Portfolio</span>
                <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Vì sao mình làm <span className="gradient-text">Portfolio</span> này?
                </h2>
                <p className="mt-4 text-ink-soft">
                  Đây là nơi mình tổng hợp, hệ thống hóa kết quả học tập và thể hiện sự trưởng
                  thành về năng lực số trong suốt môn học.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {portfolioGoals.map((g, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="h-full rounded-2xl bg-brand-50/70 p-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-grape-500 font-display text-sm font-bold text-white shadow-soft">
                        {i + 1}
                      </span>
                      <p className="mt-3 text-sm leading-snug text-ink-soft">{g}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PREVIEW DỰ ÁN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="Dự án nổi bật" title="6 năng lực · 6 dự án" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 2) * 0.08}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
                  >
                    <span className="relative grid h-16 w-16 flex-none place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-grape-500 text-white shadow-soft">
                      <Icon className="h-7 w-7" />
                      <span className="absolute -bottom-1.5 -right-1.5 grid h-6 w-6 place-items-center rounded-full bg-white font-display text-[11px] font-bold text-brand-600 shadow-soft">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500">
                        {p.task}
                      </span>
                      <h3 className="font-display text-base font-bold leading-tight text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-ink-muted">{p.short}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 flex-none text-brand-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/du-an" className="btn-primary">
              <FolderKanban className="h-4 w-4" /> Xem tất cả dự án
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Cam kết — thẻ trắng có con dấu gradient ===== */}
      <section className="pb-12 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="card-surface relative mx-auto max-w-3xl overflow-hidden p-10 text-center sm:p-12">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-100 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-grape-100 blur-2xl" />
              <div className="relative">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-candy text-white shadow-glow">
                  <ShieldCheck className="h-8 w-8" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Cam kết <span className="gradient-text">liêm chính học thuật</span>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-ink-soft">
                  Toàn bộ Portfolio được thực hiện trung thực. Mọi nội dung tham khảo và công cụ AI
                  đều được ghi nguồn rõ ràng ở từng dự án.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-bold text-brand-600">
                  <Heart className="h-4 w-4" fill="currentColor" /> {SITE.fullName}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-500">{kicker}</span>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      <div className="rule mx-auto mt-4 w-24" />
    </div>
  );
}
