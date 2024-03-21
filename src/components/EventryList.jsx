import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db, eventryStorage } from "@/config/firebase/config";
import { useState } from "react";
import { getStorage, ref, deleteObject } from "firebase/storage";

import { FaArrowRightLong } from "react-icons/fa6";
import { getDay, getMonth } from "@/context/constants";
import { BsThreeDots } from "react-icons/bs";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const deleteEvent = async (id, img) => {
  console.log(img);
  await deleteDoc(doc(db, "eventry", id)).then(
    deleteObject(ref(eventryStorage, img))
      .then(() => {
        console.log("file deleted");
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

const EventryList = ({ data }) => {
  const [img, setImg] = useState("");
  data.url.then(function (result) {
    setImg(result);
  });

  return (
    <div className="relative flex max-sm:flex-col max-sm:gap-4 justify-between items-start gap-12 text-slate-500 border-b-2 border-slate-300 py-8 w-full">
      <div className="absolute top-4 right-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <BsThreeDots className="w-6 h-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
            <DropdownMenuItem>
              <button
                className="text-red-600 cursor-pointer"
                onClick={() => deleteEvent(data.id, img)}
              >
                DELETE
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="max-sm:flex max-sm:gap-2 max-sm:items-center">
        <p className="font-semibold uppercase text-lg">{getMonth(data.date)}</p>
        <hr className="my-2 h-1 w-6 bg-slate-500" />
        <h2 className="font-bold text-5xl">{getDay(data.date)}</h2>
      </div>
      <div className="sm:w-[40%] w-full">
        <img
          className="object-cover w-full max-sm:h-[180px] h-[240px] "
          src={img}
          alt="data.title"
        />
      </div>
      <div className="leading-normal sm:w-[60%] w-full">
        <h2 className="font-bold text-xl mb-2">{data.title}</h2>
        <p>{data.location}</p>
        <p>{data.time}</p>

        <p className="mt-4 h-[90px] line-clamp-3">{parse(data.context)}</p>
        <hr className="sm:mt-6 sm:mb-4 mt-4 mb-2 h-1 " />
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

export default EventryList;
