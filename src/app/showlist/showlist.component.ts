import { Component, OnInit } from '@angular/core';
import { ShowService } from '../service/show.service';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {

  constructor(private showService: ShowService) { }
  show = [];

  ngOnInit() {
    this.getAllShows();
  }

  getAllShows() {
    return this.showService.getAllShow().subscribe(
      data =>{
        this.show=data;
      }, error=>{
        console.log(error)
      }
    )
  }
}
