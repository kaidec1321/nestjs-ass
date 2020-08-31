import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';
import { ValidationPipe } from '../pipes/validation.pipe';
import { User } from './user.interface';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    showAllUsers(): Promise<User[]> {
        return this.userService.showAll();
    }

    @Post()
    createNewUser(@Body(new ValidationPipe()) data: UserDTO): Promise<User> {
        return this.userService.create(data);
    }

    @Get(':id')
    viewUser(@Param('id') id: string): Promise<User> {
        return this.userService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body(new ValidationPipe()) data: Partial<UserDTO>): Promise<User> {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string): Promise<boolean> {
        return this.userService.delete(id);
    }


}
