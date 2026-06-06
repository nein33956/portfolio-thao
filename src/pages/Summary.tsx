import { Link } from "react-router-dom";
import { Sprout, Brain, Star, BarChart3, ArrowLeft, Sparkles } from "lucide-react";
import Aurora from "../components/Aurora";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { getIcon } from "../lib/icons";

const skills = [
  { name: "Quản lý tệp & thư mục", level: "Tốt" },
  { name: "Tìm kiếm & đánh giá thông tin", level: "Khá" },
  { name: "Viết prompt & ứng dụng AI", level: "Tốt" },
  { name: "Hợp tác trực tuyến", level: "Tốt" },
  { name: "Sáng tạo nội dung số", level: "Khá" },
  { name: "An toàn & liêm chính học thuật", level: "Tốt" },
];

export default function Summary() {
  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-10 sm:pt-40">
        <Aurora />
        <div className="container-x text-center">
          <Reveal>
            <span className="chip"><Sparkles className="h-3.5 w-3.5" /> Trang Tổng kết</span>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-ink sm:text-6xl">
              Tổng kết <span className="gradient-text">hành trình</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              Trải nghiệm, kiến thức và những điều mình tâm đắc sau khi hoàn thành 6 dự án. 🌸
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="mx-auto max-w-3xl space-y-6">
            <Reveal>
              <Card icon={Sprout} grad="from-brand-400 to-brand-600" title="Trải nghiệm & cảm nhận">
                <div className="space-y-3 rounded-2xl border-l-4 border-brand-300 bg-brand-50/40 p-5 text-sm leading-relaxed text-ink-soft">
                  <p>
                    Quá trình làm Portfolio là một hành trình thật thú vị. Khi mới bắt đầu, mình
                    khá lúng túng vì nghĩ "AI và công nghệ số" chỉ là biết dùng máy tính. Nhưng càng đi
                    qua từng bài, mình càng nhận ra đây là cả một <b>tư duy làm việc trong môi
                    trường số</b>.
                  </p>
                  <p>
                    Điều mình thích nhất là khám phá sức mạnh của AI khi biết cách "ra lệnh" đúng,
                    và tự tay tạo ra những sản phẩm số của riêng mình. Khó khăn lớn nhất là rèn
                    thói quen <b>kiểm chứng nguồn</b> và trình bày kết quả minh bạch.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Brain} grad="from-grape-400 to-grape-600" title="Kiến thức & kỹ năng quan trọng nhất">
                <div className="grid gap-3 sm:grid-cols-2">
                  {projects.map((p) => {
                    const Icon = getIcon(p.icon);
                    return (
                      <div key={p.id} className="flex items-start gap-3 rounded-2xl bg-brand-50/60 p-3.5">
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-grape-500 text-white">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-sm leading-snug text-ink-soft">
                          <b className="text-ink">{p.title}</b>
                          <span className="mt-0.5 block text-xs text-ink-muted">{p.short}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={Star} grad="from-peach-300 to-brand-400" title="Điểm tâm đắc & thách thức">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-50 p-4">
                    <p className="mb-2 text-sm font-bold text-brand-600">💖 Điều mình tâm đắc</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Tự xây dựng được một <b>sản phẩm số hoàn chỉnh</b> — chính là website này.</li>
                      <li>Biết viết prompt hiệu quả, biến AI thành "trợ lý học tập".</li>
                      <li>Hiểu sâu hơn về liêm chính học thuật.</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-grape-100 p-4">
                    <p className="mb-2 text-sm font-bold text-grape-600">🌟 Thách thức đã vượt qua</p>
                    <ul className="list-disc space-y-1.5 pl-4 text-sm text-ink-soft">
                      <li>Phân biệt nguồn tin đáng tin cậy giữa "biển" thông tin.</li>
                      <li>Cân bằng giữa tận dụng AI và giữ tính trung thực.</li>
                      <li>Sắp xếp thời gian để hoàn thiện cả sáu nhiệm vụ.</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card icon={BarChart3} grad="from-brand-400 to-grape-500" title="Tự đánh giá bản thân">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {skills.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between gap-2 rounded-2xl bg-brand-50/60 px-4 py-2.5"
                    >
                      <span className="text-sm font-semibold text-ink-soft">{s.name}</span>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs font-bold text-white ${
                          s.level === "Tốt" ? "bg-brand-500" : "bg-grape-400"
                        }`}
                      >
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 rounded-2xl bg-peach-100 p-4 text-sm leading-relaxed text-ink-soft">
                  <b className="text-ink">Định hướng tiếp theo:</b> mình sẽ tiếp tục rèn kỹ năng đánh
                  giá nguồn và sáng tạo nội dung số, đồng thời ứng dụng AI và công nghệ số vào việc học ngành
                  Y Khoa — tra cứu tài liệu, phác đồ điều trị và hỗ trợ nghiên cứu một cách hiệu quả,
                  có trách nhiệm.
                </p>
              </Card>
            </Reveal>

            <div className="pt-4 text-center">
              <Link to="/du-an" className="btn-primary">
                <ArrowLeft className="h-4 w-4" /> Xem lại 6 dự án
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  grad,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  grad: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface p-6 sm:p-7">
      <div className="mb-4 flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-soft`}>
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="font-display text-lg font-bold text-ink">{title}</h2>
      </div>
      {children}
    </div>
  );
}
