document.getElementById("addItem").addEventListener("click", addItem);

function addItem() {
  try {
    var input = document.getElementById("item");
    var itemText = input.value.trim(); // remove leading/trailing spaces

    // Check for empty input and throw error if so
    if (itemText === "") {
      throw new Error("Cannot add empty item.");
    }

    // Create new <li> and text node
    var newEl = document.createElement("li");
    var newText = document.createTextNode(itemText);
    newEl.appendChild(newText);

    // Append to the list
    var position = document.getElementById("todo");
    position.appendChild(newEl);

    input.value = "";
  } catch (e) {
    console.log(e); 
  } finally {
    if (document.getElementById("item").value.trim() === "") {
      // Display an error message on the page (no alert)
      var msg = document.getElementById("error-message");
      if (!msg) {
        msg = document.createElement("p");
        msg.id = "error-message";
        msg.style.color = "white";
        msg.textContent = "Please enter a grocery item before adding.";
        document.getElementById("page").appendChild(msg);
      }
      return; 
    } else {
      // Remove error message if it exists
      var msg = document.getElementById("error-message");
      if (msg) {
        msg.remove();
      }
    }
  }
}
