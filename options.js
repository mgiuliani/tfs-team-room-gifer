// Saves options to localStorage.
function save_options() {
  var interval = document.getElementById("refresh-interval").value;
  localStorage["refresh-interval"] = interval;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var interval = localStorage["refresh-interval"] || 1;
  document.getElementById("refresh-interval").value = interval;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);