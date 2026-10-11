import { useEffect } from "react";
import { pageMeta, type PageMeta } from "./page-meta";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProcessPage } from "./pages/ProcessPage";
import { WorkPage } from "./pages/WorkPage";
import { AboutPage } from "./pages/AboutPage";
import { StartPage } from "./pages/StartPage";
import { PrivacyPage } from "./pages/PolicyPages";
import { TermsPage } from "./pages/PolicyPages";
import { CookiesPage } from "./pages/PolicyPages";
import { AccessibilityPage } from "./pages/PolicyPages";
import { NotFoundPage } from "./pages/NotFoundPage";

import { RouteContext } from "./components/Layout";

export default function App({
  path = typeof window === "undefined"
    ? "/"
    : window.location.pathname.replace(/\/+$/, "") || "/",
}: {
  path?: string;
}) {
  const meta = pageMeta[path];

  useEffect(() => {
    const fallback: PageMeta = {
      title: "Page not found — SRCcvde",
      description: "The page you requested could not be found.",
    };
    const current = meta || fallback;
    document.title = current.title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", current.description);
    window.scrollTo(0, 0);
  }, [path, meta]);

  function page() {
    switch (path) {
      case "/":
        return <HomePage />;
      case "/services":
        return <ServicesPage />;
      case "/process":
        return <ProcessPage />;
      case "/work":
        return <WorkPage />;
      case "/about":
        return <AboutPage />;
      case "/start":
        return <StartPage />;
      case "/privacy":
        return <PrivacyPage />;
      case "/terms":
        return <TermsPage />;
      case "/cookies":
        return <CookiesPage />;
      case "/accessibility":
        return <AccessibilityPage />;
      default:
        return <NotFoundPage />;
    }
  }
  return <RouteContext.Provider value={path}>{page()}</RouteContext.Provider>;
}
