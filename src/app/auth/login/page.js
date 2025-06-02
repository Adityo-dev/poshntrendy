"use client";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="flex items-center justify-center">
          <Image
            src="/image/auth__1.png"
            alt="Login Illustration"
            width={500}
            height={500}
            className="w-fit h-[480px]"
          />
        </div>
        <div className="max-w-[550px] h-fit bg-white border rounded-xl shadow-lg p-6">
          <h2 className="text-3xl font-semibold text-center mb-3">
            Welcome back.
          </h2>
          <p className="text-center mb-6">Login with your Phone/Email</p>
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-1"
              >
                Phone/Email
              </label>
              <input
                id="username"
                type="text"
                placeholder="Type phone number or email..."
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
            <div className="flex justify-between text-sm">
              <span></span>
              <Link href="#" className="text-[#E60CD9]">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-[#E60CD9] text-white py-2 rounded-md transition-colors"
            >
              Sign In
            </button>
            <button
              type="button"
              className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google icon"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </form>
          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <button
              onClick={handleSubmit}
              className="text-[#E60CD9] cursor-pointer"
            >
              <Link href={"/auth/register"}> Register now</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
