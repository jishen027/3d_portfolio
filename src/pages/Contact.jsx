import React, { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../models/Fox";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

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
        // TODO: To hide alert
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
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="your name"
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black-500 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="your email"
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black-500 font-semibold">Message</label>
          <textarea
            name="message"
            className="textarea"
            rows={4}
            placeholder="your message"
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
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
    </section>
  );
};

export default Contact;
