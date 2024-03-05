// Módulo IIFE para gestionar los videos
const gestionVideos = (function () {
  function cargarVideo(url, id) {
    const iframe = document.getElementById(id);
    iframe.setAttribute('src', url);
  }

  return {
    mostrarVideo: function (url, id) {
      cargarVideo(url, id);
    },
  };
})();

// Clase Multimedia
class Multimedia {
  constructor(url) {
    let _url = url;
    this.getUrl = () => _url;
  }

  get url() {
    return this.getUrl();
  }

  setInicio() {
    console.log('Este método es para realizar un cambio en la URL del video');
  }
}

// Clase Reproductor, hereda de Multimedia
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }

  playMultimedia() {
    gestionVideos.mostrarVideo(this.url, this.id);
  }

  setInicio(tiempo) {
    const urlConTiempo = `${this.url}?start=${tiempo}`;
    gestionVideos.mostrarVideo(urlConTiempo, this.id);
  }
}

// Instancias de Reproductor para cada categoría
const videoMusica = new Reproductor(
  'https://www.youtube.com/embed/R0di5GVDKMU',
  'musica'
);
const videoPelicula = new Reproductor(
  'https://www.youtube.com/embed/U2Qp5pL3ovA',
  'peliculas'
);
const videoSerie = new Reproductor(
  'https://www.youtube.com/embed/0kQ8i2FpRDk',
  'series'
);

// Función para inicializar los videos al cargar la página
function inicializarVideos() {
  videoMusica.playMultimedia();
  videoPelicula.playMultimedia();
  videoSerie.playMultimedia();
  videoMusica.setInicio(60);
  
}

// Ejecutar inicializarVideos cuando la página cargue completamente
document.addEventListener('DOMContentLoaded', inicializarVideos);
