import { use, useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const validate = () => {
    const validationErrors = {};
    if (!form.fullName.trim()) {
      validationErrors.fullName = "Please enter your full name.";
    } else if (!form.fullName.includes(" ")) {
      validationErrors.fullName = "Please enter a name and a surname.";
    }
    if (!form.email.trim()) {
      validationErrors.email = "Please enter your email.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) {
      validationErrors.subject = "Please enter a subject.";
    }
    if (!form.message.trim()) {
      validationErrors.message = "Please enter your message.";
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Form submitted!");
    setForm({ fullName: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <main className="container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1 className="header-text">Contact Us</h1>
        </div>
        {/* <label htmlFor="fullName">Full Name:</label> */}
        <input
          className={`${errors.fullName ? "error" : ""}`}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          // required
        />
        {errors.fullName && (
          <span className="error-text">{errors.fullName}</span>
        )}
        {/* <label htmlFor="email">Email:</label> */}
        <input
          className={`${errors.email ? "error" : ""}`}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          // required
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
        {/* <label htmlFor="subject">Subject:</label> */}
        <input
          className={`${errors.subject ? "error" : ""}`}
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          // required
        />
        {errors.subject && <div className="error-text">{errors.subject}</div>}
        {/* <label htmlFor="message">Message:</label> */}
        <textarea
          className={`${errors.message ? "error" : ""}`}
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          // required
        ></textarea>
        {errors.message && <div className="error-text">{errors.message}</div>}
        <div className="btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
}

export default App;
