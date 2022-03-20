// COMPONENTE creado

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {

  // iniciamos la propiedad Artista como un objeto vacío
  artista: any = {};

  // iniciamos la propiedad TopTracks como un arreglo vacío
  topTracks: any[] = [];

  // inciamos el loading
  loadingArtista: boolean;

  // inyectamos las rutas activas
  constructor( private router: ActivatedRoute, private spotify: SpotifyService ) {

    this.loadingArtista = true;

    this.router.params.subscribe( params => {
      this.getArtista( params ['id'] );
      this.getTopTracks( params ['id'] );
   });
  }
   // método para acceder al artista seleccionado por el evento CLICK
   getArtista( id: string ) {

    this.loadingArtista = true;

    this.spotify.getArtista( id )
                .subscribe( artista => {
                  this.artista = artista;
                  this.loadingArtista = false;
                });
   }
   // método para acceder al Top Tracks del artista seleccionado por el evento CLICK
   getTopTracks( id: string ) {

    this.spotify.getTopTracks( id )
        .subscribe( topTracks => {
          this.topTracks = topTracks;
        });
   }
}
