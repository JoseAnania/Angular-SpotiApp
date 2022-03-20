// COMPONENTE creado

import { Component } from '@angular/core';
import { Router } from '@angular/router';

// importación del SERVICE 
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  // creamos una propiedad para el Loading
  loading: boolean = false;

  // creamos la propiedad (arreglo) para llenarlo con la Busqueda de Artistas
  artistas: any[] = [];

  // llamamos la función de SPOTIFY.SERVICE.TS para mostrar la Busqueda de Artistas en SEARCH
  constructor( private spotify: SpotifyService, private router: Router ) { }
  
  // creamos la función del buscador
  buscar( termino: string ) {  

    // validamos que al borrar la búsqueda vuelva a no mostrar nada (ni el Loading ni las Cards de los Artistas)
    if ( termino.length === 0 ) {
      this.artistas = [];
      this.loading = false;
      return;
      }
    
    // inicializamos la propiedad Loading para mostrar el ícono sólo mientras se cargan las Cards
    this.loading = true;

    this.spotify.getArtistas( termino )
        .subscribe( ( data: any ) => {
          this.artistas = data;
          // desactivamos el ícono del Loading
          this.loading = false;
        });
  }
  // creamos la función para acceder a la página del artista al hacer click en la Tarjeta
  verArtista( item: any ){

    let artistaId;

    if( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId ]);
  }
}
