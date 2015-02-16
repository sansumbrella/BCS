// Get references to the DOM elements we care about.
var output = document.querySelector(".output"),
    input = document.querySelector(".input"),
    errorMessageTimeout;

// write(text) Writes text to user output.
var write = function(text, messageType) {
  var messageType = messageType || "",
      p = document.createElement("p");
  p.className = messageType;
  p.textContent = text;

  output.appendChild(p);
}

// clearOutput() Clears all text from user output.
var clearOutput = function() {
  output.textContent = "";
}

// evaluateUserCode() Evaluates the user script and show error messages.
var evaluateUserCode = function() {
  clearOutput();
  // Get the input code from the textarea.
  var code = input.value;

  if (errorMessageTimeout) {
    // If we were going to show an error message from previous input,
    // cancel that error message since the user is writing something new.
    clearTimeout(errorMessageTimeout);
  }

  try {
    // Run the input code and put any text outputs in the output field.
    var result = eval(code);
    if (result !== "") {
      write(result, "result");
    }
  }
  catch(err) {
    // displayError() will show the current error message on screen.
    var displayError = function() {
      write(err.message, "error");
    };
    // Call displayError() after 500ms.
    // The delay allows the user to keep typing without seeing a long series of error messages.
    errorMessageTimeout = setTimeout(displayError, 500);
  }
}

// Run our evaluate function whenever text is written in the input textarea.
input.addEventListener("input", evaluateUserCode);
