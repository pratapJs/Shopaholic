//******ADD ITEMS  ******/

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
