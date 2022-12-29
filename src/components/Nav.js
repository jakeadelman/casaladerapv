import { useState } from "react";
const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const navClicked = () => {
    setClicked(true);
  };
  const navClickedBack = () => {
    setClicked(false);
  };

  return (
    <div className="fixed top-0 bg-white h-[100px] w-screen flex flex-row justify-between z-50 text-center font-medium">
      <a href="/">
        <img
          src={require("../pictures/logo.png")}
          className="ml-[100px] mt-[10px] h-[80px]"
        />
      </a>
      <nav className="ml-auto m-auto uppercase tracking-wider text-six text-lg  font-medium mr-10 large-navigation">
        <ul className="flex flex-row m-auto nav ">
          <a href="/">
            <li className="mr-10 hover:cursor-pointer">
              <span>Home</span>
            </li>
          </a>
          <a href="/penthouse">
            <li className="mr-10  hover:cursor-pointer">
              <span>Penthouse</span>
            </li>
          </a>
          <a href="/main-floor">
            <li className="mr-10 hover:cursor-pointer">
              <span>Main Floor</span>
            </li>
          </a>
          <a href="/ground-floor">
            <li className="mr-10 hover:cursor-pointer">
              <span>Ground Floor</span>
            </li>
          </a>

          <a href="/reviews">
            <li className="mr-10  hover:cursor-pointer">
              <span>Reviews</span>
            </li>
          </a>
          <a href="/contact">
            <li className="mr-10  hover:cursor-pointer">
              <span>Contact</span>
            </li>
          </a>
        </ul>
      </nav>
      <nav className="small-navigation">
        <div className="pt-[20px] pr-14">
          <img
            src={require("../pictures/hamburger3.png")}
            onClick={navClicked}
            className="w-14 cursor-pointer"
          />
        </div>
      </nav>
      {clicked ? (
        <div className="absolute w-screen h-screen bg-six">
          <img
            src={require("../pictures/close-white.png")}
            onClick={navClickedBack}
            className=" absolute w-8 right-14 top-6 cursor-pointer"
          />
          <div className="h-screen block">
            <ul className="block m-auto mt-[46%] text-white text-2xl">
              <a href="/">
                <li className="mb-2 cursor-pointer">Home</li>
              </a>
              <a href="/penthouse">
                <li className="mb-2 cursor-pointer">Penthouse</li>
              </a>
              <a href="/main-floor">
                <li className="mb-2 cursor-pointer">Main Floor</li>
              </a>
              <a href="/ground-floor">
                <li className="mb-2 cursor-pointer">Ground Floor</li>
              </a>
              <a href="/reviews">
                <li className="mb-2 cursor-pointer">Reviews</li>
              </a>
              <a href="/contact">
                <li className="mb-2 cursor-pointer">Contact</li>
              </a>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Nav;
