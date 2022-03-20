// Clase PIPE (personalizado) para no mostrar resultados sin imágenes en el SEARCH

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // función para validar que la búsqueda de artistas (SEARCH)
  transform(images: any[] ): string {

    // si la búsqueda tiene imagenes vacías, retornar el ícono "noimage"
    if( !images ) {
      return 'assets/img/noimage.png';
    }

    // si la búsqueda no tiene imágenes vacías
    if( images.length > 0 ) {
      return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }
  }
}
