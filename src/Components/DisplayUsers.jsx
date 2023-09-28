import React from "react";

function DisplayUsers(props) {
    const {avatar, email,first_name, last_name, employment: {title}, address: {city, state, country} }= props.data
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={avatar}
              alt="Avatar"
              className="h-2/4 flex mx-auto"
            />
            <h3 className="text-lg font-semibold py-2"><span className="text-base font-thin">Name </span><br />{`${first_name} ${last_name}`}</h3>
            <p className="text-base"><span className="text-base font-thin">Job Title </span><br /> {title}</p>
          </div>
          <div className="flip-card-back">
            <h1><span className="text-base font-thin">Email </span><br />{email}</h1>
            <p><span className="text-base font-thin">State </span><br /> {state}</p>
            <p><span className="text-base font-thin">Country </span><br /> {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayUsers;
