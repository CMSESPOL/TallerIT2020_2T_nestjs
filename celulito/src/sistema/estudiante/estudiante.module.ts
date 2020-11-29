import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteController } from './estudiante.controller';
import { EstudianteRepository } from './estudiante.repository';
import { EstudianteService } from './estudiante.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EstudianteRepository]),
  ],
  controllers: [EstudianteController],
  providers: [EstudianteService]
})
export class EstudianteModule {}
