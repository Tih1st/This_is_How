import { Component } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'forms-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: [
    '../../../vendor/libs/ng2-nouislider/ng2-nouislider.scss',
    './sliders.scss'
  ]
})
export class SlidersComponent {

  // Single value slider

  singleValue: number[] = [80];
  singleConfig = {
    direction: 'ltr'
  }
  verticalSingleConfig = {
    orientation: 'vertical',
    direction: 'rtl'
  };

  // Range slider

  rangeValue = [ 2050, 3000 ];
  rangeConfig = {
    connect: true,
    step: 150,
    range: {
      'min': 1000,
      'max': 3750
    },
    direction: 'ltr'
  };

  // Full example

  fullValue = [ 1450, 2050, 2350, 3000 ];
  fullConfig = {
    connect: true,
    behaviour: 'tap-drag',
    step: 150,
    tooltips: true,
    range: {
      'min': 1000,
      'max': 3750
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 4
    },
    direction: 'ltr'
  };
  verticalFullConfig = {
    connect: true,
    behaviour: 'tap-drag',
    step: 150,
    tooltips: true,
    orientation: 'vertical',
    range: {
      'min': 1000,
      'max': 3750
    },
    pips: {
      mode: 'steps',
      stepped: true,
      density: 4
    },
    direction: 'rtl'
  };

  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Sliders - Forms';

    if (appService.isRTL) {
      this.singleConfig.direction = 'rtl';
      this.rangeConfig.direction = 'rtl';
      this.fullConfig.direction = 'rtl';
    }
  }
}
