import { Event } from "@/types/event";

const eventData: Event[] = [
  {
    id: 1,
    title: "SEC IEEE HKN Nu Eta Chapter Inauguration Ceremony",
    paragraph:
      "On September 29, 2023, the IEEE HKN Nu Eta Chapter was inaugurated at Sri Sairam Engineering\n" +
        "                      College in Chennai, India. The ceremony began with a prayer song and the lighting of the\n" +
        "                      Kuthuvilakku. Dr. Sai Prakash Leo Muthu, Chairman & CEO of Sairam Institutions, gave the welcome\n" +
        "                      address, followed by felicitation of the Chief Guests. Mr. Sampathkumar Veeraraghavan, Global\n" +
        "                      President of IEEE Eta Kappa Nu and 2023 IEEE HTB Partnership Chair, delivered a keynote address on\n" +
        "                      the role of IEEE HKN in shaping the future of technology. Dr. Prokumaran, Chairman IEEE Madras\n" +
        "                      Section and Principal, Sri Sairam Engineering College, gave a special address on the importance of\n" +
        "                      establishing HKN chapters. The highlight of the ceremony was the induction of the IEEE HKN Nu Eta\n" +
        "                      Founding Members. A fireside chat with IEEE Global Leaders followed, with a discussion on the role\n" +
        "                      of IEEE in advancing technology for the betterment of society, the challenges and opportunities in\n" +
        "                      the field of engineering, and the importance of global collaboration in technological advancement.",
    cover_image: "/images/events/1/cover-image.jpg",
    main_image: "/images/events/1/inauguaration.jpg",
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
        "On November 3, 2023, the members of IEEE HKN Nu Eta Chapter, along with members of Sairam Unnat Bharat Abhiyan, conducted a village survey to one of the adopted villages of Sri Sairam Engineering College, Varadharajapuram. The students were divided into teams and conducted a survey of the village people, identifying all the societal and communal problems they faced. The primary purpose of this survey was to provide engineering and technological solutions to these problems and implement those projects after receiving funding from IEEE. Implementing these projects will be highly beneficial to the village residents.",
    cover_image: "/images/events/2/event1.jpg",
    main_image: "/images/events/2/event2-main.jpg",
    venue: {
      name: "Adopted Village",
      image: "/images/events/location-icon.jpg",
      location: "Varadharajapuram, Tamil Nadu",
    },
    tags: [""],
    date: "November 3rd 2023",
  },
];
export default eventData;
