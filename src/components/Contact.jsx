import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Nestora inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:iqraaslam2207@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl font-light mb-6">
          Let's Design Together
        </h2>
        <p className="text-neutral-400 mb-10">
          Have a project in mind? Reach out to us and let's create something beautiful.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-neutral-800 border border-neutral-700 px-5 py-3 rounded focus:outline-none focus:border-amber-500 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-neutral-800 border border-neutral-700 px-5 py-3 rounded focus:outline-none focus:border-amber-500 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
            className="bg-neutral-800 border border-neutral-700 px-5 py-3 rounded focus:outline-none focus:border-amber-500 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-black font-medium py-3 rounded transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
