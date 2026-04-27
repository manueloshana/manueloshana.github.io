const resumeData = {
  name: "Manuel Oshana",
  role: "Backend and Cloud-Focused Software Engineer",
  location: "Toronto, ON",
  email: "manuel.oshana@gmail.com",
  linkedin: "linkedin.com/in/manueloshana",
  summary:
    "Backend and cloud-focused software engineer with 5+ years of experience building and operating customer-facing platforms across AWS, Azure, and Kubernetes environments. Strong hands-on background in backend services, microservices, REST APIs, CI/CD automation, production reliability, and AI-assisted development workflows using tools such as Cursor and GitHub Copilot.",
  highlights: [
    "100k+ daily users supported on Purolator's AI chatbot platform",
    "99.99% uptime focus across Kubernetes and Docker production systems",
    "Millions of daily requests supported through tracking API and integrations",
    "AWS delivery across Lambda, API Gateway, DynamoDB, CloudWatch, S3, RDS, ECS, CloudFront, and WAF",
    "Experience reducing cloud spend through Redis caching and backend performance work"
  ],
  experience: [
    {
      company: "Purolator Inc",
      role: "Full Stack Developer",
      location: "Mississauga, ON",
      period: "Nov. 2023 - Present",
      bullets: [
        "Led end-to-end development of Purolator's high-traffic AI chatbot platform, supporting 100k+ daily users and helping deliver a reliable customer experience at scale through Kubernetes- and Docker-based production engineering.",
        "Owned key backend and full-stack capabilities for Purolator Your Way, building customer-facing delivery management features including custom authentication, Java-based AWS Lambda APIs, API Gateway integrations, React frontends, and GitHub Actions CI/CD pipelines.",
        "Engineered and operated production cloud platforms across AWS, Kubernetes, and Docker using Lambda, API Gateway, DynamoDB, CloudWatch, Secrets Manager, S3, RDS, ECS, CloudFront, and WAF.",
        "Maintained and enhanced Purolator's external Tracking API and Amazon tracking integrations, supporting systems that process millions of requests per day.",
        "Contributed to Purolator Vision, an enterprise dashboard for large-volume shippers, delivering backend and integration work in Java and Python on AWS.",
        "Designed and shipped a full-stack React and Node.js application integrated with Google Maps and Salesforce for drop-off and pickup location discovery."
      ]
    },
    {
      company: "Cineplex Digital Media",
      role: "Software Developer II",
      location: "London, ON (Remote)",
      period: "May 2021 - Nov. 2023",
      bullets: [
        "Built backend services in Node.js and TypeScript using Azure Functions to manage and troubleshoot thousands of distributed digital signage devices.",
        "Led a core platform migration from Azure Device Twins to MySQL, improving system responsiveness, scalability, and data access patterns.",
        "Developed internal full-stack operational tools and REST APIs supporting content management and device servicing workflows.",
        "Implemented CI/CD pipelines with Jenkins and Selenium to improve release consistency and automated test coverage.",
        "Deployed and managed containerized services with Helm and Ansible, contributing to more reliable operational delivery."
      ]
    },
    {
      company: "TritonWear",
      role: "Full Stack Developer",
      location: "Toronto, ON",
      period: "Aug. 2020 - May 2021",
      bullets: [
        "Rewrote core application components in TypeScript using MVVM principles to improve maintainability, quality, and team velocity.",
        "Applied test-driven development practices with Jest to strengthen unit coverage and reduce regression risk.",
        "Built scalable Node.js APIs and AWS-based microservices supporting athlete performance and analytics workflows.",
        "Delivered responsive product features across Angular and Ionic applications for a globally used connected-device platform."
      ]
    },
    {
      company: "Inclusive Media and Design Centre",
      role: "Software Developer / Research Assistant",
      location: "Toronto, ON",
      period: "Sep. 2018 - May 2020",
      bullets: [
        "Built NICKEL, a Flask-based web application used by researchers to assess accessibility in academic content.",
        "Developed a Java-based Android application integrated with IBM Watson APIs for media and health-related research workflows.",
        "Refactored a legacy codebase, improving performance by 50% and reducing storage usage.",
        "Designed secure databases for sensitive health information with attention to data protection requirements."
      ]
    }
  ],
  education: {
    school: "Toronto Metropolitan University",
    note: "formerly Ryerson University",
    degree: "Bachelor of Science (Honours) in Computer Science",
    location: "Toronto, ON",
    period: "Sept. 2015 - May 2020",
    focus: "Software engineering, databases, algorithms, and production-ready application development"
  },
  skills: {
    Languages: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Bash"],
    Backend: ["Node.js", "Express", "Flask", "Java backend services", "REST APIs", "Microservices", "Serverless architectures"],
    AWS: ["Lambda", "API Gateway", "DynamoDB", "S3", "ECS", "EKS", "RDS", "SQS", "SNS", "Step Functions", "CloudWatch", "IAM", "VPC", "EC2", "ElastiCache", "Secrets Manager", "CloudFormation", "CodePipeline", "CodeBuild", "CodeDeploy"],
    Architecture: ["Distributed systems", "Event-driven systems", "Scalable system design", "Resilient services", "API design", "Data modeling"],
    DevOps: ["Docker", "Kubernetes", "Helm", "Jenkins", "Ansible", "Git", "CI/CD", "Infrastructure as code", "Zero-downtime deployments"],
    "AI Dev": ["Cursor", "GitHub Copilot", "AI-assisted development workflows", "Prompt-driven coding", "Multi-agent orchestration"],
    "Testing & Ops": ["Jest", "Selenium", "Unit testing", "TDD", "Monitoring", "Logging", "Production support", "Incident resolution", "Root cause analysis", "Performance optimization", "Cost optimization"],
    Frontend: ["React", "Angular", "Ionic"]
  }
};

const files = {
  about: {
    name: "about.md",
    language: "Markdown",
    lines: [
      { type: "comment", text: "<!-- manuel-oshana / backend-cloud-engineer -->" },
      { type: "heading", text: "# Manuel Oshana" },
      { type: "body", text: resumeData.summary },
      { type: "space" },
      { type: "heading2", text: "## Signal strengths" },
      ...resumeData.highlights.map((text) => ({ type: "list", text: `- ${text}` })),
      { type: "space" },
      { type: "heading2", text: "## Contact" },
      { type: "body", text: `${resumeData.email} | ${resumeData.linkedin} | ${resumeData.location}` },
      { type: "link", text: "Open resume PDF", href: "assets/manuel-oshana-resume.pdf" }
    ]
  },
  projects: {
    name: "projects.ts",
    language: "TypeScript",
    lines: [
      { type: "keyword", text: "export const selectedWork = [" },
      {
        type: "project",
        title: "Purolator AI Chatbot Platform",
        kind: "High-traffic customer platform",
        stack: ["Kubernetes", "Docker", "Backend services", "Production reliability"],
        body: "Led development for an AI chatbot platform supporting 100k+ daily users with a strong production uptime focus."
      },
      {
        type: "project",
        title: "Purolator Your Way",
        kind: "Delivery management platform",
        stack: ["Java", "AWS Lambda", "API Gateway", "React", "GitHub Actions"],
        body: "Owned backend and full-stack capabilities for customer-facing delivery management, including authentication, APIs, frontend flows, and CI/CD."
      },
      {
        type: "project",
        title: "External Tracking API",
        kind: "Customer-facing integration",
        stack: ["Java", "AWS", "Amazon integrations", "Observability"],
        body: "Maintained and enhanced heavily used tracking systems processing millions of requests per day."
      },
      {
        type: "project",
        title: "Cineplex Device Platform Migration",
        kind: "Distributed device operations",
        stack: ["Node.js", "TypeScript", "Azure Functions", "MySQL", "Jenkins"],
        body: "Led migration from Azure Device Twins to MySQL and built services for thousands of distributed digital signage devices."
      },
      { type: "keyword", text: "];" }
    ]
  },
  resume: {
    name: "resume.json",
    language: "JSON",
    lines: [
      { type: "keyword", text: "{" },
      { type: "json", key: "name", value: resumeData.name },
      { type: "json", key: "role", value: resumeData.role },
      { type: "json", key: "location", value: resumeData.location },
      { type: "json", key: "email", value: resumeData.email },
      { type: "json", key: "linkedin", value: resumeData.linkedin },
      { type: "space" },
      { type: "heading2", text: '"experience": [' },
      ...resumeData.experience.map((job) => ({ type: "experience", job })),
      { type: "heading2", text: "]," },
      { type: "space" },
      { type: "education", education: resumeData.education },
      { type: "link", text: "Open printable resume page", href: "resume.html" },
      { type: "link", text: "Open original resume PDF", href: "assets/manuel-oshana-resume.pdf" },
      { type: "keyword", text: "}" }
    ]
  },
  contact: {
    name: "contact.http",
    language: "HTTP",
    lines: [
      { type: "comment", text: "### Contact Manuel" },
      { type: "keyword", text: "POST https://manuel-oshana.dev/contact" },
      { type: "body", text: "Content-Type: application/json" },
      { type: "space" },
      { type: "keyword", text: "{" },
      { type: "json", key: "email", value: resumeData.email },
      { type: "json", key: "linkedin", value: `https://${resumeData.linkedin}` },
      { type: "json", key: "location", value: resumeData.location },
      { type: "json", key: "resume", value: "assets/manuel-oshana-resume.pdf" },
      { type: "body", text: '"message": "Available for backend, cloud, platform, and full-stack engineering opportunities."' },
      { type: "keyword", text: "}" }
    ]
  },
  skills: {
    name: "skills.aws",
    language: "AWS",
    lines: [
      { type: "comment", text: "# Core skill matrix from resume_tailored_backend_aws.tex" },
      ...Object.entries(resumeData.skills).map(([group, values]) => ({ type: "skillGroup", group, values }))
    ]
  }
};

const fileOrder = ["about", "projects", "resume", "skills", "contact"];
const editorContent = document.querySelector("#editorContent");
const breadcrumb = document.querySelector("#breadcrumb");
const tabs = document.querySelector("#tabs");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderLine(line) {
  switch (line.type) {
    case "heading":
      return `<span class="token heading" id="editorHeading">${escapeHtml(line.text)}</span>`;
    case "heading2":
      return `<span class="token heading2">${escapeHtml(line.text)}</span>`;
    case "comment":
      return `<span class="token comment">${escapeHtml(line.text)}</span>`;
    case "keyword":
      return `<span class="token keyword">${escapeHtml(line.text)}</span>`;
    case "list":
      return `<span class="token list">${escapeHtml(line.text)}</span>`;
    case "body":
      return `<span class="token body">${escapeHtml(line.text)}</span>`;
    case "json":
      return `<span class="token json-key">"${escapeHtml(line.key)}"</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.value)}"</span><span class="token punctuation">,</span>`;
    case "project":
      return `
        <div class="project-object">
          <span class="token punctuation">{</span>
          <span class="token json-key">title</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.title)}"</span><span class="token punctuation">,</span>
          <span class="token json-key">type</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.kind)}"</span><span class="token punctuation">,</span>
          <span class="token json-key">stack</span><span class="token punctuation">: </span>${line.stack.map((item) => `<span class="token chip">${escapeHtml(item)}</span>`).join("")}
          <p>${escapeHtml(line.body)}</p>
          <span class="token punctuation">},</span>
        </div>
      `;
    case "experience":
      return `
        <div class="experience-object">
          <div><span class="token json-key">company</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.job.company)}"</span></div>
          <div><span class="token json-key">role</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.job.role)}"</span></div>
          <div><span class="token json-key">period</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.job.period)}"</span></div>
          <ul>${line.job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
        </div>
      `;
    case "education":
      return `
        <div class="experience-object education-object">
          <div><span class="token json-key">education</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.education.school)} (${escapeHtml(line.education.note)})"</span></div>
          <div><span class="token json-key">degree</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.education.degree)}"</span></div>
          <div><span class="token json-key">period</span><span class="token punctuation">: </span><span class="token string">"${escapeHtml(line.education.period)}"</span></div>
          <p>${escapeHtml(line.education.focus)}</p>
        </div>
      `;
    case "skillGroup":
      return `
        <div class="skill-row">
          <span class="skill-title">${escapeHtml(line.group)}</span>
          <span>${line.values.map((value) => `<span class="token chip">${escapeHtml(value)}</span>`).join("")}</span>
        </div>
      `;
    case "link":
      return `<a class="inline-run" href="${line.href}">${escapeHtml(line.text)}</a>`;
    case "space":
      return "";
    default:
      return escapeHtml(line.text || "");
  }
}

function renderTabs(activeFile) {
  tabs.innerHTML = fileOrder
    .map((key) => {
      const file = files[key];
      return `
        <button class="tab ${key === activeFile ? "active" : ""}" type="button" data-file="${key}">
          <span>${file.name}</span>
          <i aria-hidden="true">x</i>
        </button>
      `;
    })
    .join("");
}

function renderFile(fileKey) {
  const file = files[fileKey];
  breadcrumb.textContent = `manuel-oshana / ${file.name}`;
  editorContent.innerHTML = file.lines
    .map((line, index) => {
      const lineNumber = String(index + 1).padStart(2, "0");
      return `
        <div class="code-line ${line.type === "space" ? "is-empty" : ""}">
          <span class="line-number">${lineNumber}</span>
          <div class="line-content">${renderLine(line)}</div>
        </div>
      `;
    })
    .join("");

  editorContent.closest(".editor-pane")?.scrollTo({ top: 0, left: 0 });

  document.querySelectorAll("[data-file]").forEach((button) => {
    button.classList.toggle("active", button.dataset.file === fileKey);
  });

  document.querySelectorAll("[data-shortcut]").forEach((button) => {
    button.classList.toggle("active", button.dataset.shortcut === fileKey);
  });

  renderTabs(fileKey);
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-file], [data-shortcut]");
  if (!target) return;
  const fileKey = target.dataset.file || target.dataset.shortcut;
  if (files[fileKey]) renderFile(fileKey);
});

renderTabs("about");
renderFile("about");
