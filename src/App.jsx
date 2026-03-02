import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";

// 1. 创建追踪逻辑组件
const MatomoTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window._paq) {
      // 告诉 Matomo 当前的完整路径（包含 GitHub Pages 的子目录）
      window._paq.push(['setCustomUrl', window.location.pathname + window.location.search]);
      window._paq.push(['setDocumentTitle', document.title]);
      window._paq.push(['trackPageView']);
      window._paq.push(['enableLinkTracking']);
    }
  }, [location]); // 当路径变化时触发

  return null;
};

const App = () => {
  return (
    <main className="h-full">
      <Router basename="/3d_portfolio">
        {/* 2. 放在 Router 内部以使用 useLocation 钩子 */}
        <MatomoTracker />
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;