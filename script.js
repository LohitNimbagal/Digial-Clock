const time = document.querySelector("#clock")
const container = document.querySelector("#container")
const ctrButton = document.querySelectorAll("button")
const switchButton = document.querySelector("#switch")
let value = 1

setInterval(function () {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString([], { hour12: true})
}, 1000)




switchButton.addEventListener("click",
    function () {
        // console.log("hi");
        if (value == 0) {
            container.style.backgroundColor = "black"
            container.style.color = "white"
            switchButton.innerHTML = "Switch to Light Mode"
            value = 1
        } else {
            container.style.backgroundColor = "white"
            container.style.color = "black"
            container.style.transition = "all 0.5s ease-out"
            switchButton.innerHTML = "Switch to Dark Mode"
            value = 0
        }
    }
)

function openFullscreen() {
    var elem = document.getElementById("container");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
    }
}