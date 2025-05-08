import { timelineTechnologies } from "./technologies";
import { TimelineCardProps } from "../components/timeline/TimelineCard";

export const workExperiences: TimelineCardProps[] = [
  {
    title: "Software Engineer",
    company: "AUVSI",
    date: "JAN 2024 - PRESENT",
    technologies: timelineTechnologies.auvsi,
    logo: "/images/timeline-section/auvsi-marko-sudar-aws-gcp-azure.png",
    variant: "left",
    className:
      "resume:ml-0 resume:col-start-2 resume:col-span-1 resume:row-start-1 transition-all duration-500",
  },
  {
    title: "Web Developer Intern",
    company: "Oracle",
    date: "MAY 2024 - AUG 2024",
    technologies: timelineTechnologies.oracleWebIntern,
    logo: "/images/timeline-section/oracle-marko-sudar-software-engineer.png",
    variant: "right",
    className:
      "resume:col-start-1 resume:col-span-1 resume:justify-self-end resume:row-start-2 resume:mr-[1.25rem] transition-all duration-500",
  },
  {
    title: "Cloud Engineer Intern",
    company: "Oracle",
    date: "MAY 2024 - AUG 2024",
    technologies: timelineTechnologies.oracleCloudIntern,
    logo: "/images/timeline-section/oracle-marko-sudar-software-engineer.png",
    variant: "left",
    className:
      "resume:ml-0 resume:col-start-2 resume:col-span-1 resume:row-start-3 transition-all duration-500",
  },
  {
    title: "Director of IT",
    company: "Black Lake",
    date: "MAY 2022 - AUGUST  2022",
    technologies: timelineTechnologies.blackLake,
    logo: "/images/timeline-section/black-lake-marko-sudar-ai-machine-learning-mcp.png",
    variant: "right",
    className:
      "resume:col-start-1 resume:col-span-1 resume:justify-self-end resume:row-start-4 resume:mr-[1.25rem] transition-all duration-500",
    invertLogo: true,
  },
  {
    title: "Full Stack Developer",
    company: "Feral",
    date: "JAN 2021 - AUGUST  2021",
    technologies: timelineTechnologies.feral,
    logo: "/images/timeline-section/feral-marko-sudar-aws-gcp-azure.png",
    variant: "left",
    className:
      "resume:ml-0 resume:col-start-2 resume:col-span-1 resume:row-start-5 transition-all duration-500",
  },
];
