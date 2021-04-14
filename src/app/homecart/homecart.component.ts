import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-homecart',
  templateUrl: './homecart.component.html',
  styleUrls: ['./homecart.component.less']
})
export class HomecartComponent{
  gram=[100,200,300,400];
  piece=[1,2,3,4,5];
  kg=[1,2,3,4,5,6,7,8,9,10];

  store=[{
    id:1,
    name:'Product 1',
    price:15,
    image:'',
    selectedWeight:null,
    selectedProduct:false,
    sellType:'piece'
  },{
    id:2,
    name:'Product 2',
    price:17,
    image:'',
    selectedWeight:null,
    selectedProduct:false,
    sellType:'gram'
  },{
    id:3,
    name:'Product 3',
    price:35,
    image:'',
    selectedWeight:null,
    selectedProduct:false,
    sellType:'kg'
  },{
    id:4,
    name:'Product 4',
    price:10,
    image:'',
    selectedWeight:null,
    selectedProduct:false,
    sellType:'kg'
  },{
    id:5,
    name:'Product 5',
    price:13,
    image:'',
    selectedWeight:null,
    selectedProduct:false,
    sellType:'kg'
  }];

 constructor(private router: Router,private cartService:CartService){
   
 }

 ngOnInit(){
   
   let selectedData=this.cartService.getData();
   if(selectedData.length){
     selectedData.forEach((record:any)=>{
       let storeDataObj:any=this.store.find((storeObj)=>storeObj.id===record.id);
       if(storeDataObj){
         storeDataObj.selectedWeight=record.selectedWeight
         storeDataObj.selectedProduct=record.selectedProduct
         storeDataObj.sellType=record.sellType
       }
     })
   }
 }

 

  submit(){
    let data=this.store.filter(data=>data.selectedWeight && data.selectedProduct);
    if(data.length){
      this.cartService.setData(data);
       this.router.navigate(['cart']);
    }else{
      alert("Select project with weight");
    }
    
  }

}
