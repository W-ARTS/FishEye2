async function getPhotographers() {
    let photographers = []
    let response = await fetch('/data/photographers.json');

    if (response.ok) {
        let data = await response.json();
        photographers = data.media;
    } else {
        alert("HTTP-Error: " + response.status);
    } console.log(photographers);
    return ({
        photographers: [...photographers]
    })
}

async function displayData(photographers) {
    const userMedias = document.querySelector(".cards-media-container");

    photographers.forEach((photographer) => {
        const photographerModel = userFactory(photographer);
        const userCardMedias = photographerModel.getMedias();
        userMedias.appendChild(userCardMedias);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

getPhotographers();
init();

function userFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    const medias = `/assets/SamplePhotos/Mimi/${image}`;

    function getMedias() {
        const img = document.createElement('img');
        img.setAttribute("src", medias);



        return (img);
    }
    return { id, photographerId, title, image, likes, date, price, getMedias }
}
