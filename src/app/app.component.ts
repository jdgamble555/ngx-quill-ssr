import { Component, Inject, PLATFORM_ID, NgZone, OnInit, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

let Quill: any = null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ngxQuillSSR';

  editor_modules = {};

  constructor(
    @Inject(PLATFORM_ID) protected platformId: any,
    private zone: NgZone,
  ) {
    if (isPlatformBrowser(this.platformId)) {

      Quill = require('node_modules/quill');
      const ImageResize = require('quill-image-resize').default;
      const { ImageDrop } = require('quill-image-drop-module');
      Quill.register('modules/imageResize', ImageResize);
      Quill.register('modules/imageDrop', ImageDrop);

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
      imageResize: true,
      imageDrop: true
    };
  }

}
