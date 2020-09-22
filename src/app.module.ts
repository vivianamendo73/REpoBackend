import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';
import { CalcularController } from './calcular/calcular.controller';
import { CalcularService } from './calcular/calcular.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),
  ],
  controllers: [ProductoController, CalcularController], //AppController, 
  providers: [ ProductoService, CalcularService], //AppService,
})
export class AppModule {}
