import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';

function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        'service_hcaiseq',
        'template_iimiae4',
        {
          from_name: form.name,
          to_name: 'Ivan David Medina',
          from_email: form.email,
          to_email: 'iveen98@gmail.com',
          message: form.message,
        },
        'GGYf7AVVNehpxXUOQ'
      )
      .then(() => {
        alert('Message sent successfully!');
        if (formRef.current) {
          formRef.current.reset();
        }
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert('An error occurred, please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600">
            I am always open to new opportunities and collaborations. Feel free
            to reach out to me.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                required
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Ivan David Medina"
              ></input>
            </label>
            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="iveen98@gmail.com"
              ></input>
            </label>
            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                required
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                rows={5}
                placeholder="Hi Ivan, I would like to give you a job..."
              ></textarea>
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="/assets/arrow-up.png"
                className="field-btn_arrow"
                alt="arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
