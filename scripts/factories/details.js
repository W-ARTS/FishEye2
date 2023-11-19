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

async function displayPhotographer(photographers, userId) {
    const userMedias = document.querySelector(".cards-media-container");

    let photographer = null //find(); 
    let mediaPhotgrapher =  null //find();
    photographers.forEach((photographer) => {
        const photographerModel = userFactory(photographer);
        userMedias.appendChild(userCardMedias);
    });
};

function getUserId() {
    //to do it § recuperer les id du l'user get 
    return 243;
}

async function init() {
    // Récupère les datas des photographes
    let userId = getUserId();
    const { photographers } = await getPhotographers();
    displayPhotographer(photographers, userId);
    
};

//getPhotographers();
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
