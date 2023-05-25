import { NavigationDocument } from "@/prismicio-types";
import Navigation from "components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
  nav: NavigationDocument;
}

export default function Layout({ children, nav }: LayoutProps) {
  console.log(typeof nav);
  return (
    <>
      <Navigation navBar={nav} />
      <main>{children}</main>
    </>
  );
}
