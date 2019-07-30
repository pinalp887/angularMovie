import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScreenService } from '../service/screen.service';
import { Screen } from '../dto/screen';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {

  screenForm:FormGroup;
  constructor(private fb:FormBuilder,private screenService:ScreenService) { }
  screen:Screen=new Screen();
  ngOnInit() {
    this.screenForm=this.fb.group({
      screenName:['',[Validators.required]],
      platiniumSeats:['',[Validators.required]],
      silverSeats:['',[Validators.required]],
      goldSeats:['',[Validators.required]]
    })
  }

  saveScreen(){
    this.screen=this.screenForm.value;
    return this.screenService.saveScreen(this.screen).subscribe(
      data=>{
        console.log(data);
        this.screenForm.reset();
      },
      error=>{
        console.log(error);
      }
    )
  }

}
