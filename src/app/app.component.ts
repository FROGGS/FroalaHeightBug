import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  options = {
    minHeight: 200,
    maxHeight: 500,

    heightMax: 500,
    heightMin: 200,

  };

}
