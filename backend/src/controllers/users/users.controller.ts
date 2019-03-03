import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';
import {User} from '../../features/users/models/user';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto);
	}

	@Get()
	users(): Promise<User[]> {
		return this.usersService.users();
	}

	@Get(':userid')
	user(@Param('userid') userId: string): Promise<User> {
		return this.usersService.user(userId);
	}
}
