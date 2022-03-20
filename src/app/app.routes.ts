// RUTAS (contiene las definiciones de RUTAS que usaremos en la aplicación)

import { Routes } from "@angular/router";

// importaciones de los componentes
import { ArtistaComponent } from "./components/artista/artista.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";


export const ROUTES: Routes = [
    // aquí declaramos el arreglo de todas las rutas que utilizaremos
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    // ruta con parámetro id (para obtener el artista que seleccionemos)
    { path: 'artist/:id', component: ArtistaComponent },
    // comodines para que las rutas inexistentes me redireccionen al HOME
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];