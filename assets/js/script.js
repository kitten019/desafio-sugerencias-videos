//Implementación de Patrón Módulo IIFE
const main = (()=>{

    //Función privada que recibe la URL del video y la ID de la etiqueta iframe
    const insertar = (url, id) =>{
        const elemento = document.getElementById(id);
        elemento.setAttribute('src',url)
    };  
    //Retorna una función pública que recibe los parámetros url e id y realiza el llamado a la función privada
    return{
        mostrarVideo: (url, id) => insertar(url, id)
    } 
})();

//Clase Padre Multimedia
class Multimedia{
    #url
    constructor(url){
        this.#url = url
    }

    get url(){
        return this.#url;
    }

    set url(nuevaUrl){
        this.#url = nuevaUrl
    }

    //Método setInicio que retorna el mensaje “Este método es para realizar un cambio en la URL del video”.
    setInicio(){
        return "Este método es para realizar un cambio en la URL del video ";
    }
}

//Clase Reproductor, la cual es hija de la clase Multimedia
class Reproductor extends Multimedia{
    #id;
    constructor(url,id){
        super(url);
        this.#id = id;
    }

    get id(){
        return this.#id;
    }

    //Método playMultimedia que permite hacer el llamado a la función pública de la IIFE, enviando los atributos url y id
    playMultimedia(){
        main.mostrarVideo(this.url, this.id);
    }

    
    setInicio(tiempoInicio){
        let url = this.url;
        if(url.includes('?')){
            url += `&start=${tiempoInicio}`

        }else{
            url += `&start=${tiempoInicio}`
        }
        this.url = url
    }
}

//Instanciar clase Reproductor
let ver_video_musica = new Reproductor("https://www.youtube.com/embed/CMNPS6ER8FQ?si=X0BgT8630EVCKu6h",'musica');
let ver_video_pelicula = new Reproductor("https://www.youtube.com/embed/JxaJWEuXgAg?si=2vaBndbhv0mT4lT2",'peliculas');
let ver_video_serie = new Reproductor("https://www.youtube.com/embed/mRLP_177HDg?si=MDJs8XIDj-boHZJ_",'series');

//Utilizar el método setInicio para modificar el tiempo de inicio en alguna de las instancias creadas

ver_video_musica.setInicio(75); //El valor a introducir dentro de la función es en segundos

//Invocar al método playMultimedia para cada instancia creada
ver_video_musica.playMultimedia();
ver_video_pelicula.playMultimedia();
ver_video_serie.playMultimedia();


