import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  caracteristicas: any = [];
  imagenes: any = [];
  arrayImagenes: Array<object> = [];

  constructor(public referenciaPopup: MatDialogRef<ProductoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private peticionHttp: HttpClient) { }

  ngOnInit(): void {
    // PETICION HTTP
    this.peticionHttp.get(this.data).subscribe((res: any) => {
      this.caracteristicas = res.features;
      this.imagenes = res.images;
      this.mapeoArrayImagenes(this.imagenes);
      this.caracteristicas.sort((a: { order: number; }, b: { order: number; }) => (a.order > b.order) ? 1 : -1);
    });
  }

  // MAPEO A OBJETO QUE RECIBE EL COMPONENTE BANNER
  mapeoArrayImagenes(objetoBanner: any) {
    var arrayProv: any = [];
    for (const iterator of objetoBanner) {
      let imagen: any = [];
      imagen.image = iterator;
      imagen.thumbImage = iterator;
      arrayProv.push(imagen);
    }
    this.arrayImagenes = arrayProv;
  }

}
