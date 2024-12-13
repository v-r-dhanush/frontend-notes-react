import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName:string = "Dhanush V R";
  imgPath:string="./images/rajini.jpeg";
  imgName:string="Rajinikanth";

  inputData:string = "muruga";

  greeting(val:string){
    window.alert(`${val}`);
  }
}
