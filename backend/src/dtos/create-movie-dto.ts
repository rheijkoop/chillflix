import {ApiModelProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from 'class-validator';
import {MovieEntity} from '../entities/movie-entity';

export class CreateMovieDto {
	@IsString()
	@ApiModelProperty()
	public readonly title: string;

	@IsNumber()
	@ApiModelProperty()
	public readonly year: number;

	@IsString()
	@ApiModelProperty()
	public readonly imdbId: string;

	@IsString()
	@ApiModelProperty()
	public readonly type: string;

	@IsString()
	@ApiModelProperty()
	public readonly posterUrl: string;

	movieEntity(): MovieEntity {
		return new MovieEntity(this.title, this.year, this.imdbId, this.type, this.posterUrl)
	}
}
