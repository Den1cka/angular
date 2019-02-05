import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsSingleComponent } from './news-list/news-single/news-single.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsSingleComponent,
    NewsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
