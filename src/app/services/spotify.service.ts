// Clase donde agruparemos los SERVICIOS de la aplicación

// permite la importación de la clase para poder usarla desde otras clases
import { Injectable } from '@angular/core';

// importación del HTTP (API) con sus Headers (son los que la petición solicita, se pueden obtener de Postman)
import { HttpClient,  HttpHeaders } from '@angular/common/http';

// importación del operador MAP (sirve para devolver la información que necesitamos (y no obtener todo lo que nos trae de SPOTIFY))
import { map } from 'rxjs/operators';

// decorador
@Injectable({
  // el providedIn nos permite utilizar el servicio sin llamarlo desde el APP.MODULE.TS
  providedIn: 'root'
})
export class SpotifyService {

  // petición HTTP (API)
  constructor( private http: HttpClient) { }

  // función que unifica y centraliza las peticiones a la API de Spotify (New Releases o Buscar Artistas) (para no repetir código en cada petición API)
  getQuery ( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    // definición de los HEADERS
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD9Bys0VXW7VA5WQnJsN8TtMlHhmB1VZ27jgUjFSMoMNvyBRBIyOdo2Mup61tVfWkkpCcewdiPODxRui54',
    });

    return this.http.get( url, { headers } );
  }

  // petición a la API de Spotify (New Releases)
  getNewReleases()  {

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( ( data: any ) => data.albums.items));
               
  }

  // petición a la API de Spotify (Buscar Artistas)
  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
               .pipe( map( (data: any) => data.artists.items));
  }

  // petición a la API de Spotify (Ir al Artista seleccionado)
  getArtista( id: string ) {

    return this.getQuery(`artists/${id}`)
               //.pipe( map( (data: any) => data.artists.items));
  }

  // petición a la API de Spotify (Ir a la lista de Top Tracks del Artista)
  getTopTracks( id: string ) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map( (data: any) => data.tracks));
  }
}
