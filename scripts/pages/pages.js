async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet, 
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
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

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    //console.log(photographers);
};

init();



function photographer_Datas(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const Users = `assets/photographers/${[0][name]}`;

    console.log(Users);

    function getUserInfos() {
        
        const UsersName = document.getElementsByClassName('users_title')[0];
        UsersName.textContent = name;
        
        return (Users);
    }
    return { name, Users, getUserInfos }
}

photographer_Datas();
