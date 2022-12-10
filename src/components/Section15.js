const Section15 = () => {
  return (
    <div className="flex flex-row ml-[100px] h-[495 px] bg-eight">
      {/* <div className="mod2 basis-1/3  p-[40px] m-[50px] text-white bg-six flex relative flex-col justify-between  text-left items-start text-lg">
       
        <div className="text-3xl">Penthouse | 1 Bedroom</div>
        <div className="text-3xl">Main Floor | 1 Bedroom</div>
        <div className="text-3xl">Ground Floor | 2 Bedroom</div>
      </div> */}

      <div className="basis-1/3">
        <img
          src={require("../pictures/HP5.jpg")}
          className="image w-[400px] md-img"
        />
      </div>
      <div className="basis-2/3 m-auto text-left ml-4 text-2xl p-5 font-light  ">
        The top two floors each have a{" "}
        <span className="text-six font-bold">single bedroom</span>, while the
        ground floor unit contains{" "}
        <span className="text-six font-bold">two bedrooms</span>. Each floor
        boasts a fully equipped kitchen and all of the 4 bedrooms offer a{" "}
        <span className="text-six font-bold">king-size bed</span> with their own
        private 4-piece ensuite bathroom (no sharing needed).
      </div>
    </div>
  );
};
export default Section15;
