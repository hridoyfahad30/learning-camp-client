import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { ScaleLoader, GridLoader } from "react-spinners";
import { storeUser } from "../../API/allAPI";

const Register = () => {
  const [showPass, setShowPass] = useState(true);
  const [err, setErr] = useState("");
  const { createUser, googleSignUp, auth, logOut, loading, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    setErr("");
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photoURL = data.photoURL;

    createUser(email, password)
      .then((res) => {
        const createdUser = res.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        }).then(() => {
          storeUser(createdUser);
          reset();
          logOut();
          Swal.fire({
            title: "User Registration Successful. Please Login!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        });

        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        setErr(err.message);
        return;
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp()
      .then((res) => {
        const user = res.user;
        storeUser(user)
        Swal.fire({
          title: "User Registration Successful.",
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
        setLoading(false);
        setErr(err.message);
      });
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      {reactLoading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <GridLoader
            color="#0ee9ff"
            margin={10}
            size={50}
            speedMultiplier={2}
            width={0}
          />
        </div>
      ) : (
        <>
          <Helmet>
            <title>LEARNING CAMP | Register</title>
          </Helmet>
          <div className="hero my-20">
            <div className="hero-content flex-col">
              <div className="avatar placeholder absolute z-10 top-28">
                <div className="bg-cyan-300 text-slate-900 text-3xl font-bold rounded-full w-32">
                  <span className="text-3xl">Register</span>
                </div>
              </div>
              <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-cyan-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <div className="form-control -mb-2">
                    <label className="label">
                      <span className="text-lg font-semibold">Name</span>
                    </label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
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
                      {...register("photoURL", { required: false })}
                      placeholder="Photo URL"
                      className="input input-bordered"
                    />
                    {errors.photoURL && (
                      <span className="text-red-600">
                        Photo URL is required
                      </span>
                    )}
                  </div>
                  <div className="form-control -mb-2">
                    <label className="label">
                      <span className="text-lg font-semibold">Email</span>
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
                  <div className="form-control -mb-2">
                    <label className="label">
                      <span className="text-lg font-semibold">Password</span>
                    </label>
                    <input
                      type={showPass ? "password" : "text"}
                      name="password"
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
                    <label className="label">
                      <span className="text-lg font-semibold">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type={showPass ? "password" : "text"}
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
                      <Link to="/login" className=" link link-hover">
                        Already Have An Account? Login
                      </Link>
                    </label>
                  </div>
                  <div className="form-control -mb-4">
                    <button className="btn bg-cyan-300 hover:bg-cyan-200">
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
                        <div>Register</div>
                      )}
                    </button>
                  </div>
                  <div className="divider -mb-2">OR</div>
                  <div className="form-control mx-auto">
                    <button onClick={handleGoogleSignIn} className="-mb-6">
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
        </>
      )}
    </>
  );
};

export default Register;
