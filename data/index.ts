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
      title: "Fanikiwa",
      des: "Fanikiwa is a Full Stack Interview Personal Assistant Platform powered by a Real-Time AI Voice Agent. It utilizes Vapi with Gemini for voice-driven interview simulations, providing instant feedback. Built with Next.js 15, Firebase, and Tailwind CSS 4, the platform offers seamless authentication, personalized interview questions, and an intuitive user experience.",
      subdesc: "Your smart companion for mastering interviews with confidence",
      img: "/videos/fanikiwa.mp4",
      logo: "/logo/fanikiwa.png",
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spottlight: "/spotlight/spotlight2.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/appwrite.svg", "/images/fm.svg"],
      link: "https://fanikiwa.vercel.app",
    },
    {
      id: 2,
      title: "Care Pulse",
      des: "Care Pulse is a comprehensive healthcare patient management system designed to streamline and enhance the patient experience. This application allows patients to effortlessly register, book, and manage their appointments with doctors. It features administrative tools for healthcare providers, enabling efficient scheduling, confirmation, and cancellation of appointments. Additionally, the system offers SMS notifications to keep patients informed about their appointments. Built with Next.js, TypeScript, Tailwind CSS, and Appwrite, Care Pulse prioritizes a seamless user experience and efficient management processes.",
      subdesc: "A robust healthcare app facilitating appointment booking and management with ease.",
      img: "/videos/care-pulse.mp4",
      logo: "/logo/carepulse-logo.png",
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spottlight: "/spotlight/spotlight1.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/appwrite.svg", "/images/fm.svg"],
      link: "https://care-pulse-io.vercel.app/",
    },
    {
      id: 3,
      title: "Talk the Talk",
      des: "Discover talk the talk, an AI powered application designed to revolutionize podcast creation. Leveraging the power of OpenAI, users can effortlessly generate high-quality podcasts and custom thumbnails.",
      subdesc: "AI-powered platform for seamless podcast creation.",
      img: "/videos/talk.mp4",
      logo: "/logo/talk-logo.svg",
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spottlight: "/spotlight/spotlight2.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/appwrite.svg", "/images/fm.svg"],
      link: "https://talk-the-talk.vercel.app/",
    },
    {
      id: 4,
      title: "My Fitness App",
      des: "My Fitness offers a comprehensive platform to track your workouts, monitor your progress, and stay motivated on your fitness journey. Whether you're a beginner or a seasoned athlete, our app provides personalized workout plans tailored to your fitness level and goals. With intuitive features such as exercise logging, calorie tracking, and progress analytics, you'll have everything you need to optimize your training and transform your body. Join our community today and take the first step towards a healthier, stronger you!.",
      subdesc: "A fitness app to track workouts and monitor progress effectively.",
      img: "/videos/my-fitness.mp4",
      logo: "/logo/myfitness-logo.png",
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spottlight: "/spotlight/spotlight3.png",  
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/js.svg", "/images/stream.svg", "/images/c.svg"],
      link: "https://my-fitness17.netlify.app/",
    },
    {
      id: 5,
      title: "Money Wave",
      des: "MoneyWave is a comprehensive financial management app designed to streamline user interactions with their bank accounts and transactions. The app leverages Plaid's API for secure and efficient account linking, enabling users to access and manage their financial data in real time.",
      subdesc: "Financial app for secure and real-time account management.",
      img: "/videos/moneywave.mp4",
      logo: "/logo/moneywave-logo.svg",
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spottlight: "/spotlight/spotlight4.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/appwrite.svg", "/images/gsap.svg"],
      link: "https://moneywave.vercel.app/",
    },
    {
      id: 6,
      title: "Storify",
      des: "Storify is a modern storage management and file sharing platform designed for effortless file organization and collaboration. Built with Next.js 15, Appwrite Node SDK, and a cutting-edge tech stack, Storify provides an intuitive and secure way to upload, organize, and share files across devices.",
      subdesc: "A file-sharing platform for seamless collaboration and storage.",
      img: "/videos/storify.mp4",
      logo: "/logo/storify-logo.jpg",
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spottlight: "/spotlight/spotlight5.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/appwrite.svg"],
      link: "https://storify-io.vercel.app/",
    },
    {
      id: 7,
      title: "PitchHub",
      des: "Pitch Hub is a platform designed to help entrepreneurs, innovators, and startup enthusiasts create, refine, and share their startup pitches. It offers a user-friendly interface to build engaging pitches, receive feedback, and connect with a network of mentors, investors, and fellow entrepreneurs.",
      subdesc: "Platform to refine and share impactful startup pitches.",
      img: "/videos/pitch-hub.mp4",
      logo: "/logo/pitchhub-logo.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight3.png",
      iconLists: ["/images/next.svg", "/images/tail.svg", "/images/ts.svg", "/images/Sanity.svg"],
      link: "https://pitch-hub.vercel.app/",
    },
    {
      id: 8,
      title: "Shoppers Paradise",
      des: "Discover a world of endless shopping possibilities with Shoppers Paradise. Our free and open-source mobile app is your ultimate shopping companion, providing a seamless experience to explore and track your favorite products.",
      subdesc: "Shopping companion app for tracking and exploring products.",
      img: "/videos/shoppers.mp4",
      logo: "/logo/shoppers-logo.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight2.png",
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/js.svg", "/images/three.svg", "/images/gsap.svg"],
      link: "https://shoppers-paradise.netlify.app/",
    },
    {
      id: 9,
      title: "HireHub",
      des: "HireHub is a dynamic and interactive LinkedIn-inspired full-stack application built with Python Flask and React. Designed to simulate a professional networking platform, HireHub enables users to explore job opportunities, connect with other professionals, and share career updates within an engaging interface.",
      subdesc: "LinkedIn-inspired platform for professional networking and job exploration.",
      img: "/videos/hirehub.mp4",
      logo: "/logo/hirehub-logo.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight5.png",
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/js.svg", "/images/three.svg", "/images/c.svg"],
      link: "https://hirehub17.vercel.app",
    },
    {
      id: 10,
      title: "Share Me",
      des: "Share Me is a full-stack social media application built using Sanity and React, offering users a platform to share images and engage with other users through comments. With Share Me, users can create posts, upload images, and interact with content from other users through a seamless and intuitive interface. Whether you're sharing your latest adventures, expressing your creativity, or connecting with friends and like-minded individuals, Share Me provides a dynamic and vibrant space for social interaction. Join the community today and start sharing your world with Share Me!",
      subdesc: "A social media app for sharing images and engaging with other users.",
      img: "/videos/shareme.mp4",
      logo: "/logo/shareme-logo.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight4.png",
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/ts.svg", "/images/Sanity.svg", "/images/gsap.svg"],
      link: "https://share-me17.netlify.app/",
    },
    {
      id: 11,
      title: "Movie Streams",
      des: "A ReactJS application that grants users access to a curated collection of movies and TV shows fetched from TheMovieDB API. Immerse yourself in a Netflix-like experience with this inspired project.",
      subdesc: "A movie streaming app for accessing a curated collection of movies and TV shows.",
      img: "/videos/movies.mp4",
      logo: "/logo/movie-logo.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight1.png",
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/js.svg", "/images/three.svg", "/images/gsap.svg"],
      link: "https://movies-streams.netlify.app/",
    }, 
    {
      id: 12,
      title: "Games Tracker",
      des: "Games tracker is a free, open-source, mobile app that helps you keep track of your favorite games.",
      subdesc: "A mobile app for tracking your favorite games.",
      img: "/videos/game.mp4",
      logo: "/logo/ignite.png",
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spottlight: "/spotlight/spotlight3.png",
      iconLists: ["/images/re.svg", "/images/tail.svg", "/images/js.svg"],
      link: "https://games-tracker-17.netlify.app/",
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
      img: "/images/cloud.svg",
      nameImg: "/images/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/images/app.svg",
      nameImg: "/images/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/images/host.svg",
      nameImg: "/images/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/images/s.svg",
      nameImg: "/images/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/images/dock.svg",
      nameImg: "/images/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Total Fitness Connection",
      desc: "Built a comprehensive gym management platform using Next.js and PostgreSQL, streamlining membership tracking and improving operational efficiency by 30%. Led the end-to-end development of a client-facing fitness app, boosting user engagement by 25% through intuitive design and performance optimization.",
      className: "md:col-span-2",
      thumbnail: "/images/exp1.svg",
    },
    {
      id: 2,
      title: "Freelance App Developer",
      company: "FreeLance",
      desc: "Developed Sensei Factory for a client, a scalable course hosting platform enabling educators to create, manage, and deliver interactive online courses. Integrated secure authentication, intuitive UI, and user management features, streamlining virtual learning and improving instructor-student collaboration.",
      className: "md:col-span-2",
      thumbnail: "/images/exp3.svg",
    },
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/images/git.svg",
      link: "https://github.com/nhier17",
    },
    {
      id: 2,
      img: "/images/twit.svg",
      link: "https://twitter.com/nhier17",
    },
    {
      id: 3,
      img: "/images/link.svg",
      link: "https://www.linkedin.com/in/nhier",
    },
  ];

  export const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  export const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Satisfied Clients" },
    { value: 50, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
  ];
  
  export const techStackIcons = [
    {
      name: "Frontend Development",
      imgSrc: ["/images/re.svg", "/images/next.svg", "/images/js.svg", "/images/ts.svg" ],
    },
    {
      name: "Backend Development",
      imgSrc: ["/images/python.svg", "/images/node.svg"],
    },
    {
      name: "Serverless Frameworks",
      imgSrc: ["/images/appwrite.svg", "/images/drizzle.svg", "/images/firebase.svg", "/images/supabase.svg"],
    },
    {
      name: "UI Styling & Components",
      imgSrc: ["/images/tail.svg", "/images/shadcnui.svg", "/images/gsap.svg"],
    },
    {
      name: "Database Management",
      imgSrc: ["/images/postgresql.svg", "/images/mongodb.svg", "/images/mysql.svg"],
    },
    {
      name: "Design",
      imgSrc: ["/images/figma.svg"],
    },
    {
      name: "Version Control",
      imgSrc: ["/images/git.svg"],
    },
  ];

  export const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  