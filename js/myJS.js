var navList = document.getElementsByClassName("nav-link");
for (let i = 0; i < navList.length; i++) {
    if (i !== 0) {
        navList[i].addEventListener("mouseover", (e) => {
            e.preventDefault();
            navList[i].parentNode.childNodes[3].style.width = i === 1 ? "60px" : i === 2 ? "70px" : "48px";
        })
        navList[i].addEventListener("mouseout", (e) => {
            e.preventDefault();
            navList[i].parentNode.childNodes[3].style.width = "0";
        })
    }
}
document.body.addEventListener("load", onLoad())
function onLoad() {
    document.getElementById("main-background").style.left = 0;
    document.getElementById("main-content").style.right = 0;
}
window.addEventListener("scroll", () => {
    var scrollY = this.scrollY;
    // document.getElementById("test").innerText = scrollY;
    if(scrollY>250 && scrollY<900){
        document.getElementById("plant-a-tree").style.right = 0;
    }else if(scrollY>=900 && scrollY< 1750){
        document.getElementById("live-sustainably").style.left = 0;
    } else if(scrollY>=1750){
        document.getElementById("save-energy").style.right = 0;
        
    }
    

})