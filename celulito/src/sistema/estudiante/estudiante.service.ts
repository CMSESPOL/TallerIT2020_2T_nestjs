import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from 'src/entity/sistema/estudiante.entity';
import { EstudianteCreateDto } from './dto/estudiante-create.dto';
import { EstudianteRepository } from './estudiante.repository';

@Injectable()
export class EstudianteService {
    //
    constructor(
        @InjectRepository(EstudianteRepository)
        private estudianteRepository: EstudianteRepository,
    ){}

    async getEstudiantes(): Promise<Estudiante[]>{
        return this.estudianteRepository.getEstudiantes();
    }

    async createEstudiante(estudianteCreateDto: EstudianteCreateDto): Promise<Estudiante>{
        return this.estudianteRepository.createEstudiante(estudianteCreateDto);
    }
}
