import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class EstudianteCreateDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;


    @IsString()
    @IsNotEmpty()
    identificacion: string;

    @IsEmail()
    correo: string;
}