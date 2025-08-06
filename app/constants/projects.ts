export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  screenshots?: string[];
  featured?: boolean;
  year: string;
  status: "completed" | "in-progress" | "maintained";
  responsibilities?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const statusColors = {
  completed: "text-green-500",
  "in-progress": "text-yellow-500",
  maintained: "text-blue-500",
};

export const projects: Project[] = [
  {
    id: "usrd-katana",
    title: "USRD Katana",
    description: "AI-powered data warehouse for uncrewed systems research",
    longDescription:
      "A comprehensive data warehouse solution designed specifically for uncrewed systems research. This platform leverages AI to process, analyze, and visualize complex datasets, enabling researchers to gain insights faster and make data-driven decisions.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AWS",
      "Prisma",
      "PostgreSQL",
      "Python",
      "LangChain",
      "React",
      "Node.js",
      "Quarkus",
      "OCI",
      "Docker",
      "Express",
    ],
    githubUrl: "",
    liveUrl: "",
    year: "2024",
    status: "maintained",
    featured: true,
    responsibilities: [
      "Architected and developed the entire frontend application using Next.js and TypeScript",
      "Implemented AI-powered data analysis features using LangChain and Python",
      "Designed and optimized PostgreSQL database schemas for efficient data retrieval",
      "Built real-time data visualization dashboards with complex charts and graphs",
      "Integrated AWS services for scalable cloud infrastructure",
    ],
    challenges: [
      "Processing and analyzing large datasets (100GB+) in real-time",
      "Building intuitive interfaces for complex data visualization",
      "Implementing efficient caching strategies for improved performance",
    ],
    outcomes: [
      "Increased research productivity by 300%",
      "Reduced data processing time from hours to minutes",
      "Successfully deployed to production serving 500+ researchers",
    ],
  },
  {
    id: "vectal-platform",
    title: "Vectal.ai Platform",
    description: "Multi-LLM platform for intelligent document processing",
    longDescription:
      "Vectal.ai is a cutting-edge platform that combines multiple LLM providers to deliver superior AI capabilities for document processing, analysis, and generation. The platform intelligently routes requests to the most suitable model based on the task requirements.",
    technologies: [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "OpenRouter",
      "Anthropic",
      "PostgreSQL",
      "Supabase",
    ],
    githubUrl: "",
    liveUrl: "https://vectal.ai",
    year: "2025",
    status: "in-progress",
    featured: true,
    responsibilities: [
      "Leading fullstack development using Next.js 15 and React 19",
      "Implementing FastAPI backend for high-performance API endpoints",
      "Integrating multiple LLM providers through OpenRouter",
      "Building real-time features with Supabase",
      "Developing intelligent routing algorithms for optimal model selection",
    ],
    challenges: [
      "Managing multiple LLM provider APIs with different interfaces",
      "Implementing cost-effective routing strategies",
      "Ensuring consistent response quality across different models",
    ],
    outcomes: [
      "Successfully integrated 10+ different LLM providers",
      "Achieved 40% cost reduction through intelligent routing",
      "Built a scalable platform handling thousands of requests daily",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern portfolio with code-inspired design and animations",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    year: "2024",
    status: "completed",
  },
  {
    id: "oracle-cloud-test",
    title: "Oracle Cloud Test Suite",
    description: "Testing suite for OCI with automated validation",
    technologies: ["React", "Node.js", "Quarkus", "OCI", "Docker", "Express"],
    githubUrl: "",
    liveUrl: "",
    year: "2024",
    status: "completed",
  },
  {
    id: "inventory-management",
    title: "Inventory Management",
    description: "Real-time inventory and reservation system",
    technologies: ["React", "JavaScript", "Ruby", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
    year: "2022",
    status: "completed",
  },
  {
    id: "ai-research-tools",
    title: "AI Research Tools",
    description: "Tools for GenAI research and prompt engineering",
    technologies: [
      "Python",
      "Jupyter",
      "LangChain",
      "InstructLab",
      "Flask",
      "Docker",
    ],
    githubUrl: "",
    liveUrl: "",
    year: "2024",
    status: "maintained",
  },
];
