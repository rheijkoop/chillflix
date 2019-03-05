import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMovieDto } from '../../dtos/create-movie-dto';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie/movie.service';
import { OmdbProxyService } from 'src/services/omdb-proxy/omdb-proxy.service';

@Controller('movie')
export class MovieController {
	constructor(private readonly movieService: MovieService,
	            private readonly omdbProxyService: OmdbProxyService
	) {}

	@Get('search/:searchquery')
	search(@Param('searchquery') searchQuery: string): any {
		console.log('searchquery: ', searchQuery);
        return this.omdbProxyService.searchMovies(searchQuery);
	}

	@Post()
	saveMovie(@Body() createMovieDto: CreateMovieDto) {
		this.movieService.saveEntity(createMovieDto.movieEntity());
	}

	@Get()
	getMovies(): Promise<Movie[]> {
		return this.movieService.getMovies();
	}
}