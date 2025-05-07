const Resume = () => {
  return (
    <div className="w-full h-[160mm] xl:h-[172mm]  bg-background text-foreground-title p-[2mm] xl:p-[3mm] text-[9px] xl:text-[10px] leading-[1.2] font-arial overflow-hidden rounded-lg transition-colors duration-500">
      <h1 className="text-center font-bold text-[10px] mb-1">Marko Sudar</h1>
      <p className="text-center mb-2">
        329 Summit Ave • Salisbury, NC 28144 • mjsudar21@catawba.edu • (336)
        940-9851
        <br />
        Permanent Resident - Green Card Holder
      </p>

      <section className="mb-2">
        <h2 className="font-bold underline">Education</h2>
        <p className="font-semibold">
          Catawba College <span className="float-right">Salisbury, NC</span>
        </p>
        <p>BS in Computer Science, with minor in Data Science – GPA: 3.97</p>
        <p className="font-semibold mt-0.5">
          Study Abroad <span className="float-right">London, UK</span>
        </p>
        <p>London Metropolitan University (Aug 2022 – Dec 2022)</p>
      </section>

      <section className="mb-2">
        <h2 className="font-bold underline">Experience</h2>

        <p className="font-semibold">
          AUVSI – Association for Uncrewed Systems International{" "}
          <span className="float-right">Remote, US</span>
        </p>
        <p className="italic">Software Developer – Jan 2024 – Present</p>
        <ul className="list-disc ml-4">
          <li>
            Spearheaded the development of USRD Katana, a fully scalable
            AI-powered data warehouse built with Next.js, Node.js, TypeScript,
            Prisma ORM, and AWS services (Cognito, RDS, S3), boosting team
            productivity by 300% and increasing revenue by 150%.
          </li>
          <li>
            Automated complex workflows using Python, Next.js, AWS Lambda, and
            Flask, reducing manual labor, accelerating research cycles, and
            improving time-to-market by over 200%.
          </li>
          <li>
            Delivered high-performance dashboards using React, Tailwind CSS,
            Framer Motion, and shadcn/ui for real-time UxS data analysis and
            internal tool visibility.
          </li>
          <li>
            Deployed cloud-native solutions with Docker, Kubernetes, Vercel, and
            Google Cloud, optimizing cost, scalability, and CI/CD reliability.
          </li>
          <li>
            Led cross-functional research on economic and environmental
            frameworks and pioneered generative AI applications using LangChain,
            InstructLab, and Jupyter for uncrewed systems.
          </li>
        </ul>

        <p className="font-semibold mt-1">
          Oracle <span className="float-right">Belgrade, Serbia</span>
        </p>
        <p className="italic">Web Developer Intern – May 2024 – Aug 2024</p>
        <ul className="list-disc ml-4">
          <li>
            Developed a full-scale test application on Oracle Cloud Network
            using React, Next.js, Node.js, and Quarkus with a focus on scalable
            APIs and real-time data flow security.
          </li>
          <li>
            Authored internal OCI onboarding documentation and implemented
            automation scripts that reduced setup time by over 50%.
          </li>
          <li>
            Built secure backend services with Express and Flask, and configured
            VPN environments to meet enterprise-level standards.
          </li>
          <li>
            Integrated low-code environments with custom UIs built using
            Tailwind CSS, Framer Motion, and shadcn/ui, and deployed via Vercel.
          </li>
          <li>
            Gained hands-on experience across GCP, AWS, and Dockerized
            infrastructure for hybrid cloud deployment workflows.
          </li>
        </ul>

        <p className="font-semibold mt-1">
          Oracle <span className="float-right">Belgrade, Serbia</span>
        </p>
        <p className="italic">Cloud Engineer Intern – May 2023 – Aug 2023</p>
        <ul className="list-disc ml-4">
          <li>
            Conducted advanced testing and validation on OCI infrastructure
            including Oracle Kubernetes, Oracle Docker, APEX, and cloud-based
            deployment pipelines.
          </li>
          <li>
            Collaborated with infrastructure teams to improve reliability and
            scalability of cloud-based enterprise systems using CI/CD practices
            and container orchestration.
          </li>
          <li>
            Enhanced application performance monitoring by deploying metrics
            dashboards and automated recovery policies across dev/staging
            environments.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="font-bold underline">Skills & Interests</h2>
        <p>
          <strong>Technical:</strong> React, Next.js, Node.js, Tailwind CSS,
          Framer Motion, shadcn/ui, TypeScript, Python, Django, Flask, Express,
          JavaScript, Quarkus, Spring, Kotlin, C#, C++, Java, Prisma,
          PostgreSQL, MySQL, MongoDB, Docker, Kubernetes, AWS, Google Cloud,
          Vercel, Jupyter, LangChain, InstructLab, ChatGPT prompt engineering,
          Git, GitHub
        </p>
        <p>
          <strong>Languages:</strong> English, Serbian, Croatian, Bosnian
        </p>
        <p>
          <strong>Lab:</strong> Cloud Infrastructure, AI & Machine Learning,
          Generative AI pipelines
        </p>
        <p>
          <strong>Interests:</strong> LLMs, GenAI agents, intelligent systems,
          frontend animation, code performance optimization, aerospace autonomy
        </p>
      </section>
    </div>
  );
};

export default Resume;
