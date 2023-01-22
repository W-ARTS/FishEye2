//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographerMedias() {
    let urlParams = new URLSearchParams(location.search);
    let id = urlParams.get('id');
    let medias = []
    let response = await fetch('/data/photographers.json');

    if (response.ok) {
        let data = await response.json();
        medias = data.media.filter(e => e.photographerId == id);
        console.log(medias);
    } else {
        alert("HTTP-Error: " + response.status);
    }
    return medias;
}

getPhotographerMedias();
