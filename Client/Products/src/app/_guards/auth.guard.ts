import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private accountservice: AccountService){}

  canActivate(): Observable<boolean> {
    return this.accountservice.currenUser$.pipe(
      map(user =>{
        if(user) return true;
       alert('bete a la berga')
      }

      )
    );
  }

}
