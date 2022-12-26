console.log('Hello world')

const URL = 'https://rickandmortyapi.com/api';

const obtenerPersonaje = async () =>{
    const response = await fetch (`${URL}/character`);
    const data = await response.json();

    const img = document.querySelector('img');
    img.src = data.results[0].image;
    img.alt = data.results[0].name;

    const btn = document.querySelector('button');
    btn.addEventListener('click', ()=>{
        const randomNumber = Math.floor(Math.random() * data.results.length);
        img.src = data.results[randomNumber].image;
        img.alt = data.results[randomNumber].name;
    });
}

obtenerPersonaje();