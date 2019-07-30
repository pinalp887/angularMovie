import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MovieService } from '../service/movie.service';
import { ScreenService } from '../service/screen.service';
import { ShowReg } from '../dto/ShowNewRegister';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-show-register',
  templateUrl: './show-register.component.html',
  styleUrls: ['./show-register.component.css']
})
export class ShowRegisterComponent implements OnInit {
  showForm: FormGroup;
  public mCount = 0;
  public sCount = 0;
  show: ShowReg = new ShowReg();
  bookedSeats = [];
  constructor(private fb: FormBuilder, private movieService: MovieService, private screenService: ScreenService, private showService: ShowService) {
    this.showForm = this.fb.group({
      details: this.fb.array([])
    })
  }
  movies = [];
  screens = [];
  ngOnInit() {
    this.createForms();
    this.getAllMovies();
    this.getAllScreen();

  }
  get details() {
    // console.log(this.showForm.get('details'))
    return this.showForm.get('details');
  }
  createForms() {
    // console.log(this.details)
    let control = <FormArray>this.showForm.controls.details;
    control.push(this.buildShowRegistrationForm());
  }

  buildShowRegistrationForm(): FormGroup {
    return this.fb.group({
      movie: this.fb.group({
        id: [''],
        name: [''],
        durationTime: [''],
        fileName: [''],
        fileType: [''],
        rate: [''],
        details: [''],
        category: [''],
        isShowAble: [''],
        status: ['']
      }),
      screen: this.fb.group({
        id: [''],
        screenName: [''],
        platiniumSeats: [''],
        silverSeats: [''],
        goldSeats: ['']
      }),
      bookedSeats: [this.bookedSeats],
      paymentType: [''],
      date: [''],
      platiniumPrice: [''],
      silverPrice: [''],
      goldPrice: [''],
      time: ['']
    })
  }
  getAllMovies() {
    return this.movieService.getAllMovie().subscribe(
      data => {
        this.movies = data;
      }, error => {
        console.log(error)
      }
    )
  }

  getAllScreen() {
    return this.screenService.getAllScreen().subscribe(
      data => {
        this.screens = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  onMovieChange(event) {
    const movie = <FormArray>this.showForm.get('details');
    this.movieService.getMovie(event).subscribe(
      data => {
        if (movie.length > this.mCount) {
          movie.controls[this.mCount].get("movie.id").setValue(data.id);
          movie.controls[this.mCount].get("movie.name").setValue(data.name);
          movie.controls[this.mCount].get("movie.durationTime").setValue(data.durationTime);
          movie.controls[this.mCount].get("movie.fileName").setValue(data.fileName);
          movie.controls[this.mCount].get("movie.fileType").setValue(data.fileType);
          movie.controls[this.mCount].get("movie.rate").setValue(data.rate);
          movie.controls[this.mCount].get("movie.details").setValue(data.details);
          movie.controls[this.mCount].get("movie.category").setValue(data.category);
          movie.controls[this.mCount].get("movie.isShowAble").setValue(data.isShowable);
          movie.controls[this.mCount].get("movie.status").setValue(data.status);
          this.mCount++;
        } else {
          alert("please add one more show for selecting movie")
        }
      }, error => {
        console.log(error)
      }
    )
  }

  removeForm() {
    const details = <FormArray>this.showForm.get('details');
    console.log("remove called" + details.length);
    details.removeAt(details.length - 1);
  }

  onScreenChange(event) {
    const screen = <FormArray>this.showForm.get('details');
    return this.screenService.getScreen(event).subscribe(
      data => {
        console.log(screen.length)
        if (screen.length > this.sCount) {
          screen.controls[this.sCount].get("screen.id").setValue(data.id);
          screen.controls[this.sCount].get("screen.screenName").setValue(data.screenName);
          screen.controls[this.sCount].get("screen.platiniumSeats").setValue(data.platiniumSeats);
          screen.controls[this.sCount].get("screen.silverSeats").setValue(data.silverSeats);
          screen.controls[this.sCount].get("screen.goldSeats").setValue(data.goldSeats);
          this.sCount++;
        } else {
          alert("please add one more show for selecting Screen")
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  save() {
    this.show = this.showForm.value;
    console.log(this.show);
    return this.showService.saveShow(this.show).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error)
      }
    )
  }
}