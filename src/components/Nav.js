const Nav = () => {
  return (
    <div className="fixed top-0 bg-white h-[100px] w-screen flex flex-row justify-between z-50">
      <a href="/">
        <img
          src={require("../pictures/logo.png")}
          className="ml-[100px] mt-[10px] h-[80px]"
        />
      </a>
      <nav className="ml-auto m-auto uppercase tracking-wider text-six text-xl mr-10 ">
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
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
