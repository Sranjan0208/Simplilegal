import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    address: "",
    problem: "",
    caseAgainst: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    address: "",
    problem: "",
    caseAgainst: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Phone number validation
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
      valid = false;
    }

    // Date of birth validation
    if (formData.dob.trim() === "") {
      newErrors.dob = "Date of birth is required";
      valid = false;
    }

    // Address validation
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    }

    // Problem validation
    if (formData.problem.trim() === "") {
      newErrors.problem = "Problem is required";
      valid = false;
    }

    // Case against validation
    if (formData.caseAgainst.trim() === "") {
      newErrors.caseAgainst = "Case Against is required";
      valid = false;
    }

    if (valid) {
      // Handle form submission (if valid)
      console.log("Form submitted:", formData);
      try {
        const response = await axios.post(
          "http://localhost:8000/form",
          formData
        );

        if (response.data.success) {
          console.log("Form submitted successfully!");
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    setErrors(newErrors);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8">Legal Form</h1>
        <form id="form" noValidate onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.name ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <span className="text-sm text-red-600">{errors.name}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number (10 digits)"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.phoneNumber ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.phoneNumber && (
              <span className="text-sm text-red-600">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              required
              value={formData.dob}
              onChange={handleChange}
              className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.dob ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.dob && (
              <span className="text-sm text-red-600">{errors.dob}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              value={formData.address}
              onChange={handleChange}
              className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.address ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.address && (
              <span className="text-sm text-red-600">{errors.address}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <select
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              required
              className={`pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.problem ? "border-red-600" : "border-gray-200"
              }`}
            >
              <option value="" disabled>
                Select a problem
              </option>
              <option value="Land Disputes">Land Disputes</option>
              <option value="Property Rights">Property Rights</option>
              <option value="Labor Disputes">Labor Disputes</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Marriage and Divorce">Marriage and Divorce</option>
              <option value="Criminal Cases">Criminal Cases</option>
              <option value="Family Disputes">Family Disputes</option>
              <option value="Debt-Related Cases">Debt-Related Cases</option>
              <option value="Social Welfare Schemes">
                Social Welfare Schemes
              </option>
              <option value="Property Eviction">Property Eviction</option>
            </select>
            {errors.problem && (
              <span className="text-sm text-red-600">{errors.problem}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <input
              type="text"
              name="caseAgainst"
              placeholder="Case Against"
              required
              value={formData.caseAgainst}
              onChange={handleChange}
              className={`pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${
                errors.caseAgainst ? "border-red-600" : "border-gray-200"
              }`}
            />
            {errors.caseAgainst && (
              <span className="text-sm text-red-600">{errors.caseAgainst}</span>
            )}
          </div>

          <div className="relative z-0 w-full mb-5">
            <textarea
              name="additionalInfo"
              placeholder="Additional Information about case (Optional)"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 border-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-500 hover:bg-blue-600 hover:shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
