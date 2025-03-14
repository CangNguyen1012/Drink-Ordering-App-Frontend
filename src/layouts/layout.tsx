import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        {showHero && <Hero />}
        <div className="container mx-auto flex-1 py-10">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
