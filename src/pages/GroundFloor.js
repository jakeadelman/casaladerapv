import Nav from "../components/Nav";
import GF2 from "../pictures/GF2-min.jpg";
import GF3 from "../pictures/GF3-min.jpg";
import GF4 from "../pictures/GF4-min.jpg";
import GF5 from "../pictures/GF5-min.jpg";
import GF6 from "../pictures/GF6-min.jpg";
import GF7 from "../pictures/GF7-min.jpg";
import GF8 from "../pictures/GF8-min.jpg";
import GF9 from "../pictures/GF9-min.jpg";
import GF10 from "../pictures/GF10-min.jpg";
import GF11 from "../pictures/GF11-min.jpg";
import GF12 from "../pictures/GF12-min.jpg";
import GF13 from "../pictures/GF13-min.jpg";
import GF14 from "../pictures/GF14-min.jpg";
import GF15 from "../pictures/GF15-min.jpg";
import GF16 from "../pictures/GF16-min.jpg";
import GF17 from "../pictures/GF17-min.jpg";

const GroundFloor = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-ground block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white font-semibold mb-20 p-4 pr-10 pl-10">
            2 Bedroom
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex lg:flex-row lg:pt-20 lg:pb-20 lg:-mb-[170px] sm:flex-col ">
          <div className="basis-2/3 flex p-20 justify-center items-center text-xl ">
            This spacious, sun-filled traditional style apartment has, a
            fantastic full-length balcony providing partial ocean views, and
            large, fully operable windows to let in the air and ocean breezes.
          </div>
          <div className="basis-1/3 ">
            <img src={GF2} className="" />
          </div>
        </div>
      </div>
      <div className="relative ">
        <div className=" flex lg:flex-row lg:mt-20 relative sm:flex-col-reverse ">
          <div className="basis-4/6">
            <img src={GF3} className=" lg:-top-30 relative  " />
          </div>
          <div className="basis-3/6 flex p-20 justify-center items-center text-xl">
            It's great base for exploring the city, sitting high on the hill in
            Centro, very close to shops, fine restaurants, art galleries & just
            a 5 - 10 minute walk down to the Malecon.
          </div>
        </div>
      </div>
      <div>
        <div className="flex lg:flex-row sm:flex-col lg:mt-20  lg:-mb-[150px] relative lg:pb-20 ">
          <div className="basis-7/12 flex sm:p-20 lg:pb-20 lg:pl-20 lg:pr-20 lg:pt-0 justify-center md:items-start lg:items-center text-xl">
            In the morning the balcony provides cooling shade, but is bathed in
            sun all afternoon and evening.
          </div>
          <div className="basis-5/12">
            <img src={GF4} />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row  lg:mt-20 relative">
        <div className="basis-3/6 relative h-[900px]">
          <img
            src={GF5}
            className="lg:absolute -top-20 lg:ml-10 lg:h-[900px] w-auto object-cover"
          />
        </div>
        <div className="basis-3/6 flex p-20 justify-center items-center text-xl">
          This spacious, sun-filled traditional style apartment has, a fantastic
          full- length balcony providing partial ocean views, and large, fully
          operable windows to let in the air and ocean breezes
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className=" basis-2/3 p-20 flex flex-row justify-center items-center">
          The living room features ten foot ceilings, two traditional built-in
          couches and a marble-topped coffee table. And the brightly coloured
          stripes of the upholstery add a little festive Mexican pop to the
          living room couches!
        </div>
        <div className="basis-1/3 relative h-[600px]">
          <img
            src={GF6}
            className="lg:absolute lg:-top-[200px] lg:right-20 lg:h-[800px]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-1/2">
          <img src={GF7} className="" />
        </div>
        <div className="basis-1/2 flex justify-center items-center p-20">
          Both the living room and kitchen's mountainside east walls are built
          from local, rough-cut stone, giving the rooms a traditional, rustic
          charm.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-3/4 flex justify-right items-center p-20 pr-0 lg:pl-[400px]">
          The well-appointed kitchen has all you'll need to enjoy preparing a
          delicious home cooked meal and it’s walls are a combination of natural
          local stone, brilliantly colourful stucco and ceramic tile, which also
          covers the countertops.
        </div>
        <div className="h-[400px] basis-1/4 relative">
          <img
            src={GF8}
            className="lg:absolute lg:h-[600px] right-0 lg:-top-[200px]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className=" basis-1/2 relative  lg:h-[800px] lg:max-w-[1000px]">
          <img src={GF9} className="lg:absolute left-[170px] object-cover" />
        </div>
        <div className="basis-1/2 flex jusitfy-center items-center lg:pl-[220px] p-20">
          The windows over the dining table and in the kitchen deliver cool
          breezes, bright sunlight, and table-side views of sky and sea, and an
          overhead ceiling fan helps keep things cool and airy.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-2/3 flex justify-center items-center lg:pl-[200px] sm:p-20 lg:p-0 lg:mb-[100px] lg:pr-4">
          The side living room window opens to provide a cross breeze and looks
          towards the famous Our Lady of Guadalupe church.
        </div>
        <div className="basis-1/3 relative h-[500px]">
          <img src={GF10} className="lg:absolute  object-cover" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-1/3 relative lg:h-[500px]">
          <img
            src={GF11}
            className="lg:absolute lg:-top-[200px] object-cover"
          />
        </div>
        <div className="basis-2/3 relative p-20 lg:max-w-[400px]">
          <p className="lg:absolute lg:-top-[100px]">
            Each of the two bedrooms feature a comfortable king size bed, wide
            closet space and a private, ensuite bathroom. This is bedroom #1.
          </p>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/2 lg:pl-[50px] lg:pr-[100px] 2xl:pl-[200px] sm:p-20 lg:p-0 pt-0 pr-4">
          The bedrooms have ceiling fans and fully operable windows to keep you
          cool while you sleep. Each bedroom has a door providing direct access
          to the balcony, and views of the bay as well. This is bedroom #2.
        </div>
        <div className="basis-1/2 relative h-[500px] ">
          <img
            src={GF12}
            className="lg:absolute lg:w-[600px] lg:right-[50px] lg:-top-[400px] object-cover"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/2 h-[600px] relative">
          <img
            src={GF13}
            className="lg:absolute lg:w-[500px] lg:right-[100px] lg:-top-[300px] sm:mt-[100px] lg:mt-0 object-cover"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:h-[100px] relative lg:-top-[350px]">
        <div className="basis-2/3 sm:pt-20 lg:pt-0 pb-20 pl-20 pr-20 lg:mb-[100px] ">
          Both ensuite bathroom’s walls, bathtub and shower all feature antique
          Mexican glass tiles. The granite-topped bathroom counters each feature
          locally-produced, hand painted, colourful ceramic sinks.
        </div>
        <div className="basis-1/3 relative">
          <img src={GF14} className="lg:absolute -top-[100px]   object-cover" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-1/3 relative">
          <img
            src={GF15}
            className="lg:absolute -top-[150px] h-[700px] lg:w-[700px] m-auto object-cover"
          />
        </div>
        <div className="basis-1/3 p-20 flex justify-center items-center h-[500px]">
          Open up both sides of the huge circular window and enjoy the endless
          views out over the town and ocean while soaking up cool Pacific
          breezes.
        </div>
        <div className="basis-1/3 relative">
          <img
            src={GF16}
            className="lg:absolute -bottom-[250px]  h-[400px] lg:w-[300px] sm:m-auto sm:pt-20 object-cover"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row sm:pt-[100px] lg:pt-[300px] h-[900px]">
        <div className="basis-1/2 relative lg:pl-20 ">
          <img src={GF17} className=" w-[100%]" />
        </div>
        <div className="basis-1/2 p-20 flex justify-center items-center">
          The balcony hammock was made for afternoon siestas as the cool ocean
          breezes rock you to sleep.
        </div>
      </div>
      <div className="w-[100%] back-ground-floor h-[1000px] mt-[100px] flex justify-center items-center flex-col">
        <div className="sm:w-[350px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] text-white p-10">
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
