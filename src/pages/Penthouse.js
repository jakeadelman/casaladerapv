import Nav from "../components/Nav";
const Penthouse = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />

      <div className="bg-penthouse block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl bg-white text-six  p-4 pr-10 pl-10">
            Penthouse
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-3/5 flex justify-center mb-[400px] items-center p-20">
          Relax in modern Mexican style surrounded by friendly neighbours, while
          you soak in the endless ocean views, brilliant blue skies &
          breathtaking sunsets.
        </div>
        <div className="basis-2/5">
          <img src={require("../pictures/PH2.jpg")} className="" />
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-1/3 pl-[200px] relative">
          <img
            src={require("../pictures/PH3.jpg")}
            className="absolute -top-[400px] h-[700px] object-cover"
          />
        </div>
        <div className="basis-1/3 pl-[100px]">
          This is a very large, bright penthouse - more that 2,000 square feet –
          with plenty of indoor/outdoor space offering both sun & shade.
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-2/4 flex justify-center items-center p-10 pl-20">
          The unit has fully opening glass floor-to-ceiling doors on two sides
          to maximize light and ventilation and combine the elegant indoor space
          with the freedom and limitless views of the outdoors.
        </div>
        <div className="basis-2/4">
          <img src={require("../pictures/PH4.jpg")} className="" />
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-2/5">
          <img src={require("../pictures/PH5.jpg")} className="" />
        </div>
        <div className="basis-3/5 flex justify-center items-center p-10 pl-20">
          When the glass floor-to-ceiling doors are fully open, the full-width
          patio literally becomes an extension of the living space.
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-3/5 flex justify-center items-center p-10 pl-20">
          Above the patio sits a separate, ultra-private rooftop Skydeck so you
          can relax in the sky with an impressive 270o view of the Bay and
          surroundings – it’s perfect for afternoon reading, lounging or a
          well-earned siesta.
        </div>
        <div className="basis-2/5">
          <img src={require("../pictures/PH6.jpg")} className="" />
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-3/5">
          <img src={require("../pictures/PH7.jpg")} className="pl-[100px]" />
        </div>
        <div className="basis-2/5 flex justify-center items-center p-10 pl-20">
          Enjoy the local ambiance and relax away from the hustle and bustle of
          the beach and downtown. But when it's time to move, it’s just a 7
          minute stroll down to many fine restaurants, art galleries and of
          course, the Malecon.
        </div>
      </div>
      <div className="flex flex-row mt-[100px]">
        <div className="basis-1/3">
          <img src={require("../pictures/PH9.jpg")} className="m-10" />
        </div>
        <div className="basis-1/3 flex justify-center items-center pl-[100px] mb-[100px] relative">
          <div className="absolute w-[150%] left-20">
            The living room features two built-in couches and a huge, triangular
            marble topped coffee table.
          </div>
        </div>
        <div className="basis-1/3 relative">
          <img
            src={require("../pictures/PH8.jpg")}
            className="absolute -top-[200px] w-[80%]"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-2/4"></div>
        <div className="basis-1/4">
          The kitchen has all you'll need, from appliances to flatware, to enjoy
          preparing and eating a delicious home cooked meal when you just don't
          feel like venturing out.
        </div>
        <div className="basis-1/4">
          <img src={require("../pictures/PH10.jpg")} className="" />
        </div>
      </div>
    </div>
  );
};

export default Penthouse;
