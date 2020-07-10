import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string;
  message:string;

  constructor(private _backendService:BackendService,private router:Router) { }

  ngOnInit(): void {
  }

onLoginClicked(){
  this._backendService.validateUser(this.userName,this.password).subscribe(
    m=>{
      if(m){
        this.router.navigate(['/home']);
      }
      else{
        this.message="Invalid user";
      }

    }
  )
 
}

onClear(){
  this.userName="";
  this.password="";
  this.message="";
}
}
