import Nav from "../components/Nav";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <div className="bg-main block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        {/* <img
          src={require("../pictures/HP1.jpg")}
          className="h-[800px] object-cover w-screen"
        /> */}

        {/* <div className=" absolute w-[40%] bg-black h-[20%] right-[33%] top-[46%] opacity-100"></div> */}
        {/* <div className=" text-6xl text-white z-50 "> */}
        <div className="mt-200px m-auto">
          <div className=" text-5xl text-white">Welcome to Casa Ladera</div>
          <div className="text-3xl text-white"> Puerto Vallarta</div>
        </div>
        {/* </div> */}
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
