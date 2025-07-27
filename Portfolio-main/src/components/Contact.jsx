import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  ;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.email}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-white">
      <div className="max-w-xl w-full bg-gray-900 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-400 text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            value={form.name}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            value={form.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-500"
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded font-semibold shadow cursor-pointer"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;
