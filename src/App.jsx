import { useState } from "react";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TripsPage from "./pages/TripsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import DocumentsPage from "./pages/DocumentsPage";
import RulesPage from "./pages/RulesPage";

/**
 * Page registry — add new pages here.
 * Each entry maps a route key → component.
 */
const PAGES = {
  home: HomePage,
  about: AboutPage,
  trips: TripsPage,
  gallery: GalleryPage,
  contact: ContactPage,
  documents: DocumentsPage,
  rules: RulesPage,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = (page) => {
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
