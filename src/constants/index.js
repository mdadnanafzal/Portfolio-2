
import project1 from "../assets/projects/cv.png";
import project2 from "../assets/projects/keeper app.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/flappy.png";

export const HERO_CONTENT = `I am Md Adnan Afzal, a dedicated Computer Science and Systems Engineering undergraduate from Kalinga Institute of Industrial Technology, with a strong foundation in data structures, algorithms, and software development. My academic journey, coupled with hands-on experience in developing web applications, games, and AI-driven projects, reflects my passion for technology and problem-solving.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for building innovative and user-friendly web applications. As a Computer Science and Systems Engineering undergraduate, I have worked with a variety of technologies, including React.js, Node.js, MySQL, and TensorFlow, while also gaining experience in cloud computing and machine learning.

My journey in technology began with a curiosity for problem-solving, and it has grown into a career path where I constantly seek to learn and embrace new challenges. I thrive in collaborative environments and enjoy crafting scalable solutions that make a real-world impact. Outside of coding, I explore new technologies, participate in coding challenges, and contribute to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Sentimental Analysis using CV- Minor Projec",
    image: project1,
    description:
      "Created a Windows voice assistant that predicts user sentiment from facial expressionsm to recommend music.Utilized the FER 2013 dataset, categorizing 5,600 facial expressions into seven distinct categories. Integrated emotion detection, speech recognition, and text-to-speech for capturing and vocalizing user commands. Performed web searches, accessed Wikipedia, sent emails via voice typing, and ran sentiment analysis using computer vision. Combined tools like text-to-speech, voice detection, computer vision, large language models, and machine learning. ",
    technologies: ["Python", "PyTorch", "Keras", "CNN", "Computer Vision"],
  },
  {
    title: "Keeper App",
    image: project2,
    description:
      "Developed a note-taking web application using React to manage dynamic note creation and deletion functionalities.Implemented state management with React hooks like useState for real-time data handling. Utilized Material-UI components for an interactive and user-friendly interface, including icons, buttons, and animations. Designed modular and reusable components like Header, Footer, Note, and CreateArea to enhance scalability. Applied HTML and CSS for responsive design, ensuring cross-browser compatibility. Focused on component-based architecture to enable efficient updates and maintainability. ",
    technologies: ["HTML", "CSS", "JavaScript", "JSX"],
  },
  {
    title: "Bellabeat Business Analysis – Google Analytic Capstone Project",
    image: project3,
    description:
      "Analyzed Health Tracker data from 30 Bellabeat users. Including over 1,000 records of daily activity, sleep patterns, and stress levels. Imported and cleaned multiple datasets including daily activity, calories, intensities, steps, sleep, and weight logs. Grouped participants by activity intensity and visualized the distribution of activity levels. The analysis sought to understand user behavior and find ways to improve Bella Beat’s product and marketing strategy. Utilized R language, visualization techniques, storytelling techniques, and data presentation skills.",
    technologies: ["SQL", "R", "TableAu", "BigQuery"],
  },
  {
    title: "Flappy-Bird Game",
    image: project4,
    description:
      "Developed a browser-based game using HTML, CSS, and JavaScript with dynamic gameplay and score tracking. Designed responsive UI and integrated animations and audio for an immersive gaming experience. Implemented modular JavaScript code for obstacle generation, collision detection, and scalability. Created seamless visuals and interactions using modern web development technologies. Enhanced user engagement with interactive gameplay mechanics and responsive design. Managed version control and collaborative development using GitHub",
    technologies: ["HTML", "CSS", "JavaScript", "JSX", "Git"],
  },
];

export const CONTACT = {
  address: "KIIT Road, Patia, Bhubaneshwar",
  phoneNo: "+91 7205387401",
  email: "mdadnanafzal6@gmail.com",
};
