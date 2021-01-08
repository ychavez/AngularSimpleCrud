import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => {
       this.router.navigateByUrl('/products')
      }, error => console.log(error)
    );
  }

}
