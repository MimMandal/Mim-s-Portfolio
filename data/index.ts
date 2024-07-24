export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume/resume.pdf" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I emphasize working closely with clients, ensuring transparent and effective communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Skills",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Technology enthusiast with a strong passion for Web development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building My skills on JS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to discuss ideas?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Weather Web ",
    des: "Enjoy a visually engaging interface with animated weather icons powered by GSAP, and a responsive design that ensures a seamless experience on any device.",
    img: "/p1.jpg",
    iconLists: ["/css.svg", "/js.svg", "/gsap.svg"],
    link: "https://mimmandal.github.io/weather-web/",
  },
  {
    id: 2,
    title: "Brainwave UI/UX",
    des: "Embrace cutting-edge UI trends like bento grids and modern gradients. Enjoy a fully responsive design for flawless performance across all devices, with a focus on maintainable and scalable code architecture.",
    img: "/p2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/vite.svg", "/re.svg"],
    link: "https://brainwaveai-nu.vercel.app/",
  },
  {
    id: 3,
    title: "Snake Game",
    des: "Developed a classic Snake game using Canvas API and JavaScript. The game features smooth gameplay, increasing difficulty levels, and a scoring system..",
    img: "/p3.png",
    iconLists: ["/css.svg", "/html.svg", "/js.svg"],
    link: "https://github.com/MimMandal/Snake-game",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    des: "Developed an e-commerce platform with a custom-built front-end and back-end system. Experience with intuitive navigation and responsive design.",
    img: "/p4.jpg",
    iconLists: ["/boots.svg", "/css.svg", "/js.svg", "/gsap.svg", "/mng.svg"],
    link: "https://github.com/MimMandal/Shoe-ping-E-commerce",
  },
];

export const testimonials = [
  {
    quote:
      "It is my pleasure to commend Mim Mandal for his exemplary skills as a web developer. His attention to detail, creativity, and commitment to excellence have consistently impressed me. Mim's proficiency in the latest web technologies and user-centric design makes him an invaluable asset to any team. I am confident that his talents will continue to drive innovation and success in all his future endeavors.",
    name: "Gaurav Sharma",
    title:
      "President of the Institution’s Innovation Council at GTBIT,GGSIPU, \nIntern @times internet ",
    profilePhoto: "/t1.jpg", // Add profilePhoto
  },
  {
    quote:
      "I am delighted to endorse Mim Mandal for his exceptional web development skills. His unique creativity and expertise in cutting-edge web technologies make him a valuable asset to any team. Mim's talents are sure to lead to continued success in all his future endeavors.",
    name: "Virat Chauhan",
    title: "Vice-President of the Nexus Club at GTBIT,GGSIPU, \nSwe Intern",
    profilePhoto: "/t2.jpg", // Add profilePhoto
  },
  // {
  //   quote: "b",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profilePhoto: "/app.svg", // Add profilePhoto
  // },
  // {
  //   quote: "c",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profilePhoto: "/ts.svg", // Add profilePhoto
  // },
  // {
  //   quote: "d",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  //   profilePhoto: "/ts.svg", // Add profilePhoto
  // },
];



export const workExperience = [
  {
    id: 1,
    title: "Management Lead, Institution's Innovation Council (IIC)",
    desc: "Managed several tech fests, leading a team of volunteers. Collaborated with society leads to bring valuable insights to the student community. Managed students and faculties, ensuring smooth execution of events and initiatives.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Coding Competitions",
    desc: "Participated in various coding competitions at college. Enhanced problem-solving skills and knowledge in competitive programming. Honed abilities in algorithms and data structures.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Member, Nexus Club",
    desc: "Active member of the Nexus Club, an AI-based society. Engaged in various AI projects and activities, contributing to the development and implementation of innovative AI solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/MimMandal",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/Mim_Mandal", // Add the appropriate link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mim-mandal-07m07/ ", // Add the appropriate link
  },
];
