// Fetch appearance json
const reponse = await fetch('appearance.json')
const appearance = await reponse.json()
const backgroundColor = appearance['backgroundColor']
const fontFamily = appearance['fontFamily']

// Function to change font color in contrast to chosen background-color
const getPoliceColor = (backgroundColor) => {
  var r = parseInt(backgroundColor.substring(1, 3), 16)
  var g = parseInt(backgroundColor.substring(3, 5), 16)
  var b = parseInt(backgroundColor.substring(5, 7), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? 'black' : 'white'
}

// Fetch body and apply selected appearance
const body = document.querySelector('body')
body.style.backgroundColor = backgroundColor
const color = getPoliceColor(backgroundColor)
body.style.color = color
body.style.fontFamily = fontFamily
