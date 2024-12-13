import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../../shared/service/dbservice.service';

@Component({
  selector: 'app-productedit',
  imports: [FormsModule],
  templateUrl: './productedit.component.html',
  styleUrl: './productedit.component.css'
})
export class ProducteditComponent {
  id:any;
  prodData:any;
  constructor(private _actRoute:ActivatedRoute,private _dbObj:DbserviceService,private _router:Router){}

  ngOnInit(){
    this._actRoute.params.subscribe((param:any)=>{
     // console.log(param);
      this.id = param.id;
      this._dbObj.getSingleRecord("products",this.id).subscribe((res:any)=>{
        //console.log(res);
        this.prodData={...res}
      })
    })
  }

  addData(val:any){
    this._dbObj.updateRecord("products",this.id,val).subscribe(()=>{
      window.alert("Product Added Successfully");
      this._router.navigate(["/maindashboard/productdash"]);
    })
  }

}
