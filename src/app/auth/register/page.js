"use client";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration form submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full ">
        <div className="flex items-center justify-center">
          <Image
            src="/image/auth__2.png"
            alt="Register Illustration"
            width={500}
            height={500}
          />
        </div>
        <div className="max-w-[550px] bg-white border rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-center mb-3">
            Let's join us.
          </h2>
          <p className="text-center mb-6">Register with your Phone/Email</p>
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type your name..."
                className="w-full p-2 border rounded-md outline-none focus:border-[#E60CD9] transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Type phone number..."
                className="w-full p-2 border rounded-md outline-none focus:border-[#E60CD9] transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Type password..."
                className="w-full p-2 border rounded-md outline-none focus:border-[#E60CD9] transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password..."
                className="w-full p-2 border rounded-md outline-none focus:border-[#E60CD9] transition-colors"
                required
              />
            </div>
            <label className="flex items-center text-sm cursor-pointer">
              <input type="checkbox" className="mr-2" required />
              Agree to the terms and conditions.
            </label>
            <button
              type="submit"
              className="w-full bg-[#E60CD9] text-white py-2 rounded-md transition-colors"
            >
              Register Now
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Have an account?{" "}
            <Link href="/auth/login" className="text-[#E60CD9] ">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
