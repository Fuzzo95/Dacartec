import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'aplicacion';
  url1 = 'https://run.mocky.io/v3/d194eae8-f851-40a8-9342-81f4a9f4ed91';
  urlDetalles = ['https://run.mocky.io/v3/c76e7dd0-5a2f-434e-aa9b-d36be5b5c17d'
    , 'https://run.mocky.io/v3/2b44f377-651a-42eb-960b-90625fb47f40'
    , 'https://run.mocky.io/v3/9ecaf41f-d511-4b80-b378-86bf5d09d2ca'];

  entrada1: any;
  arrayImagenes: Array<object> = [];
  textoBusqueda = '';

  @ViewChild('productos') productos: any;

  constructor(
    private peticionHttp: HttpClient) { }

  ngOnInit() {
    // Llamada http para obtener los datos
    this.peticionHttp.get(this.url1).subscribe((res: any) => {
      this.entrada1 = res;
      this.entrada1.claims.sort((a: { order: number; }, b: { order: number; }) => (a.order > b.order) ? 1 : -1);
      this.mapeoArrayImagenes(this.entrada1.banners);
    });
  }

  /** Mapeo para adaptar los datos al componente banner */
  mapeoArrayImagenes(objetoBanner: any) {
    var arrayProv: any = [];
    for (const iterator of objetoBanner) {
      let imagen: any = [];
      imagen.image = iterator.location;
      imagen.title = iterator.text;
      imagen.thumbImage = iterator.location;
      arrayProv.push(imagen);
    }
    this.arrayImagenes = arrayProv;
  }

  onBuscar() {
    // Recorrer ViewChilds y comprobar si la descripcion contiene la el texto introducido en el input.
  }
}