import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/shared/MenuItem';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(route: Router) { }


  ngOnInit() {
 
  }

  onClick() {
    // console.log('clicked')
    // this.router.navigate(['/admin/admin-details']);
    // this.route.navigate(["/home"])
  }

}
