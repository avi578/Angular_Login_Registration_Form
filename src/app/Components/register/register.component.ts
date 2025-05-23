import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user= new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(2)]),
    lastName:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    userDob:new FormControl('')
  })

  register(){
    alert(this.user.value);
    console.log(this.user.value);
    
  }
}
