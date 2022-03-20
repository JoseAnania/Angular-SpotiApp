// COMPONENTE creado

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// importación del SERVICE 
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  // creamos la propiedad (arreglo) para llenarlo con los New Releases
  nuevasCanciones: any[] = [];

  // creamos una propiedad para el Loading
  loading: boolean;

  // creamos una propiedad para el manejo de Errores
  error: boolean;
  mensajeError: string = '';
  
  constructor( private spotify: SpotifyService, private router:  Router) { 
    
    // inicializamos la propiedad Loading para mostrar el ícono sólo mientras se cargan las Cards
    this.loading = true;

    // inicializamos la propiedad de manejo de Errores
    this.error = false;
    
    // llamamos la función de SPOTIFY.SERVICE.TS para mostrar los New Releases en HOME (y cancelar el ícono Loading) (y mostrar Error en caso de existir)
    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.nuevasCanciones = data;
          this.loading = false;
        }, ( errorServicio ) =>  {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
        });
  }

  // creamos la función para acceder a la página del artista al hacer click en la Tarjeta
  verArtista( item: any ){

    let artistaId: any;

    if( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artist', artistaId ]);
  }
  
}
