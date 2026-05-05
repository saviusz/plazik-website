import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TripsPage from "./pages/TripsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DocumentsPage from "./pages/DocumentsPage";
import RulesPage from "./pages/RulesPage";
import { PageName } from "./types";

const PAGES: Record<PageName, () => React.JSX.Element> = {
  home: HomePage,
  about: AboutPage,
  trips: TripsPage,
  gallery: GalleryPage,
  contact: ContactPage,
  documents: DocumentsPage,
  rules: RulesPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("home");

  const navigate = (page: PageName) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PageComponent = PAGES[currentPage] ?? HomePage;

  return (
    <Layout currentPage={currentPage} onNavigate={navigate}>
      <PageComponent onNavigate={navigate} />
    </Layout>
  );
}
