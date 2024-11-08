import Header from "../app/components/header";
import Section_1 from "../app/components/Section_1";
import Tendance from "../app/components/Tendance";
import Categories from "../app/components/Categories";
import Section_suggestion from "../app/components/Section_suggestion";
import Section_avenir from "../app/components/Section_avenir";
import Section_apropos from "../app/components/Section_apropos";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col w-full h-[100%]">
      <Header />
      <Section_1 />
      <Tendance />
      <Categories />
      <Section_suggestion />
      <Section_avenir />
      <Section_apropos />
      <Footer />
    </div>
  );
}

