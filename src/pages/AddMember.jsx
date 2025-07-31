import React, { useState } from "react";

const AddMember = () => {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "monthly",
    startDate: "",
  });

  const handleChange = (e) => {
    setMemberData({
      ...memberData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Member added:", memberData);
    // You can integrate this with an API call here
    alert("Member successfully added!");
    setMemberData({
      name: "",
      email: "",
      phone: "",
      membershipType: "monthly",
      startDate: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Member</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={memberData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 
            rounded-lg focus:ring-2
             focus:ring-blue-400 focus:outline-none"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={memberData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={memberData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="123-456-7890"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Membership Type
          </label>
          <select
            name="membershipType"
            value={memberData.membershipType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
             focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={memberData.startDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 
          rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;
