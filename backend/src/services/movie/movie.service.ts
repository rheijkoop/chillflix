import { Injectable } from '@nestjs/common';
import {Movie} from '../../models/movie';

@Injectable()
export class MovieService {
	private storage: Movie[] = [];

	getMovies():Movie [] {
		return this.storage;
	}

	saveMovie(movie: Movie): void {
		this.storage = [...this.storage, movie];
	}
}

