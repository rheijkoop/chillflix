import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie/movie.service';
import {ApiUseTags} from '@nestjs/swagger';
import {AuthGuard} from '@nestjs/passport';

@ApiUseTags('movies')
@Controller('movies')
export class MovieController {
	constructor(private movieService: MovieService) {
	}

	@Post()
	saveMovie(@Body() createMovieDto: CreateMovieDto) {
		this.movieService.saveUser(createMovieDto);
	}

	@Get()
	@UseGuards(AuthGuard())
	getMovies(): Promise<Movie[]> {
		return this.movieService.movies();
	}
}



