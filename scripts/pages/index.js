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

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };

init();
