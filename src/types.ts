export type PageName = "home" | "about" | "trips" | "gallery" | "contact" | "documents" | "rules";

export type NavigateFn = (page: PageName) => void;

export interface PageProps {
  onNavigate: NavigateFn;
}
