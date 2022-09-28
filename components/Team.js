import React, { useEffect, useState } from "react";
import Butter from "buttercms";

const butter = Butter(`${process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY}`);

const Team = () => {
  const [members, setMembers] = useState([]);

  const params = {
    page: "1",
    page_size: "10",
  };

  useEffect(() => {
    butter.content
      .retrieve(["team_member"], params)
      .then(function (resp) {
        // console.log(resp.data.data.team_member);
        setMembers(resp.data.data.team_member);
      })
      .catch(function (resp) {
        console.log(resp);
      });
  }, []);

  return (
    <div id="team" className="flex flex-col bg-gray-100/50 py-2 md:py-6">
      <div className="flex flex-col mx-auto">
        <h1 className="font-bold text-3xl md:text-5xl md:w-2/3 mx-auto">
          Our team{" "}
        </h1>
        <p className="text-md mx-auto w-2/3 font-light md:text-lg my-2 md:my-6">
          {" "}
          When you subscribe to our services, you build trust and increase{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {members?.map((member, index) => (
          <div key={index} className="flex mx-auto my-4 md:my-6 flex-col">
            <img
              src={member.profile_image}
              alt="profile picture"
              className="rounded-full border-2 object-cover h-28 w-28 md:w-36 md:h-36 mx-auto"
            />
            <div>
              <h2 className="text-sm text-center md:text-md font-semibold my-auto">
                {member.name}
              </h2>
              <p className="text-xs md:text-sm font-medium text-center">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
