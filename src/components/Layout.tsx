import { PageName, NavigateFn } from "../types";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageName;
  onNavigate: NavigateFn;
}

export default function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="bg-pattern font-display text-text-main antialiased selection:bg-primary selection:text-text-main overflow-x-hidden min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow flex flex-col items-center w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
