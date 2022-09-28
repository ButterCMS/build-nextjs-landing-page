import React, { useEffect, useState } from "react";
import Butter from "buttercms";

const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  const params = {
    page: "1",
    page_size: "10",
  };

  useEffect(() => {
    butter.content
      .retrieve(["testimonial"], params)
      .then(function (resp) {
        // console.log(resp.data.data.testimonial);
        setTestimonials(resp.data.data.testimonial);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  return (
    <div id="testimonials" className="flex flex-col my-4 md:my-8">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          What People say about our company?{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          {" "}
          When you subscribe to our services, you build trust and increase{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:px-8">
        {testimonials?.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col w-36 md:w-52 mx-auto my-3 md:my-6"
          >
            <div className="flex flex-row justify-center gap-2">
              <img
                src={testimonial.profile_image}
                alt="profile picture"
                loading="lazy"
                className="rounded-full border-2 border-turbo-pink-400 object-cover h-8 w-8 md:h-18 md:w-18 my-auto"
              />
              <h2 className="text-sm md:text-md font-semibold my-auto">
                {testimonial.name}
              </h2>
            </div>
            <p className="p-2 text-justify text-xs italic md:text-md font-medium">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
