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
    })
    .catch(error => console.error("Error fetching JSON data:", error));



}





document.addEventListener('DOMContentLoaded', () => {

    contentDisplay();






});
