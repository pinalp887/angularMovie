import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../service/screen.service';
import { Screen } from '../dto/screen';

@Component({
  selector: 'app-screenlist',
  templateUrl: './screenlist.component.html',
  styleUrls: ['./screenlist.component.css']
})
export class ScreenlistComponent implements OnInit {

  constructor(private screenService: ScreenService) { }
  screen = [];
  ngOnInit() {
    this.getAllScreen();
  }

  getAllScreen() {
    return this.screenService.getAllScreen().subscribe(
      data => {
        this.screen = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  edit(id: number) {
    console.log(id);
    this.screenService.getScreen(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  delete(id: number) {
    console.log(id);
    this.screenService.deleteScreen(id).subscribe(
      data => {
        this.getAllScreen();
      },
      error => {
        console.log(error);
      }
    )
  }
}
