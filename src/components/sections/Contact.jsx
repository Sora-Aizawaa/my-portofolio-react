import { useState } from "react";

import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import SocialButton from "../ui/SocialButton";

import socialData from "../../data/socialData";

import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi dulu
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("✅ Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <SectionTitle title="Contact Me" subtitle="Let's Work Together" />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* FORM */}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            outline-none
            focus:border-cyan-400
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            outline-none
            focus:border-cyan-400
            "
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/5
            p-4
            outline-none
            focus:border-cyan-400
            "
          />

          <Button disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* SOCIAL */}

        <div>
          <h3 className="mb-6 text-3xl font-bold">Let's Connect</h3>

          <p className="mb-8 text-gray-400">
            Feel free to reach out for collaborations, freelance work, or just
            to say hello.
          </p>

          <div className="flex gap-5">
            {socialData.map((item) => (
              <SocialButton key={item.id} icon={item.icon} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
