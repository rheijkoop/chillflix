import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmDetail} from '../../models/film-detail.model';
import {FilmService} from "../../services/film.service";
import {take, tap} from "rxjs/operators";

@Component({
    selector: 'app-film-details',
    templateUrl: './film-details.component.html',
    styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

    public filmDetails: FilmDetail | undefined = undefined;

    constructor(private activatedRoute: ActivatedRoute,
                private filmService: FilmService
                ) {
    }

    ngOnInit() {
        this.activatedRoute.params
            .pipe(tap(params => this.setFilmDeTails(params.imdbId)))
            .subscribe();
    }

    private setFilmDeTails(filmId: string) {
        return this.filmService.filmById(filmId)
            .pipe(
                take(1),
                tap(filmDetails => this.filmDetails = filmDetails)
            ).subscribe();
    }

}
