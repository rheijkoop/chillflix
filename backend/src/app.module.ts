import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {MovieController} from './controllers/movie/movie.controller';
import {MovieService} from './services/movie/movie.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MovieEntity} from './entities/movie-entity';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: 'root',
			database: 'chillflix',
			entities: [__dirname + '/**/*-entity{.ts,.js}'],
			synchronize: true,
			logging: true
		}),
		TypeOrmModule.forFeature([MovieEntity]) // uitzoeken!!!
	],
	controllers: [AppController, MovieController],
	providers: [AppService, MovieService],
})
export class AppModule {
}
