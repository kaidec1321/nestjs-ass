import { IsEmail, IsString, IsNumber, IsDate } from 'class-validator'

export class UserDTO {
    @IsNumber()
    user_id: number;

    @IsString()
    username: string;

    @IsEmail()
    email: string;
} 