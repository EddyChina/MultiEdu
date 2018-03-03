import {Injectable, OnInit} from '@angular/core';
import {Country} from './vo/country';
import {Region} from './vo/region';
import {School} from './vo/school';

@Injectable()
export class DataService implements OnInit {
  private _allCountry: Country[] = [];
  private _allRegion: Region[] = [];
  private _allSchool: School[] = [];

  ngOnInit(): void {

  }


  constructor() {
    console.log('enter constructor of DataService');

    this.initAllCountry();
    this.initAllRegion();
    this.initAllSchool();
  }


  get allCountry(): Country[] {
    return this._allCountry;
  }

  set allCountry(value: Country[]) {
    this._allCountry = value;
  }

  get allRegion(): Region[] {
    return this._allRegion;
  }

  set allRegion(value: Region[]) {
    this._allRegion = value;
  }

  get allSchool(): School[] {
    return this._allSchool;
  }

  set allSchool(value: School[]) {
    this._allSchool = value;
  }

  initAllCountry(): void {
    const c = new Country();

    c.countryId = '1';
    c.countryName = 'United States';
    c.continent = 'America';

    this._allCountry.push(c);

    const c1 = new Country();
    c1.countryId = '86';
    c1.countryName = 'China';
    c1.continent = 'Asia';

    this._allCountry.push(c1);
  }

  initAllRegion(): void {
    const r = new Region();

    r.regionId = '010';
    r.countryId = '86';
    r.regionName = 'BeiJing';

    this._allRegion.push(r);

    const r2 = new Region();
    r2.regionId = 'CA';
    r2.countryId = '1';
    r2.regionName = 'California';

    this._allRegion.push(r2);
  }

  initAllSchool(): void {
    const sch = new School();

    sch.schoolid = '1';
    sch.abbreviation = 'UCLA';
    sch.countryid = '1';
    sch.region = 'CA';

    this._allSchool.push(sch);

    const sch2 = new School();
    sch2.schoolid = '2';
    sch2.abbreviation = 'UCSC';
    sch2.countryid = '1';
    sch2.region = 'CA';

    this._allSchool.push(sch2);

    const sch3 = new School();
    sch3.schoolid = '3';
    sch3.abbreviation = 'UCB';
    sch3.countryid = '1';
    sch3.region = 'CA';

    this._allSchool.push(sch3);

    const sch4 = new School();
    sch4.schoolid = '4';
    sch4.abbreviation = 'Peking';
    sch4.countryid = '86';
    sch4.region = '010';

    this._allSchool.push(sch4);

    const sch5 = new School();
    sch5.schoolid = '5';
    sch5.abbreviation = 'Tsinghua';
    sch5.countryid = '86';
    sch5.region = '010';

    this._allSchool.push(sch5);
  }

}
