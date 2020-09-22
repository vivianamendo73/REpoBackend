import { Controller, Get, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './Producto'

@Controller('productos')
export class ProductoController {

    constructor(private productoService: ProductoService) {}

    /*   @Get('producto')
     public getProducto(): string {
         return this.productoService.getProducto()
     } */
    @Get(':index')
    public getProducto(@Param('index') index): Producto {
        return this.productoService.getProducto(parseInt(index));
    }
}
