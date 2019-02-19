import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from '../models/film';
import {map} from 'rxjs/operators';
import {FilmDetail} from '../models/film-detail.model';

@Injectable({
	providedIn: 'root'
})
export class FilmService {
	private static api = 'http://www.omdbapi.com';
	private static apiKey = 'e36ea2a2';
	private static defaultSearchParams = new HttpParams({fromObject: {apikey: FilmService.apiKey}});

	constructor(private http: HttpClient) {
	}

	public search(title: string): Observable<Film[]> {
		const parameters = FilmService.defaultSearchParams.append('s', title);
		return this.http.get<IOMDBSearchResponse>(FilmService.api, {params: parameters})
			.pipe(
				map(FilmService.IOMDBSearchResponseToFilmsMapper)
			);
	}

	public filmById(filmId: string) {
		const parameters = FilmService.defaultSearchParams.append('i', filmId);
		return this.http.get<OMDBDetailResponse>(FilmService.api, {params: parameters})
			.pipe(
				map(FilmService.OMDBDetailtoFilmDetail)
			);
	}

	private static OMDBDetailtoFilmDetail(omdbDetail: OMDBDetailResponse): FilmDetail {
		return new FilmDetail(
			omdbDetail.Title,
			omdbDetail.Year,
			omdbDetail.Rated,
			omdbDetail.Released,
			omdbDetail.Runtime,
			omdbDetail.Genre,
			omdbDetail.Director,
			omdbDetail.Writer,
			omdbDetail.Actors,
			omdbDetail.Plot,
			omdbDetail.Language,
			omdbDetail.Country,
			omdbDetail.Awards,
			omdbDetail.Poster,
			omdbDetail.Metascore,
			omdbDetail.imdbRating,
			omdbDetail.imdbVotes,
			omdbDetail.imdbID,
			omdbDetail.Type,
			omdbDetail.DVD,
			omdbDetail.BoxOffice,
			omdbDetail.Production,
			omdbDetail.Website,
			omdbDetail.Response
		);
	}

	private static IOMDBSearchResponseToFilmsMapper(omdbSearchResponse: IOMDBSearchResponse): Film[] {
		return omdbSearchResponse.Search.map(FilmService.OMDBMovieToFilm);
	}

	private static OMDBMovieToFilm(omdbFilm: OMDBFilm): Film {
		return new Film(omdbFilm.Poster, omdbFilm.Title, omdbFilm.Type, omdbFilm.Year, omdbFilm.imdbID);
	}
}

interface IOMDBSearchResponse {
	Search: OMDBFilm[];
	totalResults: string;
	Response: string;
}

interface OMDBFilm {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}

interface OMDBDetailResponse {
	'Title': string;
	'Year': string;
	'Rated': string;
	'Released': string;
	'Runtime': string;
	'Genre': string;
	'Director': string;
	'Writer': string;
	'Actors': string;
	'Plot': string;
	'Language': string;
	'Country': string;
	'Awards': string;
	'Poster': string;
	'Metascore': string;
	'imdbRating': string;
	'imdbVotes': string;
	'imdbID': string;
	'Type': string;
	'DVD': string;
	'BoxOffice': string;
	'Production': string;
	'Website': string;
	'Response': string;
}
