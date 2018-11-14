import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Controls - Forms'
  }
}
