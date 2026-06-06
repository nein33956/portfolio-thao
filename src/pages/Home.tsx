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
} from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects, SITE } from "../data/projects";
import { getIcon } from "../lib/icons";

const stats = [
  { big: "06", lbl: "Dự án thành phần" },
  { big: "06", lbl: "Năng lực cốt lõi" },
  { big: "100%", lbl: "Trích nguồn minh bạch" },
  { big: "A+", lbl: "Mục tiêu chất lượng" },
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
            Xin chào, mình là <br />
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
              <div key={s.lbl} className="card-surface px-4 py-6 text-center">
                <div className="font-display text-3xl font-bold gradient-text">{s.big}</div>
                <div className="mt-1 text-xs font-semibold text-ink-muted">{s.lbl}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU BẢN THÂN ===== */}
      <section className="py-16">
        <div className="container-x">
          <Reveal>
            <SectionHead kicker="Về mình" title="Giới thiệu bản thân" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {goals.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.1}>
                <div className="card-surface h-full p-7 transition-transform hover:-translate-y-1.5">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${g.grad} text-white shadow-soft`}
                  >
                    <g.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-ink">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{g.body}</p>
                </div>
              </Reveal>
            ))}
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
              <ul className="space-y-3">
                {portfolioGoals.map((g, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 rounded-2xl bg-brand-50/70 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-brand-500" />
                      <span className="text-sm text-ink-soft">{g}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1.5"
                  >
                    <div className="flex items-center justify-between bg-gradient-to-r from-brand-100 to-grape-100 px-6 py-5">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-3xl font-bold text-white drop-shadow">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-500">
                        {p.task}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.short}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-all group-hover:gap-2.5">
                        Xem chi tiết <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
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

      {/* ===== CTA liêm chính ===== */}
      <section className="pb-10 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-candy p-10 text-center text-white sm:p-14">
              <ShieldCheck className="relative mx-auto h-12 w-12" />
              <h2 className="relative mt-4 font-display text-3xl font-bold">
                Cam kết liêm chính học thuật
              </h2>
              <p className="relative mx-auto mt-3 max-w-2xl text-white/90">
                Toàn bộ Portfolio được thực hiện trung thực. Mọi nội dung tham khảo và công cụ AI
                đều được ghi nguồn rõ ràng ở từng dự án.
              </p>
              <Heart className="relative mx-auto mt-4 h-5 w-5" fill="currentColor" />
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
