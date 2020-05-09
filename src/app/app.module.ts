import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuillModule } from 'ngx-quill';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    QuillModule.forRoot({
      customModules: [{
        implementation: ImageDrop,
        path: 'modules/ImageDrop'
      },
      {
        implementation: ImageResize,
        path: 'modules/ImageResize',
      }],
      modules: {
        ImageResize: true,
        ImageDrop: true
      },
      suppressGlobalRegisterWarning: true,
      theme: 'snow',
      bounds: 'self'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
