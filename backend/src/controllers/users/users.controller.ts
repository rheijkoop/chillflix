import {Body, Controller, Post} from '@nestjs/common';
import {CreateUserDto} from '../../dtos/create-user-dto';

@Controller('users')
export class UsersController {
	@Post()
	testDto(@Body() createUserDto: CreateUserDto) {
		console.log(createUserDto.userEntity());
		return createUserDto.userEntity();
	}
}
