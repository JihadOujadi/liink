function displayButton() {
    // Initialize variable
    const numCheckboxes = document.querySelectorAll(".checkbox-checked").length;
    let checkboxesChecked = 0;
  
    // Check if all checkboxes are checked
    const checkboxes = document.querySelectorAll(".checkbox-checked");
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxesChecked++;
      }
    }
  
    if (checkboxesChecked === numCheckboxes) {
      // Display button
      document.getElementById("bouton").classList.add("button-active");
      document.getElementById("bouton").classList.remove("bouton-inactive");
    } else {
      // Hide button
      document.getElementById("bouton").classList.remove("button-active");
      document.getElementById("bouton").classList.add("bouton-inactive");
    }
  }
  
  // Add an "OnChange" event to each checkbox
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", displayButton);
  }
  
  // Call function initially
  displayButton();