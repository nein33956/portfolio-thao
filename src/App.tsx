import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/du-an" element={<Projects />} />
          <Route path="/du-an/:slug" element={<ProjectDetail />} />
          <Route path="/tong-ket" element={<Summary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
