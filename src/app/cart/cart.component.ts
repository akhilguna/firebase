import { MySharedService } from './../_services/shared.service';
import { MyMainService } from './../_services/main.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  cartData:Array<any>=[];
  products: any = [];
  collected:any=[];
  fashioningproducts:any=[];
  fashioningproducts1:any=[];
  fashioningproducts2:any=[];
  fashioncollecting:any=[];
  fashionsliding:any=[];
  testimonialsliding:any=[];
  startingsliding:any=[];
  slides = [
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.5.jpg?v=1580805818"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.4.jpg?v=1580805870"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.6.jpg?v=1580809639"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.7.jpg?v=1580809924"},
  ];
  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  slideConfig1 = {"slidesToShow": 3, "slidesToScroll": 1};
  slideConfig2 = {"slidesToShow": 1, "slidesToScroll": 1};
  slideConfig3 = {"slidesToShow": 3, "slidesToScroll": 1};
  constructor(private cartService:CartService,private myMainService: MyMainService,
    private mySharedService: MySharedService) {  
      this.collections();
      this.fashionproducts();
      this.fashionproducts1();
      this.fashionproducts2()
      this.fashioncollections();
      this.fashionslider();
      this.newcollectionslider();
      this.startingslider();
     }
 

  ngOnInit(){
     this.cartData=this.cartService.getData();
     this.myMainService.getProducts().subscribe(data => {
       console.log(data);
      this.products = data.products;
    });
 
  }
  collections(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.collected = data.collections;
    });
  }
  fashionproducts(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashioningproducts = data.fashionproducts;
    });
  }
  fashionproducts1(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashioningproducts1 = data.fashionproducts1;
    });
  }
  fashionproducts2(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashioningproducts2 = data.fashionproducts2;
    });
  }
  fashioncollections(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashioncollecting= data.fashioncollection;
    });
  }
  fashionslider(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashionsliding= data.fashionslider;
    });
  }
  newcollectionslider(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.testimonialsliding= data.testimonialslider;
    });
  }
  startingslider(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.startingsliding= data.stratingslider;
    });
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
  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  } 

}
