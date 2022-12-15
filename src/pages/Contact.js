import Nav from "../components/Nav";

const Contact = () => {
  return (
    <div className=" font-light text-left text-xl text-white ">
      <Nav />

      <div className="bg-contact block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white ">
            <div className="w-[300px] p-2  m-auto">Let's Talk</div>
          </div>
          <div className="w-[600px] m-auto mt-8 p-4">
            Get in touch with us today to schedule and reserve your stay, or if
            you’re already in Puerto Vallarta, we can arrange a house viewing
            with our House Manager.
          </div>
          <div className="w-[700px]  m-auto mt-2 p-4">
            We look forward to hearing from you and answering any questions.
          </div>
        </div>
      </div>
      <div className="p-20 flex flex-row justify-center">
        <div className="flex flex-col w-[500px]">
          <input
            className="border-2 p-2 border-gray tracking-widest "
            placeholder="FULL NAME"
            type="text"
            name="name"
          />
          <input
            className="border-2 p-2 border-gray mt-10 tracking-widest"
            placeholder="E-MAIL"
            type="text"
            name="name"
          />
          <input
            className="border-2 p-2 border-gray mt-10"
            placeholder="TELEPHONE"
            type="text"
            name="name"
          />
          <textarea
            className="border-2 p-2 border-gray mt-10 h-[300px]"
            placeholder="MESSAGE"
            type="text"
            name="name"
          />
          <button className="bg-six p-2 pl-10 pr-10 mt-10 text-white text-2xl tracking-widest">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
