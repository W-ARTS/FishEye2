    async function getPhotographers() {
        // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
        // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
        let photographers = []

        //fetch('/data/photographers.json')
            //.then(response => response.json())
            //.then(data => {
                //console.log(data.photographers)
                //photographers = [...data.photographers]
                //return []
            //})
            //.catch(error => {
                //console.error(error);
            //});
        let response = await fetch('/data/photographers.json');

        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let data = await response.json();
            photographers = [...data.photographers]
        } else {
            alert("HTTP-Error: " + response.status);
        }
        console.log(photographers,"merci");
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
        console.log(photographers);
        displayData(photographers);
    };

    //Evenement du clique photographers
    
    
    init();
    
