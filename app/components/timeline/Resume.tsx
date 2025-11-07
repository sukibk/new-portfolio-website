const Resume = () => {
  return (
    <div className="w-full h-[35.4rem] xl:h-[38.68rem] text-foreground-title p-[0.47rem] xl:p-[0.71rem] text-[0.5rem] xl:text-[0.5625rem] leading-[1.2] font-arial overflow-hidden rounded-lg transition-colors duration-500">
      <h1 className="text-center font-bold text-[0.625rem] mb-1">
        Marko Sudar - Green Card Holder
      </h1>
      <p className="text-center mb-2">
        Sunny Isles Beach, FL • +1 (336) 940-9851 • Email: contact@markosudar.com • GitHub • LinkedIn
      </p>

      <section className="mb-2">
        <h2 className="font-bold underline">Education</h2>
        <p className="font-semibold">
          Catawba College <span className="float-right">Salisbury, NC</span>
        </p>
        <p>B.S. in Computer Science, with minor in Data Science – GPA: 3.97</p>
        <p className="float-right">May 2025</p>
      </section>

      <section className="mb-2">
        <h2 className="font-bold underline">Professional Summary</h2>
        <p>
          Full-stack developer with 4+ years of experience building scalable web applications and AI integrations. Delivered production-grade recommendation engine increasing user engagement 40% at Vectai AI. Expert in modern frontend/backend technologies with proven ability to optimize infrastructure costs and system performance. Have experience both in startup and Fortune 500 company.
        </p>
      </section>

      <section className="mb-2">
        <h2 className="font-bold underline">Experience</h2>

        <p className="font-semibold">
          Vectai AI <span className="float-right">Remote</span>
        </p>
        <p className="italic">Full stack Developer <span className="float-right">May 2025 - present</span></p>
        <ul className="list-disc ml-4">
          <li>
            Architected and deployed a recommendation engine that increased user retention by 35% and processed 50,000+ daily interactions with 99.9% uptime
          </li>
          <li>
            Built full-stack features using FastAPI/Python and Next.js/React, delivering RAG-powered friend suggestions that increased in-app user interactions by 50% and integrated payment processing serving 100,000 transactions.
          </li>
          <li>
            Drove adoption of machine learning power user feedback features, prioritized features based on DAU/MAU analysis.
          </li>
          <li>
            Delivered performance optimizations to front end that reduced page load times by 35% and achieved 99.9% uptime, delivering cycles and improved product-market fit by 35% based on DAU/MAU analysis.
          </li>
        </ul>

        <p className="font-semibold mt-1">
          Associate Degree International <span className="float-right">Remote</span>
        </p>
        <p className="italic">Software Engineer <span className="float-right">January 2024 - May 2025</span></p>
        <ul className="list-disc ml-4">
          <li>
            Spearheaded the development of USRD (Uncrewed Systems and Robotics Database) Katana, a fully scalable AI-powered data warehouse built with Next.js, Node.js, TypeScript, Prisma ORM, and AWS services (Cognito, RDS, S3), reducing manual data processing from 4 hours to 30 minutes daily and boosting team productivity by 300%.
          </li>
          <li>
            Automated 40 routine data operations using Python, Next.js, AWS Lambda, Flask, eliminating manual data entry and time-to-market by 200%.
          </li>
          <li>
            Delivered high-performance dashboards using React, Tailwind CSS, Framer Motion, and shadcn/ui for real-time UxS data analysis and increasing internal tool visibility by 75%.
          </li>
          <li>
            Deployed cloud-native infrastructures on Google Cloud, reducing deployment costs by 30% and achieving 99.9% CI/CD pipeline reliability.
          </li>
          <li>
            Supported infrastructure team for 2 years, including moderating a panel discussion on the role of Generative AI in autonomous systems and operations
          </li>
        </ul>

        <p className="font-semibold mt-1">
          Oracle <span className="float-right">Belgrade, Serbia / Hybrid</span>
        </p>
        <p className="italic">Web and Cloud Engineer Intern <span className="float-right">April 2023 - January 2024</span></p>
        <ul className="list-disc ml-4">
          <li>
            Executed comprehensive OCI infrastructure testing across Kubernetes and Docker environments, identifying 15+ critical issues and improving deployment success rate by 25%.
          </li>
          <li>
            Partnered infrastructure teams to implement CI/CD practices, improving system reliability by 40% and enabling 3x faster deployment cycles.
          </li>
          <li>
            Implemented performance monitoring dashboards and automated recovery policies, reducing incident response time by 60% and preventing 20+ hours of monthly downtime.
          </li>
        </ul>
      </section>

      <section className="text-[0.45rem] xl:text-[0.5125rem]">
        <h2 className="font-bold underline">Skills and Interests</h2>
        <p>
          <strong>Technical:</strong> React, Next.js, TypeScript, JavaScript, HTML, CSS (Tailwind, Material UI, shadcn/ui, Radix UI, Framer Motion), PostHog, Railway, Python (FastAPI), Django, Flask), Node.js, Kotlin, Java, C++, C#, Prisma, PostgreSQL, MySQL, MongoDB, Redis, Vector Databases, AWS, Google Cloud, Docker, Kubernetes, LangChain, LangGraph, Hugging Face
        </p>
        <p>
          <strong>Languages:</strong> English (native), Serbian (native), Croatian (native), Bosnian (native)
        </p>
        <p>
          <strong>Interests:</strong> LLMs, GenAI agents, intelligent systems, full-lifecycle development (CI-CD and full-stack dev), Aerospace autonomy
        </p>
      </section>
    </div>
  );
};

export default Resume;
