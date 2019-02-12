import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'article/details/:source/:id', component: NewsDetailsComponent },
  { path: 'article/create', component: NewsEditComponent },
  { path: 'article/edit/:id', component: NewsEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
