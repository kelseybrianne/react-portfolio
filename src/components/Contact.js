import React, { useState } from "react";
import { validateEmail } from '../utils/validateEmail';

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of submitting a form, which is to reload the page
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Enter a valid email address.');
    } else if (!name) {
      setErrorMessage('Name is required')
    } else if (!email) {
      setErrorMessage('Email is required')
    } else if (!message) {
      setErrorMessage('Message is required')
    }

    // Clear out the input after a successful submit.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <main id="contact-page">
      <h1>Say hello, i'd love to connect.</h1>
      {/* <h2>
        Drop your name, email address, and a brief message below and I will get
        back to you shortly.
      </h2> */}
      <form onSubmit={handleFormSubmit} className={theme === 'Dark' ? 'dark-theme contact-form' : 'contact-form'}>
        <input
          // className={theme === 'Dark' ? 'dark-theme' : ''}
          id="name"
          type="name"
          value={name}
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          id="email"
          placeholder="Email"
          type="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          value={message}
          name="message"
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <p className="form-alert">{errorMessage}</p>
        <button type="submit" onClick={handleFormSubmit}>Submit</button>
      </form>
    </main>
  );
};

export default Contact;
