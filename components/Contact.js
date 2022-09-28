import React from "react";
import MyBtn from "./MyButton";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col my-5 md:my-10 py-5 md:py-10">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          What People say about our company?{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          {" "}
          We will reply in the next 72 hours{" "}
        </p>
      </div>
      <form action="" method="POST" className="mx-auto md:w-3/4">
        <div className="flex flex-col justify-between text-left overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="my-2 md:my-auto mx-2 md:w-1/2">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    autoComplete="given-name"
                    placeholder="What's your name?"
                    required
                    className="mt-1 p-2 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm sm:text-sm border-cyan-300 rounded-sm"
                  />
                </div>

                <div className="my-2 md:my-auto mx-2 md:w-1/2">
                  <label
                    htmlFor="Email address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email address
                  </label>
                  <input
                    type="email"
                    name="Email address"
                    id="Email address"
                    autoComplete="email"
                    placeholder="Please enter your email address"
                    required
                    className="mt-1 p-2 focus:ring-turbo-yellow-500 focus:border-turbo-yellow-500 block w-full shadow-sm sm:text-sm border-turbo-yellow-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-8 mx-2 w-full">
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help you?
                </label>
                <div className="mt-1 mx-auto">
                  <textarea
                    id="Message"
                    name="Message"
                    rows={6}
                    className="shadow-sm w-full mt-1 p-2 block sm:text-sm rounded-sm"
                    placeholder="Please describe your request. Give us some details about your company "
                    defaultValue={""}
                    required
                  />
                </div>
                <p className="mt-1 text-xs italic text-gray-300">
                  Brief Message for your request*
                </p>
              </div>
            </div>
          </div>
          <div className="my-3 mx-auto ">
            <button type="submit" className="inline-flex justify-center">
              <MyBtn textContent="Let's Go!" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
