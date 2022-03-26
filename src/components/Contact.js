const Contact = () => {
  return (
    <main id="contact-page">
      <h1>Say hello, i'd love to connect.</h1>
      <h2>
        Drop your name, email address, and a brief message below and I will get
        back to you shortly.
      </h2>
      <form className="contact-form">
        <input id="name" type="name" placeholder="Name" />
        <input id="email" placeholder="Email" type="email" />
        <textarea placeholder="Message" />
        <button>Submit</button>
      </form>
    </main>
  )
}

export default Contact
