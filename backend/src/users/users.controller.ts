import { Controller, Get, HttpCode, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
    constructor(private UsersService: UsersService) {}

    @Get()
    @HttpCode(200)
    getUsers() {
        return this.UsersService.getUsers();
    }


}
