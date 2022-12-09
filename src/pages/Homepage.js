import Nav from "../components/Nav";
import Nav2 from "../components/Nav2";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section15 from "../components/Section15";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-row relative overflow-hidden pl-[100px]">
        <div className="basis-2/5 relative">
          <img
            src={require("../pictures/grain1.jpg")}
            className="opacity-10 absolute w-[100%] h-[100%]"
          />
          <div className=" bg-main  h-screen  "></div>
        </div>
        <div className="basis-3/5 m-auto text-left p-20 ">
          <div className=" top-piece text-8xl text-six font-extrabold text-left">
            <span className="text-9xl mod3"> Casa Ladera</span>
          </div>
          <div className="text-3xl text-six text-left top-piece mod3 ml-4">
            Puerto Vallarta
          </div>
        </div>
      </div>

      <Section1 />
      <Section15 />

      <Section3 />

      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
};
export default Homepage;
