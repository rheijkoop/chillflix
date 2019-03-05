import { IsString, IsNumber } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";
import { UserEntity } from "src/features/users/entities/user-entity";
import * as bcrypt from 'bcrypt';

export class CreateUserDto {
    @IsString()
	@ApiModelProperty()
	public readonly username: string;

	@IsNumber()
	@ApiModelProperty()
	public readonly age: number;

	@IsString()
	@ApiModelProperty()
    public readonly password: string;
    
    userEntity(): UserEntity {
		return new UserEntity(this.username, this.age, bcrypt.hashSync(this.password, 10))
	}
}
