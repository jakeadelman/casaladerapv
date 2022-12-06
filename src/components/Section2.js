const Section2 = () => {
  return (
    <div className="flex flex-row mt-20 bg-four text-white p-10">
      <div className="basis-1/2 flex flex-col items-center justify-center p-20 text-xl">
        <p>
          The top two floors each have a single bedroom, while the ground floor
          unit contains two bedrooms. Each floor boasts a fully equipped kitchen
          and all of the 4 bedrooms offer a king-size bed with their own private
          4-piece ensuite bathroom (no sharing needed).
        </p>
      </div>
      <div className="basis-1/2 flex flex-col">
        <div className="flex flex-row">
          <div class="flip-box cursor-pointer">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  src={require("../pictures/HP3.jpg")}
                  className="w-[400px] md-img"
                />
              </div>
              <div class="flip-box-back mt-[130px]">
                <p className="text-xl font-bold flex justify-center items-center align-center">
                  View more
                </p>
              </div>
            </div>
          </div>
          <p className="flex items-center text-center justify-start pl-10 w-full font-bold text-2xl">
            Penthouse | One Bedroom
          </p>
        </div>
        <div className="flex flex-row mt-5 mb-5">
          <p className="flex items-center text-center justify-end pr-10 w-full font-bold text-2xl relative">
            Main Floor | One Bedroom
          </p>
          <div class="flip-box cursor-pointer">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  src={require("../pictures/HP4.jpg")}
                  className="w-[400px] md-img"
                />
              </div>
              <div class="flip-box-back mt-[140px]">
                <p className="text-xl font-bold flex justify-center items-center align-center">
                  View more
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div class="flip-box cursor-pointer">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <img
                  src={require("../pictures/HP5.jpg")}
                  className="w-[400px] md-img"
                />
              </div>
              <div class="flip-box-back mt-[130px]">
                <p className="text-xl font-bold flex justify-center items-center align-center">
                  View more
                </p>
              </div>
            </div>
          </div>
          <p className="flex items-center text-center justify-start pl-10 w-full font-bold text-2xl">
            Ground Floor | Two Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
