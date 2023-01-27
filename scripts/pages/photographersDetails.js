async function getPhotographerMedias() {
    let urlParams = new URLSearchParams(location.search);
    let id = urlParams.get('id');
    let medias = []
    let response = await fetch('/data/photographers.json');

    if (response.ok) {
        let data = await response.json();
        medias = data.media.filter(e => e.photographerId == id);
    } else {
        alert("HTTP-Error: " + response.status);
    }
    return medias;
}

async function displayData(medias) {
    const photographersSection = document.querySelector(".cards-media-container");
    medias.forEach((medias) => {
        const photographerModel = photographerFactory(medias);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const medias = await getPhotographerMedias();
    displayData(medias);
};

init();