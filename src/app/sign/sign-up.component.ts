import {Component, OnInit} from '@angular/core';
import {School} from '../data/vo/school';
import {SignService} from './sign.service';
import {DataService} from '../data/data.service';
import {environment} from '../../environments/environment';
import {Region} from '../data/vo/region';
import {Country} from '../data/vo/country';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'sign-up-component',
  templateUrl: 'sign-up.component.html'
})

export class SignUpComponent implements OnInit {

  countryList: Country[];
  regionList: Region[];
  schoolList: School[];
  submitted = false;
  regionFilterList: Region[] = [];
  schoolFilterList: School[] = [];

  constructor(
    private signService: SignService,
    private dataService: DataService,
  ) {}

  signUp() {
    this.submitted = true;
  }

  ngOnInit(): void {
    /*this.signService.getSchools().subscribe(resp => {
        console.log('get all school retcode: ' + resp.retCode);
        this.schoolList = resp.results as School[];
      },
      error => console.log('getSchools occurs error' + error.message)
    );*/

    if (environment.production) {
      this.signService.getSchools()
        .then(results => {
          this.schoolList = results;
          console.log(results);
        });
    } else {
      this.countryList = this.dataService.allCountry;
      this.regionList = this.dataService.allRegion;
      this.schoolList = this.dataService.allSchool;

    }
  }

  filterRegion(countryId: number): void {
    console.log('filterRegion().countryId = ' + countryId);

    this.schoolFilterList = [];
    this.regionFilterList = [];

    for (let i = 0; i < this.regionList.length; i++) {
      if (this.regionList[i].countryId === countryId) {
        this.regionFilterList.push(this.regionList[i]);
      }
    }
  }

  filterSchool(countryId: number, regionId: string): void {
    console.log('filterRegion().countryId = ' + countryId + ', regionId = ' + regionId);
    for (let i = 0; i < this.schoolList.length; i++) {
      if (this.schoolList[i].countryid === countryId
        && this.schoolList[i].region === regionId) {
        this.schoolFilterList.push(this.schoolList[i]);
      }
    }
  }

}
