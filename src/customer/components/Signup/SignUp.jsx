import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const[selectedFile]=useState(null)
  // const[previewURL,setPreviewURL]=useState("")
  const[formData,setFormData]=useState({
    email:"",
    password:"",
    photo:selectedFile,
    gender:'',
    role:'patient',
   
  });

  const handleInputChange= (e) => {
    setFormData({ ...formData ,[e.target.name]:e.target.value});
   };
   const handleFileInputChange = async(event)=>{
    const file =event.target.files[0]
    console.log(file)
   };
   const submitHandler =async event=>{
    event.preventDefault()
    console.log(formData)
   }


  return (
    <section className="px-5 lg:px-0 ">
      <div className=" mt-[100px] w-full max-w-[550px] mx-auto rounded-lg shadow border border-black  border-[2px]  shadow-textColor shadow-opacity-90 md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Register with <span className="text-red-600 px-1">Fashion-Freaks !!!</span>
      
        </h3>

        <form   onSubmit={ submitHandler}className="py-4 md:py-3">
          <div className="mb-5">
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4  py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-red-300 cursor-pointer"
              required
            ></input>
          </div>

          <div className="mb-5">
            <input
              placeholder="Enter Your E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4  py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-red-300 cursor-pointer"
              required
            ></input>
          </div>

          <div className="mb-5">
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full  text-[16px]  leading-7  text-headingColor px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline outline-primaryColor placeholder:text-red-300 cursor-pointer"
              required
            ></input>
          </div>
        

          <div className="mt-1">
            <button  onClick={submitHandler} className="btn w-full h-[50px] bg-black text-white rounded-lg text-[18px]" type="submit">
              Sign Up
            </button>
          </div>
          <p className="text-textColor mt-5 text-center">
            Already Have an account?
            <Link to="/login" className="text-primaryColor font-medium ml-1 "  >
              login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
