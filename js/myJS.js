var currentPosition = 3;
var totalImages = document.querySelectorAll("#carousel-container>div").length;
var totalDisplayedImages = 3;
function checkWidth() {
    if (window.innerWidth > 1200) {
        totalDisplayedImages = 3;
    } else if (window.innerWidth <= 1200 && window.innerWidth > 768) {
        totalDisplayedImages = 2;
    }
    currentPosition = totalDisplayedImages;
    checkAvailability(currentPosition, totalImages);
    document.getElementById("carousel-container").style.transform = "translate(0%,0)";
}
checkWidth();
window.addEventListener("resize",checkWidth)
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
    checkAvailability(currentPosition, totalImages);
    document.getElementById("main-background").style.left = 0;
    document.getElementById("main-content").style.right = 0;
    handleCarousel();
}
window.addEventListener("scroll", () => {
    var scrollY = this.scrollY;
    // document.getElementById("test").innerText = scrollY;
    if (scrollY === 0) {
        document.getElementById("mobile-nav").style.backgroundColor = "rgba(0, 0, 0, 0)";
        document.getElementById("mobile-nav").style.boxShadow = "none";
    }
    if (scrollY > 0) {
        document.getElementById("mobile-nav").style.background = "white";
        document.getElementById("mobile-nav").style.boxShadow = "4px 4px 4px 0 rgba(37, 114, 81, 0.06), 4px 6px 20px 0 rgba(37, 114, 81, 0.06)";
    }
    if (scrollY > 250 && scrollY < 900) {
        document.getElementById("plant-a-tree").style.right = "-12px";
    } else if (scrollY >= 900 && scrollY < 1750) {
        document.getElementById("live-sustainably").style.left = "12px";
    } else if (scrollY >= 1750) {
        document.getElementById("save-energy").style.right = "-12px";
    }
})
function checkAvailability(currentPosition, totalImages) {
    if (currentPosition === totalDisplayedImages) {
        document.getElementById("pre").style.display = "none";
        document.getElementById("next").style.display = "block";
    } else if (currentPosition >= totalImages) {
        document.getElementById("pre").style.display = "block";
        document.getElementById("next").style.display = "none";
    } else {
        document.getElementById("pre").style.display = "block";
        document.getElementById("next").style.display = "block";
    }
}
function handleCarousel() {
    let width = 0;
    function setWidth(){
        if(totalDisplayedImages===2){
            width = 50;
        }else{
            width = 33.33333333;
        }
    }
    setWidth();
    document.getElementById("pre").addEventListener("click", (e) => {
        e.preventDefault();
        handlePrevious();
    })
    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();
        handleNext();
    })
    function handlePrevious(){
        currentPosition--;
        checkAvailability(currentPosition, totalImages);
        setWidth();
        document.getElementById("carousel-container").style.transform = "translate(-" + ((width * (currentPosition - totalDisplayedImages))) + "%,0)";
    }
    function handleNext(){
        setWidth();
        document.getElementById("carousel-container").style.transform = "translate(-" + (width * (currentPosition - (totalDisplayedImages-1))) + "%,0)";
        currentPosition++;
        checkAvailability(currentPosition, totalImages);
    }
    window.setInterval(autoNext,3000);
    function autoNext(){
        if(currentPosition < totalImages){
            handleNext();
        }else if(currentPosition >= totalImages){
            document.getElementById("carousel-container").style.transform = "translate(0%,0)";
            currentPosition = totalDisplayedImages;
        }
    }
}
