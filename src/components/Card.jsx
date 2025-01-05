import React, { useState } from "react";

const Card = ({ id, name, description, image }) => {
  const [readMore, setReadMore] = useState(false);
  const info = readMore ? description : `${description.substring(0, 100)}...`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="flex flex-col shadow-md w-full max-h-max m-[1rem] p-[1rem] rounded-lg">
      <img src={image} alt={name} className="aspect-square object-cover" />
      <div className="my-5 mx-1 text-2xl">{name}</div>
      <div>
        {info}
        <span
          onClick={readMoreHandler}
          className="text-[#1230e8] cursor-pointer"
        >
          {readMore ? "read less" : "read more"}
        </span>
      </div>
    </div>
  );
};

export default Card;
