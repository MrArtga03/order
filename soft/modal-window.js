// modal window

const button = document.querySelector(".docsearch");
const buttonAdapt = document.querySelector(".search__adapt");
const modalWindow = document.querySelector(".container-window");
const wrapper = document.querySelector(".wrapper__content");
const cancel = document.querySelector(".cancel-btn");

// show the modal window by the button

button.addEventListener("click", () => {
    if (button) {
        document.querySelector(".container-window").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
    }
});

// close the modal window by clicking on the window

window.addEventListener("click", (e) => {
    if (e.target == wrapper || e.target == modalWindow) {
        document.querySelector(".container-window").style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
    }
}) ;

// modal window for adaptation

buttonAdapt.addEventListener("click", () => {
    if (buttonAdapt) {
        document.querySelector(".container-window").style.display = "block";
    }
});

// close the adapted modal window

cancel.addEventListener("click", () => {
    if (cancel) {
        document.querySelector(".container-window").style.display = "none";
    }
});