import { Controller,Get,Param } from '@nestjs/common';
import {CalcularService} from './calcular.service';
@Controller('calcular')
export class CalcularController {
    constructor (private calcularService: CalcularService){}
    
    @Get(':oper/:var1/:var2')
    ejecutar(@Param('oper') oper, @Param('var1') var1, @Param('var2') var2): string {
        let numero1 = parseInt(var1);
        let numero2 = parseInt(var2);
        console.log(oper);
        return this.calcularService.GetResultado(oper, numero1, numero2);
    }
}

