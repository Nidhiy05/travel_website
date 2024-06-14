import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<User>;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
