import {IsEmail, IsNumber, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';
import {UserEntity} from '../features/users/entities/user-entity';
import * as bcrypt from 'bcrypt';

export class CreateUserDto {
	@IsEmail()
	@ApiModelProperty()
	public readonly userName: string;

	@IsNumber()
	@ApiModelProperty()
	public readonly age: number;

	@IsString()
	@ApiModelProperty()
	public readonly password: string;

	userEntity(): UserEntity {
		return new UserEntity(this.userName, this.age, bcrypt.hashSync(this.password, 10))
	}
}
