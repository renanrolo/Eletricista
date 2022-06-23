import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiosComponent } from './pages/fios/fios.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'fios', component: FiosComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
