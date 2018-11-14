import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { IOption } from 'ng-select';

@Component({
  selector: 'forms-selects-and-tags',
  templateUrl: './selects-and-tags.component.html',
  styleUrls: [
    '../../../vendor/libs/angular-2-dropdown-multiselect/angular-2-dropdown-multiselect.scss',
    '../../../vendor/libs/ng-select/ng-select.scss'
  ]
})
export class SelectsAndTagsComponent {
  constructor(private appService: AppService) {
    this.appService.pageTitle = 'Selects and tags - Forms'

    //
    // angular-2-dropdown-multiselect
    //

    this.defaultSettings = {
      pullRight: appService.isRTL
    };
    this.searchSettings = {
      enableSearch: true,
      pullRight: appService.isRTL
    };
    this.iconSettings = {
      showCheckAll: true,
      showUncheckAll: true,
      checkedStyle: 'fontawesome',
      pullRight: appService.isRTL
    };
    this.singleSettings = {
      selectionLimit: 1,
      autoUnselect: true,
      pullRight: appService.isRTL
    };
    this.groupedSettings = {
      pullRight: appService.isRTL
    };
  }

  //
  // angular-2-dropdown-multiselect
  //

  defaultModel: number[];
  defaultOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Sweden' },
    { id: 2, name: 'Norway' },
    { id: 3, name: 'Denmark' },
    { id: 4, name: 'Finland' }
  ];
  defaultSettings: any;

  searchSettings: any;
  iconSettings: any;

  singleModel: number[];
  singleOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'HTML' }
  ];
  singleSettings: any;

  groupedModel: number[];
  groupedOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Car brands' },
    { id: 2, name: 'Volvo', parentId: 1 },
    { id: 3, name: 'Honda', parentId: 1 },
    { id: 4, name: 'BMW', parentId: 1 },
    { id: 5, name: 'Colors' },
    { id: 6, name: 'Blue', parentId: 5 },
    { id: 7, name: 'Red', parentId: 5 },
    { id: 8, name: 'White', parentId: 5 }
  ];
  groupedSettings: any;

  //
  // ng-select
  //

  disabled = false;
  selectOptions: Array<IOption> = [
    { label: 'Alaska', value: 'AK' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'California', value: 'CA' },
    { label: 'Nevada', value: 'NV' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Washington', value: 'WA' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Utah', value: 'UT' },
    { label: 'Wyoming', value: 'WY' },
    { label: 'Alabama', value: 'AL' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Texas', value: 'TX' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'West Virginia', value: 'WV' }
  ];

  singleSelectValue: IOption;
  multipleSelectValue: Array<IOption> = [];

}
