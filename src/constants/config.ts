type TSection = {
  p: string;
  h2: string;
  content?: string;
  content2?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    projectWork: TSection;
    Project: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Priya Kumari — 3D Portfolio",
    fullName: "Priya Kumari",
    email: "dbgpriyakumari@mail.com",
  },
  hero: {
    name: "Priya Kumari",
    p: ["I develop 3D visuals, user", "interfaces and web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a skilled software developer with expertise in TypeScript, JavaScript, and frameworks like React, Node.js, and Three.js. I create 3D models in Blender and integrate them into websites, using tools like GSAP and Tailwind CSS for seamless animations and responsive designs.`,

      content2:`I'm a quick learner and collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    projectWork: {
      p: "What I have done so far",
      h2: "My Projects",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it.`,
     content2:`It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`
    },
    Project: {
      p: "What I have done so far",
      h2: "My  Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it.`,
     content2:`It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it.`,
     content2:`It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
