import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/service/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productadd',
  imports: [FormsModule],
  templateUrl: './productadd.component.html',
  styleUrl: './productadd.component.css'
})
export class ProductaddComponent {
  constructor(public dbObj:DbserviceService,public router:Router){}

  addData(data:any){
    console.log(data);
    this.dbObj.addRecord("products",data).subscribe(()=>{
      window.alert("Product Added Successfully");
      this.router.navigate(["maindashboard/productdash"])
    })
  }
}
