import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { routing } from  './app.routing';
import { AppComponent }   from './component/app.component';

@NgModule({
    imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }