const Section1 = () => {
  return (
    <div className="flex flex-row mt-[100px]">
      <div className="basis-1/2 flex flex-col items-center justify-center p-20 font-light text-2xl">
        <p className="text-left pl-20">
          This private house sits perched on the mountainside overlooking the
          Centro district, and is comprised of 3 individual units, one to a
          floor, each with it’s own separate entrance.
        </p>
        <div className="flex flex-row pt-20">
          <p className="mr-[100px] ml-20 text-9xl relative">
            <span className="absolute bottom-[-40px] left-[100px] font-light -z-50 text-six mod">
              3
            </span>
            <span className="text-5xl font-light">Apartments</span>
          </p>
          <p className="mr-[100px] text-9xl relative">
            <span className="absolute bottom-[-40px] left-[80px]  font-light -z-50 text-six mod">
              4
            </span>
            <span className="text-5xl font-light">Bedrooms</span>
          </p>
          <p className="text-9xl relative">
            <span className="absolute bottom-[-40px] left-[50px] font-light  -z-50 text-six mod">
              3
            </span>
            <span className="text-5xl font-light">Terraces</span>
          </p>
        </div>
      </div>
      <div className="basis-1/2 flex justify-end backgimg"></div>
    </div>
  );
};
export default Section1;
