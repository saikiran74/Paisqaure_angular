import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../../paisa';
import { PaiService } from '../../paisa.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators,ValidatorFn, AbstractControl,ValidationErrors  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message=''
  constructor(private _service: PaiService, private _router: Router){};
  text=''
  loginForm!: FormGroup;
  successMessage:boolean=false;
  loginFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl('bobbilisaikiran1999@gmail.com', [Validators.required,Validators.email]),
      password: new FormControl('sa', Validators.required),
    });
  }
  ngOnInit() {
    this.loginForm = this.loginFormGroup();
    this.loginForm.valueChanges.subscribe(value => {
      console.log(value.email);
      console.log(value.password);
    });
    this.loginForm.statusChanges.subscribe(status => {
      console.log('Form status changes:', status);
    });
  }
  loginButtonDisable:boolean=false;
  userLogin(){
    this.successMessage=false;
    this.message="";
    this.loginButtonDisable=true;
    if(this.loginForm.valid){
      this._service.loginUserFromRemote(this.loginForm.value).subscribe(
        response=>{
          console.log("Response received",response);
          this.message= response.apiMessage.message;
          if(response.apiMessage.status=='success'){
            this.successMessage=true;
          }
          if(response.apiMessage.code.includes("validUser")){
            console.log("Valid user");
            this._service.userId=response.user.id;
            this._service.userName=response.user.username;
            this._router.navigate(['advertiser'])
            //this._router.navigate(['home/profile/1'])
          } else if (response.apiMessage.code.includes("OTPNotVerified")) {
            console.log('OTPNotVerified', response.apiMessage);
          } else if (response.apiMessage.code.includes("emailIdNotFound")) {
            console.log('OTPNotVerified', response.apiMessage);
          } else{
            console.log('unknown error occured', response.apiMessage);
          } 
        //this._router.navigate(['advertiser'])
        //this._router.navigate(['home/profile/1'])
      },
        error=>{
        console.log("Error occured");
        this.message="Invalid email and password";
      });
    }
    this.loginButtonDisable=false;
  }
}
