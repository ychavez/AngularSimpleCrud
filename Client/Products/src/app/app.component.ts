
import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { AccountService } from './_services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  constructor(
    private layoutService: LayoutService,
    public accountService: AccountService
  ) {}

  ngOnInit() {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
