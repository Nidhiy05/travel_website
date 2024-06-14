import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<import("../user/user.entity").User>;
    login(loginUserDto: any): Promise<{
        access_token: string;
    }>;
}
