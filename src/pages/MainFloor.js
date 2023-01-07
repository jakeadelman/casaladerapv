import Nav from "../components/Nav";
import MP2 from "../pictures/MP2-min.jpg";
import MP3 from "../pictures/MP3-min.jpg";
import MP4 from "../pictures/MP4-min.jpg";
import MP5 from "../pictures/MP5-min.jpg";
import MP6 from "../pictures/MP6-min.jpg";
import MP7 from "../pictures/MP7-min.jpg";
import MP8 from "../pictures/MP8-min.jpg";
import MP9 from "../pictures/MP9-min.jpg";
import MP10 from "../pictures/MP10-min.jpg";
import MP11 from "../pictures/MP11-min.jpg";
import MP12 from "../pictures/MP12-min.jpg";
import MP13 from "../pictures/MP13-min.jpg";
import MP14 from "../pictures/Mp14-min.jpg";
import MP15 from "../pictures/MP15-min.jpg";
import MP16 from "../pictures/MP16-min.jpg";
import MP17 from "../pictures/MP17-min.jpg";
import MP18 from "../pictures/MP18-min.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainFloor = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-main-floor block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white font-semibold mb-20 p-4 pr-10 pl-10">
            Main Floor
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse  lg:flex-row mt-[100px]">
        <div className="basis-2/5 lg:p-20">
          <LazyLoadImage src={MP2} />
        </div>
        <div className="basis-3/5 sm:p-20 lg:p-0 flex justify-center items-center sm:mb-[100px] lg:mb-[150px]">
          This sunny and spacious slice of heaven offers endless ocean views and
          fantastic sunsets, as it sits on the mountainside overlooking the
          Centro district and the beautiful Bay of Banderas.
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row ">
        <div className="basis-3/5 flex justify-center items-center lg:mt-[100px] p-20">
          It’s open and airy with 2000 square feet of indoor/outdoor space,
          twelve foot ceilings and two floor-to-ceiling glass walls that fully
          retract – it’s like living in the sky!
        </div>
        <div className="basis-2/5 relative">
          <LazyLoadImage src={MP3} className="lg:absolute -top-[200px]" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row mt-[150px]">
        <div className="basis-1/3">
          <LazyLoadImage src={MP4} className="lg:w-[600px]" />
        </div>
        <div className="basis-1/3 p-4 sm:p-20 lg:pl-10 lg:pr-[150px] flex items-center pb-20">
          With the walls opened up, the large, modern indoor space is expanded
          by combining it with the partially shaded outdoor deck and the private
          infinity pool.
        </div>
        <div className="basis-1/3 relative">
          <LazyLoadImage
            src={MP5}
            className="lg:pr-20 lg:absolute right-20 top-20"
          />
        </div>
      </div>
      <div className="p-20 lg:pt-[200px] lg:w-[60%]">
        Enjoy the brilliant blue skies and ocean views from the private infinity
        pool, or the comfort of the large living room as you live in modern
        Mexican style.
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[200px]">
        <div className="basis-1/2 relative">
          <LazyLoadImage src={MP6} />
        </div>
        <div className="basis-1/2 p-20">
          The well-equipped kitchen allows for home cooking if you prefer a
          quiet night at home, or want a relaxed breakfast as you plan your day.
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-3/5 p-20 lg:pr-4">
          The breakfast room sits adjacent to the kitchen, with a large
          semi-circular window overlooking the living room, as well as the town
          and Banderas Bay beyond - it's breakfast with a view!
        </div>
        <div className="basis-2/5 relative">
          <LazyLoadImage
            src={MP7}
            className="lg:absolute lg:-top-[300px] lg:pl-20"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/3">
          <LazyLoadImage src={MP8} className="lg:pl-20" />
        </div>
        <div className="basis-2/3 p-20 lg:mb-[200px]">
          The large dinner table seats six with ease, so you can enjoy a meal at
          home as you look out over the city and the Pacific ocean below.
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row relative">
        <div className="basis-1/3"></div>
        <div className="basis-1/3 relative">
          <div className="p-20 lg:absolute -top-[100px]">
            Where the southern wall of the dining area isn't glass, it's
            comprised of an eclectic array of local materials: classic red
            brick, three Onyx windows (backlit at night) and traditional Mexican
            wood pole construction.
          </div>
        </div>
        <div className="basis-1/3 relative">
          <LazyLoadImage
            src={MP9}
            className="lg:pr-20  lg:absolute lg:-top-[200px]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[200px]">
        <div className="basis-1/6">
          <LazyLoadImage src={MP10} />
        </div>
        <div className="basis-2/6 p-20 flex items-center">
          The open concept living area boasts 2 seating areas and a dining
          table, all flooded by natural light and cooling breezes
        </div>
        <div className="basis-3/6"></div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-3/6 relative p-20">
          The built in couch and marble-topped coffee table are big enough to
          allow everyone a great seat for viewing the sun as it colourfully
          sinks into the Pacific every evening.
        </div>
        <div className="basis-3/6 relative">
          <LazyLoadImage src={MP11} className="lg:absolute lg:-top-[200px]" />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-2/6">
          <LazyLoadImage src={MP12} className="lg:p-20 lg:pr-10" />
        </div>
        <div className="basis-3/6 flex jusify-center items-center sm:p-20 lg:pb-[150px]">
          The kitchen, breakfast room, bedroom and bathroom sit three steps up
          from the spacious living/dining room and patio around the pool.
        </div>
      </div>
      <div className="flex  sm:flex-col-reverse lg:flex-row">
        <div className="basis-2/12"></div>
        <div className="basis-4/12 sm:p-20 lg:p-0">
          Classic Mexican design and detail can be found throughout the house -
          from the wrought iron trim over doorways to the frame around this
          mirror - and it all just improves already stunning views.
        </div>
        <div className="basis-4/12 relative">
          <LazyLoadImage src={MP13} className="lg:absolute lg:-top-[120px]" />
        </div>
        <div className="basis-2/12"></div>
      </div>
      <div className="flex sm:flex-col lg:flex-row lg:mt-[100px]">
        <div className="basis-1/4 relative">
          <LazyLoadImage
            src={MP15}
            className="lg:absolute lg:-bottom-[100px]"
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
          <LazyLoadImage src={MP14} className="lg:mt-[100px]" />
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row mt-[100px]">
        <div className="basis-3/6">
          <LazyLoadImage src={MP17} className="sm:pt-10 lg:p-[200px]" />
        </div>
        <div className="basis-2/6">
          <LazyLoadImage src={MP16} />
        </div>
        <div className="basis-1/6"></div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/2"></div>
        <div className="basis-1/2 relative">
          <div className="lg:absolute lg:-top-[130px] sm:p-20 lg:p-0 xl:-top-[200px] ">
            The ensuite bathroom walls, bathtub and shower all feature antique
            Mexican glass tiles, accented with Mexican clay brick transom
            windows providing cooling cross-breezes.
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-1/2 p-20 lg:pr-5 flex items-center">
          Whether you're floating on top of the water or sitting below it on the
          submerged bench seat in the pool, peace and tranquility come easy as
          you watch the sun slowly tumble into the sea every afternoon.
        </div>
        <div className="basis-1/2">
          <LazyLoadImage src={MP18} className="lg:p-10" />
        </div>
      </div>
      <div className="w-[100%] back-main-floor h-[1000px] lg:mt-[100px] flex justify-center items-center flex-col">
        <div className="sm:w-[300px] md:w-[500px] lg:w-[800px] text-white p-10">
          Hot hazy days are best spent soaking in the infinity pool, looking out
          over the town and drinking in the endless ocean vistas – can’t you see
          yourself here?
        </div>
        <a href="/contact">
          <button className="tracking-widest bg-six text-white mt-10 mb-20 pt-4 pb-4 pl-10 pr-10">
            GET IN TOUCH
          </button>
        </a>
      </div>
    </div>
  );
};

export default MainFloor;
