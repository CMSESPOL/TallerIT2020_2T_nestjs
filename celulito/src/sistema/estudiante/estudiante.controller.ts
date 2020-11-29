import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { Estudiante } from 'src/entity/sistema/estudiante.entity';
import { EstudianteCreateDto } from './dto/estudiante-create.dto';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {
    constructor(
        private estudianteService: EstudianteService
    ){}
    //
    @Get()
    getEstudiantes(): Promise<Estudiante[]> {
        return this.estudianteService.getEstudiantes();
    }

    @Post()
    createEstudiante(@Body(ValidationPipe) estudianteCreateDto: EstudianteCreateDto): Promise<Estudiante>{
        return this.estudianteService.createEstudiante(estudianteCreateDto);
    }
    
}
