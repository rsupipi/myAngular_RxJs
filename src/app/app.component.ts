import { Component, VERSION, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit(){
    of(2,4,6).subscribe
  }
} 