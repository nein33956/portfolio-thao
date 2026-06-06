import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  Eye,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];

  if (!p) {
    return (
      <section className="container-x pt-40 pb-20 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Không tìm thấy dự án</h1>
        <Link to="/du-an" className="btn-primary mt-6 inline-flex">
          <ArrowLeft className="h-4 w-4" /> Về trang Dự án
        </Link>
      </section>
    );
  }

  const Icon = getIcon(p.icon);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const isPdf = p.submission?.fileUrl.toLowerCase().endsWith(".pdf");
  // Link "Xem bài": nếu là PDF thì mở qua Google Viewer để xem inline (tránh bị tải về)
  const lowerView = p.viewUrl ? p.viewUrl.toLowerCase() : "";
  const viewHref = !p.viewUrl
    ? ""
    : lowerView.endsWith(".pdf")
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(p.viewUrl)}&embedded=true`
    : lowerView.endsWith(".docx") || lowerView.endsWith(".doc")
    ? `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(p.viewUrl)}`
    : p.viewUrl;

  return (
    <>
      {/* Hero — banner gradient candy */}
      <section className="pt-28 pb-8 sm:pt-36">
        <div className="container-x">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
            <Link to="/" className="hover:text-brand-600">Trang chủ</Link>
            <span>/</span>
            <Link to="/du-an" className="hover:text-brand-600">Dự án</Link>
            <span>/</span>
            <span className="text-brand-600">{p.task}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 overflow-hidden rounded-[2rem] bg-candy p-8 text-white shadow-glow sm:p-10"
          >
            <div className="flex items-center gap-5">
              <span className="grid h-20 w-20 flex-none place-items-center rounded-3xl bg-white/25 font-display text-3xl font-bold backdrop-blur">
                {String(p.id).padStart(2, "0")}
              </span>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                  <Icon className="h-3.5 w-3.5" /> {p.task}
                </span>
                <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-5xl">
                  {p.title}
                </h1>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {/* Mục tiêu */}
            <Reveal>
              <Section label="Mục tiêu của bài">
                <p className="text-lg leading-relaxed text-ink-soft">{p.objective}</p>
              </Section>
            </Reveal>

            {/* Yêu cầu đề bài */}
            <Reveal>
              <Section label="Yêu cầu đề bài">
                {p.requirementImg ? (
                  <figure>
                    <img
                      src={p.requirementImg}
                      alt="Ảnh yêu cầu đề bài"
                      className="w-full rounded-md border border-brand-100"
                      onError={(e) => {
                        const fig = e.currentTarget.closest("figure");
                        if (fig) (fig as HTMLElement).style.display = "none";
                      }}
                    />
                    <figcaption className="mt-2 text-center text-xs italic text-ink-muted">
                      Ảnh chụp yêu cầu đề bài trên LMS
                    </figcaption>
                  </figure>
                ) : (
                  <ol className="space-y-3.5">
                    {p.steps.map((s, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="font-display text-lg font-semibold leading-tight text-brand-400">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="pt-0.5 text-ink-soft">{s}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </Section>
            </Reveal>

            {/* Công cụ */}
            <Reveal>
              <Section label="Công cụ đã sử dụng">
                <div className="flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </Section>
            </Reveal>

            {/* Minh chứng */}
            <Reveal>
              <Section label="Minh chứng đã nộp bài">
                {p.submission ? (
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-700">
                        <CheckCircle2 className="h-3.5 w-3.5" /> {p.submission.status}
                      </span>
                      <span className="text-sm text-ink-muted">
                        Thời gian nộp: <b className="text-ink-soft">{p.submission.submittedAt}</b>
                      </span>
                    </div>

                    {/* Các ảnh minh chứng */}
                    {p.proofImgs?.map((src, i) => (
                      <figure key={i}>
                        <img
                          src={src}
                          alt={`Ảnh minh chứng ${i + 1}`}
                          className="w-full rounded-md border border-brand-200"
                          onError={(e) => {
                            const fig = e.currentTarget.closest("figure");
                            if (fig) (fig as HTMLElement).style.display = "none";
                          }}
                        />
                        <figcaption className="mt-2 text-center text-xs italic text-ink-muted">
                          Minh chứng {i + 1} — ảnh chụp xác nhận đã nộp bài trên LMS
                        </figcaption>
                      </figure>
                    ))}

                    {/* Nút xem bài */}
                    {p.viewUrl ? (
                      <a
                        href={viewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Eye className="h-4 w-4" /> Xem bài làm
                      </a>
                    ) : p.submission.fileUrl ? (
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={
                            isPdf
                              ? p.submission.fileUrl
                              : `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
                                  p.submission.fileUrl
                                )}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <Eye className="h-4 w-4" /> Xem bài làm
                        </a>
                        <a href={p.submission.fileUrl} download className="btn-outline">
                          <Download className="h-4 w-4" /> Tải về ({isPdf ? ".pdf" : ".docx"})
                        </a>
                      </div>
                    ) : null}

                    {/* Chi tiết nộp bài — gọn 1 dòng */}
                    <p className="border-t border-brand-100 pt-4 text-xs text-ink-muted">
                      Nộp trên <b className="text-ink-soft">LMS VNU</b> · Học phần AI và Công nghệ số ứng dụng
                    </p>
                  </div>
                ) : (
                  <p className="border-l-2 border-brand-300 bg-brand-50/40 py-3 pl-4 text-sm text-ink-muted">
                    Chưa cập nhật minh chứng cho bài này.
                  </p>
                )}
              </Section>
            </Reveal>

            {/* Trích nguồn AI */}
            <Reveal>
              <Section label="Trích nguồn & công cụ AI">
                <div className="border-l-2 border-brand-700 bg-brand-50/50 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Liêm chính học thuật
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.aiNote}</p>
                </div>
              </Section>
            </Reveal>

            {/* Bài học */}
            <Reveal>
              <Section label="Bài học rút ra">
                <p className="leading-relaxed text-ink-soft">{p.lesson}</p>
              </Section>
            </Reveal>

            {/* Pager */}
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-brand-200 pt-8">
              {prev ? (
                <Link to={`/du-an/${prev.slug}`} className="btn-outline">
                  <ArrowLeft className="h-4 w-4" /> {prev.task}
                </Link>
              ) : (
                <Link to="/du-an" className="btn-outline">
                  <ArrowLeft className="h-4 w-4" /> Tất cả dự án
                </Link>
              )}
              {next ? (
                <Link to={`/du-an/${next.slug}`} className="btn-primary">
                  {next.task} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link to="/tong-ket" className="btn-primary">
                  Tổng kết <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="card-surface mb-5 p-6 sm:p-7">
      <h2 className="mb-4 inline-block rounded-full bg-brand-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-600">
        {label}
      </h2>
      {children}
    </div>
  );
}

