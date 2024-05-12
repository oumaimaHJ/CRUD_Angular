import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  

  constructor(private http:HttpClient) { }
  BASIC_URL = 'http://localhost:8080'

  createCustomer(customer:any):Observable<any>{
    return this.http.post(this.BASIC_URL+"/api/customer",customer);
    
  }

  getCustomer():Observable<any>{
    return this.http.get(this.BASIC_URL+"/api/customers");
    
  }

  getCustomerById(id :number):Observable<any>{
    return this.http.get(this.BASIC_URL+"/api/customer/"+id)
  }

  updateCustomer(id:number, customer:any):Observable<any>{
    return this.http.put(this.BASIC_URL+"/api/customer/"+id, customer);
  }

  deleteCustomer(id: number):Observable<any>{
    return this.http.delete(this.BASIC_URL+"/api/customer/"+id)
  }
  
}
