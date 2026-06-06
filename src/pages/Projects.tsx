import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function Projects() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <Aurora />
        <div className="container-x text-center">
          <Reveal>
            <span className="chip"><Sparkles className="h-3.5 w-3.5" /> Trang Dự án</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
              Tập hợp <span className="gradient-text">6 dự án</span> của mình
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Mỗi dự án trình bày đầy đủ: mục tiêu, yêu cầu đề bài, minh chứng đã nộp và phần
              trích nguồn AI minh bạch. Bấm vào thẻ để xem chi tiết nha! 💕
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-16">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => {
              const Icon = getIcon(p.icon);
              return (
                <Reveal key={p.id} delay={(i % 3) * 0.1}>
                  <Link
                    to={`/du-an/${p.slug}`}
                    className="card-surface group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1.5"
                  >
                    <div className="flex items-center justify-between bg-gradient-to-r from-brand-100 via-grape-100 to-peach-100 px-6 py-6">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-4xl font-bold text-white drop-shadow">
                        {String(p.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-500">
                        {p.task}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-ink">{p.title}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.short}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tools.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold text-brand-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 transition-all group-hover:gap-2.5">
                        Xem chi tiết <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
