import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [showPass, setShowPass] = useState(false);

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <div className="hero">
  <div className="hero-content flex-col space-y-5">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-cyan-500">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-96 h-[500px] shadow-2xl bg-cyan-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Password</span>
          </label>
          <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered " />
          <label className="label space-x-2">
            <input onClick={handleShowPass} type="checkbox" name="" id="" />
            <p className="">Show password</p>
          </label>
          <label className="label">
            <Link to='/register' className=" link link-hover">Create An New Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;