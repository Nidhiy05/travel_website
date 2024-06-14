import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOne(email: string): Promise<User | undefined>;
    create(createUserDto: CreateUserDto): Promise<User>;
}
