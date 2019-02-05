import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'article/:action/:id', component: NewsEditComponent },
  { path: 'article/:action', component: NewsEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
