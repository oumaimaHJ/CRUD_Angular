import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.css'
})
export class PostCustomerComponent {
  //@ts-ignore
  postCustomerForm: FormGroup;

  constructor(private customerService: CustomerService, 
    private fb:FormBuilder,
     private router:Router){}

  ngOnInit(){
    this.postCustomerForm=this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]]

    })
  }

  postCustomer() {
   
    this.customerService.createCustomer(this.postCustomerForm.value).subscribe(
      (res)=>{
        this.router.navigateByUrl("/")
      }
    )
  
    }
    
}

