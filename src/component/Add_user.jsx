// src/pages/AddUser.jsx
import React, { useState } from "react";

export default function AddUser({ users, setUsers }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    else if (!/^\d{10}$/.test(form.phone)) e.phone = "Phone must be 10 digits";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const id = Date.now();
    const newUser = { ...form, id };

    // Save to localStorage
    const raw = localStorage.getItem("local_added_users_v1");
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(newUser);
    localStorage.setItem("local_added_users_v1", JSON.stringify(arr));

    // Update parent state for instant display
    setUsers([newUser, ...users]);

    setForm({ name: "", email: "", phone: "", company: "" });
    setErrors({});
    alert("User added successfully!");
    
    setTimeout(()=>{
            setSuccess("User added successfully!");
    },2000)
        
  };

  return (
    <div id="add_user" className="md:w-[60vw] w-full  my-10 mx-auto p-6 rounded-xl shadow-md mb-10 border-2 border-black dark:border-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">Add User</h2>

      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full Name"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Email"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Phone (10 digits)"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            placeholder="Company"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-3 justify-center mt-4">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Add</button>
          <button type="button" onClick={() => setForm({ name: "", email: "", phone: "", company: "" })} className="px-6 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Cancel</button>
        </div>
      </form>
    </div>
  );
}
