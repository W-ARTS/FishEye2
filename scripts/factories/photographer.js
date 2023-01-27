function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;
    
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h3 = document.createElement( 'h3' );
        const h3_2 = document.createElement('h3');
        const p = document.createElement( 'p' );
        const p_2 = document.createElement('p');
        const prix = document.createElement('p');
        prix.innerHTML = "/jours";
        h3.textContent = city;
        h3_2.textContent = country;
        p.textContent = tagline;
        p_2.textContent = price, prix;
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h3_2);
        article.appendChild(p);
        article.appendChild(p_2);
        
        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}

