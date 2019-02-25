import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmDetail} from '../../models/film-detail.model';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FilmService} from '../../services/film.service';


@Component({
	selector: 'app-film-details',
	templateUrl: './film-details.component.html',
	styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent {
	public filmDetails$: Observable<FilmDetail | undefined> = this.activatedRoute.params
		.pipe(switchMap(params => this.filmService.filmById$(params.imdbId)));

	constructor(private activatedRoute: ActivatedRoute,
	            private filmService: FilmService) {
	}
}
