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

async function getPhotographers() {
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

function GetApi() {
    const img = document.querySelector('.cards-media-container');

    fetch('/data/photographers.json')
        .then(res => res.json())
        .then(data => img.src = data[0].url)
    
}

getPhotographerMedias();
