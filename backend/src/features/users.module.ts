import { Module } from '@nestjs/common';
import { UserService } from './users/services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user-entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    exports: [UserService],

    providers: [UserService]
})
export class UsersModule {}