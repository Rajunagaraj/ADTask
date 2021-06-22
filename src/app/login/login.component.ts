import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from "../services/api.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: any = {};
  constructor(private route:Router,private api:ApiService) { }

  ngOnInit() {
  }
  Login_Submit():void{
    if(Object.keys(this.user).length !== 0){
      localStorage.setItem('users',JSON.stringify(this.user));
      this.api.Login_user()
      this.route.navigate(['/Task_list']);
    }
  }

}
