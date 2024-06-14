import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(userDto: any): Promise<import("./user.entity").User>;
}
