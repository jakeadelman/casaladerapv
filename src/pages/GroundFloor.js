import Nav from "../components/Nav";

const GroundFloor = () => {
  return (
    <div className=" ">
      <Nav />
      <img
        src={require("../pictures/GF1.jpg")}
        className="h-[800px] object-cover w-screen relative z-40"
      />
      <div className="relative">
        <div className="absolute -right-[200px] -top-[300px] w-[2000px] h-[140%] bg-one  z-20 slant"></div>

        <div className="flex md:flex-row md:pt-20 md:pb-20 md:-mb-[170px] sm:flex-col  z-40 ">
          <div className="basis-2/3 flex p-20 justify-center items-center text-xl  z-40">
            This spacious, sun-filled traditional style apartment has, a
            fantastic full-length balcony providing partial ocean views, and
            large, fully operable windows to let in the air and ocean breezes.
          </div>
          <div className="basis-1/3 ">
            <img
              src={require("../pictures/GF2.jpg")}
              className="md:rounded-l-3xl relative z-40"
            />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className="absolute -right-[200px] w-[2000px] h-[100%] bg-white z-10 slant"></div>
        <div className="z-50 flex md:flex-row mt-20 relative sm:flex-col-reverse z-40 ">
          <div className="basis-4/6">
            <img
              src={require("../pictures/GF3.jpg")}
              className="md:rounded-r-3xl -top-30 relative z-40 "
            />
          </div>
          <div className="basis-3/6 flex p-20 justify-center items-center text-xl">
            It's great base for exploring the city, sitting high on the hill in
            Centro, very close to shops, fine restaurants, art galleries & just
            a 5 - 10 minute walk down to the Malecon.
          </div>
        </div>
      </div>
      <div>
        <div className="absolute -right-[200px] w-[2000px] h-[100%] bg-one z-20 slant2"></div>

        <div className="flex md:flex-row sm:flex-col md:mt-20  md:-mb-[150px] relative pt-20 pb-20 z-50 ">
          <div className="basis-7/12 flex pb-20 pl-20 pr-20 justify-center md:items-start lg:items-center text-xl">
            In the morning the balcony provides cooling shade, but is bathed in
            sun all afternoon and evening.
          </div>
          <div className="basis-5/12">
            <img
              src={require("../pictures/GF4.jpg")}
              className="md:rounded-l-3xl"
            />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col  md:mt-20 relative">
        <div className="basis-3/6">
          <img
            src={require("../pictures/GF5.jpg")}
            className="md:rounded-3xl ml-10"
          />
        </div>
        <div className="basis-3/6 flex p-20 justify-center items-center text-xl">
          This spacious, sun-filled traditional style apartment has, a fantastic
          full- length balcony providing partial ocean views, and large, fully
          operable windows to let in the air and ocean breezes
        </div>
      </div>
    </div>
  );
};
export default GroundFloor;
