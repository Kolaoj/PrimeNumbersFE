import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimeNumbersComponent } from './components/get-prime-numbers/get-prime-numbers.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'get-prime-numbers' },
  { path: 'get-prime-numbers', component: PrimeNumbersComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}