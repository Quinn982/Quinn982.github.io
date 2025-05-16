window.onload=(init);
let canvasWidth=455;
let canvasHeight=400;
let grid=int[225];
function init()
{
     //Basic canvas setup
    const canvas=document.querySelector('#canvas');
    const ctx=canvas.getContext('2d');
    ctx.fillStyle="rgb(248, 245, 242)";
    ctx.fillRect(0,0,500,500);
    //Can extract it for DRY
    //Array for range of boxes for the on click 
    let width=canvasWidth/15;
    let height=canvasHeight/15;
    //Whole numbers
    width=width.toPrecision(2);
    height=height.toPrecision(2);
    for(let i=1;i<16;i++)
    {
        //Columns
        ctx.moveTo(width*i,height);
        ctx.beginPath();
        ctx.lineTo(width*i,0);
        ctx.lineTo(width*i,canvasHeight);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        //Rows
        ctx.moveTo(width,height);
        ctx.beginPath();
        ctx.lineTo(0,height*i);
        ctx.lineTo(canvasWidth,height*i);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
       //grid[i]=(width*i,height);
    }
}