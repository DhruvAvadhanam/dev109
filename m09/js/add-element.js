document.getElementById("addItem").addEventListener("click", addItem);

function addItem() {
  var input = document.getElementById("item");
  var itemText = input.value.trim(); // Clean up input

  try {
    if (itemText === "") {
      throw new Error("Empty input.");
    }

    // Create new list item
    var newEl = document.createElement("li");
    var newText = document.createTextNode(itemText);
    newEl.appendChild(newText);

    // Add to list
    var position = document.getElementById("todo");
    position.appendChild(newEl);

    // Extra Credit: Clear the input box
    input.value = "";
  } catch (e) {
    console.log(e);

    // Show error message on screen
    var msg = document.getElementById("error-message");
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "error-message";
      msg.style.color = "white";
      msg.textContent = "Please enter an item before adding it to the list.";
      document.getElementById("page").appendChild(msg);
    } else {
      msg.textContent = "Please enter an item before adding it to the list.";
    }
  } finally {
    // If the input was valid, remove any existing error
    if (itemText !== "") {
      var msg = document.getElementById("error-message");
      if (msg) {
        msg.remove();
      }
    }
  }
}
