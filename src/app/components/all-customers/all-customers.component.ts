import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrl: './all-customers.component.css'
})
export class AllCustomersComponent {
  customers : any = [];
  constructor(private customerService: CustomerService, private router:Router){}

  ngOnInit(){
    this.getCustomers();
  }
getCustomers(){
  this.customerService.getCustomer().subscribe(
    (res)=>{
   
      this.customers=res;
    }
  );
}

deleteCustomer(id: number){
  this.customerService.deleteCustomer(id).subscribe(
    (res)=>{
      console.log(res);
      this.getCustomers();
    }
  )
}

}
