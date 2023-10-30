import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyLoginComponent } from '../home/my-login/my-login.component';
import { MyHomeComponent } from '../home/my-home/my-home.component';


const routes: Routes = [
  { path: 'universtars/login', component: MyLoginComponent },
  { path: 'universtars/menu', component: MyHomeComponent},
  { path: '', redirectTo: 'universtars/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'universtars/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }