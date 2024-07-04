
const appearanceDisplay = () => {
  // Fetch appearance json
  fetch('appearance.json')
    .then((response) => response.json())
    .then((appearance) => {
      // Fetch body and apply selected appearance
      const body = document.querySelector('body')
      body.style.backgroundColor = appearance.backgroundColor
      const color = getPoliceColor(appearance.backgroundColor)
      body.style.color = color
      body.style.fontFamily = appearance.fontFamily
    })
    .catch((error) => console.error('Error fetching JSON data:', error))
}

// Function to change font color in contrast to chosen background-color
const getPoliceColor = (backgroundColor) => {
  var r = parseInt(backgroundColor.substring(1, 3), 16)
  var g = parseInt(backgroundColor.substring(3, 5), 16)
  var b = parseInt(backgroundColor.substring(5, 7), 16)
  var yiq = (r * 299 + g * 587 + b * 114) / 1000
  return yiq >= 128 ? 'black' : 'white'
}


const contentDisplay = () => {

    fetch('contenu.json')
    .then(response => response.json())
    .then(contenu => {

        const title = document.querySelector('.page-header-title');
        title.textContent = contenu.title;

        const description = document.querySelector('.page-header-par');
        description.textContent = contenu.description;

        const profilName = document.querySelector('.drag-profile');
        profilName.textContent = contenu.profile_name;
    })
    .catch(error => console.error("Error fetching JSON data:", error));

}

document.addEventListener('DOMContentLoaded', () => {
  contentDisplay();
  appearanceDisplay()

});