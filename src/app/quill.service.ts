import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

let Quill: any = null;

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  editor_modules = {};

  constructor(@Inject(PLATFORM_ID) protected platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      Quill = require('quill');
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