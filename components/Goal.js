import React, { useEffect, useState } from "react";
import Butter from "buttercms";

const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);

const Goal = () => {
  const [goal, setGoal] = useState({});

  useEffect(() => {
    butter.page
      .retrieve("*", "home-page")
      .then(function (resp) {
        console.log(resp.data.data.fields.goal);
        setGoal(resp.data.data.fields.goal);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  return (
    <div className="bg-gray-100/50 rounded-sm my-10 py-0 md:px-6 flex flex-col md:flex-row justify-between">
      <img src={goal?.goal_image} alt="goal img" className="md:w-2/4 my-auto" />

      <div className="flex flex-col justify-center my-auto p-6 md:w-3/5">
        <h5 className="text-gray-600 text-md md:my-4 font-semibold">
          {goal?.text}
        </h5>
        <h3 className="font-bold text-2xl md:text-4xl my-4">
          {goal?.great_description}
        </h3>
      </div>
    </div>
  );
};

export default Goal;
