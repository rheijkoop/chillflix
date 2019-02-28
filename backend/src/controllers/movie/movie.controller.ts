import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {Movie} from '../../models/movie';
import {ApiResponse} from '@nestjs/swagger';
import {MovieService} from '../../services/movie/movie.service';

@Controller('movie')
export class MovieController {
	constructor(private movieService: MovieService) {
	}
	@Post()
	saveMovie(@Body() movie: CreateMovieDto) {
		this.movieService.saveMovie(movie);
	}

	@Get()
	@ApiResponse({ status: 201, type: Movie, description: 'Creates new user object.' })
	getMovies(): Movie[] {
		 return this.movieService.getMovies();
	}
}
