import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[70vh] place-items-center text-center">
      <div>
        <p className="font-display text-7xl font-extrabold gradient-text">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-ink">Không tìm thấy trang</h1>
        <p className="mt-2 text-ink-muted">Trang bạn tìm không tồn tại hoặc đã được di chuyển.</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">
          <Home className="h-4 w-4" /> Về trang chủ
        </Link>
      </div>
    </section>
  );
}
