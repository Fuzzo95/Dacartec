import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  @Input() public producto: any;
  @Input() public claim: any;
  @Input() public url: any;

  public show: boolean = true;
  constructor(private dialog: MatDialog) { }

  // COMPONENTE PRODUCTO/CLAIM
  ngOnInit(): void {
  }

  // ABRE POPUP DETALLE
  detalleProducto() {
    const popup = this.dialog.open(DetalleProductoComponent, { width: "80%", height: "70%", data: this.url });
  }

  // VISIBLE/ NO VISIBLE EN FUNCION DE LA BUSQUEDA Y DE LAS CATEGORIAS
  mostrarProducto(mostrar: boolean) {
    this.show = mostrar;
  }
}
