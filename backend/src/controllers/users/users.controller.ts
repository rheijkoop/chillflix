import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user-dto';
import { UserService } from '../../features/users/services/user/user.service'

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.userService.saveEntity(createUserDto.userEntity());
	}

    @Get()
    readUsers() {
        return this.userService.getUsers();
    }
    
    @Get(':userid')
	usersById(@Param('userid') Id: number): any {
	    return this.userService.userByUserId(Id);
	}
    
}