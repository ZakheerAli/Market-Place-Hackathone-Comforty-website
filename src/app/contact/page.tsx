"use client"
import Image from "next/image";
import { toast } from "react-toastify";
export default function Contact() {
  const notify = () => {
    toast.success("Message Sent Successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="px-6 md:px-12 lg:px-24 py-12 bg-gradient-to-b from-[#F0F2F3] to-[#68afb6] min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 text-lg mt-3">
          Have any questions? Reach out to us, and we will get back to you soon!
        </p>

        <div className="flex flex-col lg:flex-row mt-10 gap-10">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/Vector.png"
                alt="Address"
                width={20}
                height={20}
                className="w-6 h-8"
              />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/email1.jpg"
                alt="Email"
                width={20}
                height={20}
                className=" w-9 h-9"
              />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">contact@yourcompany.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/Vector (1).png"
                alt="Phone"
                width={20}
                height={20}
                className="w-8 h-8"
              />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+1 123 456 7890</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-zinc-200 shadow-md rounded-xl p-6">
          {/* <ContactForm/> */}
            <form
              action="https://formspree.io/f/mzzdgadk"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here..."
                  rows={4}
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
              onClick={notify}
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

