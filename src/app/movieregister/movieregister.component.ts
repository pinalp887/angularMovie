import { Component, OnInit } from '@angular/core';
import { MoviecastService } from '../service/moviecast.service';
import { MovieCast } from '../dto/MovieCast';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Movie } from '../dto/Movie';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movieregister',
  templateUrl: './movieregister.component.html',
  styleUrls: ['./movieregister.component.css']
})
export class MovieregisterComponent implements OnInit {
  movieForm: FormGroup;
  movie: Movie = new Movie();
  constructor(private movieCast: MoviecastService, private fb: FormBuilder, private movieService: MovieService) { }
  public cast: MovieCast[];
  public count = 0;
  url = [];
  image: any;
  ngOnInit() {
    this.getAllCast();
    this.movieForm = this.fb.group({
      name: [''],
      durationTime: [''],
      rate: [''],
      casts: this.fb.array([this.buildCastForm()]),
      details: [''],
      category: [''],
      fileDto: this.fb.group({
        fname: [''],
        base: ['']
      })
    })
  }
  get casts() {
    return this.movieForm.get('casts') as FormArray;
  }

  add() {
    this.casts.push(this.buildCastForm())
  }
  getAllCast() {
    this.movieCast.getCast().subscribe(
      response => {
        this.cast = response;
      },
      error => {
        console.log(error.error.message)
      }
    )
  }

  buildCastForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: [''],
      dob: [''],
      hobby: ['']
    })
  }
  onChange(event) {
    this.getOneCast(event);
  }

  getOneCast(id: number) {
    const conArray = <FormArray>this.movieForm.get('casts');
    this.movieCast.getOneCast(id).subscribe(
      data => {
        if (conArray.controls[this.count].get('id').value != null) {
          conArray.controls[this.count].get('id').setValue(data.id);
          conArray.controls[this.count].get('name').setValue(data.name);
          conArray.controls[this.count].get('dob').setValue(data.dob);
          conArray.controls[this.count].get('hobby').setValue(data.hobby);
          this.count++;
        } else {
          alert("if you want to set another cast for movie then you have to click the add button and then you can set the another cast.")
        }
      },
      error => {
        console.log(error.error.message)
      }
    )
  }

  readFile(evt: any) {
    var tgt = evt.target,
      files = tgt.files;
    var reader: FileReader;
    if (files) {
      var fileName = [];
      for (let i = 0; i < files.length; i++) {
        const size = Math.round(files[0].size / 1000);
        if (size > 200) {
          alert(`uploaded file size is greater than expacted  ` + size + 'KB')
        } else {
          reader = new FileReader();
          fileName.push(btoa(files[i].name));
          reader.addEventListener("load", (e: any) => {
            this.url.push(e.target.result);
          }, false);
          reader.readAsDataURL(files[i]);
          this.movieForm.get("fileDto.fname").setValue(fileName)
          this.movieForm.get("fileDto.base").setValue(this.url);
          // console.log(this.url);
        }
      }
    }
  }

  // getMovieList() {
  //   return this.movieService.getAllMovie().then(
  //     res => {
  //       console.log(res)
  //     }
  //   );
  // }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image=reader.result;
    }, false);
    if(image){
      reader.readAsDataURL(image)
    }
  }

  getMovieImage() {
    this.movieService.getMovieImage(`15621402939791.jpg`).subscribe(
      data => {
        console.log(data)
       // this.createImageFromBlob(data);
      },
      error => {
        console.log(error)
      }
    )
  }

  saveMovie() {
    this.movie = this.movieForm.value;
    console.log(this.movie)
    this.movieService.saveMovie(this.movie).subscribe(
      data => {
        setTimeout(() => {
          console.log(data)
        }, 700);
      },
      error => {
        console.log(error)
      }
    )
  }
}
