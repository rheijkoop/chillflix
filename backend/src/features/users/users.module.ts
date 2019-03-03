import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserEntity} from './entities/user-entity';
import {UsersService} from './services/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UsersService],
  controllers: [],
  providers: [UsersService]
})
export class UsersModule {}
