import React from "react";
import {
  FaEnvelopeOpenText,
  FaPhoneAlt,
  FaRegEdit,
  FaRegEnvelope,
  FaSearchLocation,
  FaUserTie,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <div className="md:w-8/12 flex flex-col lg:flex-row items-center gap-12 mx-auto my-12">
        <div className="w-96 h-40 border flex md:justify-center items-center gap-5 p-6 hover:-translate-y-2 hover:shadow-2xl duration-300 rounded-md mx-auto">
          <div>
            <FaEnvelopeOpenText className="text-7xl text-cyan-700" />
          </div>
          <div className="space-y-2">
            <h5 className="text-2xl font-medium">Mail Address</h5>
            <p className="text-gray-500">hridoyfahad30@gmail.com</p>
          </div>
        </div>
        <div className="w-96 h-40 border flex md:justify-center items-center gap-5 p-6 hover:-translate-y-2 hover:shadow-2xl duration-300 rounded-md mx-auto">
          <div>
            <FaSearchLocation className="text-7xl text-cyan-700" />
          </div>
          <div className="space-y-2">
            <h5 className="text-2xl font-medium">Office Address</h5>
            <p className="text-gray-500">Sunamganj, Sylhet</p>
          </div>
        </div>
        <div className="w-96 h-40 border flex md:justify-center items-center gap-5 p-6 hover:-translate-y-2 hover:shadow-2xl duration-300 rounded-md mx-auto">
          <div>
            <FaPhoneAlt className="text-7xl text-cyan-700" />
          </div>
          <div className="space-y-2">
            <h5 className="text-2xl font-medium">Phone Number</h5>
            <p className="text-gray-500">+8801710775456</p>
          </div>
        </div>
      </div>

      <div className="md:w-8/12 mx-auto border p-6 md:p-12 my-12">
        <div className="space-y-3 my-6">
          <h1 className="text-4xl font-semibold">Drop us a line</h1>
          <p className="text-gray-400">
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div>
          <form>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex gap-12 md:w-1/2 relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name *"
                    className="border p-4 rounded-lg placeholder:text-gray-400 placeholder:text-lg text-lg outline-cyan-500 w-full"
                  />
                  <FaUserTie className="absolute right-4 top-1/4 text-2xl text-cyan-500" />
                </div>
                <div className="flex gap-12 md:w-1/2 relative">
                  <input
                    type="email"
                    name="name"
                    placeholder="Enter Your Email *"
                    className="border p-4 rounded-lg placeholder:text-gray-400 placeholder:text-lg text-lg outline-cyan-500 w-full"
                  />
                  <FaRegEnvelope className="absolute right-4 top-1/4 text-2xl text-cyan-500" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex gap-12 md:w-1/2 relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write Service Type *"
                    className="border p-4 rounded-lg placeholder:text-gray-400 placeholder:text-lg text-lg outline-cyan-500 w-full"
                  />
                  <FaRegEdit className="absolute right-4 top-1/4 text-2xl text-cyan-500" />
                </div>
                <div className="flex gap-12 md:w-1/2 relative">
                  <input
                    type="email"
                    name="name"
                    placeholder="Enter Your Phone  *"
                    className="border p-4 rounded-lg placeholder:text-gray-400 placeholder:text-lg text-lg outline-cyan-500 w-full"
                  />
                  <FaPhoneAlt className="absolute right-4 top-1/4 text-2xl text-cyan-500" />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  cols="30"
                  rows="7"
                  className="border w-full outline-cyan-500 p-4 placeholder:text-gray-400 placeholder:text-lg text-lg resize-none"
                  placeholder="Enter Message Here *"
                ></textarea>
              </div>
            </div>
            <button className="bg-cyan-300 px-6 py-2 rounded-lg text-xl font-medium hover:bg-cyan-200 duration-300 mt-4 w-[120px]">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
