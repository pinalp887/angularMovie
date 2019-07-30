import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Movie } from '../dto/Movie';
import { trigger, transition, style, animate, state, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0 }),
        animate(1500)
      ])
    ]),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-150%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('flyUp', [
      state('out', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-150%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ transform: 'translateY(100%)' }))
      ])
    ]),
  ]
})
export class MovielistComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movie = [];
  ngOnInit() {
    this.getAllMovie();
  }

  getAllMovie() {
    return this.movieService.getAllMovie().subscribe(
      data => {
        console.log(data);
        this.movie=data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
