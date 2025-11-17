// ---PROJECTS SECTION---

const projectsData = {
  "Amazon Product Scraper": {
    summary: "Online sellers often need product data for price comparison, trend analysis, and catalog management. This scraper automates collecting product details and reviews from Amazon pages, saving hours of manual effort.",
    description: "Scrapes product name, price, ratings, reviews, and availability details using Python and Selenium. Supports CSV and JSON export for easy data analysis.",
    tech: ["Python", "Selenium", "Pandas"],
    github: "https://github.com/khushal-coder-learner/amazon-product-scraper"
  },
  "Justdial Leads Generator": {
    summary: "Finding verified business leads manually from Justdial is time-consuming. This tool automates lead collection and compiles structured business contact data for sales or marketing workflows.",
    description: "Extracts business names, categories, phone numbers, and addresses from Justdial results. Cleans and export data directly into google sheets through API.",
    tech: ["Python", "Selenium", "Google Sheets API", "Automation"],
    github: "https://github.com/khushal-coder-learner/justdial-leads-gen"
  },
  "EspnCricInfo Scorecard Scraper": {
    summary: "Sports analysts or enthusiasts often need structured cricket data for performance analytics. This scraper gathers detailed match scorecards automatically from ESPN CricInfo.",
    description: "Collects runs, wickets, player stats, and match summaries from live and archived games. Supports historical data comparison for analytics dashboards. Provided the data in a structured JSON format for further use.",
    tech: ["Python", "Selenium", "HTML Parsing"],
    github: "https://github.com/khushal-coder-learner/espncricinfo-scorecard-scraper"
  }
};

const projects = document.querySelectorAll(".project");

// Create popup elements dynamically
const popupOverlay = document.createElement("div");
popupOverlay.id = "popup-overlay";
popupOverlay.innerHTML = `
  <div id="popup-box">
    <span id="close-popup">&times;</span>
    <div id="popup-content"></div>
  </div>
`;
document.body.appendChild(popupOverlay);

// Click on project → show modal
projects.forEach(project => {
  project.addEventListener("click", () => {
    const title = project.textContent.trim();
    const info = projectsData[title];
    if (!info) return;

    const popupContent = document.getElementById("popup-content");

    // Create tech stack list
    const techList = info.tech.map(t => `<span class="tech-item">${t}</span>`).join(" ");

    popupContent.innerHTML = `
      <h3>${title}</h3>
      <p class="summary"><strong>Summary:</strong> ${info.summary}</p>
      <p><strong>Details:</strong> ${info.description}</p>
      <div class="tech-stack"><strong>Tech Stack:</strong> ${techList}</div>
      <a href="${info.github}" target="_blank" class="github-link">🔗 View on GitHub</a>
    `;

    popupOverlay.style.display = "flex";
    setTimeout(() => popupOverlay.classList.add("visible"), 10);
  });
});

// Close popup
document.getElementById("close-popup").addEventListener("click", () => {
  popupOverlay.classList.remove("visible");
  setTimeout(() => (popupOverlay.style.display = "none"), 300);
});

// Close on outside click
popupOverlay.addEventListener("click", e => {
  if (e.target.id === "popup-overlay") {
    popupOverlay.classList.remove("visible");
    setTimeout(() => (popupOverlay.style.display = "none"), 300);
  }
});


// --- CERTIFICATES SECTION ---

const certificatesData = {
  "Python Programming Fundamentals": {
    file: "certificates/python_fundamentals.pdf",
    verify: "https://coursera.org/share/fe751d5874434a7c53000d4590f74118"
  },
  "Data Analysis and Visualization with Python": {
    file: "certificates/data_analysis_visualization.pdf",
    verify: "https://coursera.org/share/9bfd34222cff10e4be3925f0bff1c2b2"
  },
  "Automation And Scripting with Python": {
    file: "certificates/automation_scripting.pdf",
    verify: "https://coursera.org/share/515d81a5e5befd87af17fb2fcd44ddaf"
  },
  "Web Developemnt with Python": {
    file: "certificates/web_development_with_python.pdf",
    verify: "https://coursera.org/share/aec5e60be6ff2efa7ac3b5db20685c94"
  },
  "Advanced Python Development Techniques": {
    file: "certificates/advanced_python.pdf",
    verify: "https://coursera.org/share/d56fd355a69a91160a33709862365477"
  },
  "Project Development in Python": {
    file: "certificates/project_development.pdf",
    verify: "https://coursera.org/share/c51d721c7ad38a99594afcf238691d64"
  }
};

const certificates = document.querySelectorAll("#courses li");

// Reuse the same popup overlay
certificates.forEach(cert => {
  cert.addEventListener("click", () => {
    const title = cert.textContent.trim();
    const info = certificatesData[title];
    if (!info) return;

    const popupContent = document.getElementById("popup-content");

    popupContent.innerHTML = `
      <h3>${title}</h3>
      <embed src="${info.file}" type="application/pdf" class="certificate-pdf">
      <a href="${info.verify}" target="_blank" class="verify-link">✅ Verify on Coursera</a>
    `;

    popupOverlay.style.display = "flex";
    setTimeout(() => popupOverlay.classList.add("visible"), 10);
  });
});

// TOOLTIP ELEMENT CREATION

const tooltip = document.getElementById("tech-tooltip");
let tooltipTimeout; // Add timeout variable

document.querySelectorAll(".tech-item").forEach(item => {
    item.addEventListener("mouseenter", e => {
        clearTimeout(tooltipTimeout); // Clear any pending hide
        
        const info = item.dataset.info;
        const level = item.dataset.level;

        // Progress bar percentages
        const levels = {
            Beginner: 30,
            Intermediate: 60,
            Advanced: 90
        };

        const percent = levels[level] || 0;

        // Delay tooltip appearance by 1 second
        tooltipTimeout = setTimeout(() => {
            // Build tooltip HTML
            tooltip.innerHTML = `
                <div class="tooltip-content">
                    <div class="tooltip-text">${info}</div>
                    <div class="tooltip-level">Proficiency: ${level}</div>

                    <div class="tooltip-bar">
                        <div class="tooltip-bar-fill" style="width:${percent}%"></div>
                    </div>
                </div>
            `;

            tooltip.style.display = "block";

            const rect = item.getBoundingClientRect();
            const tooltipWidth = 240;

            // Position tooltip above the item, centered
            tooltip.style.left = (rect.left + rect.width / 2) + "px";
            tooltip.style.top = (rect.top - 80) + "px"; // Higher offset for better visibility

            tooltip.classList.add("visible");
        }, 500); // 0.5 second delay
    });

    item.addEventListener("mouseleave", () => {
        clearTimeout(tooltipTimeout); // Cancel the delayed show if mouse leaves
        tooltip.classList.remove("visible");
        setTimeout(() => (tooltip.style.display = "none"), 200);
    });
});
