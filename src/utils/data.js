import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#22C9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9C5F", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#a8d2f4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    previewUrl: "",
    fullName: "John Doe",
    designation: "Senior Software Engineer",
    summary:
      "Passionate and results-driven developer with 5+ years experience building fullstack apps",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: "+1234567890",
    location: "#123 Anywhere, Any City, Any Country",
    linkedin: "https://linkedin.com/bestolumese",
    github: "https://github.com/bestolumese",
    website: "https://bestolumese.vercel.app",
  },
  workExperience: [
    {
      company: "ABC Corp",
      role: "Fullstack Developer",
      startDate: "2021-02",
      endDate: "2023-09",
      description:
        "Frontend Developer at ABC Corp (2021–2023): Revamped legacy jQuery UI into a React SPA, boosting user engagement by 35%. Spearheaded accessibility (WCAG) compliance, reducing bounce rates by 15%. Introduced Storybook for reusable components, cutting dev time by 30%.",
    },
    {
      company: "Genesis Order",
      role: "Backend Developer",
      startDate: "2017-12",
      endDate: "2018-10",
      description:
        "Backend Developer at Genesis Order (2017–2018): Built scalable APIs in Python/Django, reducing API response time by 40%. Spearheaded PostgreSQL optimization, cutting query costs by $15K/year. Automated deployments via AWS Lambda, improving release efficiency by 50%.",
    },
  ],
  education: [
    {
      degree: "B.Sc Computer Science",
      institution: "Covenant University",
      startDate: "2023-08",
      endDate: "2027-07",
    },
    {
      degree: "B.Sc Mathematics",
      institution: "Covenant University",
      startDate: "2019-08",
      endDate: "2023-07",
    },
  ],
  skills: [
    {
      name: "Python",
      progress: 100,
    },
    {
      name: "Javascript",
      progress: 75,
    },
  ],
  projects: [
    {
      title: "Portfolio",
      description:
        "i made a beautiful and minimalist design portfolio with reactjs.",
      github: "https://github.com/BestOlumese/portfolio",
      liveDemoUrl: "https://bestolumese.vercel.app",
    },
  ],
  certifications: [
    {
      title: "Frontend Certificate",
      issuer: "Coursera",
      year: "2021",
    },
    {
      title: "Backend Certificate",
      issuer: "Udemy",
      year: "2020",
    },
  ],
  languages: [
    {
      name: "English",
      progress: 100,
    },
    {
      name: "French",
      progress: 75,
    },
  ],
  interests: ["Reading", "Football", "Movies", "Coding"],
};
