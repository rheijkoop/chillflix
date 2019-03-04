import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';
import {UsersService} from '../../features/users/services/users/users.service';
import {User} from '../../features/users/models/user';
import {ApiUseTags} from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {
	}

	@Post()
	saveUser(@Body() createUserDto: CreateUserDto) {
		return this.usersService.saveUser(createUserDto);
	}

	@Get()
	//@UseGuards(AuthGuard())
	users(): Promise<User[]> {
		return this.usersService.users();
	}

	@Get(':userid')
	//@UseGuards(AuthGuard())
	user(@Param('userid') userId: string): Promise<User> {
		return this.usersService.user(userId);
	}

	@Delete()
	deleteUser() {
		return this.usersService.deleteUsers();
	}
}
