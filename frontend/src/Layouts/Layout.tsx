import { Footer } from "@/Component/Footer";
import { Header } from "../Component/Header";
import { Hero } from "../Component/Hero";
type Props = {
  Children: React.ReactNode;
};
export const Layout = ({ Children }: Props) => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Header />
      <Hero />
      <div className="container mx-auto flx-1 py-10">{Children}</div>
      <Footer/>
    </div>
  );
};
