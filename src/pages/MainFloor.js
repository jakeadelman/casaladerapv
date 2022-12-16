import Nav from "../components/Nav";

const MainFloor = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-main-floor block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white font-semibold  p-4 pr-10 pl-10">
            Main Floor
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-2/5 p-20">
          <img src={require("../pictures/MP2.jpg")} />
        </div>
        <div className="basis-3/5 flex justify-center items-center mb-[150px]">
          This sunny and spacious slice of heaven offers endless ocean views and
          fantastic sunsets, as it sits on the mountainside overlooking the
          Centro district and the beautiful Bay of Banderas.
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="basis-3/5 flex justify-center items-center mt-[100px] p-20">
          It’s open and airy with 2000 square feet of indoor/outdoor space,
          twelve foot ceilings and two floor-to-ceiling glass walls that fully
          retract – it’s like living in the sky!
        </div>
        <div className="basis-2/5 relative">
          <img
            src={require("../pictures/MP3.jpg")}
            className="absolute -top-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-row mt-[150px]">
        <div className="basis-1/3">
          <img src={require("../pictures/MP4.jpg")} className="w-[600px]" />
        </div>
        <div className="basis-1/3 p-4 pl-10 pr-[150px] flex items-center pb-20">
          With the walls opened up,the large, modern indoor space is expanded by
          combining it with the partially shaded outdoor deck and the private
          infinity pool.
        </div>
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/MP5.jpg")}
            className="pr-20 absolute right-20 top-20"
          />
        </div>
      </div>
      <div className="p-20 pt-[200px] w-[60%]">
        Enjoy the brilliant blue skies and ocean views from the private infinity
        pool, or the comfort of the large living room as you live in modern
        Mexican style.
      </div>
      <div className="flex flex-row mt-[200px]">
        <div className="basis-1/2 relative">
          <img src={require("../pictures/MP6.jpg")} />
        </div>
        <div className="basis-1/2 p-20">
          The well-equipped kitchen allows for home cooking if you prefer a
          quiet night at home, or want a relaxed breakfast as you plan your day.
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-3/5 p-20 pr-4">
          The breakfast room sits adjacent to the kitchen, with a large
          semi-circular window overlooking the living room, as well as the town
          and Banderas Bay beyond - it's breakfast with a view!
        </div>
        <div className="basis-2/5 relative">
          <img
            src={require("../pictures/MP7.jpg")}
            className="absolute -top-[300px] pl-20"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <img src={require("../pictures/MP8.jpg")} className="pl-20" />
        </div>
        <div className="basis-2/3 p-20 mb-[200px]">
          The large dinner table seats six with ease,so you can enjoy a meal at
          home as you look out over the city and the Pacific ocean below.
        </div>
      </div>
      <div className="flex flex-row relative">
        <div className="basis-1/3"></div>
        <div className="basis-1/3 relative">
          <div className="p-20 absolute -top-[100px]">
            Where the southern wall of the dining area isn't glass, it's
            comprised of an eclectic array of local materials: classic red
            brick, three Onyx windows (backlit at night) and traditional Mexican
            wood pole construction.
          </div>
        </div>
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/MP9.jpg")}
            className="pr-20  absolute -top-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-row mt-[200px]">
        <div className="basis-1/6">
          <img src={require("../pictures/MP10.jpg")} />
        </div>
        <div className="basis-2/6 p-20 flex items-center">
          The open concept living area boasts 2 seating areas and a dining
          table, all flooded by natural light and cooling breezes
        </div>
        <div className="basis-3/6"></div>
      </div>
      <div className="flex flex-row">
        <div className="basis-3/6 relative p-20">
          The built in couch and marble-topped coffee table are big enough to
          allow everyone a great seat for viewing the sun as it colourfully
          sinks into the Pacific every evening.
        </div>
        <div className="basis-3/6 relative">
          <img
            src={require("../pictures/MP11.jpg")}
            className="absolute -top-[200px]"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/6">
          <img src={require("../pictures/MP12.jpg")} className="p-20 pr-10" />
        </div>
        <div className="basis-2/6 flex jusify-center items-center pb-[150px]">
          The kitchen, breakfast room, bedroom and bathroom sit three steps up
          from the spacious living/dining room and patio around the pool.
        </div>
        <div className="basis-2/6"></div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/12"></div>
        <div className="basis-4/12">
          Classic Mexican design and detail can be found throughout the house -
          from the wrought iron trim over doorways to the frame around this
          mirror - and it all just improves already stunning views.
        </div>
        <div className="basis-4/12 relative">
          <img
            src={require("../pictures/MP13.jpg")}
            className="absolute -top-[200px]"
          />
        </div>
        <div className="basis-2/12"></div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-1/4 relative">
          <img
            src={require("../pictures/MP15.jpg")}
            className="absolute -bottom-[100px]"
          />
        </div>
        <div className="basis-2/4 relative h-[600px] flex items-center p-20">
          <div className="">
            The spacious bedroom boasts a king-sized bed and an ensuite bathroom
            to meet all your needs - air conditioning, a ceiling fan and large,
            fully- operational windows - there's everything you could need to
            ensure comfort and convenience for all.
          </div>
        </div>
        <div className="basis-1/4">
          <img src={require("../pictures/Mp14.jpg")} className="mt-[100px]" />
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-3/6">
          <img src={require("../pictures/MP17.jpg")} className="p-[200px]" />
        </div>
        <div className="basis-2/6">
          <img src={require("../pictures/MP16.jpg")} />
        </div>
        <div className="basis-1/6"></div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 relative">
          <div className="absolute -top-[130px]">
            The ensuite bathroom walls, bathtub and shower all feature antique
            Mexican glass tiles, accented with Mexican clay brick transom
            windows providing cooling cross-breezes.
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/2 p-20 pr-5 flex items-center">
          Whether you're floating on top of the water or sitting below it on the
          submerged bench seat in the pool, peace and tranquility come easy as
          you watch the sun slowly tumble into the sea every afternoon.
        </div>
        <div className="basis-1/2">
          <img src={require("../pictures/MP18.jpg")} className="p-10" />
        </div>
      </div>
      <div className="w-[100%] back-main-floor h-[1000px] mt-[100px] flex justify-center items-center flex-col">
        <div className="w-[600px] text-white p-10">
          Hot hazy days are best spent soking in the infinity pool, looking out
          over the town and drinking in the endless ocean vistas – can’t you see
          yourself here?
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

export default MainFloor;
