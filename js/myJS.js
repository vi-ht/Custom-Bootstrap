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
window.addEventListener("scroll", (e) => {
    e.preventDefault();
    var scrollCordinate = this.scrollY;
    if (scrollCordinate > 0) {

    }


})