window.onload=(init);
//Create a pop up window so the application size is fixed at 500 by 500
function init()
{
    let play=document.querySelector("#start");
    play.onclick=function(){
        let small=window.open("../mainApp.html","","width=500","height=500");
        small.resizeTo(500,500);
    };
}