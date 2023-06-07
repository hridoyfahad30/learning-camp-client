import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error404 = () => {
  const { error, status } = useRouteError();

  return (
    <div className="bg-[url('https://i.ibb.co/wCh3RDN/error404bg.jpg')] bg-cover bg-no-repeat min-h-screen flex justify-center items-center text-center text-cyan-200">
      <div className="space-y-8">
        <p className="text-9xl font-extrabold">{status}</p>
        <p className="text-4xl font-bold">{error.message}</p>
        <Link to='/'><button className="my-10 bg-cyan-300 px-6 py-3 rounded-xl text-3xl text-black font-semibold hover:bg-cyan-400 shadow-2xl shadow-black">Back to Home</button></Link>
      </div>
    </div>
  );
};

export default Error404;
