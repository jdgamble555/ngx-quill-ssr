import { Component } from '@angular/core';
import { QuillService } from './quill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngxQuillSSR';

  constructor(public qs: QuillService) {

  }
}
