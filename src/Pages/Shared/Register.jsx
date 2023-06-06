import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';

const Register = () => {

    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(email, password);
    }    

    return (
        <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-slate-900 bg-cyan-300 p-8 rounded-full">Register</h1>
    </div>
    <div className="card flex-shrink-0 w-96  shadow-2xl bg-cyan-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Email</span>
          </label>
          <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Password</span>
          </label>
          <input type={showPass ? "text" : "password"} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" className="input input-bordered " required />
          <label className="label space-x-2">
            <input onClick={handleShowPass} type="checkbox" name="" id="" />
            <p className="">Show password</p>
          </label>
          <label className="label">
            <Link to='/register' className=" link link-hover">Create An New Account</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-cyan-300 hover:bg-cyan-400">Login</button>
        </div>
        <div className="divider -mb-2">OR</div>
        <div className="form-control mt-6 mx-auto">
          <button className=""><img className='w-20 rounded-full hover:scale-110 duration-300' src={google} alt="" /></button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;