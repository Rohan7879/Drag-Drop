import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Drag_Drop';
  constructor() {}
  file: any;

  getFile(event: any) {
    this.file = event.target.files[0];
    console.log('file', this.file);
  }
}
