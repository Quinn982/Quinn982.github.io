window.onload=(init);
function init()
{
    let small=document.getElementById("small");
    small.onclick=function(){
        let sun=window.open("../small.html","","width=500","height=500");
        sun.resizeTo(500,500);
    };
    
    let medium=document.getElementById("medium");
    medium.onclick=function(){
        let cloud=window.open("../medium.html","","width=500","height=500");
        cloud.resizeTo(500,500);
    };
    let big=document.getElementById("big");
    big.onclick=function(){
        let night=window.open("../big.html","","width=500","height=500");
        night.resizeTo(500,500);
    };
}