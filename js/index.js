import Controls from "./Controls.js"
import Events from "./Events.js"

import {
  buttonDarkMode,
  buttonLightMode,
  bodyDarkMode,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonToAdd,
  minutesDisplay
} from "./Elements.js"

const controls = Controls({
  buttonDarkMode,
  buttonLightMode,
  bodyDarkMode
  
})

console.log(controls)

function renderDisplay() {

  buttonPlay.addEventListener("click", function () {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonStop.classList.remove("hide")
  })

  buttonPause.addEventListener("click", function () {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  })
}

Events({ controls })

renderDisplay()
