import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_xlf7s7m",
          "template_nfzprvy",
          form.current,
          "fkzFwKAuGy8gNU_V2",
        )
        .then(
          () => {
            alert("Message Received, I will get back to you soon!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mx-auto w-full max-w-2xl">
      <div className="mt-5 flex flex-col items-center md:mt-24">
        <div className="w-full px-4 sm:px-0">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-8 w-full md:mb-0 md:mr-8 md:w-1/2">
              <label
                className="mb-2 block text-xl text-white"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                id="user_name"
                className="w-full border-b border-white bg-transparent pb-2 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
                name="user_name"
                placeholder="Enter Your Name"
                aria-label="Enter your name"
              />
            </div>

            <div className="w-full md:w-1/2">
              <label
                className="mb-2 block text-xl text-white"
                htmlFor="user_email"
              >
                Email Address
              </label>
              <input
                id="user_email"
                className="w-full border-b border-white bg-transparent pb-2 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
                type="email"
                name="user_email"
                placeholder="Enter Your Email Address"
                aria-label="Enter your email address"
              />
            </div>
          </div>

          <div className="mt-10">
            <label className="mb-2 block text-xl text-white" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full border-b border-white bg-transparent pb-2 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
              name="message"
              placeholder="Type your message here... Feel free to reach out or share your thoughts, questions, and feedback."
              aria-label="Type your message here"
            />
          </div>
        </div>
        <button
          className="mt-10 rounded-md border border-orange-300 bg-gradient-to-r from-orange-300 from-50% to-zinc-800 to-50% bg-[length:200%_100%] bg-right-bottom px-28 py-5 text-xl text-orange-300 transition-all duration-500 ease-out hover:bg-left-bottom hover:text-black"
          type="submit"
          value="Send"
        >
          Send ⟶
        </button>
      </div>
    </form>
  );
}
