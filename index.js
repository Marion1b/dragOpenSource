
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
        const profilName = document.querySelector('.drag-profile-title');
        profilName.textContent = contenu.profile_name;

        const profilePicture = document.querySelector('.drag-profile-img');
        profilePicture.src = contenu.profile_picture;
        profilePicture.alt = contenu.picture_description;

        const instagram = document.querySelector(".media-instagram");
        const tiktok = document.querySelector(".media-tiktok");
        const youtube = document.querySelector(".media-youtube");
        instagram.href = contenu.media_instagram;
        tiktok.href = contenu.media_tiktok;
        youtube.href = contenu.media_youtube;

        const linkContact = document.querySelector(".contact-link");
        linkContact.href = "mailto:" + contenu.email_contact;
        linkContact.innerText = contenu.email_contact;

        const familyName = document.querySelector(".family-name");
        familyName.innerText = contenu.dragFamily_name;

        const familyInstagram = document.querySelector(".family-instagram");
        const familyTiktok = document.querySelector(".family-tiktok");
        const familyYoutube = document.querySelector(".family-youtube");
        familyInstagram.href = contenu.family_instagram;
        familyTiktok.href = contenu.family_tiktok;
        familyYoutube.href=contenu.family_youtube;

        const regularEvents = document.querySelector(".regular-list");
        for(let key in contenu.regular_events){
            const li = document.createElement('li');
            li.innerText = contenu.regular_events[key];
            regularEvents.appendChild(li);
        }

        const exceptionnalEvents = document.querySelector(".exceptional-list");
        for(let key in contenu.exceptional_events){
            const li = document.createElement('li');
            li.innerText = contenu.exceptional_events[key];
            exceptionnalEvents.appendChild(li);
        }

        const TalentContainer = document.querySelector(".talent-container");
        TalentContainer.innerHTML = contenu.talent;
    })
    .catch(error => console.error("Error fetching JSON data:", error));

}

document.addEventListener('DOMContentLoaded', () => {
  contentDisplay();
  appearanceDisplay()

});