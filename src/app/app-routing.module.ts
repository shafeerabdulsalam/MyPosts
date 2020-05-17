import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { DetailComponent } from 'src/pages/detail/detail.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
