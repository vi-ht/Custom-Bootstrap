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
    if(scrollY === 0){
        document.getElementById("mobile-nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("mobile-nav").style.boxShadow = "none";
    }
    if(scrollY > 0){
        document.getElementById("mobile-nav").style.background = "white";
        document.getElementById("mobile-nav").style.boxShadow = "4px 4px 4px 0 rgba(37, 114, 81, 0.06), 4px 6px 20px 0 rgba(37, 114, 81, 0.06)";
    }
    if(scrollY>250 && scrollY<900){
        document.getElementById("plant-a-tree").style.right = "-12px";
    }else if(scrollY>=900 && scrollY< 1750){
        document.getElementById("live-sustainably").style.left = "12px";
    } else if(scrollY>=1750){
        document.getElementById("save-energy").style.right = "-12px";
        
    }
    

})