// Get references to the DOM elements we care about.
var result = document.querySelector(".result"),
    input = document.querySelector(".input"),
    userOutput = document.querySelector(".userOutput"),
    errorOutput = document.querySelector(".error"),
    codeMirror = CodeMirror(input, {mode: "javascript",
                                    theme:'blackboard',
                                    lineNumbers: true,
                                    smartIndent: true}),
    errorMessageTimeout;

// write(text) Writes text to user output.
var write = function(text) {
  userOutput.textContent += text;
}

// clearOutput() Clears all text from user output.
var clearOutput = function() {
  userOutput.textContent = "";
}

// evaluateUserCode() Evaluates the user script and show error messages.
var evaluateUserCode = function(cm) {
  var code = cm.getValue();
  console.log("yolo");
  if (errorMessageTimeout) {
    // If we were going to show an error message from previous input,
    // cancel that error message since the user is writing something new.
    clearTimeout(errorMessageTimeout);
    errorOutput.textContent = "";
    result.textContent = "";
  }

  try {
    // Clear the user output.
    clearOutput();
    // Run the input code and put any text results in the result field.
    var r = eval(code);
    result.textContent = eval(code);
  }
  catch(err) {
    // displayError() will show the current error message on screen.
    var displayError = function() {
      errorOutput.textContent = "[error]: " + err.message;
    };
    // Call displayError() after 250ms.
    // The delay allows the user to keep typing without seeing a long series of error messages.
    errorMessageTimeout = setTimeout(displayError, 500);
  }
}

// Run our evaluate function whenever text is written in the input textarea.
codeMirror.on("changes", evaluateUserCode);
