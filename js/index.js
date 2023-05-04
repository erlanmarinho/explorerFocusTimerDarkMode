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
  bodyDarkMode,
  buttonPlay,
  buttonPause
  
})

console.log(controls)


Events({ controls })

renderDisplay()
