import { useEffect, useState } from "react";

import { db, eventryStorage } from "@/config/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

import Banner from "@/components/Banner";
import EventryGrid from "@/components/EventryGrid";
import EventryList from "@/components/EventryList";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const Home = () => {
  const [toggleLayout, setToggleLayout] = useState("list");
  const [eventryList, setEventryList] = useState([]);

  const eventryRef = collection(db, "eventry");

  const getEventryList = async () => {
    try {
      const data = await getDocs(eventryRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        url: handleGetImg(doc.data().img),
      }));
      setEventryList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetImg = async (img) => {
    const eventryImgRef = ref(eventryStorage, "eventry");
    const postRef = ref(eventryImgRef, img);
    return await getDownloadURL(postRef)
      .then((imgUrl) => {
        return imgUrl;
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            return "File doesn't exist";
          case "storage/unauthorized":
            return "User doesn't have permission to access the object";
          case "storage/canceled":
            return "User canceled the upload";
          case "storage/unknown":
            return "Unknown error occurred, inspect the server response";
        }
      });
  };

  useEffect(() => {
    getEventryList();
  }, []);

  return (
    <>
      <Banner />
      <main className="container mx-auto">
        <div className="w-full text-slate-600 border-b-2 border-slate-300 py-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Upcoming Eventries</h2>
          <div className="flex gap-8 items-center">
            <button
              onClick={() => setToggleLayout("list")}
              className={`flex flex-col items-center justify-center ${
                toggleLayout === "list" && "text-teal-500"
              }`}
            >
              <TfiLayoutListThumb className="w-6 h-6" />
              <span>List</span>
            </button>
            <button
              onClick={() => setToggleLayout("grid")}
              className={`flex flex-col items-center justify-center ${
                toggleLayout === "grid" && "text-teal-500"
              }`}
            >
              <TfiLayoutGrid2 className="w-6 h-6" /> <span>Grid</span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap">
          {toggleLayout == "list"
            ? eventryList.map((eventry) => (
                <EventryList key={eventry.id} data={eventry} />
              ))
            : eventryList.map((eventry) => (
                <EventryGrid key={eventry.id} data={eventry} />
              ))}
        </div>
      </main>
    </>
  );
};

export default Home;
