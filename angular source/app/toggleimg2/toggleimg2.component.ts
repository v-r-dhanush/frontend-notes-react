import { Component } from '@angular/core';

@Component({
  selector: 'app-toggleimg2',
  imports: [],
  templateUrl: './toggleimg2.component.html',
  styleUrl: './toggleimg2.component.css'
})
export class Toggleimg2Component {
  imgPath:string="./images/rajini.jpeg";
  imgName:string="Rajinikanth";
  // data:string="Rajinikanth"
  greeting1(imgName:string){
    if(imgName==="Rajinikanth"){
      this.imgPath="./images/rajini.jpeg";
      this.imgName="Rajinikanth";
    }
    else if(imgName==="anna"){
      this.imgPath="./images/anna.jpeg";
      this.imgName="Viru";
    }
    else if(imgName==="muruga"){
      this.imgPath="./images/murugan.jpeg";
      this.imgName="muruga";
    }
    else{
      this.imgPath="./images/boat.jpeg";
      this.imgName="boat"
    }
  }
  
}
