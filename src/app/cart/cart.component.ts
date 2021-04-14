import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  cartData:Array<any>=[];
  constructor(private cartService:CartService) {   }

  ngOnInit(){
     this.cartData=this.cartService.getData();
  }

  delete(index){
    this.cartData.splice(index,1);
    this.cartService.setData(this.cartData);
  }

  Order(){
    let message="Hi Krishna Rathore!!! \n";
    message+="I want to buy some Product."
    let cellType="Kg"; 
    this.cartData.forEach(data=>{
      if(data.sellType=="piece"){
        cellType="Piece"
      }
      if(data.sellType=="gram"){
        cellType="Gm"
      }
      message+=data.name+" "+data.selectedWeight+" "+cellType+"\n";
    })
    message+="Thanks.\n";
    message+="887823156564";
    
    //alert(message);

    //window.location.href="https://api.whatsapp.com/send?phone=919998062518&amp;text="+message;

    window.location.href="https://api.whatsapp.com/send?phone=919998062518' + number + '&text=%20'" + message
  }

  // getTotal(){
  //   return this.cartData.reduce((ini,data)=>ini+(data.selectedWeight*data.price),0)
  // }


}
