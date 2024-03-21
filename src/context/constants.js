import { banner1, data1, data2, data3 } from "@/assets/images";
import { TfiTrello } from "react-icons/tfi";

export const navLink = [
  { label: "EVENTRY", link: "/" },
  { label: "ABOUT US", link: "/about" },
];

export const bannerList = [
  {
    imgURL: banner1,
    alt: "banner1",
    header: "EVENTRY",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const eventryList = [
  {
    id: "1",
    date: "06/23/2023",
    imgURL: data1,
    title: "Title of the eventry",
    location: "KLCC, kuala-lupur, Malaysia",
    time: "7:00 pm - 8:00 pm",
    context:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "2",
    date: "05/07/2023",
    imgURL: data2,
    title: "Title of the eventry",
    location: "KLCC, kuala-lupur, Malaysia",
    time: "7:00 pm - 8:00 pm",
    context:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "3",
    date: "09/10/2023",
    imgURL: data3,
    title: "Title of the eventry",
    location: "KLCC, kuala-lupur, Malaysia",
    time: "7:00 pm - 8:00 pm",
    context:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const getMonth = (date) => {
  // Parse timestamp
  var dateParts = date.split("/");
  var month = parseInt(dateParts[0], 10);
  // var day = parseInt(dateParts[1], 10);
  // var year = parseInt(dateParts[2], 10);

  // Get month name
  var monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return monthNames[month - 1];
};

export const getDay = (date) => {
  // Parse timestamp
  var dateParts = date.split("/");
  // var month = parseInt(dateParts[0], 10);
  var day = parseInt(dateParts[1], 10);
  // var year = parseInt(dateParts[2], 10);

  return (day < 10 ? "0" : "") + day;
};
