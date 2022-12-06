const Section3 = () => {
  return (
    <div>
      <div className="flex flex-row p-5 ">
        <div className="basis-1/3 p-2 card">
          <img
            src={require("../pictures/HP6.jpg")}
            className="rounded-[10px]"
          />
          <p className="mt-10 text-2xl pb-10 font-bold">Penthouse</p>
        </div>
        <div className="basis-1/3 p-2 card">
          <img
            src={require("../pictures/HP7.jpg")}
            className="rounded-[10px]"
          />
          <p className="mt-10 text-2xl pb-10 font-bold">Main Floor</p>
        </div>
        <div className="basis-1/3 p-2 card">
          <img
            src={require("../pictures/HP8-2.jpg")}
            className="rounded-[10px]"
          />
          <p className="mt-10 text-2xl pb-10 font-bold">Ground Floor</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pr-[200px] pl-[200px] mb-20 mt-20 text-xl">
        All 3 floors offer large, open indoor/outdoor spaces with unbeatable,
        endless ocean views. Although each unit is autonomous, any or all can
        easily be combined to create a super-large, connected space for the
        whole family or larger groups. But these views come with a cost: there
        are approximately 100 steps that you must climb to access the house.
      </div>
    </div>
  );
};

export default Section3;
