// ══════════════════════════════════════════
// Abdul Wahid — Portfolio Data (Luxury Edition)
// ══════════════════════════════════════════

export const personalInfo = {
  name: "Abdul Wahid",
  tagline: "React Developer & Full Stack Engineer",
  roles: ["React Developer", "Full Stack Engineer", "MERN Stack Specialist", "Frontend Architect"],
  bio1:
    "Currently working as a React Developer at Synergic Professionals — a Jazz partner, contributing to enterprise-grade invoicing systems serving 10,000+ users.",
  bio2:
    "Results-driven Full Stack Engineer with 2+ years of industry experience building scalable, high-performance web applications across enterprise and startup environments. Graduated with the highest CGPA (3.89/4.00) in the Computer Science department at the University of Faisalabad — and a nominee for the Gold Medal.",
  bio3:
    "Deep expertise in the MERN Stack — React.js, Node.js, Express.js, and MongoDB. Proven ability to lead teams, mentor interns, and deliver production-ready projects on time.",
  location: "Faisalabad, Pakistan",
  email: "abdulwahidsheikh330@gmail.com",
  phone: "+92 300 766 4789",
  availability: "Available for Full-Time & Freelance Roles",
  linkedIn: "https://www.linkedin.com/in/abdul-wahid-qaiser-62a5b0324",
  github: "https://github.com/abdulwahidsheikh330",
  facebook: "https://www.facebook.com/share/18x5Vg9YS6/",
  instagram: "https://www.instagram.com/abdul_wahid_qaiser?igsh=ZHExMmE4ajAyeTJ3",
  cvUrl: "/CV/CV.pdf",
  profileImage: "/images/PortfolioImage.png",
  certImage: "/images/hero img 4.png",
  aboutImage: "/images/hero img 4.png",
};

export const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "K+", label: "Users Impacted" },
  { value: 3.89, suffix: "", label: "CGPA / 4.00", isDecimal: true },
  { value: 5, suffix: "+", label: "Projects Delivered" },
  { value: 3, suffix: "+", label: "Developers Mentored" },
  { value: 20, suffix: "%", label: "Load Time Reduced" },
];

export const education = [
  {
    period: "2018 – 2020",
    title: "Matriculation",
    institution: "Sandal College, Faisalabad",
    description:
      "Secured 88% marks in Matriculation. Built a strong foundation in analytical thinking and quantitative skills.",
    grade: "88%",
  },
  {
    period: "2020 – 2022",
    title: "Intermediate (FSC Pre-Engineering)",
    institution: "Aspie College, Faisalabad",
    description:
      "Secured 79% in FSC Pre-Engineering. Developed a deep interest in software engineering and web technologies.",
    grade: "79%",
  },
  {
    period: "2021 – 2026",
    title: "Bachelor of Computer Science",
    institution: "The University of Faisalabad",
    description:
      "Graduated with the highest CGPA in the department — 3.89/4.00. Nominee for Gold Medal. Final Year Research Project: Skill Swap (MERN barter platform).",
    grade: "3.89 / 4.00",
    highlight: "Gold Medal Nominee",
    iconName: "ph:trophy-bold",
  },
  {
    period: "June – Sep 2024",
    title: "Frontend Development Internship",
    institution: "CSOFT Systems",
    description:
      "Built responsive UIs using HTML5, CSS3, JavaScript, and Bootstrap. Collaborated with designers, product managers, and QA teams.",
    grade: "Certified",
    iconName: "ph:certificate-bold",
  },
  {
    period: "June 2026",
    title: "Advanced React Certification",
    institution: "Meta via Coursera",
    description:
      "Completed Meta's Advanced React certification covering hooks, performance optimization, and architectural patterns.",
    grade: "Certified",
    highlight: "Meta Certified",
    iconName: "ph:seal-check-bold",
  },
];

export const experience = [
  {
    company: "Synergic Professionals",
    badge: "Jazz Partner",
    role: "React Developer · Front-End Developer",
    period: "July 2025 – Present",
    description:
      "Contributing to the full software development lifecycle, specialising in building high-performance React applications for enterprise clients.",
    bullets: [
      "Reduced page load time by 20% on Zarr by Jazz through targeted component optimization and re-render reduction serving 10,000+ users",
      "Delivered multiple production projects: Zarr Invoicing System, Digikhata, Alterna, Invoicex",
      "Implemented reusable component libraries that reduced development time across projects",
      "Collaborated with cross-functional teams including designers, QA, and product managers",
    ],
    tech: ["React.js", "TypeScript", "Redux", "Material UI", "Node.js", "REST APIs"],
    isCurrent: true,
  },
  {
    company: "DevAmaze",
    badge: null,
    role: "Full Stack Developer · Senior Dev & Internee Manager",
    period: "Oct 2024 – June 2025",
    description:
      "Led end-to-end development of scalable web applications and managed a team of junior developers and interns.",
    bullets: [
      "Mentored 3+ junior developers and interns, overseeing code reviews and sprint delivery",
      "Architected and deployed full-stack features using MERN Stack across multiple client projects",
      "Bridged communication between technical teams and non-technical stakeholders",
      "Fostered a collaborative environment ensuring on-time delivery of scalable solutions",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    isCurrent: false,
  },
  {
    company: "CSOFT Systems",
    badge: null,
    role: "Frontend Development Intern",
    period: "June 2024 – Sep 2024",
    description:
      "Designed and developed responsive, user-centric interfaces as part of a structured internship program.",
    bullets: [
      "Built responsive UIs using HTML5, CSS3, JavaScript, and Bootstrap",
      "Collaborated with designers, product managers, and QA teams to ensure smooth delivery",
      "Gained hands-on experience with real-world project workflows and version control",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
    isCurrent: false,
  },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    iconName: "ph:desktop-bold",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    iconName: "ph:server-bold",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Flask", "FastAPI"],
  },
  {
    id: "database",
    label: "Database",
    iconName: "ph:database-bold",
    skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Oracle"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    iconName: "ph:cloud-bold",
    skills: ["AWS", "Azure", "GCP", "Firebase", "Docker", "CI/CD", "Netlify", "Vercel"],
  },
  {
    id: "testing",
    label: "Testing & Tools",
    iconName: "ph:wrench-bold",
    skills: ["Jest", "React Testing Library", "Git", "GitHub", "Postman", "Responsive Design"],
  },
];

export const services = [
  {
    iconName: "ph:code-bold",
    title: "React / MERN App Development",
    description:
      "Full-featured web applications built end-to-end with React.js, Node.js, Express.js, and MongoDB. From interactive dashboards to enterprise-grade systems — scalable, fast, and production-ready.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
  },
  {
    iconName: "ph:layout-bold",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, fully responsive UIs using React.js, Next.js, Tailwind CSS, Bootstrap, and Material UI. I turn Figma designs or ideas into smooth, performant interfaces that work on every screen size.",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    iconName: "ph:cpu-bold",
    title: "Backend & API Systems",
    description:
      "Robust REST APIs built with Node.js and Express.js, connected to MongoDB or MySQL. Includes JWT authentication, role-based access control, and clean architecture that scales.",
    tags: ["Node.js", "Express.js", "JWT", "REST APIs"],
  },
  {
    iconName: "ph:globe-bold",
    title: "Landing Pages & Portfolios",
    description:
      "High-converting landing pages and professional portfolio websites. Clean design, fast load times, SEO-optimised, and built to make a lasting first impression.",
    tags: ["Next.js", "SEO", "Responsive", "Performance"],
  },
];

export const projects = [
  {
    id: "skill-swap",
    title: "Skill Swap",
    subtitle: "Featured · Final Year Project · Full Stack",
    description:
      "A full-stack, barter-based skill exchange platform where creative professionals trade services without monetary transactions. Users list skills they offer and request, connecting with others for mutual collaboration.",
    image: "/images/SkillSwapProjectImage.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", "Bootstrap", "Netlify"],
    liveUrl: "https://devskillswap.netlify.app/",
    githubUrl: null,
    category: ["fullstack", "featured"],
    metrics: ["MERN Stack", "JWT Security", "P2P Barter"],
    isFeatured: true,
    isFYP: true,
  },
  {
    id: "tenda",
    title: "Tenda Technologies",
    subtitle: "Featured Project · Frontend",
    description:
      "Discover IT Excellence: A Web App for Showcasing Innovation. Experience the world of cutting-edge technology with this dynamic web app, designed to visualize one of the top IT companies in the industry.",
    image: "/images/project 1 tenda.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://abdulwahidsheikh330.github.io/tenda/",
    githubUrl: null,
    category: ["frontend"],
    isFeatured: false,
    isFYP: false,
  },
  {
    id: "rare-gloves",
    title: "Rare Gloves",
    subtitle: "Featured Project · Frontend",
    description:
      "A website for one of the most famous Gloves Company known as Rare Gloves. The company creates high-quality gloves for comfort and style.",
    image: "/images/project 2 rare gloves.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://abdulwahidsheikh330.github.io/Rare-Gloves/",
    githubUrl: null,
    category: ["frontend"],
    isFeatured: false,
    isFYP: false,
  },
  {
    id: "first-med",
    title: "First Med",
    subtitle: "Featured Project · Frontend",
    description:
      "A website for a medicinal company. The company keeps your health good by providing you the best and safest medicines for your sickness.",
    image: "/images/project 3 1st med.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://abdulwahidsheikh330.github.io/1st-med/",
    githubUrl: null,
    category: ["frontend"],
    isFeatured: false,
    isFYP: false,
  },
  {
    id: "report-form",
    title: "Report Form",
    subtitle: "Featured Project · Frontend",
    description:
      "A clean, professional report form for web portals. A well-structured template for displaying and organising data effectively.",
    image: "/images/project 4 report form.jpg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://abdulwahidsheikh330.github.io/Report-Form/",
    githubUrl: null,
    category: ["frontend"],
    isFeatured: false,
    isFYP: false,
  },
  {
    id: "internship-project",
    title: "CSOFT Internship Project",
    subtitle: "Internship Project · Frontend",
    description:
      "My first-ever project at my web internship at CSOFT SYSTEMS. Built a fully responsive modern UI following real-world project workflows.",
    image: "/images/project 5 internship.jpg",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://abdulwahidsheikh330.github.io/Internship/",
    githubUrl: null,
    category: ["frontend"],
    isFeatured: false,
    isFYP: false,
  },
];

export const certifications = [
  {
    iconName: "ph:trophy-bold",
    title: "Gold Medal Nominee",
    issuer: "The University of Faisalabad",
    date: "June 2026",
    description: "Nominated for the Gold Medal for achieving the highest CGPA (3.89/4.00) in the Computer Science department.",
    color: "amber",
  },
  {
    iconName: "ph:seal-check-bold",
    title: "Advanced React Certification",
    issuer: "Meta via Coursera",
    date: "June 2026",
    description: "Completed Meta's Advanced React certification covering hooks, performance optimization, testing, and architecture.",
    color: "teal",
    verifyUrl: "#",
  },
  {
    iconName: "ph:star-bold",
    title: "Highest Department CGPA",
    issuer: "The University of Faisalabad",
    date: "2021 – 2026",
    description: "Achieved CGPA of 3.89/4.00 — the highest in the entire Computer Science department at TUF across the graduating batch.",
    color: "amber",
  },
  {
    iconName: "ph:buildings-bold",
    title: "Enterprise Software Contributor",
    issuer: "Synergic Professionals (Jazz Partner)",
    date: "2025 – Present",
    description: "Contributing to production enterprise software — Zarr by Jazz — serving over 10,000 active users across Pakistan.",
    color: "teal",
  },
  {
    iconName: "ph:users-three-bold",
    title: "Senior Developer & Internee Manager",
    issuer: "DevAmaze",
    date: "Oct 2024 – June 2025",
    description: "Promoted to Senior Developer and Internee Manager within the organization, responsible for mentoring 3+ junior developers.",
    color: "teal",
  },
  {
    iconName: "ph:briefcase-bold",
    title: "Frontend Development Internship",
    issuer: "CSOFT Systems",
    date: "June – Sep 2024",
    description: "Completed a structured Frontend Development internship, earning recognition for delivering responsive, pixel-perfect UIs.",
    color: "amber",
  },
];
