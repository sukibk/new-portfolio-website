import axios from "axios";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const TECH_OBJ = [
  { label: "React", source: "https://cdn.simpleicons.org/react" },
  { label: "Next.js", source: "https://cdn.simpleicons.org/nextdotjs/white" },
  { label: "Tailwind CSS", source: "https://cdn.simpleicons.org/tailwindcss" },
  { label: "Framer Motion", source: "https://cdn.simpleicons.org/framer" },
  { label: "shadcn/ui", source: "https://cdn.simpleicons.org/shadcnui" },
  { label: "Node.js", source: "https://cdn.simpleicons.org/nodedotjs" },
  { label: "Quarkus", source: "https://cdn.simpleicons.org/quarkus" },
  { label: "Express", source: "https://cdn.simpleicons.org/express/white" },
  { label: "Flask", source: "https://cdn.simpleicons.org/flask" },
  { label: "AWS", source: "https://cdn.simpleicons.org/amazonwebservices" },
  { label: "Google Cloud", source: "https://cdn.simpleicons.org/googlecloud" },
  { label: "LangChain", source: "https://cdn.simpleicons.org/langchain" },
  { label: "InstructLab", source: "https://instructlab.ai/logo.png" },
  { label: "Juputer", source: "https://cdn.simpleicons.org/jupyter" },
  { label: "Vercel", source: "https://cdn.simpleicons.org/vercel/white" },
  { label: "Docker", source: "https://cdn.simpleicons.org/docker" },
  { label: "Kubernetes", source: "https://cdn.simpleicons.org/kubernetes" },
  { label: "Expo", source: "https://cdn.simpleicons.org/expo/gray" },
  { label: "Kotlin", source: "https://cdn.simpleicons.org/kotlin" },
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, "/public/logos/tech-logos");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const downloadImage = async (label, url) => {
  try {
    const ext = url.endsWith(".png") ? "png" : "svg";
    const filePath = path.join(
      outputDir,
      `${label.replace(/[^a-z0-9]/gi, "_")}.${ext}`
    );
    const response = await axios.get(url, { responseType: "stream" });
    response.data.pipe(fs.createWriteStream(filePath));
    console.log(`Downloaded: ${label}`);
  } catch (err) {
    console.log(`Failed to download ${label}. Error: ${err.message}`);
  }
};

(async () => {
  for (const tech of TECH_OBJ) {
    await downloadImage(tech.label, tech.source);
  }
})();
