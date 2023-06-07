import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { ScaleLoader, GridLoader } from "react-spinners";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const { signIn, googleSignUp, loading } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const [err, setErr] = useState("");

  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    setErr("");

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        const loggedInUser = {
          email: user.email,
        };
        // fetch("https://toy-server-tau.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loggedInUser),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("jwt response", data);
        //     localStorage.setItem("toy-access-token", data.token);
        //   });
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((res) => {
        const user = res.user;
        const loggedInUser = {
          email: user.email,
        };
        // fetch('https://toy-server-tau.vercel.app/jwt', {
        //     method: 'POST',
        //     headers: {
        //       'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(loggedInUser)
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //     localStorage.setItem('toy-access-token', data.token)
        //   })
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from);
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  return (
    <>
      {reactLoading?
        
        <div className="flex justify-center items-center h-[100vh]">
          <GridLoader
        color="#0ee9ff"
        margin={10}
        size={100}
        speedMultiplier={2}
        width={0}
      />
        </div>
      :
      <>
        <Helmet>
          <title>LEARNING CAMP | Login</title>
        </Helmet>
        <div className="hero my-20">
          <div className="hero-content flex-col">
            <div className="avatar placeholder absolute z-10 top-28">
              <div className="bg-cyan-300 text-slate-900 text-3xl font-bold rounded-full w-32">
                <span className="text-3xl">Login</span>
              </div>
            </div>
            <div className="card flex-shrink-0 w-[500px]  shadow-2xl bg-cyan-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  {err && <p className="text-red-600">{err}</p>}
                  <label className="label space-x-2">
                    <input
                      onClick={handleShowPass}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="">Show password</p>
                  </label>
                  <label className="label">
                    <Link to="/register" className=" link link-hover">
                      Create An New Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-cyan-300 hover:bg-cyan-400">
                    {loading ? (
                      <ScaleLoader
                        color="#2f2f2f"
                        height={20}
                        margin={1}
                        radius={100}
                        speedMultiplier={1}
                        width={5}
                      />
                    ) : (
                      <div>Login</div>
                    )}
                  </button>
                </div>
                <div className="divider -mb-2">OR</div>
                <div className="form-control mt-6 mx-auto">
                  <button onClick={handleGoogleSignIn} className="">
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
        <Helmet>
          <title>LEARNING CAMP | Login</title>
        </Helmet>
        <div className="hero my-20">
          <div className="hero-content flex-col">
            <div className="avatar placeholder absolute z-10 top-28">
              <div className="bg-cyan-300 text-slate-900 text-3xl font-bold rounded-full w-32">
                <span className="text-3xl">Login</span>
              </div>
            </div>
            <div className="card flex-shrink-0 w-[500px]  shadow-2xl bg-cyan-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl font-semibold">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  {err && <p className="text-red-600">{err}</p>}
                  <label className="label space-x-2">
                    <input
                      onClick={handleShowPass}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    <p className="">Show password</p>
                  </label>
                  <label className="label">
                    <Link to="/register" className=" link link-hover">
                      Create An New Account
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-cyan-300 hover:bg-cyan-400">
                    {loading ? (
                      <ScaleLoader
                        color="#2f2f2f"
                        height={20}
                        margin={1}
                        radius={100}
                        speedMultiplier={1}
                        width={5}
                      />
                    ) : (
                      <div>Login</div>
                    )}
                  </button>
                </div>
                <div className="divider -mb-2">OR</div>
                <div className="form-control mt-6 mx-auto">
                  <button onClick={handleGoogleSignIn} className="">
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
      </>}
    </>
  );
};

export default Login;
