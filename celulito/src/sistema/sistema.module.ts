import { Module } from '@nestjs/common';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [EstudianteModule]
})
export class SistemaModule {}
