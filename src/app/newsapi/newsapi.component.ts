import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../_services/news-api.service';

@Component({
  selector: 'app-newsapi',
  templateUrl: './newsapi.component.html',
  styleUrls: ['./newsapi.component.less']
})
export class NewsapiComponent implements OnInit {
  mArticles:Array<any>;
  mSources:Array<any>;
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');         
  }

  ngOnInit(): void {
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);  
  }
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
