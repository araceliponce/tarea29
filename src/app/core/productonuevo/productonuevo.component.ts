import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto, ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-productonuevo',
  templateUrl: './productonuevo.component.html',
  styleUrls: ['./productonuevo.component.css']
})
export class ProductonuevoComponent {

  constructor(
    public dialogRef: MatDialogRef<ProductosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto,
  ) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  

}
