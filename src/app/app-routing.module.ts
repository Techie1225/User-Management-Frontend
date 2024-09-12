import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userListComponent } from './user-list/user-list.component';
import { AdduserComponent } from './add-user/add-user.component';
import { UpdateuserComponent } from './update-user/update-user.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

  

const routes: Routes = [

  {path:"show-all-users",component: userListComponent},
  {path:"add-user", component: AdduserComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
  {path:'updating-by-id/:id',component:UpdateuserComponent},
  {path:'details-of-user/:id',component:ShowDetailsComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
