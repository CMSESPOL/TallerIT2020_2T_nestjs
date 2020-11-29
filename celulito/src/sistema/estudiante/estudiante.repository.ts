import { InternalServerErrorException } from "@nestjs/common";
import { Estudiante } from "src/entity/sistema/estudiante.entity";
import { EntityRepository, Repository } from "typeorm";
import { EstudianteCreateDto } from "./dto/estudiante-create.dto";

@EntityRepository(Estudiante)
export class EstudianteRepository extends Repository<Estudiante>{

    async getEstudiantes(): Promise<Estudiante[]>{
        const query = this.createQueryBuilder('estudiante');
        try {
            const list = await query.getMany();
            return list;
        } catch (error){
            throw new InternalServerErrorException();
        }
    }

    async createEstudiante(estudianteCreateDto: EstudianteCreateDto): Promise<Estudiante>{
        const {nombre, identificacion, correo} = estudianteCreateDto;
        const estudiante = new Estudiante();
        estudiante.nombre = nombre ;
        estudiante.correo = correo ;
        estudiante.identificacion = identificacion;

        try {
            await estudiante.save();
        } catch (error){
            if (error.code === "23505"){
                throw new InternalServerErrorException(`El estudiante con identificacion ${identificacion} ya existe`)
            }
            throw new InternalServerErrorException();
        }
        return estudiante;

    }


}