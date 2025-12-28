import { useState } from "react";
import axios from "axios";
import {toast} from "react-toastify"
const About = ({about}) => {
     const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://real-estate-dashboard-ypyu.onrender.com/api/message", form)
        setForm({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      toast.success(res.data.message)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send request")
    }
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* About text */}

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">About the Project</h2>
          <p className="text-gray-700 whitespace-pre-line">{about}</p>
        </div>

      
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Let's Get Your Dream Home</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded"
            />
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition">
              Send Request
            </button>
          </form>
        </div>
      </div>
      </section>

      
    </>
  )
}

export default About