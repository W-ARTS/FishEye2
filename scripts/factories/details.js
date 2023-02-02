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

            }
            else {
                alerte('Un probleme est intervenu, merci de revenir plus tard.')
            }
        }

    } 
}

getPhotographerMedias();
