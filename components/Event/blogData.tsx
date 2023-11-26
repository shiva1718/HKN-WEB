import { Event } from "@/types/event";

const blogData: Event[] = [
  {
    id: 1,
    title: "Event 1",
    paragraph:
      "On September 29, 2023, the IEEE HKN Nu Eta Chapter was inaugurated at Sri Sairam Engineering College in Chennai, India. The ceremony began with a prayer song and the lighting of the Kuthuvilakku. Dr. Sai Prakash Leo Muthu, Chairman & CEO of Sairam Institutions, gave the welcome address, followed by felicitation of the Chief Guests. Mr. Sampathkumar Veeraraghavan, Global President of IEEE Eta Kappa Nu and 2023 IEEE HTB Partnership Chair, delivered a keynote address on the role of IEEE HKN in shaping the future of technology. Dr. Prokumaran, Chairman IEEE Madras Section and Principal, Sri Sairam Engineering College, gave a special address on the importance of establishing HKN chapters. The highlight of the ceremony was the induction of the IEEE HKN Nu Eta Founding Members. A fireside chat with IEEE Global Leaders followed, with a discussion on the role of IEEE in advancing technology for the betterment of society, the challenges and opportunities in the field of engineering, and the importance of global collaboration in technological advancement.",
    image: "/images/events/02.jpg",
    venue: {
      name: "Sigma Stadium",
      image: "/images/events/location-icon.jpg",
      location: "Sri Sairam Engineering College, Chennai, Tamil Nadu",
    },
    tags: ["computer"],
    publishDate: "September 29th 2023",
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
    publishDate: "November 3rd 2023",
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
export default blogData;
