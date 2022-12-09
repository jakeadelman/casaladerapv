const Section1 = () => {
  return (
    <div className="flex flex-row pl-[200px] pb-[200px] pt-[200px] ">
      <div className="basis-2/4 flex flex-col items-center  justify-start font-light text-2xl ">
        <p className="text-left  pt-[50px]">
          This private house sits perched on the mountainside overlooking the
          Centro district, and is comprised of 3 individual units, one to a
          floor, each with it’s own separate entrance.
        </p>
      </div>

      <div className="flex basis-2/4 flex-row mr-20">
        <p className="mr-[50px] ml-20 text-9xl relative">
          <span className="absolute bottom-[-30px] left-[75px] font-light -z-50 text-six mod">
            3
          </span>
          <span className="text-4xl font-light">Apartments</span>
        </p>
        <p className="mr-[50px] text-9xl relative">
          <span className="absolute bottom-[-30px] left-[50px]  font-light -z-50 text-six mod">
            4
          </span>
          <span className="text-4xl font-light">Bedrooms</span>
        </p>
        <p className="text-9xl relative">
          <span className="absolute bottom-[-30px] left-[40px] font-light  -z-50 text-six mod">
            3
          </span>
          <span className="text-4xl font-light">Terraces</span>
        </p>
      </div>
    </div>
  );
};
export default Section1;
