import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-cyan-100 py-20 gap-8">
      <div className="bg-cyan-300 px-10 py-20 rounded-2xl">
        <img
          src="https://trainingtale.org/wp-content/uploads/2021/10/love-letter-2.png"
          alt=""
        />
      </div>
      <div className="bg-cyan-500 px-4 rounded-2xl text-center py-12">
        <h3 className="text-4xl text-white my-4">Subscribe to Our Newsletter!</h3>
        <div className="flex flex-col justify-center items-center gap-3">
          <input type="email" name="" placeholder="Enter Your Email"  className="px-4 py-2 rounded-xl outline-cyan-400"/>
          <button className="bg-gray-200 px-6 py-2 rounded-xl text-xl font-medium hover:bg-cyan-400 hover:shadow-2xl duration-300">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
