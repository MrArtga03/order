// advertisement

const containerAdd = document.getElementById("container__ad");
const closeBtn = document.getElementById("btn");

closeBtn.addEventListener("click", function() {
    if (closeBtn) {
        containerAdd.style.display = "none";
    }
});