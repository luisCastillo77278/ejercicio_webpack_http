import { peticionChuck } from './http-provider';
const root = document.querySelector('#root');
let btnGenerar, ulList;

const createHtmlMain = () =>{
    const main =`
     <div class="container">
        <h1 class="mt-5">chistes</h1>
        <hr>
        <button class="btn btn-primary">Generar</button>
        <ul class="mt-2 list-group">
        </ul>
    </div>`;
    const div = document.createElement('div');
    div.innerHTML = main;
    
    root.append( div );
}

const eventos = () =>{
    ulList = document.querySelector('ul');

    btnGenerar = document.querySelector('.btn');
    btnGenerar.addEventListener('click', async()=>{
        btnGenerar.disabled = true;
        const chiste = await peticionChuck('https://api.chucknorris.io/jokes/random');
        dibujarChiste( chiste );
        btnGenerar.disabled = false;

    });
}

const dibujarChiste = ({id, value, icon_url}) =>{
    const liItem = document.createElement('li');
    liItem.innerHTML = `
    <div><img src="${icon_url}"></div>
    <div>${value}</div>
    `;
    liItem.classList.add('list-group-item','d-flex', 'justify-content-between');
    ulList.append(liItem);
}

export const main = () => {

    createHtmlMain();
    eventos();

}