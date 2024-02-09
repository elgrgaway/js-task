const skillsArray = [
  {
    name: "HTML",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "CSS",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "Javascript",
    experience: "2013",
    type: "frontend",
  },
  {
    name: "React",
    experience: "2016",
    type: "frontend",
  },
  {
    name: "Redux",
    experience: "2017",
    type: "frontend",
  },
  {
    name: "React Testing Library",
    experience: "2020",
    type: "frontend",
  },
  {
    name: "Node.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Express.js",
    experience: "2020",
    type: "backend",
  },
  {
    name: "Mongodb",
    experience: "2020",
    type: "backend",
  },
];

function calculateYear(date) {
  let currentYear = new Date().getFullYear();
  let result = currentYear - date;
  return result;
}
// Add skills dynamically

const skillsSection = document.querySelector("#skills");

const ulElement = ` <ul class="skills__list"></ul>  `;

function createSkill() {
  const ulElement = document.querySelector(".skills__list");

  for (let i = 0; i < skillsArray.length; i++) {
    const li = `
              <li data-type="${skillsArray[i].type}" class="skills__column">
                <h2 class="skills__title">${skillsArray[i].name}</h2>
                <span class="skills__years">${calculateYear(
                  skillsArray[i].experience
                )} years</span>
              </li>
    `;
    ulElement.insertAdjacentHTML("beforeend", li);
  }
}
skillsSection.insertAdjacentHTML("beforeend", ulElement);
createSkill();

// Calculate years of experience automatically

/* ✨ Bonus ✨ */
// Add filters to skills section
//_______________________ answer____________________
/*
const buttons = document.querySelectorAll(".skills__button");
const all = document.querySelector(".skills__button");
const frontend = document.querySelector("button[data-type=frontend]");
const backend = document.querySelector("button[data-type=backend]");
const lis = document.querySelectorAll(".skills__column");
const liBackend = document.querySelectorAll("li[data-type=backend]");
const liFrontend = document.querySelectorAll("li[data-type=frontend]");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((btnAgain) => {
      btnAgain.classList.remove("skills__button--isActive");
    });
    btn.classList.add("skills__button--isActive");

    lis.forEach((element) => {
      element.removeAttribute("style");
    });
  });
});

frontend.addEventListener("click", () => {
  liFrontend.forEach((element) => {
    element.removeAttribute("style");
  });
  liBackend.forEach((element) => {
    element.style.display = "none";
  });
});

backend.addEventListener("click", () => {
  liBackend.forEach((element) => {
    element.removeAttribute("style");
  });
  liFrontend.forEach((element) => {
    element.style.display = "none";
  });
});*/

//__________ another one with gpt_____________________


const buttons = document.querySelectorAll(".skills__button");
const lis = document.querySelectorAll(".skills__column");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove styles from all list items
    lis.forEach(element => element.removeAttribute("style"));

    // Remove active class from all buttons
    buttons.forEach(btn => btn.classList.remove("skills__button--isActive"));

    // Add active class to clicked button
    button.classList.add("skills__button--isActive");

    // Hide/show list items based on button data-type
    const buttonType = button.getAttribute("data-type");
    lis.forEach(element => {
      if (buttonType === "all" || element.getAttribute("data-type") === buttonType) {
        element.style.display = "";
      } else {
        element.style.display = "none";
      }
    });
  });
});
