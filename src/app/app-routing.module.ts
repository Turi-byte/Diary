import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';

const routes: Routes = [
  { path: 'entries', component: EntryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'entries/:id', component: EntryDetailComponent},
  { path: '', redirectTo: "/entries", pathMatch:"full"},
  { path: '**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
