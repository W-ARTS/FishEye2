function photographerFactory(data) {
    const { name, city, country, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h3 = document.createElement( 'h3' );
        const h3C = document.createElement('h3');
        h3.textContent = city, country;
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h3);
        
        return (article);
    }
    return { name, picture, city, country, getUserCardDOM }
}

