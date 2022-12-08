const Section4 = () => {
  return (
    <div className=" relative z-10">
      <div className="flex flex-row  z-10">
        <div className="basis-1/2 flex justify-end backgimg2"></div>
        <div className="basis-1/2 flex flex-col text-xl">
          <p className="text-left font-light text-2xl p-20 pt-10 m-auto">
            Casa Ladera has fantastic access (5 - 10 minute walk straight down
            the hill) to shops, fine restaurants, multiple art galleries and all
            the people-watching and nightlife the Malecon has to offer.
            <br />
            <br /> Here are a few of our favourite things to do in PV:
            <ul>
              <br />
              <li>• fish tacos at Maria Baja</li>
              <li>• tacos al pastor at Pancho’s Tacos</li>
              <li>• drinks, dinner and sunsets on the beach at Langostinos</li>
              <li>• Los Muertos beach</li>
              <li>
                • the SouthSide Shuffle on Basillo Badillo every other Friday
                (6-10pm)
              </li>
              <li>
                {" "}
                • Saturday Farmer’s Market at Plaza Lazaro Cardenas (9:30am-2pm){" "}
              </li>
              <li> • the ArtWalk every Wednesday (6-10pm) in Centro</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
