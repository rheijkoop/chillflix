import {Component} from '@angular/core';
import {Film} from '../../models/film';
import {FilmService} from '../../services/film.service';
import {take, tap} from 'rxjs/operators';

@Component({
	selector: 'app-film-search',
	templateUrl: './film-search.component.html',
	styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent {
	public films: Film[] | undefined | null = undefined;
	public userInput: string | undefined = undefined;
	public bucket: Film[] = [];

	constructor(private filmsService: FilmService) {}

	public handleSearchInputChange(input: string): void {
		this.films = null;
		this.filmsService.search$(input)
			.pipe(
				take(1),
				tap(filmResponse => this.films = filmResponse),
			).subscribe();
	}

	public handleOnAddToBucket(film: Film): void {
		this.bucket = [...this.bucket, film];
	}

	public handleOnRemoveFilm(filmToRemove: Film): void {
		this.bucket = this.bucket.filter(film => film.imdbId !== filmToRemove.imdbId);
	}
}
