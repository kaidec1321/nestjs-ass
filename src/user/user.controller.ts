import { Controller, Get, Post, Delete, Body, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    showAllUsers() {
        return this.userService.showAll();
    }

    @Post()
    createNewUser(@Body() data: UserDTO) {
        return this.userService.create(data);
    }

    @Get(':id')
    viewUser(@Param('id') id: string) {
        return this.userService.read(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(id);
    }


}
