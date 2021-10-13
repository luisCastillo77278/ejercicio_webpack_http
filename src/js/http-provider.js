const peticionChuck = async( url ) =>{
    
    try {
        
        const resp = await fetch(url);
        if (!resp.ok){ throw new Error('No se pudo ejecutar la peticion')}
        
        const {id, value, icon_url} = await resp.json();
        return {id, value, icon_url};
        
    } catch (error) {
        throw new Error('se genero un error en la peticion: ', error);
    }

}

const peticionUser = async( url ) =>{
    
    try {
        
        const resp = await fetch(url);
        if(!resp.ok) throw new Error('No se pudo generar la peticion');
        const { data: usuarios } = await resp.json();
        return  usuarios;
        
    } catch (error) {
        throw new Error('se genero un error en la peticion: ', error);
    }

}


export {
    peticionChuck,
    peticionUser
}