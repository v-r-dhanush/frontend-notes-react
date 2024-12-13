import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimg1',
  imports: [],
  templateUrl: './toggleimg1.component.html',
  styleUrl: './toggleimg1.component.css'
})
export class Toggleimg1Component {

  imgPath:string="./images/rajini.jpeg";
  imgName:string="Rajinikanth";

  // imgPath2:string="./images/iron.jpeg";
  // imgName2:string="Iron";

  greeting(){ 
    if(this.imgName==="Rajinikanth"){
      this.imgPath="./images/iron.jpeg";
      this.imgName="Iron"
    }
    else{
      this.imgPath="./images/rajini.jpeg";
      this.imgName="Rajinikanth"
    }

  }
}
