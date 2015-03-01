# Functions: A Short Quiz

Work in CodePen or JSFiddle, since they provide a simple way to create web content.

Optionally, you can work in your browser's developer console.

## The Core

console.log, a built-in function, will write output to the developer console.

You can use it like this:
```javascript
console.log( "Some text", "Some more text", 5 );
```

1) Write your own function that adds two numbers together and returns the result. Your function should accept two parameters, one for each number that it will add.

Remember that you can do math with javascript by using the `+` sign to add, `-` to subtract, `*` to multiply, and `/` to divide.

2) Output the result of the function using console.log.

## Even More

document.querySelector is another built-in function. It returns a reference to an element in the current html document.

You can use it like this:
```javascript
var element = document.querySelector( "p" );
```

Html elements have an `innerHTML` property that corresponds to the text that is shown in the browser window.
- Add an html element to your page, then select it with document.querySelector.
- Write the output of your first function to the page using the element’s innerHTML property.
