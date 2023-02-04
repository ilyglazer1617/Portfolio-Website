import hakatonImg from "./images/hakatonMain.jpg";
import socialMedia from "./images/socialMedia.png";
import resume from "./images/resumeMain.jpg";
import ping from "./images/pingMain.jpg";
import course from "./images/courseMain.jpg";
import calc from "./images/calcMain.jpg";
export const products = [
  {
    id: 1,
    title: "Social media App",
    img: socialMedia,
    link: "https://github.com/ilyglazer1617/Social-Media",
    desc: "A full-stack social media application built using Node.js, Express, MongoDB, React, and Socket.io. The application features a REST API for managing user information and includes a functional, user-friendly interface using React functional components and hooks. The app also includes a real-time chat system, allowing users to connect with one another in private or group conversations. User authentication is secured with encrypted passwords and email addresses, ensuring the privacy of sensitive information. With its powerful features and intuitive design, this app provides a seamless, enjoyable social media experience for its users. User For example : email: rockandRoll@gmail.com , password:123456789",
  },
  {
    id: 1.5,
    title: "Course management system",
    img: course,
    link: "https://github.com/ilyglazer1617/code-academy",
    desc: "Course leads application with a SQL database containing three tables: users, subjects, and courses.",
  },
  {
    id: 2,
    title: "wedding planning site",
    img: hakatonImg,
    link: "https://stately-yeot-b0f6eb.netlify.app",
    desc: "This project was made in 24 hours during an hakaton contest, two months after I began studying coding. the admin code is :nadavANDily, Click on one of the Finances to see the feature  ",
  },
  {
    id: 3,
    title: "Resume maker project",
    img: resume,
    link: "https://bejewelled-arithmetic-1d0179.netlify.app",
    desc: "This project was created to set the need for resume maker in my class.  The project is composed of two primary components: the design and styling, utilizing the Bootstrap library, and the implementation of basic React hooks and forms. With this project, users can create their resume with ease and style it to their liking. Upon completion, users can also download their CV in PDF format for free, making it easily accessible for job applications or personal use.",
  },
  {
    id: 4,
    title: "A basic maze game (Vanilla JS)",
    img: ping,
    link: "https://github.com/ilyglazer1617/maze-game",
    desc: "A basic maze game with conditions otherwise disqualifying and returning to the beginning ",
  },
  {
    id: 4,
    title: "Calculator (Vanilla JS)",
    img: calc,
    link: "https://github.com/ilyglazer1617/Calculator",
    desc: " Calculator is a web-based application that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator has an input area where users can enter numbers and select operations. The result is displayed below the input area after users press the '=' button.",
  },
];
