import parse from "html-react-parser";

import { getDay, getMonth } from "@/context/constants";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const EventryGrid = ({ data, eventryURL }) => {
  const [img, setImg] = useState("");
  data.url.then(function (result) {
    setImg(result);
  });
  return (
    <div className="flex shadow-md flex-col rounded-lg w-[400px] text-slate-500 my-10 mx-4">
      <div className="w-full relative">
        <div className="absolute left-0 top-0 bg-white p-2 opacity-80">
          <p className="font-semibold uppercase text-lg">
            {getMonth(data.date)}
          </p>
          <hr className="my-2 h-1 w-6 bg-slate-500" />
          <h2 className="font-bold text-5xl">{getDay(data.date)}</h2>
        </div>
        <img
          className="object-cover w-full max-sm:h-[180px] h-[240px] rounded-t-lg"
          src={img}
          alt="data.title"
        />

        <h2 className="absolute left-0 bottom-0 bg-white w-full font-bold text-xl opacity-85 px-4 py-2">
          {data.title}
        </h2>
      </div>
      <div className="leading-normal w-full p-4">
        <p>{data.location}</p>
        <p>{data.time}</p>
        <p className="mt-2 text-gray-400 h-[45px] line-clamp-2">
          {parse(data.context)}
        </p>
        <hr className="sm:mt-4 sm:mb-2 mt-4 mb-2 h-1 " />
        <Link
          to={`eventry/${data.id}`}
          className="flex justify-start items-center gap-4"
        >
          <p>View Eventry Details</p>
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default EventryGrid;
