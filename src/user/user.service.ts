import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from './user.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) 
    private userRepository: Repository<UserEntity>) {

    }

    async showAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(data: UserDTO): Promise<User> {
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async read(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
    }

    async update(id: number, data: Partial<UserDTO>): Promise<User> {
        await this.userRepository.update(id, data);
        return this.userRepository.findOne(id);
    }

    async delete(id: number): Promise<boolean> {
        await this.userRepository.delete(id);
        return true;
    }
}
