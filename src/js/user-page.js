import { peticionUser } from './http-provider';
const root = document.querySelector('#root');
let tableBody;

const createHtmlTable = () =>{
    const html = `
    <h1 class="mt-5">Usuarios</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Email</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Avatar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td scope="row"></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    div.classList.add('container');
    root.append(div);
}

const dibujaBodyTable = ({id, email ,first_name, last_name , avatar}) =>{
    tableBody = document.querySelector('tbody');
    const trElement = document.createElement('tr');
    const tdElement = `
        <td>${id}</td>
        <td>${email}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td><img class="img-thumbnail" src="${avatar}"></td>
    `;
    trElement.innerHTML = tdElement;
    tableBody.append(trElement);
}

export const main = async() =>{
    console.log('bienvenido');
    createHtmlTable();
    const usuarios = await peticionUser('https://reqres.in/api/users?page=2')
    usuarios.forEach( dibujaBodyTable );
}