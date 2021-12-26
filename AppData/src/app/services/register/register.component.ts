import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User
  rePassword:string;
  myForm:FormGroup;
 
  
  constructor(private userservice:UserserviceService,private router:Router) { 
    this.user=new User();
    this.rePassword="";
    this.myForm=new FormGroup({
      "id":new FormControl(null,[Validators.required]),
      "pass":new FormControl(null,[Validators.required]),
      "repass":new FormControl(null,[Validators.required]),
      "name":new FormControl(null,[Validators.required]),
     
    });
  }

  public get id():any{
    return this.myForm.get("id");
  }

 
  public get pass():any{
    return this.myForm.get("pass");
  }
  public get repass():any{
    return this.myForm.get("repass");
  }
  public get name():any{
    return this.myForm.get("name");
  }
  

  ngOnInit(): void {
  }
  
  register(){
    console.log("From the register component")
    console.log(this.user);
    console.log("----------------------------");
    if(this.myForm.valid)
    {
      this.user.id=this.id.value;
      this.user.password=this.pass.value;
      this.user.name=this.name.value;
    this.userservice.registerUsingAPI(this.user).subscribe((data)=>{
      var user:User = data as User;
      console.log(user.jwtToken);
      localStorage.setItem("token",user.jwtToken)
      localStorage.setItem("id",user.id);
      this.router.navigate(["login"])  
    });
    }}}

