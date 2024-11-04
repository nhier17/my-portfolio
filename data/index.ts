export const navItems = [
    { name: "About", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "My Approach", link: "/approach"},
    { name: "Contact", link: "/contacts" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
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
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a podcaster application with OpenAI",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
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
      title: "Care Pulse",
      des: "Care Pulse is a comprehensive healthcare patient management system designed to streamline and enhance the patient experience. This application allows patients to effortlessly register, book, and manage their appointments with doctors. It features administrative tools for healthcare providers, enabling efficient scheduling, confirmation, and cancellation of appointments. Additionally, the system offers SMS notifications to keep patients informed about their appointments. Built with Next.js, TypeScript, Tailwind CSS, and Appwrite, Care Pulse prioritizes a seamless user experience and efficient management processes.",
      img: "/care.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.svg", "/fm.svg"],
      link: "https://care-pulse-io.vercel.app/",
      slug: "care-pulse"
    },
    {
      id: 2,
      title: "Talk the Talk",
      des: "Discover talk the talk, an AI powered application designed to revolutionize podcast creation. Leveraging the power of OpenAI, users can effortlessly generate high-quality podcasts and custom thumbnails.",
      img: "/talk.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.svg", "/fm.svg"],
      link: "https://talk-the-talk.vercel.app/",
      slug: "talk-the-talk"
    },
    {
      id: 3,
      title: "My Fitness App",
      des: "My Fitness offers a comprehensive platform to track your workouts, monitor your progress, and stay motivated on your fitness journey. Whether you're a beginner or a seasoned athlete, our app provides personalized workout plans tailored to your fitness level and goals. With intuitive features such as exercise logging, calorie tracking, and progress analytics, you'll have everything you need to optimize your training and transform your body. Join our community today and take the first step towards a healthier, stronger you!.",
      img: "/p2.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/stream.svg", "/c.svg"],
      link: "https://my-fitness17.netlify.app/",
      slug: "my-fitness-app"
    },
    {
      id: 5,
      title: "Money Wave",
      des: "MoneyWave is a comprehensive financial management app designed to streamline user interactions with their bank accounts and transactions. The app leverages Plaid's API for secure and efficient account linking, enabling users to access and manage their financial data in real time.",
      img: "/moneywave.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/appwrite.svg", "/gsap.svg"],
      link: "https://moneywave.vercel.app/",
      slug: "money-wave"
    },
    {
      id: 6,
      title: "PitchHub",
      des: "Pitch Hub is a platform designed to help entrepreneurs, innovators, and startup enthusiasts create, refine, and share their startup pitches. It offers a user-friendly interface to build engaging pitches, receive feedback, and connect with a network of mentors, investors, and fellow entrepreneurs.",
      img: "/pitch.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/Sanity.svg"],
      link: "https://pitch-hub.vercel.app/",
      slug: "pitch-hub"
    },
    {
      id: 7,
      title: "Shoppers Paradise",
      des: "Discover a world of endless shopping possibilities with Shoppers Paradise. Our free and open-source mobile app is your ultimate shopping companion, providing a seamless experience to explore and track your favorite products.",
      img: "/p4.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/gsap.svg"],
      link: "https://shoppers-paradise.netlify.app/",
      slug: "shoppers-paradise"
    },
    {
      id: 8,
      title: "HireHub",
      des: "HireHub is a dynamic and interactive LinkedIn-inspired full-stack application built with Python Flask and React. Designed to simulate a professional networking platform, HireHub enables users to explore job opportunities, connect with other professionals, and share career updates within an engaging interface",
      img: "/hh.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/c.svg"],
      link: "https://hirehub17.vercel.app",
      slug: "hire-hub"
    },
    {
      id: 9,
      title: "Share Me",
      des: "Share Me is a full-stack social media application built using Sanity and React, offering users a platform to share images and engage with other users through comments. With Share Me, users can create posts, upload images, and interact with content from other users through a seamless and intuitive interface. Whether you're sharing your latest adventures, expressing your creativity, or connecting with friends and like-minded individuals, Share Me provides a dynamic and vibrant space for social interaction. Join the community today and start sharing your world with Share Me!",
      img: "/shareme.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Sanity.svg", "/gsap.svg"],
      link: "https://share-me17.netlify.app/",
      slug: "share-me"
    },
    {
      id: 10,
      title: "Movie Streams",
      des: "A ReactJS application that grants users access to a curated collection of movies and TV shows fetched from TheMovieDB API. Immerse yourself in a Netflix-like experience with this inspired project.",
      img: "/movies2.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg", "/three.svg", "/gsap.svg"],
      link: "https://movies-streams.netlify.app/",
      slug: "movie-streams",
    }, 
    {
      id: 11,
      title: "Games Tracker",
      des: "Games tracker is a free, open-source, mobile app that helps you keep track of your favorite games.",
      img: "/games.png",
      iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
      link: "https://games-tracker-17.netlify.app/",
      slug: "games-tracker"
    }
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Abraham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abraham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abraham is the ideal partner.",
      name: "Dennis Njenga",
      title: "Senior Software Engineer Safaricom",
    },
    {
      quote:
        "Collaborating with Abraham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abraham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abraham is the ideal partner.",
      name: "Dennis Njenga",
      title: "Senior Software Engineer Safaricom",
    },
    {
      quote:
        "Collaborating with Abraham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abraham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abraham is the ideal partner.",
      name: "Dennis Njenga",
      title: "Senior Software Engineer Safaricom",
    },
    {
      quote:
        "Collaborating with Abraham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abraham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abraham is the ideal partner.",
      name: "Dennis Njenga",
      title: "Senior Software Engineer Safaricom",
    },
    {
      quote:
        "Collaborating with Abraham was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Abraham's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Abraham is the ideal partner.",
      name: "Dennis Njenga",
      title: "Senior Software Engineer Safaricom",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Contributed to the development of a dynamic web platform using React.js. Enhanced user interactivity and engagement through the implementation of interactive UI components and state management.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      desc: "Led the end-to-end development of web applications with a tech stack comprising React.js, Node.js, and PostgreSQL. Designed and implemented RESTful APIs, ensured robust user authentication and authorization, and optimized database queries for improved performance and scalability.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Developer",
      desc: "Spearheaded the development of a mobile application for a client, overseeing the project from initial concept through to deployment on both iOS and Android app stores. Delivered a user-centric design and seamless functionality, meeting all client specifications and deadlines.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Led the frontend development team in creating and maintaining user-facing features for web applications. Utilized modern frontend technologies to ensure responsive, high-performance, and accessible user interfaces. Collaborated closely with designers and backend developers to deliver cohesive and high-quality products.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];