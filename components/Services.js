import React, { useEffect, useState } from "react";
import { TbListDetails } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { HiRefresh } from "react-icons/hi";
import MyBtn from "./MyButton";
import Butter from "buttercms";

const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);

const Services = () => {
  const [services, setServices] = useState([]);

  const params = {
    page: "1",
    page_size: "10",
  };

  useEffect(() => {
    butter.content
      .retrieve(["service"], params)
      .then(function (resp) {
        // console.log(resp.data.data.service);
        setServices(resp.data.data.service);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  return (
    <div id="services" className="flex flex-col my-6 md:my-10 mx-2 md:mx-auto">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          How can we make your hiring job easier?{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          {" "}
          When you subscribe to our services, you build trust and increase{" "}
        </p>
      </div>
      <div className="flex flex-col md:mx-auto md:px-2 sm:grid sm:grid-cols-2 gap-4 mx-2 lg:grid-cols-3 justify-between">
        {services?.map((service, index) => (
          <div
            key={index}
            className="flex flex-col mx-auto p-4 rounded-xl shadow-lg hover:shadow-xl shadow-gray-200/75"
          >
            <img
              src={service.icon}
              alt="icon"
              className="p-2 h-16 w-16 md:h-20 md:w-20 text-6xl my-2 md:my-6 opacity-95 bg-turbo-pink-500 text-white rounded-full mx-auto"
            />
            <h1 className="font-bold text-xl md:text-3xl">{service.title}</h1>
            <p className="text-sm mx-auto w-2/3 font-light md:text-md my-2 md:my-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto my-6 md:my-10">
        <MyBtn textContent="Become a Customer" />
      </div>
    </div>
  );
};

export default Services;
