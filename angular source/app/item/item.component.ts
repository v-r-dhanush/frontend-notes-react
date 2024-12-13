import { Component } from '@angular/core';
import { commanImgPath } from '../shared/constant/constantData';
import { CommonModule } from '@angular/common';
import { ItemsserviceService } from '../shared/service/itemsservice.service';

@Component({
  selector: 'app-item',
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj = new ItemsserviceService();

  myitems:any[] = [
    {name:"rajini",price:50000,description:"Thalaiver",imgPath:commanImgPath.rajini},
    {name:"muruga",price:500000000000,description:"New Avenger",imgPath:commanImgPath.muruga},
    {name:"viru",price:5000,description:"Destroyer",imgPath:commanImgPath.viru},
    {name:"thor",price:500000,description:"Thunder god",imgPath:commanImgPath.thor},
  ]
}
