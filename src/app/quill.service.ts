import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

let Quill: any = null;

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  constructor(@Inject(PLATFORM_ID) protected platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      Quill = require('quill');
      let ImageResize = require('quill-image-resize').default;
      let { ImageDrop } = require('quill-image-drop-module');
      Quill.register('modules/imageResize', ImageResize);
      Quill.register('modules/imageDrop', ImageDrop);
    }
  }
}