// =============================================
//  SKILLS — adicione ou remova daqui
// =============================================
const skills = [
  { name: "HTML",        img: "image/html.png" },
  { name: "CSS",         img: "image/css.png" },
  { name: "JavaScript",  img: "image/javascript.png" },
  { name: "Java",        img: "image/java.png" },
  { name: "Spring Boot", img: "image/spring.png" },
  { name: "Bootstrap",   img: "image/bootstrap.png" },
  { name: "MySQL",       img: "image/mysql.png" },
  { name: "MongoDB",     img: "image/mongo.svg" },
  { name: "VsCode",      img: "image/vscode.png" },
  { name: "Intellij",    img: "image/intellij.png" },
  { name: "Figma",       img: "image/figma.png" },
  { name: "GitHub",      img: "image/github.png" },
  { name: "Git",         img: "image/git.png" },
];

// =============================================
//  PROJECTS — adicione ou remova daqui
// =============================================
const projects = [
  {
    title: "Lumière",
    description: "E-commerce de uma Perfumaria, desenvolvida com Angular e JavaScript.",
    image: "image/lumiere.png",          // caminho ou URL da imagem
    techs: ["Angular", "JavaScript"],
    liveUrl: "#",             // link do projeto ao vivo (deixe "#" se não tiver)
    githubUrl: "#",           // link do repositório GitHub
  },
  {
    title: "CineTime",
    description: "Plataforma de streaming de filmes e séries para assistir com os amigos.",
    image: "image/cinetime.png",          
    techs: ["Java", "Spring Boot", "JavaScript"],
    liveUrl: "#",             
    githubUrl: "#",          
  },
];


function renderSkills() {
  const container = document.querySelector(".logo-skills");
  if (!container) return;
  container.innerHTML = skills
    .map(
      (s) => `
      <div>
        <img src="${s.img}" alt="${s.name}">
        <h2>${s.name}</h2>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const container = document.querySelector(".projects-container");
  if (!container) return;
  container.innerHTML = projects
    .map(
      (p) => `
      <div class="project-card">
        <div class="project-card__img-wrapper">
          <img src="${p.image}" alt="${p.title}" onerror="this.parentElement.classList.add('no-img')">
        </div>
        <div class="project-card__body">
          <div class="project-card__techs">
            ${p.techs.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <h2 class="project-card__title">${p.title}</h2>
          <p class="project-card__desc">${p.description}</p>
          <div class="project-card__links">
            <a href="${p.liveUrl}" target="_blank" title="Ver projeto" ${p.liveUrl === "#" ? 'aria-disabled="true"' : ""}>
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
            <a href="${p.githubUrl}" target="_blank" title="Ver no GitHub" ${p.githubUrl === "#" ? 'aria-disabled="true"' : ""}>
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>`
    )
    .join("");
}

function initMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navList   = document.querySelector(".nav-list");
  if (!hamburger || !navList) return;

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  navList.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navList.classList.remove("open");
      hamburger.classList.remove("active");
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderProjects();
  initMenu();
});
