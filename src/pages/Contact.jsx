import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <div className=" flex justify-center ">
      <div className=" h-2/4 w-5/6 rounded-4xl m-10  flex flex-col gap-10 p-5 justify-center items-center  bg-white/5 backdrop-blur-sm border border-white/20 shadow-xl">
        <h2 className="text-4xl font-bold mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-0.5">
          Have a question or want to work together? Drop a message below!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-center flex-row gap-4">
              <Mail className="text-blue-400" />
              <a href="mailto:shaikbajimastan3@gmail.com">
                shaikbajimastan3@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <a href="tel:7993519558">+91 7993519558</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <form
            className="space-y-6"
            action="https://formspree.io/f/mldnllod"
            method="POST"
          >
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              name="Message"
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
