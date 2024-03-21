import { useState } from "react";
import { v4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { db, eventryStorage } from "@/config/firebase/config";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const Post = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [img, setImg] = useState(null);
  const [context, setContext] = useState("");

  const resetForm = () => {
    setTitle("");
    setTime("");
    setDate("");
    setImg(null);
    setContext("");
  };

  const eventryRef = collection(db, "eventry");

  // upload to firestore
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    const imgId = v4();
    e.preventDefault();
    const imgRef = ref(eventryStorage, `eventry/${imgId}`);

    const metadata = {
      contentType: "image/jpeg",
    };

    setIsLoading = true;
    try {
      await addDoc(eventryRef, {
        title: title,
        time: time,
        date: date,
        img: imgId,
        context: context,
      });
      uploadBytes(imgRef, img, metadata);
    } catch (error) {
      console.log(error);
    } finally {
      resetForm();
      setIsLoading = false;
    }
  };

  return (
    <div className="container w-[80%] py-32">
      <h1 className="text-2xl mb-12 font-bold  text-center">
        Post the eventry
      </h1>
      <form method="post" className="flex flex-col gap-8">
        <label
          htmlFor="title"
          className="flex justify-start items-center gap-6 w-full"
        >
          <p className="font-semibold text-lg">Title</p>
          <input
            id="title"
            type="text"
            className="px-4 py-2 border border-slate-500 rounded-sm w-full"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label htmlFor="date" className="flex justify-start items-center gap-6">
          <p className="font-semibold text-lg">Date</p>
          <input
            id="date"
            type="text"
            className="px-4 py-2 border border-slate-500 rounded-sm w-full"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>

        <label htmlFor="time" className="flex justify-start items-center gap-6">
          <p className="font-semibold text-lg">Time</p>
          <input
            id="time"
            type="text"
            className="px-4 py-2 border border-slate-500 rounded-sm w-full"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        <label
          htmlFor="imgInput"
          className="flex justify-start items-center gap-6"
        >
          <p className="font-semibold text-lg">Image</p>
          <input
            id="imgInput"
            type="file"
            className="cursor-pointer"
            onChange={(e) => setImg(e.target.files[0])}
            required
          />
        </label>
        <label htmlFor="context" className="h-full mb-12">
          <ReactQuill
            id="context"
            style={{ height: "320px" }}
            theme="snow"
            value={context}
            onChange={(value) => setContext(value)}
          />
        </label>
        <button
          className={`bg-teal-500 py-2 rounded-md ${isLoading && "disabled"}`}
          onClick={handleSubmit}
        >
          {!isLoading ? "Submit" : "Loading"}
        </button>
      </form>
    </div>
  );
};

export default Post;
