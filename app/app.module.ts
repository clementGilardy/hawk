import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing } from  './app.routing';
import { AppComponent }   from './component/app.component';
import { ProgrammationComponent } from './component/programmation.component';
import { VideosComponent } from './component/videos.component';
import  { StreamComponent } from './component/stream.component';

@NgModule({
    imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
    declarations: [ AppComponent, ProgrammationComponent, VideosComponent, StreamComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }