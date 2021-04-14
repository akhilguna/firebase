import { Injectable } from '@angular/core';
import { SessionStorageService} from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private selectedData: Array<any> = [];

    constructor(private session: SessionStorageService) { }
  
    public getData() {
      let data = JSON.parse(this.session.get("OrderItems"));
      return data ? data : []
    }
  
    setData(data: any) {
      //this.selectedData = data;
      this.session.set("OrderItems", JSON.stringify(data));
  
    }
  
    removeData(data: any) {
      //this.selectedData = [];
      this.session.remove("OrderItems");
    }
  
}