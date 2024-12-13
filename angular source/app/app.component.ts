import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { Toggleimg1Component } from './toggleimg1/toggleimg1.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { Toggleimg2Component } from './toggleimg2/toggleimg2.component';
import { SwitchcontentComponent } from './switchcontent/switchcontent.component';
import { LoginComponent } from './layout/login/login.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent,DirectiveComponent,ParentComponent,ChildComponent,Toggleimg1Component,MypipesComponent,Toggleimg2Component,SwitchcontentComponent,LoginComponent,MaindashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angproject';
}
