import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="px-5 pb-10 lg:px-0">
    <div className="w-full max-w-[510px] mx-auto rounded-lg shadow  shadow-textColor shadow-lg md:p-10 mt-[100px] border border-black border-[2px]" >
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello, <span className="text-primaryColor px-1">Welcome</span> to Fashion-Freaks
          !!!
        </h3>

        <form className="py-4 md:py-3">
          <div className="mb-5">
            <input
              placeholder="Enter Your E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full  text-[16px]  leading-7  text-headingColor px-4  py-3 border-b border-solid border-[#0066ff61] focus:outline outline-red placeholder:text-textColor cursor-pointer"
            ></input>
          </div>

          <div className="mb-5">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full  text-[16px]  leading-7  text-headingColor px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-textColor cursor-pointer"
            ></input>
          </div>

         

          <div className="mt-7">
            <button className="bg-black text-white h-[50px] w-full rounded-lg text-[18px]" type="submit">
              Login
            </button>
          </div>
          <p className="text-textColor mt-5 text-center">
            Don't have an account?
            <Link to="/" className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
          <p className="text-textColor mt-5 text-center">
            Login with
            <Link to="/" className="text-primaryColor font-medium ml-1 text-green-600">
              Whatspp
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
