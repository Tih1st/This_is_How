import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { LayoutService } from '../../layout/layout.service';
import { AuthService } from '../../auth/auth.service';
import { AUTH_CONFIG } from '../../auth/auth0-variables';

@Component({
  selector: 'app-layout-navbar',
  templateUrl: './layout-navbar.component.html',
  styles: [':host { display: block; }'],
  host: { '[class.layout-navbar]': 'true' }
})
export class LayoutNavbarComponent {
  isExpanded = false;
  isRTL: boolean;

  @Input() sidenavToggle: boolean = true;

  constructor(private appService: AppService,
    private layoutService: LayoutService,
    public auth: AuthService) {
    this.isRTL = appService.isRTL;
    if (!auth.isAuthenticated()){
      auth.handleAuthentication();
      auth.login()
    }
  }

  currentBg() {
    return `bg-${this.appService.layoutNavbarBg}`;
  }

  ngOnInit() {
  }
}
