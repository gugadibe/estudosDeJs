const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

function addItem(e) {
  e.preventDefault();

  //get input value
  const newItem = document.getElementById("item");

  //create new li element
  const li = document.createElement("li");
  //add class
  li.classList.add("list-group-item");

  // add text
  li.textContent = newItem.value;
  //create delete button element
  const deleteButton = document.createElement("button");
  // add class
  deleteButton.classList.add(
    "btn",
    "btn-danger",
    "btn-sm",
    "float-right",
    "delete"
  );

  // append button to li
  deleteButton.textContent = "X";
  li.appendChild(deleteButton);

  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter Items

function filterItems(e) {
  // convert to lowercase
  const text = e.target.value.toLowerCase();
  // get lis
  let items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
