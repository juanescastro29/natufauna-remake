import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UsersApi from "../api/UsersApi";
import toast from "react-hot-toast";

const Regist = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  async function registUser(dataForm) {
    setLoading(true);
    const response = await UsersApi.registUser(dataForm);
    if(!response.Error) {
      setLoading(false)
      toast.success("Registered successfully!");
      navigate(response.Route)
    }else {
      toast.error(response.Error);
      setLoading(false)
    }
  }

  const formVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        duration: 0.8,
        type: "spring",
      },
    },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col w-full mt-5 mb-10 p-5 gap-y-10">
      <section className="flex justify-center w-full mx-auto">
        <motion.form
          className="grid grid-cols-2 gap-y-2 gap-x-4 p-5 border-b border-green-600/50 rounded-2xl shadow-xl w-[300px] md:w-[450px] bg-white"
          onSubmit={handleSubmit(registUser)}
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <h1 className="text-2xl lg:text-3xl font-bold col-span-2 text-center text-green-600/100 p-2">
            Regist
          </h1>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Id Number
            </label>
            <input
              type="text"
              name="userId"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="id number"
              {...register("userId", {
                required: true,
                minLength: 7,
                maxLength: 10,
                pattern: /^[0-9]+$/,
              })}
            />
            {errors.userId?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userId?.type === "minLength" && (
              <div className="text-red-600 text-center">
                <small>Min length is 7 characters.</small>
              </div>
            )}
            {errors.userId?.type === "maxLength" && (
              <div className="text-red-600 text-center">
                <small>Max length is 10 characters.</small>
              </div>
            )}
            {errors.userId?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Please enter only numbers.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="userName"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="name"
              {...register("userName", {
                required: true,
                pattern: /^[A-Za-z ]+$/,
              })}
            />
            {errors.userName?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userName?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Only alphabets and spaces are allowed.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="userLastName"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="last name"
              {...register("userLastName", {
                required: true,
                pattern: /^[A-Za-z ]+$/,
              })}
            />
            {errors.userLastName?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userLastName?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Only alphabets and spaces are allowed.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              name="userPhone"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="phone"
              {...register("userPhone", {
                required: true,
                minLength: 10,
                maxLength: 10,
                pattern: /^[0-9]+$/,
              })}
            />
            {errors.userPhone?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userPhone?.type === "minLength" && (
              <div className="text-red-600 text-center">
                <small>Min length is 10 characters.</small>
              </div>
            )}
            {errors.userPhone?.type === "maxLength" && (
              <div className="text-red-600 text-center">
                <small>Max length is 10 characters.</small>
              </div>
            )}
            {errors.userPhone?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Please enter only numbers.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-2 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Email
            </label>
            <input
              type="text"
              name="userEmail"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="email"
              {...register("userEmail", {
                required: true,
                pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              })}
            />
            {errors.userEmail?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This feld is required.</small>
              </div>
            )}
            {errors.userEmail?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Invalid email.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-2 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="userAddress"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="address"
              {...register("userAddress", {
                required: true,
              })}
            />
            {errors.userAddress?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This feld is required.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-2 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              City
            </label>
            <input
              type="text"
              name="userCity"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="city"
              {...register("userCity", {
                required: true,
                pattern: /^[A-Za-z ]+$/,
              })}
            />
            {errors.userCity?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userCity?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Only alphabets and spaces are allowed.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="password"
              {...register("userPassword", {
                required: true,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.userPassword?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.userPassword?.type === "pattern" && (
              <div className="text-red-600 text-center">
                <small>Password too weak.</small>
              </div>
            )}
          </motion.div>
          <motion.div className="col-span-1 w-full" variants={formItemVariants}>
            <label className="block text-sm md:text-base font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="rePassword"
              className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 ring-inset ring-green-600/50 focus:outline-green-600/50 placeholder:text-gray-400 text-sm md:text-base"
              placeholder="confirm password"
              {...register("rePassword", {
                required: true,
                validate: (value) => value === watch("userPassword"),
              })}
            />
            {errors.rePassword?.type === "required" && (
              <div className="text-red-600 text-center">
                <small>This field is required.</small>
              </div>
            )}
            {errors.rePassword?.type === "validate" && (
              <div className="text-red-600 text-center">
                <small>Passwords do not match.</small>
              </div>
            )}
          </motion.div>
          <motion.div
            className="flex items-center justify-center col-span-2 mt-4"
            variants={formItemVariants}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            ) : (
              <motion.button
                className="bg-green-600/100 rounded-md shadow-lg text-white h-8 w-20 md:h-9 md:w-24 text-sm md:text-base items-center justify-center"
                whileHover={{
                  scale: 1.1,
                }}
              >
                Regist
              </motion.button>
            )}
          </motion.div>
        </motion.form>
      </section>
    </div>
  );
};

export default Regist;
