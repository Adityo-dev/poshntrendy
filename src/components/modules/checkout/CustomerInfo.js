"use client";
import { useState } from "react";

export default function CustomerInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <span className="w-10 h-10 flex items-center justify-center border border-[#E60CD9] rounded-full text-[#E60CD9] font-bold">
          1
        </span>
        Add Your Shipping & Billing Info
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="address"
          type="text"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="city"
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="state"
          type="text"
          placeholder="State/Province"
          value={formData.state}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="zipCode"
          type="text"
          placeholder="Zip/Postal Code"
          value={formData.zipCode}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          className="border border-[#E60CD9] px-4 py-2 rounded-md outline-none"
        />
      </div>
    </div>
  );
}
