import Nav from "../components/Nav";
import { send } from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    email: "",
    telephone: "",
    villa: "",
    dates: "",
    message: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send("service_flf5b2h", "template_109967g", toSend, "6qaMEQfBrIuVjNws1")
      .then((response) => {
        console.log("success", response.status, response.text);
        setToSend({
          from_name: "",
          email: "",
          telephone: "",
          villa: "",
          dates: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("failed", err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div className=" font-light text-left text-xl text-white ">
      <Nav />

      <div className="bg-contact block h-[800px] flex justify-center items-center w-full block pt-[150px] overflow-hidden relative">
        <div className="mt-200px m-auto text-center">
          <div className=" text-5xl text-white ">
            <div className="w-[300px] p-2 font-medium m-auto">Let's Talk</div>
          </div>
          <div className="sm:w-[350px] lg:w-[600px] m-auto mt-8 p-4">
            Get in touch with us today to schedule and reserve your stay, or if
            you’re already in Puerto Vallarta, we can arrange a house viewing
            with our House Manager.
          </div>
          <div className="sm:w-[350px] lg:w-[700px]  m-auto mt-2 p-4">
            We look forward to hearing from you and answering any questions.
          </div>
        </div>
      </div>
      <div className="p-20 flex flex-row justify-center">
        <div className="flex flex-col w-[500px] text-black">
          <input
            className="border-2 p-2 border-gray tracking-widest "
            placeholder="FULL NAME"
            type="text"
            name="from_name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            className="border-2 p-2 border-gray mt-10 tracking-widest"
            placeholder="E-MAIL"
            type="text"
            name="email"
            value={toSend.email}
            onChange={handleChange}
          />
          <input
            className="border-2 p-2 border-gray mt-10"
            placeholder="TELEPHONE"
            type="text"
            name="telephone"
            value={toSend.telephone}
            onChange={handleChange}
          />
          <input
            className="border-2 p-2 border-gray mt-10"
            placeholder="VILLA YOU ARE INTERESTED IN"
            type="text"
            name="villa"
            value={toSend.villa}
            onChange={handleChange}
          />
          <input
            className="border-2 p-2 border-gray mt-10"
            placeholder="DATES"
            type="text"
            name="dates"
            value={toSend.dates}
            onChange={handleChange}
          />
          <textarea
            className="border-2 p-2 border-gray mt-10 h-[300px]"
            placeholder="MESSAGE"
            type="text"
            name="message"
            value={toSend.message}
            onChange={handleChange}
          />
          <button
            className="bg-six p-2 pl-10 pr-10 mt-10 text-white text-2xl tracking-widest"
            onClick={onSubmit}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
