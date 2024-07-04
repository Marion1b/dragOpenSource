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
        const youtube = document.querySelector(".youtube");
        instagram.href = contenu.media_instagram;
        tiktok.href = contenu.media_tiktok;
        youtube.href = contenu.media_youtube;
    })
    .catch(error => console.error("Error fetching JSON data:", error));



}





document.addEventListener('DOMContentLoaded', () => {

    contentDisplay();






});
