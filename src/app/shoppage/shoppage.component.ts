import { Component, OnInit } from '@angular/core';
import { MyMainService } from './../_services/main.service';


@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.less']
})
export class ShoppageComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;
  fashioningproducts:Array<any>;
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1};
  slides = [
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.5.jpg?v=1580805818"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.4.jpg?v=1580805870"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.6.jpg?v=1580809639"},
    {img: "https://cdn.shopify.com/s/files/1/0318/1759/7065/files/slide3.7.jpg?v=1580809924"},
  ];
  constructor(private myMainService: MyMainService,
    ) { 
    this.fashionproducts()
  }

  ngOnInit(): void {
    this.items = Array(20).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));

  }
  onChangePage( fashioningproducts:Array<any>) {
    // update current page of items
    this.pageOfItems = fashioningproducts;
  }
  fashionproducts(){
    this.myMainService.getCollection().subscribe(data=>{
      console.log('collections',data);
      this.fashioningproducts = data.fashionimages;
    });
  }
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
