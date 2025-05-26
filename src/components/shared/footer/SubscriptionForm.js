"use client";
import { useState } from "react";

const SubscriptionForm = () => {
  const [isBd, setIsBd] = useState(true);

  return (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="flex-1 border border-primary px-4 py-2 rounded-md outline-none"
        />
        {isBd && (
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="flex-1 border border-primary px-4 py-2 rounded-md outline-none"
          />
        )}
        <button className="bg-primary hover:bg-[#C50ABF] text-lg text-primary-foreground px-6 py-2 rounded-md cursor-pointer">
          SUBSCRIBE
        </button>
      </div>
      <div className="flex space-x-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="location"
            className="form-radio text-blue-600"
            checked={isBd}
            onChange={() => setIsBd(true)}
          />
          <span className="ml-2 text-[#000]">I live in Bangladesh</span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="location"
            className="form-radio text-blue-600"
            checked={!isBd}
            onChange={() => setIsBd(false)}
          />
          <span className="ml-2 text-[#000]">I live outside Bangladesh</span>
        </label>
      </div>
    </div>
  );
};

export default SubscriptionForm;
