console.log("I....hurt myself today...to see if I still bleed...I focus on the pain...the only thing thats real")


let flightEl = document.getElementById("flight");
let mindreadingEl = document.getElementById("mindreading");
let xrayEl = document.getElementById("xray");
//had to use all three, this turns it in to a nodeList, which acts like an array
let powerListEl = document.querySelectorAll(".power")

console.log(powerListEl)

document.querySelector("#activate-flight").addEventListener("click", flightFunction = () => {
    flightEl.classList.remove("disabled")
    flightEl.classList.add("enabled")
})
document.querySelector("#activate-mindreading").addEventListener("click", mindreadingFunction = () => {
    mindreadingEl.classList.remove("disabled")
    mindreadingEl.classList.add("enabled")
})
document.querySelector("#activate-xray").addEventListener("click", xrayFunction = () => {
    xrayEl.classList.remove("disabled")
    xrayEl.classList.add("enabled")
})


document.querySelector("#activate-all").addEventListener("click", activateFunction = () => {
    for(let i =0; i < powerListEl.length; i++){
        powerListEl[i].classList.remove("disabled")
        powerListEl[i].classList.add("enabled")
    }
})
document.querySelector("#deactivate-all").addEventListener("click", deactivateFunction = () => {
    for(let i =0; i < powerListEl.length; i++){
        powerListEl[i].classList.remove("enabled")
        powerListEl[i].classList.add("disabled")
    }
})  