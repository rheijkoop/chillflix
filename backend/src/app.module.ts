import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MovieController} from './controllers/movie/movie.controller';
import { MovieService } from './services/movie/movie.service';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
