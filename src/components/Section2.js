const Section2 = () => {
  return (
    <div className="flex flex-row mt-20   p-[50px] pb-[50px] pt-[50px] relative">
      <div className="basis-3/5 flex flex-col items-center justify-center p-20 text-2xl z-20">
        <p className="text-left font-light">
          The top two floors each have a single bedroom, while the ground floor
          unit contains two bedrooms. Each floor boasts a fully equipped kitchen
          and all of the 4 bedrooms offer a king-size bed with their own private
          4-piece ensuite bathroom (no sharing needed).
        </p>
      </div>
      <div className="basis-2/5 flex flex-col z-20">
        <div className="flex flex-row">
          <div class="container2 cursor-pointer">
            <img
              src={require("../pictures/HP3.jpg")}
              className="image w-[400px] md-img"
            />
            <div class="middle">
              <div class="text-3xl">View</div>
            </div>
          </div>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light  text-3xl">
            Penthouse | One Bedroom
          </p>
        </div>
        <div className="flex flex-row mt-5 mb-5">
          <p className="flex items-center text-center justify-end pr-10 w-full font-light text-3xl relative">
            Main Floor | One Bedroom
          </p>
          <div class="container2 cursor-pointer">
            <img
              src={require("../pictures/HP4.jpg")}
              className="image w-[500px] md-img"
            />
            <div class="middle">
              <div class="text-3xl ">View</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div class="container2 cursor-pointer">
            <img
              src={require("../pictures/HP5.jpg")}
              className="image w-[400px] md-img"
            />
            <div class="middle">
              <div class="text-3xl ">View</div>
            </div>
          </div>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light text-3xl">
            Ground Floor | Two Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
