import { Project, Internship, Education, SkillCategory, Certification, Service } from "./types";

export const PERSONAL_INFO = {
  name: "Dharsan S",
  title: "Computer Science Engineering Student | Full Stack Java Developer | UI/UX Designer",
  roles: [
    "Full Stack Java Developer",
    "UI/UX Designer",
    "Web Developer",
    "Software Engineer"
  ],
  location: "Coimbatore, Tamil Nadu, India",
  email: "dharshan9856@gmail.com",
  phone: "+91 9123522567",
  about: "I am a motivated Computer Science and Engineering student with hands-on experience in Full Stack Java Development and UI/UX Design. I have practical exposure to backend development, database management, REST APIs, user-centered design, wireframing, and responsive web development. My passion lies in creating innovative digital products that combine strong functionality with exceptional user experience. I enjoy solving complex problems, learning emerging technologies, and contributing to impactful software projects.",
  githubUsername: "dharsan-s"
};

export const ACHIEVEMENTS = [
  { label: "Projects Completed", value: "5+", count: 5 },
  { label: "Internships Done", value: "2+", count: 2 },
  { label: "Certifications", value: "1+", count: 1 },
  { label: "Skills Mastered", value: "15+", count: 15 }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    institution: "SNS College of Technology",
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    duration: "2023 – 2027",
    performance: "CGPA: 78%",
    icon: "GraduationCap"
  },
  {
    institution: "Ponnu Matric Higher Secondary School",
    degree: "Higher Secondary Education",
    field: "High School Certification",
    duration: "Completed: 2023",
    performance: "Percentage: 85%",
    icon: "School"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Java", level: 88 },
      { name: "C", level: 80 },
      { name: "Python Basics", level: 65 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "React / Vite", level: 82 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Responsive Design", level: 90 }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Java Enterprise", level: 85 },
      { name: "REST APIs", level: 82 },
      { name: "MySQL", level: 86 },
      { name: "Data Management", level: 80 }
    ]
  },
  {
    category: "UI/UX & Prototyping",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "User Experience Design", level: 84 }
    ]
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Eclipse IDE", level: 85 },
      { name: "VS Code", level: 92 },
      { name: "Git & GitHub", level: 88 },
      { name: "Anaconda", level: 75 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Communication", level: 90 },
      { name: "Teamwork", level: 92 },
      { name: "Problem Solving", level: 88 },
      { name: "Adaptability", level: 85 },
      { name: "Time Management", level: 86 }
    ]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    company: "V NET Technologies",
    role: "Full Stack Java Development Intern",
    duration: "June 2025",
    description: "Worked on backend development, database management, and web application architecture, bridging the gaps between SQL tables, MVC controller logic, and user-friendly web views.",
    projectTitle: "Vehicle Information Management System",
    projectFeatures: [
      "Search and filter vehicle details using vehicle registration numbers",
      "Interactive digital view of RC certificates and insurance tracking",
      "Comprehensive insurance renewal management and notifications dashboard",
      "Secure owner profile management with record uploads"
    ],
    technologies: ["Java", "HTML", "CSS", "MySQL", "REST APIs"]
  },
  {
    company: "Yale IT Skill Hub",
    role: "UI/UX Design Intern",
    duration: "June 2026",
    description: "Learned and applied user-centered design principles, digital wireframing, high-fidelity prototyping, and modern mobile-first responsive layout strategies.",
    projectTitle: "Car Dealership Application Prototype",
    projectFeatures: [
      "Designed interactive user purchase, bidding, and configuration flows",
      "Polished modern UI system featuring high contrast and elegant glass cards",
      "Responsive fluid layout specs covering mobile, tablet, and desktop screens",
      "Customer-centered journey mapping backed by demographic research"
    ],
    technologies: ["Figma", "Wireframing", "UX Research", "Responsive Design"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Microsoft Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Verified Certification",
    skills: [
      "Cloud Computing Fundamentals",
      "Azure Data Services",
      "Data Analytics Concepts",
      "Database Technologies"
    ],
    verificationBadge: "Verified",
    credentialId: "AZ-900 / DP-900 Verified Practitioner"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "vims",
    title: "Vehicle Information Management System",
    category: "Full Stack",
    techStack: ["Java", "HTML", "CSS", "MySQL", "REST APIs"],
    description: "A centralized platform allowing administrators and vehicle owners to manage, update, and search critical vehicle information efficiently with live status monitoring.",
    features: [
      "Instant Vehicle Registry Search",
      "Digital Registration Certificate (RC) Verification",
      "Insurance Status and Premium Tracking",
      "Owner Multi-device Identity Mapping",
      "Document and Record Upload Manager"
    ]
  },
  {
    id: "car-dealership",
    title: "Car Dealership Application",
    category: "UI/UX Design",
    techStack: ["Figma", "UX Research", "Interactive Prototype"],
    description: "A premium mobile and desktop prototype designed to revolutionize online car purchasing through user-centered layouts, rapid search indexing, and rich interface state feedback.",
    features: [
      "Comprehensive User Journey Mapping",
      "Low to High-Fidelity Wireframing",
      "Fully Interactive High-fidelity Clickable Prototype",
      "Cross-Platform Fluid Responsive Systems"
    ]
  },
  {
    id: "student-management",
    title: "Student Management System",
    category: "Java Development",
    techStack: ["Java SE", "Swing/JDBC", "MySQL"],
    description: "A robust Java desktop database utility designed for schools and universities to manage student admissions, grades tracking, course registry, and automated fee statements.",
    features: [
      "Secure Multi-role Administrator Login",
      "Instant Database CRUD Operations with MySQL Integration",
      "Dynamic Academic Performance Charts",
      "Automated Report Card PDF Exports"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    techStack: ["React.js", "Vite", "Tailwind CSS", "Motion"],
    description: "A modern, highly immersive personal web space featuring interactive glassmorphism components, dark/light toggle modes, and real-time GitHub repository data stream representation.",
    features: [
      "Apple-inspired Fluid Glass Panels",
      "System-level Light and Dark Color Adaptation",
      "Responsive Hamburger Menu Navigation Drawer",
      "Dynamic API Integrations with Fallbacks"
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Full Stack Java Development",
    description: "Building production-grade, modular web applications with robust Java logic and high-performance databases.",
    items: [
      "Secure Java Backend Services",
      "Relational MySQL Schema Design",
      "Custom REST API Endpoints & CRUD Controllers"
    ]
  },
  {
    title: "UI/UX & Interaction Design",
    description: "Creating highly intuitive, visually jaw-dropping layouts centered entirely on genuine human needs and research.",
    items: [
      "High-Fidelity Interactive Prototypes",
      "Apple-Inspired Minimalist Wireframes",
      "Thorough User Journey Research & Asset Mapping"
    ]
  },
  {
    title: "Responsive Web Development",
    description: "Crafting lightweight, lightning-fast frontend layouts adapting gracefully to any screen width and touch capability.",
    items: [
      "Vite & React Component Ecosystems",
      "Tailwind CSS Utility Typography Styling",
      "Fluid, Staggered Framer Motion Interactions"
    ]
  }
];
