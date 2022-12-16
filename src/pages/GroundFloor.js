import Nav from "../components/Nav";

const GroundFloor = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-ground block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white font-semibold p-4 pr-10 pl-10">
            Ground Floor
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex md:flex-row md:pt-20 md:pb-20 md:-mb-[170px] sm:flex-col ">
          <div className="basis-2/3 flex p-20 justify-center items-center text-xl ">
            This spacious, sun-filled traditional style apartment has, a
            fantastic full-length balcony providing partial ocean views, and
            large, fully operable windows to let in the air and ocean breezes.
          </div>
          <div className="basis-1/3 ">
            <img src={require("../pictures/GF2.jpg")} className="" />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className=" flex md:flex-row mt-20 relative sm:flex-col-reverse ">
          <div className="basis-4/6">
            <img
              src={require("../pictures/GF3.jpg")}
              className=" -top-30 relative  "
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
        <div className="flex md:flex-row sm:flex-col md:mt-20  md:-mb-[150px] relative pb-20 z-50 ">
          <div className="basis-7/12 flex pb-20 pl-20 pr-20 justify-center md:items-start lg:items-center text-xl">
            In the morning the balcony provides cooling shade, but is bathed in
            sun all afternoon and evening.
          </div>
          <div className="basis-5/12">
            <img src={require("../pictures/GF4.jpg")} />
          </div>
        </div>
      </div>
      <div className="flex md:flex-row sm:flex-col  md:mt-20 relative">
        <div className="basis-3/6 relative h-[900px]">
          <img
            src={require("../pictures/GF5.jpg")}
            className="absolute -top-20 ml-10 h-[900px] w-auto object-cover"
          />
        </div>
        <div className="basis-3/6 flex p-20 justify-center items-center text-xl">
          This spacious, sun-filled traditional style apartment has, a fantastic
          full- length balcony providing partial ocean views, and large, fully
          operable windows to let in the air and ocean breezes
        </div>
      </div>
      <div className="flex flex-row">
        <div className=" basis-2/3 p-20 flex flex-row justify-center items-center">
          The living room features ten foot ceilings, two traditional built-in
          couches and a marble-topped coffee table. And the brightly coloured
          stripes of the upholstery add a little festive Mexican pop to the
          living room couches!
        </div>
        <div className="basis-1/3 relative h-[600px]">
          <img
            src={require("../pictures/GF6.jpg")}
            className="absolute -top-[200px] right-20 h-[800px]"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2">
          <img src={require("../pictures/GF7.jpg")} className="" />
        </div>
        <div className="basis-1/2 flex justify-center items-center p-20">
          Both the living room and kitchen's mountainside east walls are built
          from local, rough-cut stone, giving the rooms a traditional, rustic
          charm.
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-3/4 flex justify-right items-center p-20 pr-0 pl-[400px]">
          The well-appointed kitchen has all you'll need to enjoy preparing a
          delicious home cooked meal and it’s walls are a combination of natural
          local stone, brilliantly colourful stucco and ceramic tile, which also
          covers the countertops.
        </div>
        <div className="h-[400px] basis-1/4 relative">
          <img
            src={require("../pictures/GF8.jpg")}
            className="absolute h-[600px] right-0 -top-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className=" basis-1/2 relative  h-[800px] max-w-[1000px]">
          <img
            src={require("../pictures/GF9.jpg")}
            className="absolute left-[170px] object-cover"
          />
        </div>
        <div className="basis-1/2 flex jusitfy-center items-center pl-[220px] p-20">
          The windows over the dining table and in the kitchen deliver cool
          breezes, bright sunlight, and table-side views of sky and sea, and an
          overhead ceiling fan helps keep things cool and airy.
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/3 flex justify-center items-center pl-[200px] mb-[100px] pr-4">
          The side living room window opens to provide a cross breeze and looks
          towards the famous Our Lady of Guadalupe church.
        </div>
        <div className="basis-1/3 relative h-[500px]">
          <img
            src={require("../pictures/GF10.jpg")}
            className="absolute  object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/3 relative h-[500px]">
          <img
            src={require("../pictures/GF11.jpg")}
            className="absolute -top-[200px] object-cover"
          />
        </div>
        <div className="basis-2/3 relative p-20 max-w-[400px]">
          <p className="absolute -top-[100px]">
            Each of the two bedrooms feature a comfortable king size bed, wide
            closet space and a private, ensuite bathroom. This is bedroom #1.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2 pl-[200px] pt-0 pr-4">
          The bedrooms have ceiling fans and fully operable windows to keep you
          cool while you sleep. Each bedroom has a door providing direct access
          to the balcony, and views of the bay as well. This is bedroom #2.
        </div>
        <div className="basis-1/2 relative h-[500px] ">
          <img
            src={require("../pictures/GF12.jpg")}
            className="absolute w-[600px] right-[100px] -top-[400px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2 h-[600px] relative">
          <img
            src={require("../pictures/GF13.jpg")}
            className="absolute w-[500px] right-[100px] -top-[300px]  object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row h-[100px] relative absolute -top-[350px]">
        <div className="basis-2/3 pb-20 pl-20 pr-20 mb-[100px] ">
          Both ensuite bathroom’s walls, bathtub and shower all feature antique
          Mexican glass tiles. The granite-topped bathroom counters each feature
          locally-produced, hand painted, colourful ceramic sinks.
        </div>
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/GF14.jpg")}
            className="absolute -top-[100px]   object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/GF15.jpg")}
            className="absolute -top-[150px] h-[700px] w-[700px] object-cover"
          />
        </div>
        <div className="basis-1/3 p-20 flex justify-center items-center h-[500px]">
          Open up both sides of the huge circular window and enjoy the endless
          views out over the town and ocean while soaking up cool Pacific
          breezes.
        </div>
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/GF16.jpg")}
            className="absolute -bottom-[250px]  h-[400px] w-[300px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row pt-[300px] h-[900px]">
        <div className="basis-1/2 relative pl-20 ">
          <img src={require("../pictures/GF17.jpg")} className=" w-[100%]" />
        </div>
        <div className="basis-1/2 p-20 flex justify-center items-center">
          The balcony hammock was made for afternoon siestas as the cool ocean
          breezes rock you to sleep.
        </div>
      </div>
      <div className="w-[100%] back-ground-floor h-[1000px] mt-[100px] flex justify-center items-center flex-col">
        <div className="w-[600px] text-white p-10">
          Enjoy the view of Puerto Vallarta's Centro zone under beautifully
          brilliant blue skies from the comfort of the fully covered balcony -
          our friendly mountainside neighbourhood sits at your feet, waiting to
          be explored at your leisure.
        </div>
        <a href="/contact">
          <button className="tracking-widest bg-six text-white mt-10 pt-4 pb-4 pl-10 pr-10">
            GET IN TOUCH
          </button>
        </a>
      </div>
    </div>
  );
};
export default GroundFloor;
