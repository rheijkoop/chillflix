import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserEntity} from '../../entities/user-entity';
import {CreateUserDto} from '../../../../dtos/create-user-dto';
import {User} from '../../models/user';
import {UserLoginDto} from '../../dtos/user-login-dto';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {
	}

	public async saveUser(createUserDto: CreateUserDto): Promise<UserEntity> {
		const userExists = await this.userRepository.find({where: {userName: createUserDto.userName}});
		if (!userExists) {
			return this.userRepository.save(createUserDto.userEntity())
		}
		else {
			throw new HttpException('User already exists', HttpStatus.CONFLICT)
		}
	}

	public async users(): Promise<User[]> {
		const userEntities = await this.userRepository.find();
		return userEntities.map(userEntity => userEntity.user())
	}

	public async user(userId: string): Promise<User> {
		const userEntity = await this.userRepository.findOne(userId);
		return userEntity.user();
	}

	public findUserByCredentials(userCredentials: UserLoginDto) {
		return this.userRepository.find({
			where:
				{userName: userCredentials.userName, password: userCredentials.passWord}
		})
	}

	public findUserByUserName(userName: string) {
		return this.userRepository.find({where: {userName: userName}})
	}
}
