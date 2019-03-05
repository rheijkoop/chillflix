import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../entities/user-entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../models/user';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  async getUsers(): Promise<User []> {
		const userEntities = await this.userRepository.find();
		return userEntities.map(userEntity => userEntity.user());
	}

	async saveEntity(userEntity: UserEntity): Promise<UserEntity> {
		return this.userRepository.save(userEntity);
	}

  async userByUserId(userId: number): Promise<User []> {
		const userEntities = await this.userRepository.find({where:{id:userId}})
	  return userEntities.map( userEntity => userEntity.user())
	}

	/*
  deleteUser(userID: number): Promise<User []> {
	  const userEntities = await this.userRepository.findOne({where:{id: userid}})
		return userEntites.map( userEntity => userEntity.user())
	}
	*/
}