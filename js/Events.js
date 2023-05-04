
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

export default function ({controls}) {
  buttonDarkMode.addEventListener("click", function () {
    controls.darkMode()
  })

  buttonLightMode.addEventListener("click", function () {
    controls.lightMode()
  })
}
