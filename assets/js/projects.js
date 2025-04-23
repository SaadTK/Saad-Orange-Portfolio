const projects = [
  {
    name: "Skill Connect - Job Portal",
    description:
      "Full-stack job portal with user dashboards, live search, GitHub OAuth, Stripe, and Redis caching.",
    images: [
      "assets/projects/project1/homepage1.jpeg",
      "assets/projects/project1/homepage2.jpeg",
      "assets/projects/project1/homepage3.jpeg",
      "assets/projects/project1/homepage4.jpeg",
    ],
    liveLink: "https://skill-connect-online.webhop.me",
    gitHubLink: "https://github.com/SaadTK/Skill-Connect-Job-Portal",
  },
  {
    name: "Accesso-Sync E-commerce",
    description:
      "React-based e-commerce with seller panel, Stripe payments, and browser caching.",
    images: [
      "assets/projects/project2/homepage1.jpeg",
      "assets/projects/project2/homepage2.jpeg",
      "assets/projects/project2/homepage3.jpeg",
      "assets/projects/project2/homepage4.jpeg",
    ],
    liveLink: "https://www.accesso-sync.webhop.me",
    gitHubLink: "https://github.com/SaadTK/Accesso-Sync",
  },
  {
    name: "MGM Gym Web App",
    description:
      "Booking app for a bootcamp-style gym. Membership plans, instructor management, and appointment system.",
    images: [
      "assets/projects/project3/homepage1.jpeg",
      "assets/projects/project3/homepage2.jpeg",
      "assets/projects/project3/homepage3.jpeg",
      "assets/projects/project3/homepage4.jpeg",
    ],
    liveLink: "#",
    gitHubLink: "#",
  },
  {
    name: "Grocery Store Admin Dashboard",
    description:
      "React + Tailwind admin dashboard to manage inventory, orders, and analytics.",
    images: [
      "assets/projects/project4/homepage1.jpeg",
      "assets/projects/project4/homepage2.jpeg",
      "assets/projects/project4/homepage3.jpeg",
      "assets/projects/project4/homepage4.jpeg",
    ],
    liveLink: "#",
    gitHubLink: "#",
  },
];

const container = document.getElementById("projects-container");

projects.forEach((project, index) => {
  const carouselId = `carouselProject${index}`;

  const slides = project.images
    .map(
      (src, i) => ` 
        <div class="carousel-item ${i === 0 ? "active" : ""}">
          <img src="${src}" style="border-radius: 20px;" class="d-block w-100" alt="${
        project.name
      } - Slide ${i + 1}" />
        </div>`
    )
    .join("");

  container.innerHTML += `
      <article class="projects-card">
        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${slides}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <div class="projects-data">
          <h3 class="projects-name">${project.name}</h3>
          <p class="projects-description">${project.description}</p>

          <div class="projects-skills">
            <!-- Add icons if needed -->
          </div>
<div style="display:flex; gap:100px;">
          <a href="${project.liveLink}" style="border: 2px solid blue; border-radius: 30px; width:25%; background-color: white" class="projects-button">
            <i class="ri-link" aria-hidden="true"></i>
            <span>Visit Live</span>
          </a>

          <a href="${project.gitHubLink}" style="border: 2px solid blue; border-radius: 30px; width:40%; background-color: white" class="projects-button">
            <i class="ri-github-line" aria-hidden="true"></i>
            <span>View on GitHub</span>
          </a>
        </div>
        </div>
      </article>
    `;
});
