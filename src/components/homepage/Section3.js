import HP6 from "../../pictures/HP6-min.jpg";
import HP7 from "../../pictures/HP7-min.jpg";
import HP8 from "../../pictures/HP8-min.jpg";

const Section3 = () => {
  return (
    <div className="relative pt-[100px]">
      <div className="z-50">
        <div className="flex sm:flex-col lg:flex-row p-5 pr-20 pl-20 z-20">
          <div className="basis-1/3 p-2 card z-20">
            <a href="/penthouse">
              <img src={HP6} className="" />
              <p className="mt-10 text-2xl pb-10  text-left font-light">
                Penthouse Villa
              </p>
              <p className="sm:pb-10 lg:pb-0 text-left font-light">
                Live on top of the world with sea to sky views and very large
                outdoor lounge area including a palapa with lounge chairs even
                higher. One King size bedroom with en-suite. Fully equipped
                kitchen.
              </p>
            </a>
          </div>
          <div className="basis-1/3 p-2 card z-20">
            <a href="/main-floor">
              <img src={HP7} className="" />
              <p className="mt-10 text-2xl pb-10 font-light text-left">
                Main Floor Pool Villa
              </p>
              <p className="sm:pb-10 lg:pb-0 text-left font-light">
                Our most sophisticated Villa with infinity plunge pool. Floor to
                ceiling glass walls that open completely for living harmoniously
                indoors and outdoors. One king size bedroom with en-suite. Fully
                equipped kitchen,
              </p>
            </a>
          </div>

          <div className="basis-1/3 p-2 card z-20">
            <a href="/ground-floor">
              <img src={HP8} className="" />
              <p className="mt-10 text-2xl pb-10 text-left font-light">
                2 Bedroom Villa
              </p>
              <p className="sm:pb-10 lg:pb-0 text-left font-light">
                Our Mexican inspired 2 bedroom Villa with large patio. 2 full
                king size bedrooms both with en-suites. View still great! Fully
                equipped kitchen. Andale!
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pl-20 pr-20 pb-[150px] font-light text-left mt-20 text-xl relative z-20">
          All 3 floors offer large, open indoor/outdoor spaces with unbeatable,
          endless ocean views. Although each unit is autonomous, any or all can
          easily be combined to create a super-large, connected space for the
          whole family or larger groups. But these views come with a cost: there
          are approximately 100 steps that you must climb to access the house.
        </div>
      </div>
    </div>
  );
};

export default Section3;
