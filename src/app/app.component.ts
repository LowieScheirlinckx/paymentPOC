import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  isCollapsed = false
  isLoggedIn = false
  constructor(private loginService: LoginService)
  {
    
  }

  ngOnInit(): void {
    this.loginService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
