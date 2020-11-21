import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SampleDemo';
  showMe:boolean=false
  ReadMore:boolean=true
  getValues(val){
    console.warn(val);
    this.showMe=!this.showMe;
    this.ReadMore=!this.ReadMore;
      }
}
