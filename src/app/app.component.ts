import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

let Quill: any = null;
let ImageResize: any = null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngxQuillSSR';

  editor_modules = {};

  constructor(
    @Inject(PLATFORM_ID) protected platformId: any
  ) {
    if (isPlatformBrowser(platformId)) {
      //Quill = require('node_modules/quill');
      //ImageResize = require('quill-image-resize-module');
      //Quill.register('modules/imageResize', ImageResize);
    }
    this.editor_modules = {
      toolbar: {
        container: [
          [{ 'font': [] }],
          [{ 'size': ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'header': 1 }, { 'header': 2 }],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'align': [] }],
          ['link', 'image']
        ]
      },
      //imageResize: true
    };
  }
}
