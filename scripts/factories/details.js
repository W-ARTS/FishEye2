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
    const url = "/data/photographers.json";

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function (data) {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let response = requete.response;

                console.log(response);
                const imageData = data.image;
                const imageElement = new Image();
                img.setAttribute("src", imageData);
                document.body.appendChild(imageElement);

            }
            else {
                alerte('Un probleme est intervenu, merci de revenir plus tard.')
            }
        }

    } 
}

getPhotographerMedias();
