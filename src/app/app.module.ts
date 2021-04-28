import { HeaderComponent } from './cart/header.component';
import { ProductListComponent } from './cart/product-list.component';
import { Cart1Component } from './cart/cart1.component';
import { MyMainService } from './_services/main.service';
import { MySharedService } from './_services/shared.service';
import { DemoMaterialModule } from './cart/material.module';
import { CartComponent } from '../app/cart/cart.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { HomecartComponent } from './homecart/homecart.component';
import { CartService } from './_services';
import { AngularWebStorageModule } from 'angular-web-storage';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';;
import { NewsapiComponent } from './newsapi/newsapi.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { SlickCarouselModule } from 'ngx-slick-carousel';





@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        DemoMaterialModule,
        AngularWebStorageModule,
        FormsModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatCarouselModule.forRoot(),
        JwPaginationModule,
        SlickCarouselModule
    ],
    declarations: [
        AppComponent,   
        AlertComponent,
        HomeComponent,
        CartComponent,
        HomecartComponent,
        Cart1Component,
        ProductListComponent,
        HeaderComponent,
        NewsapiComponent,
        ShoppageComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        CartService,
        MySharedService,
        MyMainService,
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],

})
export class AppModule { };