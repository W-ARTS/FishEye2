//faire appels a l'API
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
                imageElement.src = `/data/photographers.json,${media}`;
                document.body.appendChild(imageElement);

            }
            else {
                alerte('Un probleme est intervenu, merci de revenir plus tard.')
            }
        }

    } 
}

getPhotographerMedias();
