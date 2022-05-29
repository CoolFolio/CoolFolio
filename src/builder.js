/* Imports */
import avatar from "./assets/img/avatar.jpg";
import DummyImage from "./assets/img/square.png";
import ConvHat from "./assets/svgs/conv-hat.svg";
import SocialSvg from "./assets/svgs/socials.svg";
/* Imports */

/* Variables */
const Name = "Jareer";
/* Variables */

/* Functions & Logic */
const GalleryArray = [];
for (let i = 0; i < 4; i++) {
  GalleryArray.push({
    image: `https://raw.githubusercontent.com/BloxSafe/Frontend/main/bin/${i}.jpg`,
  });
}
/* Functions & Logic */

/* Config */
export default {
  website: {
    title: `${Name}'s Portfolio`,
  },
  theme: {
    color: "royal",
  },
  me: {
    firstName: Name,
    lastName: "Abdullah",
    about: "I'm a full-stack Javascript, Typescript, PHP and Lua developer.",
    avatar: {
      rotateOnHover: true,
      scaleOnHover: true,
      glowOnHover: true,
      src: avatar,
    },
    age: 14,
    skills: {
      boxes: [
        {
          title: "Javascript",
          description:
            "I've been using Javascript the most since i started coding. Javscript is my primary language that's why you see on top.",
        },
      ],
      data: [
        { name: "Javascript", percent: 95 },
        { name: "PHP", percent: 90 },
        { name: "HTML", percent: 80 },
        { name: "CSS", percent: 30 },
        { name: "Vue.js", percent: 60 },
        { name: "Typescript", percent: 75 },
        { name: "Python", percent: 50 },
      ],
    },
    projects: [
      {
        name: "CoolFolio",
        description: `🚀 Premade portfolio website for developers and online-creators.`,
        buttons: [
          {
            target: "_blank",
            isHyper: true,
            text: "Github",
            url: "https://github.com/CoolFolio/CoolFolio",
            themeColor: true,
          },
          {
            text: "Live Preview",
            url: "#",
            onClick() {
              setTimeout(() => {
                alert(`You are already on the preview site, monkey :)`);
              }, 50);
            },
          },
        ],
      },
      {
        name: "BloxSafe",
        target: "_blank",
        isHyper: true,
        //    image: BloxSafeImage,
        description: `🚀 Dashboard to manage your Roblox scripts.`,
        buttons: [
          {
            target: "_blank",
            isHyper: true,
            text: "Live Preview",
            url: "https://bs.jubot.site/",
          },
          {
            target: "_blank",
            isHyper: true,
            text: "Github",
            url: "https://github.com/BloxSafe",
            themeColor: true,
          },
        ],
      },
      {
        name: "Discord Bot Panel",
        description: `🎉 Manage your discord bots and node.js scripts with a web panel.`,
        buttons: [
          {
            target: "_blank",
            isHyper: true,
            text: "Live Preview",
            url: "https://server.jubot.site/",
          },
          {
            target: "_blank",
            isHyper: true,
            text: "Github",
            url: "https://github.com/jareer12/discordbotpanel",
            themeColor: true,
          },
        ],
      },
    ],
  },
  gallery: {
    data: GalleryArray,
  },
  navBox: {
    boxes: [
      {
        icon: ConvHat,
        url: "/#projects",
        name: "My Projects",
      },
      {
        icon: SocialSvg,
        url: "/#repositories",
        name: "Repositories",
      },
      // Without Icons
      {
        url: "/#skills",
        name: "Skills",
      },
      {
        url: "/#gallery",
        name: "Gallery",
      },
    ],
  },
  socials: {
    github: {
      username: `${Name}12`.toLowerCase(), // Example, Efficient Usage of variables :)
      stats: {},
    },
  },
  elements: {
    projects: {
      id: "projects",
    },
    repositories: {
      id: "repositories",
    },
    skills: {
      id: "skills",
    },
    gallery: {
      id: "gallery",
    },
  },
};
/* Config */
