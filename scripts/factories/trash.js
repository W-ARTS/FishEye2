fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function photographerImg(data) {
    const { image } = data;
    const img = `/assets/Sample Photos/Mimi/${image}`;

    const picture = document.createElement('img');
    picture.setAttribute("src", img)
    const cards = document.getElementsByClassName('cards-media-container')[0];
    cards.appendChild(picture);
    picture.classList.add('picture_1');

}

photographerImg({
    image: "Travel_Lonesome.jpg"
});