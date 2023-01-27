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

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    //console.log(photographers);
};

init();



function photographer_Datas(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const Users = `assets/photographers/${portrait}`;

    console.log(Users);

    function getUserInfos() {
        
        const UsersName = document.getElementsByClassName('users_title')[0];
        UsersName.textContent = name;
        
        return (Users);
    }
    return { name, Users, getUserInfos }
}

photographer_Datas();
