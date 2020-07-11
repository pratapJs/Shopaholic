//******ADD ITEMS  ******/
let textInput = document.getElementById("add-item");

textInput.addEventListener("submit", (e) => {
  let ul = document.getElementsByTagName("ul")[0];
  e.preventDefault();
  let text = textInput.querySelector("input").value;

  //clear the input box
  textInput.querySelector("input").value = null;

  let li = document.createElement("li");
  let groceryName = document.createElement("span");
  let deleteButton = document.createElement("span");

  li.appendChild(groceryName).textContent = text;
  li.appendChild(deleteButton).textContent = "Delete";

  ul.appendChild(li);
  groceryName.classList.add("name");
  deleteButton.classList.add("delete");
});

//****** HIDE ITEMS  ******

let checkbox = document.querySelector("#hide");
checkbox.addEventListener("change", (e) => {
  let groceryList = document.getElementById("grocery-list");
  if (checkbox.checked) {
    groceryList.style.display = "none";
  } else {
    groceryList.style.display = "block";
  }
});

//****** SEARCH ITEMS  ******

const SEARCH = document.forms["search-item"].querySelector("input");

SEARCH.addEventListener("keyup", (e) => {
  let text = e.target.value.toLowerCase();
  let groceryList = document.querySelector("#grocery-list");
  let groceries = groceryList.getElementsByTagName("li");

  let groceriesArray = Array.from(groceries);
  groceriesArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    groceryNameLower = groceryName.toLowerCase();

    if (groceryNameLower.indexOf(text) == -1) {
      grocery.style.display = "none";
    } else {
      grocery.style.display = "block";
    }
  });
});

//****** DELETE ITEMS  ******

let groceryListUL = document.querySelector("#grocery-list ul");

//add event Listener
groceryListUL.addEventListener("click", remove);

function remove(e) {
  let target = e.target;
  if (target.className === "delete") {
    let li = target.parentElement;
    li.remove();
  }
}

//******  TABS  ******

let headings = document.querySelector(".heading");

let panels = document.querySelectorAll(".panel");

let selectedPanel = null;

headings.addEventListener("click", (e) => {
  let target = e.target;

  let dataAttribute = e.target.dataset.clicked;

  if (selectedPanel != null) {
    selectedPanel.classList.toggle("selected");
  }
  selectedPanel = target;
  selectedPanel.classList.toggle("selected");

  let targetPanel = document.querySelector(dataAttribute);

  panels.forEach((panel) => {
    if (panel == targetPanel) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });
});

//Answer Button

let answerButton = document.getElementById("showAnswer");
answerButton.addEventListener("click", answer);

function answer() {
  document.getElementById("answer").classList.add("show");
  document.getElementById("answer").textContent = "AN IMPASTA";
  answerButton.style.display = "none";
}
