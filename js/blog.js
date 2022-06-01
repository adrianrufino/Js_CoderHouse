

cargarDatos();

function cargarDatos() {

    fetch('../data/blogs.json')
        .then( response => response.json() )
        .then( blogs => {
            let blog_grilla = document.getElementById('blog_grilla');

            blogs.forEach( blog => {
                blog_grilla.innerHTML += blog_card(blog);
            });
        });
}

function blog_card(blogItem){
    return `
        <div class="blog_card">
            <img src="${blogItem.imagen}" alt="${blogItem.titulo}">
            <div class="blog_body">
                <h3>${blogItem.titulo}</h3>
                <p>${blogItem.descripcion}</p>
                <div>Leer Más</div>
            </div>
        </div>
    `;
}