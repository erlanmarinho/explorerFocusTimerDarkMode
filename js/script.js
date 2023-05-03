const buttonDarkMode = document.querySelector(".darkMode img")
const buttonLightMode = document.querySelector(".lightMode img")
const bodyDarkMode = document.querySelector("body")
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")

function darkMode() {
  buttonDarkMode.addEventListener("click", function () {
    buttonDarkMode.classList.add("hide")
    buttonLightMode.classList.remove("hide")
    bodyDarkMode.classList.toggle("light")
  })

  buttonLightMode.addEventListener("click", function () {
    buttonDarkMode.classList.remove("hide")
    buttonLightMode.classList.add("hide")
    bodyDarkMode.classList.toggle("light")
  })

  buttonPlay.addEventListener("click", function() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
  })

  buttonPause.addEventListener("click", function () {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
   
    buttonStop.classList.remove("hide")
  })
}

darkMode()
