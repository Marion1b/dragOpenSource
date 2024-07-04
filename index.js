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






});
