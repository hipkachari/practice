import React from "react";
import about from "../assets/about.png";

function Contact() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex  flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-[#309797] w-full max-w-6xl p-8 rounded-xl shadow lg text-white">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-white">Contact Us</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vero
              cumque reprehenderit minima atque nemo adipisci reiciendis tempore
              quidem iusto.
            </p>
          </div>
          <div>
            <img src={about} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:ml-6">
          <form
            action="https://formspree.io/f/myyqzvoz"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <div>
              <label htmlFor="" className="text-sm">
                Your Name
              </label>

              <input
                type="text"
                name="username"
                placeholder="Your name"
                autoComplete="off"
                required
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
              />
            </div>
            <div>
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                name="Message"
                placeholder="Message"
                rows={6}
                cols={30}
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block self-end bg-cyan-500 rounded-lg text-white font-bold px-6 py-2 uppercase text-sm"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
