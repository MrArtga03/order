//tabs
// hide tabs

const tabs = document.querySelectorAll(".link__block");

for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}

// show tabs

const areaTarget = document.querySelector(".first__block__links");
const areaTarget2 = document.querySelector(".third__block__links");
const areaTarget3 = document.querySelector(".fourth__block__links");
const areaTarget4 = document.querySelector(".fifth__block__links");

// first block

areaTarget.addEventListener("mouseover", () => {
    if(areaTarget) {
        document.querySelector(".first__links").style.display = "block";
    }
});

areaTarget.addEventListener("mouseout", () => {
    if(areaTarget) {
        document.querySelector(".first__links").style.display = "none";
    }
});


// second block

areaTarget2.addEventListener("mouseover", () => {
    if(areaTarget2) {
        document.querySelector(".third__links").style.display = "block";
    }
});

areaTarget2.addEventListener("mouseout", () => {
    if(areaTarget2) {
        document.querySelector(".third__links").style.display = "none";
    }
});

// third block

areaTarget3.addEventListener("mouseover", () => {
    if(areaTarget3) {
        document.querySelector(".fourth__links").style.display = "block";
    }
});

areaTarget3.addEventListener("mouseout", () => {
    if(areaTarget3) {
        document.querySelector(".fourth__links").style.display = "none";
    }
});

// fourth block

areaTarget4.addEventListener("mouseover", () => {
    if(areaTarget4) {
        document.querySelector(".fifth__links").style.display = "block";
    }
});

areaTarget4.addEventListener("mouseout", () => {
    if(areaTarget4) {
        document.querySelector(".fifth__links").style.display = "none";
    }
});