
/* =========================================
   PROJECT DATA
========================================= */

const projects = [
    {
        id: "finops-ai",
        number: "01",
        title: "FinOps AI",
        category: "AI / MACHINE LEARNING",
        status: "Local Setup Required",
        featured: true,

        description:
            "An ML-powered cloud optimization platform that analyzes source code, predicts infrastructure requirements and recommends cost-effective cloud resources.",

        technologies: [
            "Python",
            "Scikit-learn",
            "Random Forest",
            "Ollama",
            "Qwen 2.5",
            "FastAPI",
            "Streamlit"
        ],

        github: "https://github.com/YaassinMD/Finops_AI",
        demo: null,

        cover: "assets/images/finops-ai.png",

        overview:
            "FinOps AI helps developers estimate the infrastructure requirements and cloud costs of their applications. It accepts a GitHub repository or uploaded ZIP file, analyzes the project and predicts the compute resources needed to deploy it.",

        problem:
            "Choosing cloud infrastructure without understanding an application's workload can lead to over-provisioning or insufficient resources. Developers need a practical way to estimate compute requirements and compare cloud costs.",

        solution:
            "The platform combines static source-code analysis, a locally running Ollama model and a Random Forest prediction model. It uses the predicted resource requirements to recommend suitable virtual machines and estimate costs across AWS, Azure and GCP.",

        architecture: [
            {
                title: "Repository / ZIP",
                detail: "User submits source code"
            },
            {
                title: "Static Analyzer",
                detail: "Extracts languages, frameworks and project evidence"
            },
            {
                title: "Local Ollama",
                detail: "Qwen 2.5 3B classifies workload characteristics"
            },
            {
                title: "Random Forest",
                detail: "Predicts required vCPU and RAM"
            },
            {
                title: "Cost Engine",
                detail: "Compares cloud VM options and estimates costs"
            },
            {
                title: "Recommendations",
                detail: "Displays resource and cost estimates"
            }
        ],

        highlights: [
            "Analyzes uploaded ZIP files and GitHub repositories.",
            "Uses static analysis to identify technologies and project evidence.",
            "Uses locally hosted Qwen 2.5 3B through Ollama.",
            "Uses a Random Forest model to predict vCPU and RAM.",
            "Compares VM options across AWS, Azure and GCP.",
            "Estimates hourly, monthly and yearly infrastructure costs."
        ],

        screenshots: [
            "assets/images/finops-1.png",
            "assets/images/finops-2.png"
        ],

        setup:
            "Requires local setup, including Ollama and the Qwen 2.5 3B model."
    },

    {
        id: "blockguard",
        number: "02",
        title: "BlockGuard",
        category: "FULL-STACK / BLOCKCHAIN",
        status: "Live Demo",
        featured: false,

        description:
            "A product authenticity verification platform using QR codes, SHA-256 fingerprints and a hash-linked ledger.",

        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "SHA-256",
            "NextAuth.js"
        ],

        github: "https://github.com/YaassinMD/BlockGuard",
        demo: "https://block-guard-mauve.vercel.app/",

        cover: "assets/images/blockguard.png",

        overview:
            "BlockGuard is a product verification platform designed to help customers check product authenticity through QR codes and tamper-evident records.",

        problem:
            "Customers may find it difficult to verify whether a product is genuine. Manufacturers also need a reliable way to register products and maintain verifiable product records.",

        solution:
            "BlockGuard generates SHA-256 product fingerprints and stores product records in a sequential hash-linked ledger. Customers can scan a QR code and verify the product without logging in.",

        architecture: [
            {
                title: "Admin",
                detail: "Creates and manages manufacturer accounts"
            },
            {
                title: "Manufacturer",
                detail: "Registers products"
            },
            {
                title: "SHA-256",
                detail: "Generates a product fingerprint"
            },
            {
                title: "Hash-linked Ledger",
                detail: "Stores linked product records"
            },
            {
                title: "QR Code",
                detail: "Provides a product verification link"
            },
            {
                title: "Customer",
                detail: "Scans and verifies the product"
            }
        ],

        highlights: [
            "Generates SHA-256 cryptographic product fingerprints.",
            "Maintains a sequential hash-linked ledger.",
            "Checks product data and ledger integrity.",
            "Provides QR-based public product verification.",
            "Supports administrator, manufacturer and customer workflows.",
            "Uses server-side authentication and authorization."
        ],

        screenshots: [
            "assets/images/blockguard.png",
            "assets/images/block-guard2.png"
        ],

        setup:
            "A live demo URL is documented in the project README."
    },

    {
        id: "phishx",
        number: "03",
        title: "PhishX",
        category: "CYBERSECURITY / MACHINE LEARNING",
        status: "Local Setup Required",
        featured: false,

        description:
            "A hybrid phishing detection system combining BERT-based URL representations with XGBoost classification and suspicious-domain analysis.",

        technologies: [
            "Python",
            "PyTorch",
            "BERT",
            "Transformers",
            "XGBoost",
            "Flask",
            "React"
        ],

        github: "https://github.com/YaassinMD/PhishX",
        demo: "https://phishxwebsite.netlify.app/",

        cover: "assets/images/phishx.png",

        overview:
            "PhishX analyzes submitted URLs to identify potentially malicious websites using transformer-based representations, machine learning classification and additional URL security checks.",

        problem:
            "Phishing websites often imitate trusted websites or use misleading URLs to trick users. Identifying suspicious URLs requires more than checking a single keyword or domain pattern.",

        solution:
            "The system combines BERT-based URL representations with an XGBoost classifier. It also performs trusted-domain checks, typosquatting detection, URL feature extraction and risk assessment.",

        architecture: [
            {
                title: "URL Input",
                detail: "User submits a website URL"
            },
            {
                title: "URL Analysis",
                detail: "Extracts URL features and resolves shortened URLs"
            },
            {
                title: "Security Checks",
                detail: "Checks trusted domains and typosquatting patterns"
            },
            {
                title: "BERT",
                detail: "Generates contextual URL representations"
            },
            {
                title: "XGBoost",
                detail: "Classifies the URL"
            },
            {
                title: "Risk Assessment",
                detail: "Displays the detection result"
            }
        ],

        highlights: [
            "Uses BERT representations for URL analysis.",
            "Uses PyTorch and Transformers for model processing.",
            "Combines BERT features with XGBoost classification.",
            "Includes trusted-domain and typosquatting checks.",
            "Supports URL feature extraction and shortened URL resolution.",
            "Provides a Flask backend and React interface."
        ],

        screenshots: [
            "assets/images/phishx1.png",
            "assets/images/phishx2.png"
        ],

        setup:
            "Requires local setup and a Hugging Face access token for the inference endpoint."
    },

    {
        id: "movie-recommender",
        number: "04",
        title: "Movie Recommender",
        category: "MACHINE LEARNING",
        status: "Live Demo",
        featured: false,

        description:
            "A content-based movie recommendation application that suggests similar movies using a precomputed similarity matrix.",

        technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Streamlit",
            "TMDB API"
        ],

        github: "https://github.com/YaassinMD/movie-recommender-system",
        demo: "https://movie-recommender-system-lyyv6mkiaothvjz6ligxnc.streamlit.app/",

        cover: "assets/images/movie-recommender.png",

        overview:
            "The Movie Recommender suggests five movies similar to a movie selected by the user. It uses a precomputed similarity matrix and retrieves movie posters through the TMDB API.",

        problem:
            "Finding movies based on personal interests can be time-consuming. A recommendation system can help users discover movies similar to titles they already enjoy.",

        solution:
            "The application retrieves the selected movie's index, uses a precomputed similarity matrix to rank similar movies and displays the top five recommendations with their posters.",

        architecture: [
            {
                title: "Movie Selection",
                detail: "User selects a movie"
            },
            {
                title: "Movie Dataset",
                detail: "Retrieves the selected movie index"
            },
            {
                title: "Similarity Matrix",
                detail: "Calculates similarity rankings"
            },
            {
                title: "Top 5 Results",
                detail: "Selects the most similar movies"
            },
            {
                title: "TMDB API",
                detail: "Retrieves movie poster images"
            },
            {
                title: "Recommendations",
                detail: "Displays suggested movies"
            }
        ],

        highlights: [
            "Implements content-based movie recommendations.",
            "Uses a precomputed similarity matrix.",
            "Uses Pandas, NumPy and Scikit-learn.",
            "Retrieves movie posters using the TMDB API.",
            "Provides an interactive Streamlit interface.",
            "Uses Git LFS for large model and data artifacts."
        ],

        screenshots: [
            "assets/images/movie-recommener1.png",
            "assets/images/movie-recommener2.png"
        ],

        setup:
            "A Streamlit demo URL is documented in the project README."
    }
];


/* =========================================
   PROJECT CARD RENDERING
========================================= */

const projectsContainer = document.getElementById("projects-container");

function renderProjects() {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projects.map(project => `
        <article class="project-card ${project.featured ? "featured" : ""}"
                 data-project-id="${project.id}">

            <div class="project-card-image">

                <img
                    src="${project.cover}"
                    alt="${project.title} application preview"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <span class="project-number">${project.number}</span>

                <span class="project-status">
                    ${project.status}
                </span>

            </div>

            <div class="project-card-content">

                <span class="project-category">
                    ${project.category}
                </span>

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="project-tech-stack">
                    ${project.technologies.slice(0, 4).map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}
                    ${project.technologies.length > 4
                        ? `<span>+${project.technologies.length - 4}</span>`
                        : ""
                    }
                </div>


                <div class="project-card-actions">

                    <button
                        class="project-explore-btn"
                        data-open-project="${project.id}"
                        type="button"
                    >
                        Explore Project <span>↗</span>
                    </button>

                    ${project.demo ? `
                        <a
                            href="${project.demo}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="project-demo-link"
                        >
                            Live Demo ↗
                        </a>
                    ` : ""}

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-github-link"
                    >
                        GitHub ↗
                    </a>

                </div>


            </div>

        </article>
    `).join("");
}


/* =========================================
   DEEP DIVE MODAL
========================================= */

const projectModal = document.getElementById("project-modal");
const projectModalContent = document.getElementById("project-modal-content");
const projectModalClose = document.getElementById("project-modal-close");


function renderProjectModal(project) {
    if (!projectModalContent || !project) return;

    const demoButton = project.demo
        ? `<a href="${project.demo}" target="_blank"
              rel="noopener noreferrer" class="modal-link">
              Live Demo ↗
           </a>`
        : "";

    projectModalContent.innerHTML = `

        <div class="modal-project-heading">

            <span class="project-category">
                ${project.number} / ${project.category}
            </span>

            <h2>${project.title}<span>.</span></h2>

            <p>${project.description}</p>

            <div class="modal-project-links">
                <a href="${project.github}" target="_blank"
                   rel="noopener noreferrer" class="modal-link">
                    GitHub ↗
                </a>
                ${demoButton}
            </div>

        </div>


        <section class="modal-section">

            <span class="modal-section-label">01 / OVERVIEW</span>

            <p>${project.overview}</p>

            <h3>The Problem</h3>
            <p>${project.problem}</p>

            <h3>The Solution</h3>
            <p>${project.solution}</p>

        </section>


        <section class="modal-section">

            <span class="modal-section-label">02 / ARCHITECTURE</span>

            <h3>How it works</h3>

            <div class="architecture-flow">

                ${project.architecture.map((step, index) => `
                    <div class="architecture-step">

                        <span class="architecture-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                            <h4>${step.title}</h4>
                            <p>${step.detail}</p>
                        </div>

                    </div>

                    ${index !== project.architecture.length - 1
                        ? `<div class="architecture-connector">↓</div>`
                        : ""
                    }
                `).join("")}

            </div>

        </section>


        <section class="modal-section">

            <span class="modal-section-label">03 / IMPLEMENTATION</span>

            <h3>Technical highlights</h3>

            <ul class="project-highlights">
                ${project.highlights.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </section>


        <section class="modal-section">

            <span class="modal-section-label">04 / TECHNOLOGY</span>

            <h3>Tools & technologies</h3>

            <div class="modal-tech-stack">
                ${project.technologies.map(tech =>
                    `<span>${tech}</span>`
                ).join("")}
            </div>

        </section>


        <section class="modal-section">

            <span class="modal-section-label">05 / APPLICATION PREVIEW</span>

            <h3>Inside the project</h3>

            <div class="project-screenshots">

                ${project.screenshots.map((screenshot, index) => `
                    <figure>
                        <img
                            src="${screenshot}"
                            alt="${project.title} screenshot ${index + 1}"
                            loading="lazy"
                            onerror="this.parentElement.style.display='none'"
                        >
                        <figcaption>
                            ${project.title} — Preview ${index + 1}
                        </figcaption>
                    </figure>
                `).join("")}

            </div>

        </section>


        <section class="modal-section project-setup">

            <span class="modal-section-label">06 / AVAILABILITY</span>

            <p>${project.setup}</p>

        </section>

    `;
}


/* =========================================
   MODAL INTERACTIONS
========================================= */

function openProjectModal(projectId) {
    const project = projects.find(item => item.id === projectId);

    if (!project || !projectModal) return;

    renderProjectModal(project);

    projectModal.showModal();

    document.body.classList.add("modal-open");
}


function closeProjectModal() {
    if (!projectModal) return;

    projectModal.close();

    document.body.classList.remove("modal-open");
}


if (projectsContainer) {
    projectsContainer.addEventListener("click", event => {

        const button = event.target.closest("[data-open-project]");

        if (!button) return;

        openProjectModal(button.dataset.openProject);
    });
}


if (projectModalClose) {
    projectModalClose.addEventListener("click", closeProjectModal);
}


if (projectModal) {

    projectModal.addEventListener("click", event => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });

    projectModal.addEventListener("close", () => {
        document.body.classList.remove("modal-open");
    });

}


/* =========================================
   INITIALIZE
========================================= */

renderProjects();



   


