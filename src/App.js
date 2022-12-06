import "./App.css";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 bg-four h-[100px] w-screen flex flex-row justify-between">
        <img
          src={require("./pictures/logo3.png")}
          className="ml-[50px] h-[90px]"
        />
        <nav className="m-auto text-four text-white text-lg font-medium ">
          <ul className="flex flex-row m-auto  ">
            <li className="mr-10">Home</li>
            <li className="mr-10">Ground Floor</li>
            <li className="mr-10">Main Floor</li>
            <li className="mr-10">Penthouse</li>
            <li className="mr-10">Reviews</li>
            <li className="mr-10">Contact</li>
          </ul>
        </nav>
      </div>
      <img
        src={require("./pictures/HP1.jpg")}
        className="h-[800px] object-cover w-screen"
      />
      <div className="flex flex-row mt-[100px]">
        <div className="basis-1/2 flex flex-col items-center justify-center p-20 text-xl">
          <p>
            This private house sits perched on the mountainside overlooking the
            Centro district, and is comprised of 3 individual units, one to a
            floor, each with it’s own separate entrance.
          </p>
          <div className="flex flex-row pt-20">
            <p className="mr-[100px] ml-20 text-8xl relative">
              <span className="absolute bottom-[-20px] left-[-60px] text-two -z-50">
                3
              </span>
              <span className="text-2xl font-medium">Apartments</span>
            </p>
            <p className="mr-[100px] text-8xl relative">
              <span className="absolute bottom-[-20px] left-[-60px] text-two -z-50">
                4
              </span>
              <span className="text-2xl font-medium">Bedrooms</span>
            </p>
            <p className="text-8xl relative">
              <span className="absolute bottom-[-20px] left-[-60px] text-two -z-50">
                3
              </span>
              <span className="text-2xl font-medium">Terraces</span>
            </p>
          </div>
        </div>
        <div className="basis-1/2 flex justify-end backgimg"></div>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default App;
