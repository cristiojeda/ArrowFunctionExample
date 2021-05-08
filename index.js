const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo Canción con el id ${id}`),
    pausar: () => console.log(`pausando...`),
    borrar: id => console.log(`Borrando Canción...${id}`),
    crearPlayList: nombre => console.log(`Creando PlayList de ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo la PlayList ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}

reproductor.nuevaCancion = 'Save me';
reproductor.obtenerCancion;

