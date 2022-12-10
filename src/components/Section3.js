const Section3 = () => {
  return (
    <div className="relative pt-[100px] ml-[100px]">
      {/* <div className="absolute -right-[200px]  w-[140%] h-[120%] bg-white  z-10 "></div> */}
      <div className="z-50">
        <div className="flex flex-row p-5 pr-20 pl-20 z-20">
          <div className="basis-1/3 p-2 card z-20">

            <img
              src={require("../pictures/HP6.jpg")}
              className="rounded-[10px]"
            />
            <p className="mt-10 text-2xl pb-10  text-left font-light">
              Penthouse
            </p>
          </div>
          <div className="basis-1/3 p-2 card z-20">
            <img
              src={require("../pictures/HP7.jpg")}
              className="rounded-[10px]"
            />
            <p className="mt-10 text-2xl pb-10 font-light text-left">
              Main Floor
            </p>
          </div>
          <div className="basis-1/3 p-2 card z-20">
            <img
              src={require("../pictures/HP8-2.jpg")}
              className="rounded-[10px] z-20"
            />
            <p className="mt-10 text-2xl pb-10 text-left font-light">
              Ground Floor

            </p>
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
