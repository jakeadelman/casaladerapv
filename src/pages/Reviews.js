import Nav from "../components/Nav";

const Reviews = () => {
  return (
    <div className=" font-light text-left text-xl ">
      <Nav />
      <div className="bg-reviews block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-six flex justify-center">
            <div className=" text-white font-medium w-[250px] p-4 pr-10 pl-10 ">
              Reviews
            </div>
          </div>
          <div className="text-white p-10 mt-[0px] mb-[200px] w-[600px]">
            Here’s what some of our past guests have had to say about their stay
            at Casa Ladera. All reviews originate from on our Airbnb listings.
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-2/6">
          <img src={require("../pictures/RP2.jpg")} className="p-10 pl-20" />
        </div>
        <div className="basis-3/6 sm:pb-[50px] lg:pb-0 p-10 flex flex-col justify-center items-end">
          The previous reviews are true. The stairs are hard especially if doing
          them multiple times a day, however the view at the top is worth it.
          The view is magnificent. You get to enjoy incredible sunsets and
          fireworks every night. The pool was well used by us (and necessary
          after climbing the stairs), it’s even bigger in person. Easy
          communication. Would definitely recommend.
          <span className="p-10"> Morgan – October 2022</span>
        </div>
        <div className="basis-1/6"></div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-4/6 p-10 flex flex-col justify-center items-end  mt-[10px] lg:pl-[150px]">
          We loved staying at Casa Ladera. All the reviews are spot on. The unit
          is beautiful, very clean and spacious, well appointed and has a
          magnificent view of the bay. The kitchen was well stocked. We spent
          most of our time out on the deck. Amazing sunsets and even the sunrise
          from behind the mountain cast beautiful light in the clouds over the
          bay. The hike up can be challenging (especially in the heat) but it
          was a great workout and got easier after a few days. We felt safe here
          and all of the local residents we encountered were very friendly. We
          would definitely stay here again!
          <span className="p-10"> Denise – June 2022</span>
        </div>
        <div className="basis-2/6 relative">
          <img
            src={require("../pictures/RP3.jpg")}
            className="lg:absolute  -top-[100px]"
          />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-3/6">
          <img src={require("../pictures/RP4.jpg")} />
        </div>
        <div className="basis-3/6 p-10 flex flex-col justify-center items-end mt-[50px] lg:pr-[100px]">
          We had such a wonderful time staying in this unit! All the previous
          reviews are spot on - the living space is amazing with its high
          ceilings, tall windows, and ability to make it very open air; the
          entire place is very clean and has all needed modern amenities; and
          the onsite manager Omar is great at communicating and coordinating a
          seamless arrival and check- out. Yes, you have to work to get up to
          the home everyday, so just pack light and earn those tacos! The
          neighborhood is very central for exploring all that Puerto Vallarta
          has to offer. We highly recommend it!
          <span className="p-10">Gina – November 2021</span>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row">
        <div className="basis-1/6"></div>
        <div className="basis-3/6 sm:p-10 lg:p-0 flex flex-col justify-center items-end pr-10">
          This home is amazing from the views to the location! Sunsets are to
          die for and neighbors are so nice we had such a great time and our
          contact Omar was beyond helpful couldn’t thank him enough for
          everything and the house keeper as well. We also enjoyed the
          neighborhood cats as they were so friendly and cute!
          <span className="p-10">Jatziri – July 2022</span>
        </div>
        <div className="basis-2/6">
          <img src={require("../pictures/RP5.jpg")} />
        </div>
      </div>
      <div className="flex sm:flex-col lg:flex-row">
        <div className="basis-1/6"></div>
        <div className="basis-2/6 relative h-[450px]">
          <img
            src={require("../pictures/RP6.jpg")}
            className="lg:absolute -top-[100px]"
          />
        </div>
        <div className="basis-3/6 p-10 flex flex-col items-end justify-end">
          We stayed on the pool level rather than the whole house. It is a
          beautiful house. The view is amazing and the house is very well
          designed and a pleasure to live in. It is comfortable and well
          equipped. It is Mexico so there is neighborhood noise. Dogs cats music
          etc. Generally it didn’t bother us. The bedroom is generally pretty
          quiet at night. Comfortable bed. Good shower. Pretty good Wi-Fi. We
          enjoyed being in the middle of downtown Puerto Vallarta. That being
          said the climb to the house is steep and a bit treacherous. We are in
          our early 70’s and managed it but it did limit our trips into town.
          Going down is easy. You are about a 12 minute walk from the centre of
          the Malacon. All in all the steep climb was worth it for the beauty
          and experience the rental provided. We would rent it again.
          <span>Rob & Shelley – February 2022</span>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse lg:flex-row mt-[100px]">
        <div className="basis-1/2 sm:p-10 lg:p-20 flex flex-col justify-center items-end">
          This is my second time staying in this home, and it is even better
          than I recalled. There simply is no way pictures can do justice to the
          views. Everywhere within the home, stunning vistas of the Bay are laid
          out before you. This trip, I needed to clear my head, do some deep
          introspection, revisit priorities, reshape diet and physical habits,
          etc and could not have asked for a better home base. Omar is
          incredible attentive and very quick to respond to any question or
          need. If you’re even remotely on the fence, just book it and consider
          yourself lucky that your dates are available!
          <span>Jon – December 2021</span>
        </div>
        <div className="basis-1/2">
          <img src={require("../pictures/RP7.jpg")} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
