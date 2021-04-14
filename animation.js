const balls = document.getElementsByClassName ('ball');
// Creates a handle for the 'ball' class elements in the HTML.

document.onmousemove = (event) => {
// Tracks the x and y position of the mouse.

    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';
    // Creates a handle on the x and y position of the mouse.
    // Also scales back the movement by a percent of the window dimension.

    for (let i = 0; i < 2 ; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        //Sets the ball's left and top properties to the x and y handles.

        balls[i].transform = 'translate (-' + x + ', -' + y + ')';
        //translates the balls movements.
    };
};