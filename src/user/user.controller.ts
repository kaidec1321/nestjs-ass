import { Controller, Get, Post, Delete, Body, Param, Put, ParseIntPipe } from '@nestjs/common';
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
    viewUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) data: Partial<UserDTO>): Promise<User> {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<boolean> {
        return this.userService.delete(id);
    }


}
