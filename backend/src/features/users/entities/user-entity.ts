import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../models/user';

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn() public readonly id?: number;
	@Column('varchar') public readonly username: string;
	@Column('integer') public readonly age: number;
	@Column('varchar') public readonly password: string;
	
	constructor(userName: string, age: number, password: string) {
		this.username = userName;
		this.age = age;
		this.password = password;
	}

	public user(): User {
		return new User(this.id, this.username, this.age, this.password)
	}
}
