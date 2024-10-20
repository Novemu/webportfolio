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
    <form ref={form} onSubmit={sendEmail}>
      <div className="mt-24 flex flex-col items-center justify-between">
        <div>
          <div className="flex">
            <div className="mr-24 flex flex-col text-white has-[:focus]:text-orange-300">
              <label className="mb-2 self-start text-xl">Name</label>
              <input
                className="border-b border-white bg-transparent pb-2 pr-20 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
                name="user_name"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="flex flex-col text-white has-[:focus]:text-orange-300">
              <label className="mb-2 self-start text-xl">Email Adress</label>
              <input
                className="border-b border-white bg-transparent pb-2 pr-20 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
                type="email"
                name="user_email"
                placeholder="Enter Your Email Adress"
              />
            </div>
          </div>

          <div className="mt-14 flex flex-col text-white has-[:focus]:text-orange-300">
            <label className="mb-2 self-start text-xl">Your Message</label>
            <textarea
              className="border-b border-white bg-transparent pb-2 pr-20 text-xl caret-orange-300 focus:border-orange-300 focus:placeholder-transparent focus:outline-none"
              name="message"
              placeholder="Type your message here... Feel free to reach out or share your thoughts, questions, and feedback."
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
