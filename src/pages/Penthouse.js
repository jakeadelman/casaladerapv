import Nav from "../components/Nav";
import PH2 from "../pictures/PH2-min.jpg";
import PH3 from "../pictures/PH3-min.jpg";
import PH4 from "../pictures/PH4-min.jpg";
import PH5 from "../pictures/PH5-min.jpg";
import PH6 from "../pictures/PH6-min.jpg";
import PH7 from "../pictures/PH7-min.jpg";
import PH8 from "../pictures/PH8-min.jpg";
import PH9 from "../pictures/PH9-min.jpg";
import PH10 from "../pictures/PH10-min.jpg";
import PH11 from "../pictures/PH11-min.jpg";
import PH12 from "../pictures/PH12-min.jpg";
import PH13 from "../pictures/PH13-min.jpg";
import PH14 from "../pictures/PH14-min.jpg";
import PH15 from "../pictures/PH15-min.jpg";
import PH16 from "../pictures/PH16-min.jpg";
import PH17 from "../pictures/PH17-min.jpg";

const Penthouse = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-penthouse block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white font-medium  p-4 pr-10 pl-10">
            Penthouse
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[100px]">
        <div className="basis-3/5 flex justify-center lg:mb-[400px] items-center p-20">
          Relax in modern Mexican style surrounded by friendly neighbours, while
          you soak in the endless ocean views, brilliant blue skies &
          breathtaking sunsets.
        </div>
        <div className="basis-2/5">
          <img src={PH2} className="" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row lg:mt-[100px]">
        <div className="basis-1/3 lg:pl-[200px] sm:block lg:relative">
          <img
            src={PH3}
            className="lg:absolute lg:-top-[400px] lg:h-[600px] object-cover"
          />
        </div>
        <div className="basis-2/3 lg:pl-[200px] lg:pr-[250px] sm:m-[100px]">
          This is a very large, bright penthouse - more that 2,000 square feet –
          with plenty of indoor/outdoor space offering both sun & shade.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[100px]">
        <div className="basis-2/4 flex justify-center items-center p-10 pl-20">
          The unit has fully opening glass floor-to-ceiling doors on two sides
          to maximize light and ventilation and combine the elegant indoor space
          with the freedom and limitless views of the outdoors.
        </div>
        <div className="basis-2/4">
          <img src={PH4} className="" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row mt-[100px]">
        <div className="basis-2/5">
          <img src={PH5} className="" />
        </div>
        <div className="basis-3/5 flex justify-center items-center p-10 pl-20">
          When the glass floor-to-ceiling doors are fully open, the full-width
          patio literally becomes an extension of the living space.
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row lg:mt-[100px] ">
        <div className="basis-3/5 flex justify-center items-center p-10 pl-20 sm:mb-0 sm:pt-20 lg:pt-0 sm:pb-0">
          Above the patio sits a separate, ultra-private rooftop Skydeck so you
          can relax in the sky with an impressive 2700 view of the Bay and
          surroundings – it’s perfect for afternoon reading, lounging or a
          well-earned siesta.
        </div>
        <div className="basis-2/5">
          <img src={PH6} className="" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row mt-[100px]">
        <div className="basis-3/5">
          <img src={PH7} className="lg:pl-[100px]" />
        </div>
        <div className="basis-2/5 flex justify-center items-center p-10 pl-20">
          Enjoy the local ambiance and relax away from the hustle and bustle of
          the beach and downtown. But when it's time to move, it’s just a 7
          minute stroll down to many fine restaurants, art galleries and of
          course, the Malecon.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[100px]">
        <div className="basis-1/3">
          <img src={PH9} className="lg:m-10" />
        </div>
        <div className="basis-1/3 flex justify-center items-center pl-[100px] mb-[100px] relative">
          <div className="lg:absolute lg:w-[150%] lg:left-20 sm:mt-[50px]">
            The living room features two built-in couches and a huge, triangular
            marble topped coffee table.
          </div>
        </div>
        <div className="basis-1/3 relative">
          <img src={PH8} className="lg:absolute lg:-top-[100px] lg:w-[80%]" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/4"></div>
        <div className="basis-2/4 lg:pr-10 lg:mt-[100px] sm:m-20">
          The kitchen has all you'll need, from appliances to flatware, to enjoy
          preparing and eating a delicious home cooked meal when you just don't
          feel like venturing out.
        </div>
        <div className="basis-1/4">
          <img src={PH10} className="" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row relative">
        <div className="basis-1/4 lg:absolute  lg:-top-[200px] lg:w-[600px]">
          <img src={PH11} className="" />
        </div>
        <div className="basis-1/4 lg:absolute lg:left-[600px] lg:w-[400px] p-20">
          The open framed wall that separates the kitchen from the dining area
          allows light and cooling breezes in, meaning cooking never gets
          uncomfortable.
        </div>

        <div className="basis-2/4 sm:h-0"></div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row lg:pt-[450px]">
        <div className="basis-1/3">
          <img src={PH12} className="" />
        </div>
        <div className="basis-1/3 p-20">
          <img src={PH13} className="" />
        </div>
        <div className="basis-1/3 mt-[100px] sm:mb-[0px] sm:m-20">
          The ensuite bathroom walls, bathtub and shower feature antique Mexican
          glass tiles, accented with clay bricks. The granite topped counter
          features a locally-produced, colourfully hand-painted ceramic sink.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/3">
          <img src={PH15} className="lg:mt-[200px] sm:mt-[100px]" />
        </div>
        <div className="basis-1/3 p-20">
          After a long day in the sun, you'll sleep like a baby in the large,
          airy bedroom - it has air conditioning and a ceiling fan, but you may
          not need them thanks to the cool inversion wind rolling nightly down
          the mountain. The king-sized bed, under the wood beam vaulted ceiling,
          is perfect for a siesta - either breve o larga.
        </div>
        <div className="basis-1/3 relative">
          <img src={PH14} className="lg:absolute lg:-top-[200px]" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/2 flex justify-center items-center lg:pl-[200px] sm:m-20">
          Walk directly out of the bedroom onto the second patio and you'll see
          the main patio with the rooftop Skydeck up the circular staircase.
        </div>
        <div className="basis-1/2">
          <img src={PH16} className="lg:p-20" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-2/5 sm:mt-[100px]">
          <img src={PH17} />
        </div>
        <div className="basis-2/5 p-20 flex justify-center items-center">
          Unbelievable, techni-colour sunsets included free-of-charge, seven
          days a week, 365 days a year.
        </div>
        <div className="basis-1/5"></div>
      </div>
      <div className="w-[100%] back-penthouse h-[1000px] mt-[100px] flex justify-center items-center flex-col">
        <div className="w-[1000px] text-white p-10">
          This is a fabulous Villa offering easy access to everything Puerto
          Vallarta has to offer, while simultaneously providing a private,
          elegant retreat in the sunny blue skies.
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

export default Penthouse;
