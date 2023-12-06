import { Event } from "@/types/event";

const eventData: Event[] = [
  {
    id: 1,
    title: "Nu Eta Chapter Inauguration",
    paragraph:
      "SEC IEEE HKN Nu Eta Chapter Inauguration Ceremony",
    image: "/images/events/02.jpg",
    venue: {
      name: "Sigma Stadium",
      image: "/images/events/location-icon.jpg",
      location: "Sri Sairam Engineering College, Chennai, Tamil Nadu",
    },
    tags: ["computer"],
    date: "September 29th 2023",
  },
  {
    id: 2,
    title: "Field Exploration & Household Survey",
    paragraph:
        "On November 3, 2023, the members of IEEE HKN Nu Eta Chapter, along with members of Sairam Unnat Bharat Abhiyan, conducted a village survey to one of the adopted villages of Sri Sairam Engineering College, Varadharajapuram. The students were divided into teams and conducted a survey of the village people, identifying all the societal and communal problems they faced. The primary purpose of this survey was to provide engineering and technological solutions to these problems and implement those projects after receiving funding from IEEE. Implementing these projects will be highly beneficial to the village residents.",
    image: "/images/events/event1.jpg",
    venue: {
      name: "Adopted Village",
      image: "/images/events/location-icon.jpg",
      location: "Varadharajapuram, Tamil Nadu",
    },
    tags: [""],
    date: "November 3rd 2023",
  },
  // {
  //   id: 3,
  //   title: "Event 3",
  //   paragraph:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
  //   image: "/images/events/events-03.jpg",
  //   author: {
  //     name: "Lethium Deo",
  //     image: "/images/events/author-03.png",
  //     designation: "Graphic Designer",
  //   },
  //   tags: ["design"],
  //   publishDate: "2025",
  // },
];
export default eventData;
