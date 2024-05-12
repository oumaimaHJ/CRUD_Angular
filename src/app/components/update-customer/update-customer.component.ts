import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent {

  id:number = this.activatedRoute.snapshot.params["id"];
  
  //@ts-ignore
  updateCustomerForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private fb:FormBuilder,
    private router:Router
  ){}

  ngOnInit(){

    this.updateCustomerForm=this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email:[null, [Validators.required, Validators.email]]

    })
 

    this.getCustomerById();
  }

  getCustomerById(){
    this.customerService.getCustomerById(this.id).subscribe(
      (res)=>{
        console.log(res);
        this.updateCustomerForm.patchValue(res);
      }
    )
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.id, this.updateCustomerForm.value).subscribe(
      (res)=>{
        console.log(res);
        if(res.id !=null){
          this.router.navigateByUrl("");
        }
      }
    )  }


}
