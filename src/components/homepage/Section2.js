import HP3 from "../../pictures/HP3-min.jpg";
import HP4 from "../../pictures/HP4-min.jpg";
import HP5 from "../../pictures/HP5-min.jpg";

const Section2 = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row lg:mt-20  bg-seven  p-[50px] pb-[50px] pt-[50px] relative">
      <div className="basis-3/5 flex flex-col  items-center justify-center sm:p-10 lg:p-20 text-xl z-20">
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
              <img src={HP3} className="image w-[400px] md-img" />
              <div class="middle">
                <div class="text-2xl font-light">View More</div>
              </div>
            </div>
          </a>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light  text-2xl">
            Penthouse Villa | One Bedroom
          </p>
        </div>
        <div className="flex flex-row mt-5 mb-5">
          <p className="flex items-center text-center justify-end pr-10 w-full font-light text-2xl relative">
            Main Floor Villa | One Bedroom
          </p>
          <a href="/main-floor">
            <div class="container2 cursor-pointer">
              <img src={HP4} className="image w-[500px] md-img" />
              <div class="middle">
                <div class="text-2xl font-light ">View More</div>
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-row">
          <a href="/2-bedroom">
            <div class="container2 cursor-pointer">
              <img src={HP5} className="image w-[400px] md-img" />
              <div class="middle">
                <div class="text-2xl font-light ">View More</div>
              </div>
            </div>
          </a>
          <p className="flex items-center text-center justify-start pl-10 w-full font-light text-2xl">
            2 Bedroom Villa | Two Bedroom
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
