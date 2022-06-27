import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CalcAmpComponent } from './pages/calc-amp/calc-amp.component';
import { FiosComponent } from './pages/fios/fios.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'fios', component: FiosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'calc-amp', component: CalcAmpComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    let path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      path = path.replace('/Eletricista', '')
      this.router.navigate([path]);
    }
  }

}
