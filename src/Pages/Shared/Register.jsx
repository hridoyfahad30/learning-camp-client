import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import { useForm } from "react-hook-form";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 bg-cyan-300 p-4 rounded-full -mt-8 -mb-3">
            Register
          </h1>
        </div>
        <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-cyan-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control -mb-2">
              <label className="label">
                <span className="text-lg font-semibold">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control -mb-2">
              <label className="label">
                <span className="text-lg font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control -mb-2">
              <label className="label">
                <span className="text-lg font-semibold">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control -mb-2">
              <label className="label">
                <span className="text-lg font-semibold">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              <label className="label">
                <span className="text-lg font-semibold">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
              <label className="label space-x-2">
                <input onClick={handleShowPass} type="checkbox" name="" id="" />
                <p className="">Show password</p>
              </label>
              <label className="label">
                <Link to="/login" className=" link link-hover">
                  Already Have An Account? Login
                </Link>
              </label>
            </div>
            <div className="form-control -mb-4">
              <button className="btn bg-cyan-300 hover:bg-cyan-400">
                Login
              </button>
            </div>
            <div className="divider -mb-2">OR</div>
            <div className="form-control mx-auto">
              <button className="-mb-6">
                <img
                  className="w-20 rounded-full hover:scale-110 duration-300"
                  src={google}
                  alt=""
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
