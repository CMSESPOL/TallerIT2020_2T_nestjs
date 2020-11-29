import { Column, Entity, Unique } from "typeorm";
import { Base } from "../base.entity";

@Entity()
@Unique(['identificacion'])
export class Estudiante extends Base {

    @Column()
    nombre: string;

    @Column()
    identificacion: string

    @Column()
    correo: string
}