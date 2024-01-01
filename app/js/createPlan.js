function scrollTo(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

const menu = document.querySelectorAll(".menu-item-name");

menu[0].addEventListener("click", () => scrollTo("preferences"));
menu[1].addEventListener("click", () => scrollTo("beanType"));
menu[2].addEventListener("click", () => scrollTo("quantity"));
menu[3].addEventListener("click", () => scrollTo("grindOption"));
menu[4].addEventListener("click", () => scrollTo("deliveries"));

const accordion = document.querySelectorAll(".accordion__question");

accordion.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    const accordionContent = question.nextElementSibling;
    accordionContent.classList.toggle("collapsed");
  });
});

const accordionGroup = document.querySelectorAll(".accordion-content");

accordionGroup.forEach((group) => {
  group.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
      const selectedItem = group.querySelector(".selected");
      if (selectedItem) {
        selectedItem.classList.remove("selected");
      }
      e.target.classList.add("selected");
    }
  });
});

const summary = document.querySelector(".summary");

let option1 = "Filter";
let option2 = "Decaf";
let option3 = "250g";
let option4 = "Cafetiére";
let option5 = "Every Week";

let summaryString = generateSummaryString();
summary.innerHTML = summaryString;

function generateSummaryString() {
  return `I drink my coffee as 
    <span class="option-1">${option1}</span>, with a
    <span class="option-2">${option2}</span> type of bean. 
    <span class="option-3">${option3}</span> ground ala
    <span class="option-4">${option4}</span> , sent to me 
    <span class="option-5">${option5}</span>.`;
}

accordionGroup.forEach((group) => {
  group.addEventListener("click", (e) => {
    const headerText = e.target.querySelector(".header").textContent;

    if (group.classList.contains("group-1")) {
      option1 = headerText;
    }

    if (group.classList.contains("group-2")) {
      option2 = headerText;
    }

    if (group.classList.contains("group-3")) {
      option3 = headerText;
    }

    if (group.classList.contains("group-4")) {
      option4 = headerText;
    }

    if (group.classList.contains("group-5")) {
      option5 = headerText;
    }

    summaryString = generateSummaryString();
    summary.innerHTML = summaryString;
  });
});

const createPlanBtn = document.querySelector(".button-right");
const summaryText = document.querySelector(".summary_text");
const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".checkout__button");

createPlanBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  summaryText.innerHTML = summaryString;
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hide");
  document.body.style.backgroundColor = "white";
});

/* 
close the modal when the user clicks outside of it
*/

window.addEventListener("click", (e) => { 
  if (e.target === modal) {
    modal.classList.add("hide");
    document.body.style.backgroundColor = "white";
  }
});