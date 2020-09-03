import React from "react";

let projects = {
  names: {
    TRP: {
      github: "https://github.com/IainMcHugh/tallaghtrehabilitationproject",
      logo:
        "https://github.com/IainMcHugh/tallaghtrehabilitationproject/blob/master/src/images/full_logo.png?raw=true",
      live: "https://iainmchugh.github.io/tallaghtrehabilitationproject",
      desktopMobile: true,
      description:
        "An extensive Website created for the Tallaght Rehabiliation Center using ReactJS.",
      status: "(Under Development)",
    },
    OpenWeatherAPI: {
      github: "https://github.com/IainMcHugh/axonista_technical_test",
      logo:
        "https://github.com/IainMcHugh/axonista_technical_test/blob/master/src/images/newLogo2.png?raw=true",
      live: "https://iainmchugh.github.io/axonista_technical_test/",
      desktopMobile: true,
      description:
        "Weather Application that uses caching, geolocation, and API requests to provide visual weather data for both the users location and searched locations. Designed in ReactJS with Unit Tests",
      status: "(Complete)",
    },
    Covid19Tracker: {
      github: "https://github.com/IainMcHugh/corona-tracker",
      logo:
        "https://github.com/IainMcHugh/corona-tracker/blob/master/src/images/covidLogo.png?raw=true",
      live: "https://iainmchugh.github.io/corona-tracker/",
      desktopMobile: true,
      description:
        "Web Application for visualising Covid19 statistics using an API",
      status: "(Complete)",
    },
    HungryFrontend: {
      github: "https://github.com/IainMcHugh/Hungry-Frontend",
      logo:
        "https://github.com/IainMcHugh/Hungry-Frontend/blob/master/src/images/gitLogo2.PNG?raw=true",
      live: "#",
      desktopMobile: true,
      description:
        "Fullstack project aimed at bringing restaurant menus online, as well as providing a CMS for restaurants",
      status: "(Under Development)",
    },
    HungryBackend: {
      github: "https://github.com/IainMcHugh/Hungry-Backend",
      logo:
        "https://github.com/IainMcHugh/Hungry-Frontend/blob/master/src/images/gitLogo.PNG?raw=true",
      live: "#",
      desktopMobile: true,
      description:
        "Fullstack project aimed at bringing restaurant menus online, as well as providing a CMS for restaurants",
      status: "(Under Development)",
    },
    Clymbr: {
      github: "https://github.com/IainMcHugh/clymbr-app",
      logo:
        "https://github.com/IainMcHugh/clymbr-app/blob/master/app/src/main/ic_launcher_clymbr-web.png?raw=true",
      live:
        "https://play.google.com/store/apps/details?id=com.clymbra.clymbralpha",
      desktopMobile: false,
      description:
        "Android app that provides a visual mapping of climbing gyms and allows climbers to track the progress of their climbs",
      status: "(Complete)",
    },
    MWLoadouts: {
      github: "https://github.com/IainMcHugh/mwloadouts",
      logo:
        "https://github.com/IainMcHugh/mwloadouts/blob/master/lib/assets/Logo2.png?raw=true",
      live:
        "https://play.google.com/store/apps/details?id=com.iainmchugh.mwloadouts",
      desktopMobile: false,
      description:
        "Flutter app that allows users to recreate their Call of Duty Weapon Classes down to each individual attachment. Can search and share Classes with friends",
      status: "(Complete)",
    },
    VidQuiz: {
      github: "https://github.com/IainMcHugh/VidQuiz",
      logo:
        "https://github.com/IainMcHugh/VidQuiz/blob/master/images/youtubequiz.png?raw=true",
      live: "#",
      desktopMobile: true,
      description:
        "A simple quiz site that allows users to create and complete quizzes of their favourite Youtube videos, designed entirely with PHP/SQL",
      status: "(Complete)",
    },
    Programa: {
      github: "https://github.com/IainMcHugh/Programa",
      logo:
        "https://github.com/IainMcHugh/Programa/blob/master/src/images/program-fitness.png?raw=true",
      live: "https://iainmchugh.github.io/programa/",
      desktopMobile: true,
      description:
        "Expansive Web Application that allows users to create, schedule, and complete workouts, tracking their sets, reps, and weights used. Designed with TypeScript/Firebase",
      status: "(Complete)",
    },
  },
  technologies: {
    html: [
      "TRP",
      "OpenWeatherAPI",
      "Covid19Tracker",
      "HungryFrontend",
      "VidQuiz",
      "Programa",
    ],
    css: ["TRP", "Covid19Tracker", "HungryFrontend", "VidQuiz", "Programa"],
    javascript: [
      "TRP",
      "OpenWeatherAPI",
      "Covid19Tracker",
      "HungryFrontend",
      "Programa",
    ],
    jquery: [],
    reactjs: ["TRP", "OpenWeatherAPI", "Covid19Tracker", "HungryFrontend"],
    typescript: ["Programa"],
    androidsdk: ["Clymbr"],
    flutter: ["MWLoadouts"],
    nodejs: ["HungryBackend"],
    php: ["VidQuiz"],
    sql: ["VidQuiz"],
    firebase: ["Clymbr", "MWLoadouts", "Programa"],
    mongodb: ["HungryBackend"],
    scss: ["OpenWeatherAPI"],
    "@material-ui": ["OpenWeatherAPI", "Covid19Tracker", "MWLoadouts"],
    apis: ["OpenWeatherAPI", "Covid19Tracker"],
  },
};

export default projects;
