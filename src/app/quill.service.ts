import { Injectable } from '@angular/core';
import Quill from 'quill';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize';

@Injectable({
  providedIn: 'root'
})
export class QuillService {

  editorModules = {
    imageResize: true,
    imageDrop: true,
    //syntax: true
  };

  editorStyle = {
    resize: 'vertical',
    'overflow-y': 'auto'
  };

  constructor() { 
    Quill.register('modules/imageResize', ImageResize);
    Quill.register('modules/imageDrop', ImageDrop);
  }
}