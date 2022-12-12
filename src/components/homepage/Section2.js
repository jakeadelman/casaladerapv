const Section2 = () => {
  return (
    <div className="flex flex-row mt-20  bg-seven  p-[50px] pb-[50px] pt-[50px] relative">
      <div className="basis-3/5 flex flex-col  items-center justify-center p-20 text-xl z-20">
        <p className="text-left font-light">
          The top two floors each have a single bedroom, while the ground floor
          unit contains two bedrooms. Each floor boasts a fully equipped kitchen
          and all of the 4 bedrooms offer a king-size bed with their own private
          4-piece ensuite bathroom (no sharing needed).
        </p>
      </div>
      <div className="basis-2/5 flex flex-col z-20">
        <div className="flex flex-row">
          <a href="/penthouse">
            <div class="container2 cursor-pointer">
              <img
                src={require("../../pictures/HP3.jpg")}
                className="image w-[400px] md-img"
              />
              <div class="middle">
                <div class="text-2xl font-light">View More</div>
              </div>
            </div>
          </a>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light  text-2xl">
            Penthouse | One Bedroom
          </p>
        </div>
        <div className="flex flex-row mt-5 mb-5">
          <p className="flex items-center text-center justify-end pr-10 w-full font-light text-2xl relative">
            Main Floor | One Bedroom
          </p>
          <a href="/main-floor">
            <div class="container2 cursor-pointer">
              <img
                src={require("../../pictures/HP4.jpg")}
                className="image w-[500px] md-img"
              />
              <div class="middle">
                <div class="text-2xl font-light ">View More</div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-row">
          <a href="/ground-floor">
            <div class="container2 cursor-pointer">
              <img
                src={require("../../pictures/HP5.jpg")}
                className="image w-[400px] md-img"
              />
              <div class="middle">
                <div class="text-2xl font-light ">View More</div>
              </div>
            </div>
          </a>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light text-2xl">
            Ground Floor | Two Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
