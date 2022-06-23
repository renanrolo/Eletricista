import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiosComponent } from './pages/fios/fios.component';

const routes: Routes = [
  { path: 'fios', component: FiosComponent },
  { path: 'home', component: FiosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
