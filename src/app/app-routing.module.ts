import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', component: MyCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
