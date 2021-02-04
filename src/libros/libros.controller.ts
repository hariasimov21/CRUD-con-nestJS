import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros():string{
        return 'Aqui se listará todos los libros';
    }

    @Get(':numero')
    infoLibro(@Param() params):string{
        
        return `Esta es la información del libro #${params.numero}`;
    }

   
}
