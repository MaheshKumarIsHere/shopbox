"use client";
import { LoginForm } from "@/components/LoginForm";
import Logo from "@/components/Logo";
import axios from "axios";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const formData = {
      email,
      password,
    };
    const res = await axios.post(
      "http://localhost:5555/api/v1/auth/sign-in",
      formData
    );
    console.log(res.data.data.token);
    if (res.data.data.token) {
      localStorage.setItem("token", res.data.data.token);
      redirect("/");
    }
  };

  return (
    // <div className="min-h-lvh min-w-full flex items-center justify-center bg-[#f3fdff]">
    //   <div className="bg-white w-[500px] rounded-3xl px-8 py-6 shadow">
    //     <div>
    //       <h1 className="text-2xl font-bold text-black/80">Welcome back</h1>
    //       <p className="text-black/50 w-[85%] text-sm">
    //         Good to see you again!
    //       </p>
    //     </div>
    //     <div className="flex flex-col mt-4">
    //       <label htmlFor="email" className="text-sm text-black/80">
    //         Email Address
    //       </label>
    //       <input
    //         className="rounded-lg h-10 bg-white text-black/80 mt-1 px-2 border border-black/20 text-sm outline-[#00d0ff]"
    //         type="text"
    //         name="email"
    //         placeholder="Write your email here"
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="flex flex-col mt-4">
    //       <label htmlFor="password" className="text-sm text-black/80">
    //         Password
    //       </label>
    //       <input
    //         className="rounded-lg h-10 bg-white mt-1 px-2 text-sm outline-[#00d0ff] border border-black/20"
    //         type="password"
    //         name="password"
    //         placeholder="Write your password here"
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //       <Link
    //         href="/forgot-password"
    //         className="text-sm cursor-pointer text-right self-end mt-1 pl-2 py-1 text-red-500 hover:text-red-600 hover:underline rounded-full w-fit"
    //       >
    //         Forgot password?
    //       </Link>
    //     </div>
    //     <button
    //       onClick={handleSubmit}
    //       className="w-full h-10 cursor-pointer bg-[#00d0ff] hover:bg-[#1cd5ff] text-white text-sm mt-6 rounded-lg"
    //     >
    //       Sign In
    //     </button>
    //     <div className="my-8 relative w-full h-fit">
    //       <hr className="border-t-0 border-b border-b-black/20" />
    //       <span className="absolute -top-3 px-2 py-2 left-0 right-0 bottom-0 m-auto text-xs bg-white w-fit">
    //         or
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <p className="text-sm text-black/70">
    //         Don&apos;t have an account?{" "}
    //         <Link href="/sign-up" className="text-[#00d0ff] hover:underline">
    //           Sign Up
    //         </Link>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm />
      </div>
    </div>
  );
}

export default SignInPage;
