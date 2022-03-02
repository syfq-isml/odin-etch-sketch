# one-stroke
4th assignment by TheOdinProject: Etch-A-Sketch.

# Task Description
To design a webpage where a user can draw using their mouse while hovering.
 - Create a grid of square divs that make up the canvas
 - Color the square divs as the user hovers their mouse over the divs
 - Create a clear button to clear the drawing and prompts the user for a new grid size without changing number of pixels

Full task can be viewed [here](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project).

# Project Direction
1. To create the square divs, I made a variable named `squareWidth` to calculate the width of each square divs given the size of the canvas, which is initially 480px by 480px. container.style.width, .clientWidth and .getComputedStyle(container).width did not work here (they returned the width of the viewport instead of the `container` div) so I manually typed in the width for the time being. I made the default grid size to be a 64x64 grid.

`createBoard()` utilizes nested loops to create the square divs, one for the vertical and the other for the horizontal axis. This is also where I style the square divs.

2. Once the square divs have been generated, `canvasHover()` listens for a click event by the user. This is where the stroke of the drawing begins. Hovering over any of the square divs in succession colors them black. This is done by listening for "mouse enter" events, which when fired, runs the `colorSq` function to add a `hovering` class to the square divs, turning thme black. {once:true} is essential to only add the `hovering` class once.

3. The clear button listens for a click event, and when fired, runs the `resetBoard` function. First the user is prompted for a new grid size, which is then stored into the exisitng `noOfSquares` variable. This is then checked to handle unwanted inputs such as cancelling the prompt, entering an empty response, entering a number higher than 100 or lower than 1. If the input is valid, then the exisitng square divs are deleted with the `clearBoard` function first, before moving to generate the requested number of square divs. It is to note that this operation takes up a significant amount of processing time.

A difficulty arises when checking whether the input entered from the prompt is a number since the `prompt` function always returns a string. parseInt(noOfSquares) will retrun 'number' even on string inputs, thus rendering `isNaN()` of little use.

# Live Preview
The live preview can be viewed [here](https://syfq-isml.github.io/odin-etch-sketch/).

# Future implementations
- [ ] add numberical input validation on `prompt`
- [ ] add color picker
- [ ] add opacity toggle
- [ ] add gridline toggle
- [ ] add click or hover toggle
- [ ] add resize canvas size function
- [ ] add share button
- [x] add function where a stroke can start anywhere on the canvas, then continue with the rest of the stroke

# Credits and Sources
Background by <a href="https://unsplash.com/@dannie_jing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dannie Jing</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
