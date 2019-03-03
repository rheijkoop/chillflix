import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateMovieDto} from '../../dtos/create-movie-dto';
import {Movie} from '../../models/movie';
import {MovieService} from '../../services/movie/movie.service';

@Controller('movie')
export class MovieController {
	constructor(private movieService: MovieService) {
	}

	@Post()
	saveMovie(@Body() createMovieDto: CreateMovieDto) {
		this.movieService.saveCreateMovieDto(createMovieDto);
	}

	@Get()
	getMovies(): Promise<Movie[]> {
		return this.movieService.getMovies();
	}
}
