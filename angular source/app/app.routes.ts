import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { ChildComponent } from './child/child.component';
import { Directive } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ProductdashComponent } from './crud/productdash/productdash.component';
import { ProductaddComponent } from './crud/productadd/productadd.component';
import { ProducteditComponent } from './crud/productedit/productedit.component';
import { authGuard } from './shared/custguard/auth.guard';

export const routes: Routes = [
  // 1.naming routing
  { path: "login", component: LoginComponent },
  // 2.default routing
  { path: "", component: LoginComponent },
  // 3.Redirect Routing
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "maindashboard", component: MaindashboardComponent,canActivate:[authGuard], children:[

      { path: "databinding", component: DatabindingComponent },
      { path: "parent", component: ParentComponent },
      { path: "child", component: ChildComponent },
      { path: "directive", component: Directive },
      {path:"item",component:ItemComponent},
      {path:"productdash",component:ProductdashComponent},
      {path:"productadd",component:ProductaddComponent},
      {path:"productedit/:id",component:ProducteditComponent},
      
      // 4. Parameterized Routing
      { path: "mypipe/:id", component: MypipesComponent },
      // 5.Child Routing
      { path: "angform", component: AngformComponent, children:[
          {path:"utdf", component:UtdfComponent},
          {path:"rtf", component:RtfComponent},
  ] },


  ] },
  {path:"**", component:PagenotfoundComponent}

];

