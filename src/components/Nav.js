const Nav = () => {
  return (
    <div className="fixed top-0 left-0 bg-six w-[100px] h-full   flex flex-col  z-50">
      <a href="/">
        <img
          src={require("../pictures/logo3.png")}
          className=" absolute ml-[10px] mt-[10px] h-[80px] w-[80px]"
        />
      </a>

      <nav className="ml-auto m-auto uppercase tracking-wider text-six text-lg  font-medium mr-10 ">
        <ul className="flex flex-row m-auto nav ">

          <a href="/">
            <li className="mr-10 hover:cursor-pointer">
              <span>Home</span>
            </li>
          </a>
          <a href="/ground-floor">
            <li className="mr-10 hover:cursor-pointer">
              <span>Ground Floor</span>
            </li>
          </a>
          <li className="mr-10 hover:cursor-pointer">
            <span>Main Floor</span>
          </li>
          <li className="mr-10  hover:cursor-pointer">
            <span>Penthouse</span>
          </li>
          <li className="mr-10  hover:cursor-pointer">
            <span>
              <span>Reviews</span>
            </span>
          </li>
          <li className="mr-10  hover:cursor-pointer">
            <span>Contact</span>
          </li>
        </ul> */}
      {/* </nav> */}
    </div>
  );
};
export default Nav;
