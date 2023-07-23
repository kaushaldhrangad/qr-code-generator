const generatorTab = document.querySelector(".nav-gene");
const scannerTab = document.querySelector(".nav-scan");

generatorTab.addEventListener("click", () => {
    generatorTab.classList.add("active");
    scannerTab.classList.remove("active");

    document.querySelector(".generator").style.display = "block";
    document.querySelector(".scanner").style.display = "none";
});

scannerTab.addEventListener("click", () => {
    scannerTab.classList.add("active");
    generatorTab.classList.remove("active");

    document.querySelector(".generator").style.display = "none";
    document.querySelector(".scanner").style.display = "block";
})