import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchcontent',
  imports: [CommonModule],
  templateUrl: './switchcontent.component.html',
  styleUrl: './switchcontent.component.css'
})
export class SwitchcontentComponent {
  bike:string[] = ["KTM","TVS","Honda","Hero","Bajaj"];
  car:string[] = ["Toyota","BMW","Benz","Skoda","RR"];
  selectedItems:string[]=[];
  name:string='';

  bikees(){
    this.selectedItems=this.bike;
  }
  carees(){
    this.selectedItems = this.car;
  }
  onclick(value:string){
    this.name=value;
  }
}
