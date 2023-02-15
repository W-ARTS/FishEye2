async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    let photographers = []
    let response = await fetch('/data/photographers.json');

    if (response.ok) {
        let data = await response.json();
        photographers = data.photographers;
    } else {
        alert("HTTP-Error: " + response.status);
    }
    return ({
        photographers: [...photographers]
    })
}

async function displayData(medias) {
    const photographersSection = document.querySelector(".cards-media-container");
    console.log(medias);
    medias.forEach((medias) => {
        const photographerModel = photographerFactory(medias);
        const userCardDOM = photographerModel.makeUserCard();
        photographersSection.appendChild(makeUserCard);
    });
};

async function init() {
    // Récupère les datas des photographes
    const medias = await getPhotographerMedias();
    displayData(medias);
};

init();


