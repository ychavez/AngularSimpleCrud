import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent {

  constructor(public accountService: AccountService, private router: Router){}
  
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}
