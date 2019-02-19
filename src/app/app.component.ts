import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmService} from './services/film.service';
import {Film} from './models/film';
import {take, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent{

}
