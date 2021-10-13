const url = 'https://reqres.in/api/users';

const getUsuario =  async( id ) =>{
    const resp = await fetch(`${url}/${id}`);
    const {data: usuario} = resp.json();
    return usuario;
}

const postUsuario = async(data) =>{
    const datos = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Contet-Type': 'application/json'
        }
    }).then(resp => resp.json());
    return datos;
}


const putUsuario =  async(id, data)=>{
    const datos = await fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Contet-Type': 'application/json'
        }
    }).then(resp => resp.json());
    return datos;
}

const deleteUsuario = async(id) =>{
    const datos = await fetch(`${url}/${id}`,{
        method: 'DELETE'
    });
    return (datos.ok)?'Borrado con exito':'No se pudo borrar';
}

export {

    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario

}