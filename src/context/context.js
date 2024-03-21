import { db } from "@/config/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const eventryRef = collection(db, "eventry");

export const getEventryList = async () => {
  try {
    const data = await getDocs(eventryRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    console.log(error);
  }
};

// const imgRef = ref(storage, "");
