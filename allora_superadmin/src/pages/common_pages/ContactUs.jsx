"use client";

import { useState } from "react";
import {
  FaUser,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaCommentDots,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "firstName" ? value.trim() : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
      });
      return;
    }
    toast.success("Message sent successfully!", { position: "top-right" });
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl ">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-700 sm:text-5xl">
          Contact sales
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-900"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5 flex items-center bg-white rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 px-3.5 py-2">
              <FaUser className="text-blue-500 mr-3" />
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5 flex items-center bg-white rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 px-3.5 py-2">
              <FaBuilding className="text-green-500 mr-3" />
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Optional"
                className="block w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-900"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5 flex items-center bg-white rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 px-3.5 py-2">
              <FaEnvelope className="text-red-500 mr-3" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-gray-900"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5 flex items-center bg-white rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 px-3.5 py-2">
              <FaPhone className="text-purple-500 mr-3" />
              <input
                id="phone-number"
                name="phoneNumber"
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="block w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-900"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <div className="mt-2.5 flex items-center bg-white rounded-md ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 px-3.5 py-2">
              <FaCommentDots className="text-orange-500 mr-3" />
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full text-base text-gray-900 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
