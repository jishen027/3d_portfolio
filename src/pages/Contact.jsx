import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import CTA from "../components/CTA";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Jeb Lee",
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        showAlert(true, "Message sent successfully", "success");
        setTimeout(() => {
          setCurrentAnimation("walk");
          hideAlert();
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });
        showAlert(true, "Failed to send message", "error");
        setTimeout(() => {
          setCurrentAnimation("idle");
          hideAlert();
        }, 3000);
      });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  return (
    <section className="relative w-full min-h-screen pt-40 px-8 md:px-24 pb-24 bg-[#F2F2F2]">
      {alert.show && <Alert {...alert} />}

      <div className="flex lg:flex-row flex-col gap-16">
        {/* Left: Form */}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6 opacity-40 text-black">
            [ Communication Protocol ]
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-12 text-[#1A1A1A]">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-400">
              Touch.
            </span>
          </h1>

          <form className="space-y-8 max-w-md" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-black block">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-black transition-colors text-[#1A1A1A] placeholder:text-zinc-400 placeholder:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-black block">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-black transition-colors text-[#1A1A1A] placeholder:text-zinc-400 placeholder:text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-black block">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-black transition-colors resize-none text-[#1A1A1A] placeholder:text-zinc-400 placeholder:text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: 3D Fox */}
        <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* CTA Footer */}
      <hr className="border-t border-zinc-200 mt-16 mb-8" />
      <CTA />
    </section>
  );
};

export default Contact;
