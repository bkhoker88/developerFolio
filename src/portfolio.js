/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Benny Khoker",
  title: "Hi there, I'm Benny Khoker",
  subTitle: emoji(
    "Coming from the world of construction, from building homes and public schools to building tech stacks. I have been able to apply my attention to detail and an analytical lens to my tech stacks in order to facilitate a better user experience. I'm a passionate Full Stack Software Developer with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other libraries and frameworks Check out some of my projects below"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1lfWMtv22tT0ixK_m8zYzcHgnS87d_FIN/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bkhoker88",
  linkedin: "https://www.linkedin.com/in/benny-khoker/",
  gmail: "Bkhoker88@gmail.com",
  facebook: "https://www.facebook.com/benny.khoker/",
  medium: "https://medium.com/@bennykhoker",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Who is Benny?",
  subTitle:
    "A FULL STACK DEVELOPER WHO WANTS EXPLORE EVERY TECH STACK TO REACH OPTIMAL EFFICIENCY WHILE CONSTANLY TRYING AND LEARNING NEW THINGS",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces for your applications"
    ),
    emoji("⚡ Progressive Web Applications "),
    emoji(
      "⚡ Beautifully designed code for easy understanding and effectiveness"
    ),
    emoji("⚡ Integration of third party services such as Firebase/ AWS "),
    emoji("⚡ Testing for optimization")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fullstack Academy",
      logo: require("./assets/images/Fullstack.png"),
      subHeader: "17-Week Full Stack JavaScript Web Development Immersive",
      duration: " Graduated April 2021",
      desc:
        "Fullstack Academy is a top-ranked immersive school for tech training",
      descBullets: [
        "completed 550+ hours of full-stack web development coursework",
        "Developed fullstack applications",
        "Managed Projects with teams of four to gain working team experiance",
        "Explored tecnologies in gaming, machine learning, data analytics, and many more"
      ]
    },
    {
      schoolName: "SUNY University At Albany",
      logo: require("./assets/images/Albany.png"),
      subHeader: "Bachelor of Science in Economics",
      duration: "Graduated December 2017",
      desc:
        "University at Albany—SUNY is a public institution that was founded in 1844",
      descBullets: [
        "Took courses about software engineering, statistics, math, micro and macro economics, data analytics, computer science and many more...",
        "Studied Economics to gain an analytical and data driven lens to identify trends and explore otimization and efficency",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experienc

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Manager",
      company: "Do Rite Mechanical Corp.",
      companylogo: require("./assets/images/DRM.png"),
      date: "February 2018 - March 2020",
      desc:
        "Managed public project build-outs during a two year period with project values ranging from $15k to $790k.",
      descBullets: [
        "Participated in proposals, estimating, scheduling, resource allocation, and document management to ensure specification based execution of public projects on schedule.",
        "Maintained relationships and information distribution with clients, subcontractors, and suppliers."
      ]
    },
    {
      role: "Project Coordinator",
      company: "E.B.S Construction,",
      companylogo: require("./assets/images/EBS.jpg"),
      date: "June 2013 – January 2018",
      desc: "Lead Project Coordinator",
      descBullets: [
        "Managed teams onsite and facilitated communications between project teams and outside clients.",
        "Developed and maintained accurate and complete files for private sites and projects."
      ]
    }
    // {
    //   role: "",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Projects created to show different abilities in full stack development",
  projects: [
    {
      image: require("./assets/images/outerview.png"),
      projectName: "OuterView",
      projectDesc:
        "OuterView utilizes facial and speech recognition to quantify and visualize your observable mannerisms.",

      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.outerview.xyz"
        },
        {
          name: "Github",
          url: "https://github.com/2101capstone/OuterView"
        },
        {
          name: "Presentation video",
          url: "https://www.youtube.com/watch?v=4bs31n8uNF0"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Memeazon.png"),
      projectName: "Memeazon",
      projectDesc:
        "MEMAZON is a mock e-commerce site designed to sell fun and useful memes. Users can create account and browse through products. They can add and delete products to their cart.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://meme-azon.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/Cloud-s-Canaries/GraceShopper"
        }
      ]
    },
    {
      image: require("./assets/images/REST.png"),
      projectName: "RESTful web platfrom",
      projectDesc:
        "Used Express to handle HTTP requests and Sequelize to interface with database, used React, Redux and React-Redux on the front-end, managed connected components through the Redux store, Used Thunks to encapsulate side-effect (such as AJAX requests)",
      footerLink: [
        {
          name: "View Video",
          url: "https://youtu.be/5uaeivjGLfg"
        },
        {
          name: "Github",
          url: " https://github.com/bkhoker88/2101-FSA-RM-WEB-FT-JPFP"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "One of the best ways to learn is to teach what you understand",

  blogs: [
    {
      url:
        "https://bennykhoker.medium.com/pros-and-cons-of-using-reactjs-f4dc3a778447",
      title: "Pros And Cons Of Using ReactJS",
      description:
        "ReactJS is extremely popular for a reason. It’ s fast, simple and easy to scale. But, you have to keep its pros and cons in mind when creating your next project."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open to everyone.",
  number: "1-917-459-4789",
  email_address: "Bkhoker88@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
