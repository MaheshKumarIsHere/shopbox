"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

function SignUpPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  console.log(firstname, lastname, email, password, passwordConfirm);

  async function handleSubmit() {
    if (password !== passwordConfirm) {
      setError("Email and password should be same");
    }
    try {
      await axios.post("http://localhost:5555/api/v1/auth/sign-up", {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        passwordConfirm,
      });
      setFirstname((prev) => "");
      setLastname("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setError("");
      setSuccess(true);
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <div className="min-h-lvh min-w-full flex items-center justify-center bg-[#f3fdff]">
      <div className="bg-white w-[500px] rounded-3xl px-8 py-6 shadow">
        <div>
          <h1 className="text-2xl font-bold text-black/80">Sign up</h1>
          {error ? (
            <p className="text-red-600 w-[85%] text-sm">{error}</p>
          ) : (
            <p className="text-black/50 w-[85%] text-sm">
              Please fill given form correctly to create your account!
            </p>
          )}
          {success && (
            <p className="text-green-600 w-[85%] text-sm">
              Your account has been created successfully! You can login now
              using login page!
            </p>
          )}
        </div>
        <form className="flex items-center flex-wrap justify-between">
          <div className="flex flex-col mt-4">
            <label htmlFor="firstname" className="text-sm text-black/80">
              FirstName
            </label>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
              className="rounded-lg h-10 bg-white text-black/80 mt-1 px-2 border border-black/20 text-sm outline-[#00d0ff]"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="lastname" className="text-sm text-black/80">
              LastName
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="Write your email here"
              onChange={(e) => setLastname(e.target.value)}
              className="rounded-lg h-10 bg-white text-black/80 mt-1 px-2 border border-black/20 text-sm outline-[#00d0ff]"
            />
          </div>
          <div className="flex flex-col mt-4 w-full">
            <label htmlFor="email" className="text-sm text-black/80">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg h-10 bg-white text-black/80 mt-1 px-2 border border-black/20 text-sm outline-[#00d0ff]"
              type="email"
              name="email"
              placeholder="Write your email here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password" className="text-sm text-black/80">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg h-10 bg-white mt-1 px-2 text-sm outline-[#00d0ff] border border-black/20"
              type="password"
              name="password"
              placeholder="Write your password here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="password-confirm" className="text-sm text-black/80">
              Password Confirm<span className="text-red-500">*</span>
            </label>
            <input
              className="rounded-lg h-10 bg-white mt-1 px-2 text-sm outline-[#00d0ff] border border-black/20"
              type="password"
              name="password-confirm"
              placeholder="Re-Write password to confirm"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="rounded-full mt-4 w-full cursor-pointer"
          >
            Sign Up
          </Button>
        </form>

        <div className="my-8 relative w-full h-fit">
          <hr className="border-t-0 border-b border-b-black/20" />
          <span className="absolute -top-3 px-2 py-1 left-0 right-0 bottom-0 m-auto text-xs bg-white w-fit">
            or
          </span>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-sm text-black/70">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-[#00d0ff] hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
