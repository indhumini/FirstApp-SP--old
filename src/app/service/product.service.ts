import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private SERVER_URL= environment.SERVER_URL; 

  constructor(private http:HttpClient) {}

  showMessage(){
    console.log("Service called");
  }

  
  
  /* this is to fetch all products from the backe end server*/
  getAllProducts(numberOfResults:number=0){
  return this.http.get(this.SERVER_URL+ '/products', {
      params:{ 
       limit:numberOfResults.toString()
      }
    });
  }
}


