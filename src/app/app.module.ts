import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importación de los COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { RouterModule } from '@angular/router';

// nos permite hacer peticiones HTTP (para las API)
import { HttpClientModule } from '@angular/common/http';

// importamos las RUTAS
import { ROUTES } from './app.routes';

// importamos los SERVICIOS (no hace falta porque estamos usando el providedIN en SPOTIFY.SERVICE.TS)
import { SpotifyService } from './services/spotify.service';

// importación del PIPE personalizado
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    LoadingComponent,
    // importamos los PIPE personalizado
    NoimagePipe,
    DomseguroPipe,
  ],
  imports: [
    BrowserModule,
    // importamos el archivo de peticiones HTTP
    HttpClientModule,
    // importamos el archivo de Rutas utilizando el #
    RouterModule.forRoot( ROUTES, { useHash: true } ),
  ],
  providers: [
    // importamos el SPOTIFY.SERVICE.TS (no hace falta porque estamos usando el providedIN en SPOTIFY.SERVICE.TS)
    SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
