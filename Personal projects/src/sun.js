window.onload = (init);
let canvasWidth = 455;
let canvasHeight = 400;

function init() {
    //Array for range of boxes for the on click 
    let grid = { "boxSpace": [0,0] };
    let mousePos = [0, 0];
    //Basic canvas setup. Can be extracted to a utlis js and imported in for
    //DRY reasons
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(248, 245, 242)";
    //Filled color
    //ctx.fillStyle="rgb(172, 157, 198)";
    ctx.fillRect(0, 0, 500, 500);
    //Can extract it for DRY

    let width = canvasWidth / 8;
    let height = canvasHeight / 8;
    //Whole numbers
    width = width.toPrecision(2);
    height = height.toPrecision(2);
    for (let i = 1; i < 9; i++) {
        //Columns
        ctx.moveTo(width * i, height);
        ctx.beginPath();
        ctx.lineTo(width * i, 0);
        ctx.lineTo(width * i, canvasHeight);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //Rows
        ctx.moveTo(width, height);
        ctx.beginPath();
        ctx.lineTo(0, height * i);
        ctx.lineTo(canvasWidth, height * i);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        grid.boxSpace[i] = [width * i, height * i];
        console.log("range: " + grid.boxSpace[i]);
    }

    canvas.addEventListener('click', (e) => {
        //You need to adjust the mouse position coordinates in order to get 
        //the proper mouse/pointer location. 
        const boundingRect = canvas.getBoundingClientRect();
        const adjustedX = e.clientX - boundingRect.x;
        const adjustedY = e.clientY - boundingRect.y;
        //Round the mouse position in order to check the box to be colored. 
        mousePos[0] = adjustedX.toPrecision(3);
        mousePos[1] = adjustedY.toPrecision(3);
        console.log(mousePos);

        for(let c=0;c<grid.length;c++)
        {
            if(mousePos[0]>grid[c])
            {
                console.log(grid[c]);
            }
        }
    });
}