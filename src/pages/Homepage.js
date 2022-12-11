import Nav from "../components/Nav";
import Section1 from "../components/homepage/Section1";
import Section2 from "../components/homepage/Section2";
import Section3 from "../components/homepage/Section3";
import Section4 from "../components/homepage/Section4";
import Section5 from "../components/homepage/Section5";
import Section6 from "../components/homepage/Section6";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <div className="bg-main block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto">
          <div className=" text-5xl text-white">Welcome to Casa Ladera</div>
          <div className="text-3xl text-white"> Puerto Vallarta</div>
        </div>
      </div>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};
export default Homepage;
