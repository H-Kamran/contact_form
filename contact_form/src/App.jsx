import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  return (
    <main className="container">
      <form className="contact-form">
        <div className="form-header">
          <h1 className="header-text text-4xl font-semibold">Contact Us</h1>
        </div>
        {/* <label htmlFor="fullName">Full Name:</label> */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.value}
          onChange={handleChange}
          required
        />
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {/* <label htmlFor="subject">Subject:</label> */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default App;
