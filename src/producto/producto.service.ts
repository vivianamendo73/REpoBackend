import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Producto } from './Producto'


@Injectable()
export class ProductoService {
    private listaProductos = [];
    private static readonly CANTIDAD_PRODUCTOS = 10;
    /*  public getProducto(): any {
          let productos = [];
          for (let i = 0; i < ProductoService.CANTIDAD_PRODUCTOS;
              i++) {
              let producto = {
                  'producto': 'producto_' + i,
                  'precio': Math.floor(Math.random() * 100),
                  'descripcion': 'descripcion_' + i
              };
              productos.push(producto);
          }
          return productos;
      } 
   */
    public getProducto(index: number): Producto {
        this.loadProductos();
        console.log(this.listaProductos);
        // Más adelante agregar manejo de status code
        if (index < 0 || index >= this.listaProductos.length)
            return null;

        return this.listaProductos[index];
    }
    private loadProductos(): void {
        console.log("entre");
        let archivo = fs.readFileSync('producto.csv', 'utf8');
        let lineas = archivo.split('\n');
        console.log(lineas);
        const elementos = [];
        for (let i = 0; i < lineas.length; i++) {
            let linea = lineas[i].replace('\r', '');
            let p = linea.split(',');
            elementos.push(p);
        }
        this.listaProductos = [];
        for (let i = 0; i < elementos.length; i++) {
            let producto = new Producto(elementos[i][0],
                parseInt(elementos[i][1]));
            this.listaProductos.push(producto);
        }
    }

    public getProductos(): Producto[] {
        return this.listaProductos;
    }
    public create(prod: any):string{
        console.log(prod);
        const producto= new Producto(prod.nombreProducto,prod.precio);

        if(producto.GetProducto() && producto.GetPrecio()){
            fs.appendFileSync('producto.csv',
            "\n" +
            producto.GetProducto() + ","
            + producto.GetPrecio());
            return "ok"
        }
        else
            return "No es un producto";
    }
}
