// export default function Register() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-orange-500">
//             Sign up
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form action="#" method="POST" className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
//                 Email address
//               </label>
//               <div className="mt-2">
//               <input
//   id="email"
//   name="email"
//   type="email"
//   required
//   autoComplete="email"
//   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-1 border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
// />

//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
//                   Password
//                 </label>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-1 border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               >
//                 Sign Up
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm/6 text-gray-500">
//             Have an Account?{' '}
//             <a href="/login" className="font-semibold text-orange-600 hover:text-indigo-500">
//               Sign In
//             </a>
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backendGlobalRoute from "../../config/config.js" // Ensure this is your API base URL

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    companyAddress: "",
    companyEmail: "",
    gstNumber: "",
    promotionalConsent: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${backendGlobalRoute}/api/register`, formData);
      setSuccess(response.data.message);
      setTimeout(() => navigate("/login"), 2000); // Redirect to login after 2 sec
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-orange-500">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-900">
              Company Name
            </label>
            <div className="mt-2">
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Company Address */}
          <div>
            <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-900">
              Company Address
            </label>
            <div className="mt-2">
              <input
                id="companyAddress"
                name="companyAddress"
                type="text"
                value={formData.companyAddress}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* GST Number */}
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-900">
              GST Number
            </label>
            <div className="mt-2">
              <input
                id="gstNumber"
                name="gstNumber"
                type="text"
                value={formData.gstNumber}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-orange-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Promotional Consent Checkbox */}
          <div className="flex items-center">
            <input
              id="promotionalConsent"
              name="promotionalConsent"
              type="checkbox"
              checked={formData.promotionalConsent}
              onChange={handleChange}
              className="h-4 w-4 border-orange-500 text-orange-600 focus:ring-orange-500"
            />
            <label htmlFor="promotionalConsent" className="ml-2 block text-sm text-gray-900">
              Receive promotional emails
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Success & Error Messages */}
        {success && <p className="mt-4 text-green-600 text-center">{success}</p>}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}

        <p className="mt-10 text-center text-sm text-gray-500">
          Have an Account?{" "}
          <a href="/login" className="font-semibold text-orange-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
