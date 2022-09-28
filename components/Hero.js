import React, { useEffect, useState } from "react";
import MyBtn from "./MyButton";
import Butter from "buttercms";

const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);

const Hero = () => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    butter.page
      .retrieve("*", "home-page")
      .then(function (resp) {
        // console.log(resp.data.data.fields.hero_section);
        setHero(resp.data.data.fields.hero_section);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center my-5 md:my-8"
    >
      <div className="flex flex-col my-auto md:w-2/3">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-4xl md:text-6xl">
            {hero?.great_title}
          </h1>
          <p className="text-sm mx-auto w-2/3 font-light md:text-md my-2 md:my-6">
            {hero?.description}
          </p>
        </div>
        <div className="mx-auto hover:cursor-pointer">
          <MyBtn textContent={hero?.call_to_action_text} />
        </div>
      </div>
      <img
        src={hero?.hero_image}
        alt="hero image"
        loading="lazy"
        className="invisible md:visible my-auto md:w-2/3"
      />
    </div>
  );
};

export default Hero;
