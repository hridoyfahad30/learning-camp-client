import React, { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { addClass } from "../../API/allAPI";
import Swal from "sweetalert2";

const AddaClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (classInfo) => {
    addClass(classInfo)
    .then(data => {
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your class has been submitted for admin review',
          showConfirmButton: false,
          timer: 3500
        })
      }
    })
  };

  const [reactLoading, setReactLoading] = useState(false);

  useEffect(() => {
    setReactLoading(true);
    setTimeout(() => {
      setReactLoading(false);
    }, 400);
  }, []);

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
        <div className="flex justify-center items-center min-h-screen mx-6">
          <div className="bg-cyan-800 w-full p-12 rounded-2xl text-white">
            <h1 className="text-4xl font-semibold my-8">Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-between items-center text-white">
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">Class Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Class Name"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("className", { required: true })}
                  />
                  {errors.className && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">Class Image</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Class Image"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("classImage", { required: true })}
                  />
                  {errors.classImage && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
              </div>
              <div className="flex justify-between items-center text-white">
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">
                      Instructor Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Instructor Name"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("instructorName", { required: true })}
                  />
                  {errors.instructorName && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">
                      Instructor Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Instructor Email"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("instructorEmail", { required: true })}
                  />
                  {errors.instructorEmail && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
              </div>
              <div className="flex justify-between items-center text-white">
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">
                      Available Seats
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Available Seats"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("availableSeats", { required: true })}
                  />
                  {errors.availableSeats && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
                <div className="form-control w-1/2 my-2 mx-6">
                  <label className="label">
                    <span className="text-xl font-semibold">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered text-black text-lg font-medium"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                  <span className="text-red-500 text-lg mt-2 ml-4 -mb-3 font-semibold">Name is required</span>
                )}
                </div>
              </div>
              <div className="flex justify-center items-center my-8">
                <button className="bg-cyan-300 w-96 py-4 rounded-xl text-black text-xl font-semibold hover:bg-cyan-400 hover:shadow-2xl hover:shadow-teal-600 hover:scale-105 duration-300">
                  Add Class
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddaClass;
