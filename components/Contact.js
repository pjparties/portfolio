import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export const KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
export const SERVICE = process.env.NEXT_PUBLIC_SERVICE;
export const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE, TEMPLATE_ID, form.current, KEY).then(
      
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-light_front dark:text-fore">
          Contact Me !
        </h2>
        <p className="mb-8 lg:mb-16 text-center text-light_mid2 dark:text-pale sm:text-xl">
          Have a question ? Get in touch with me{" "}
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-mid1 dark:border-earth dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label
              type="text"
              name="e_subject"
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="e_subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-mid1 dark:border-earth dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how i can help"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              name="message"
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-mid1 dark:border-earth dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your feedback is highly appreciated.."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm font-medium text-center bg-light_mid2 text-mid1 dark:bg-mid2 dark:text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
