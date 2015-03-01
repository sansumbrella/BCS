# Let’s make some Buttons

## Some Examples:

- [Science Friday "Topics" Sidebar](http://www.sciencefriday.com)
- [Button Collection on CodePen](http://codepen.io/collection/CrgJj/)

## The Process:

We’ll be working in CodePen, since it gives us quick feedback on what we are doing.

Make an anchor tag and give it a class for selection. This is the foundation of our button.

```html
<a class="fancy-button" href="#">Button</a>
```

Already, we have a hover and normal state for the button. Let’s select it in CSS by class and give it some fancier styling for each state.

```css
.fancy-button {
	background-color: #333;
}

.fancy-button:hover {
	background-color: #069;
}
```

Finally, let’s use the `transition` property so we get a nice animated change between the values.

```css
.fancy-button {
	transition: background-color 0.2s ease-out;
}
```

From here, you might get extra-fancy with CSS animations.

## References:
- [Transition: CSS Tricks](http://css-tricks.com/almanac/properties/t/transition/)
- [Transition: Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Transition Timing: Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

## Result:

We made [these buttons](http://codepen.io/sansumbrella/pen/xzkdl) together during the mentoring session. I cleaned up and commented the code a bit afterward.
