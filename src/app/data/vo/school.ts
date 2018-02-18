export class School {
  _schoolid: number;
  _fullname: string;
  _abbreviation: string;
  _alias: string;
  _countryid: number;
  _region: String;


  get schoolid(): number {
    return this._schoolid;
  }

  set schoolid(value: number) {
    this._schoolid = value;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(value: string) {
    this._fullname = value;
  }

  get abbreviation(): string {
    return this._abbreviation;
  }

  set abbreviation(value: string) {
    this._abbreviation = value;
  }

  get alias(): string {
    return this._alias;
  }

  set alias(value: string) {
    this._alias = value;
  }

  get countryid(): number {
    return this._countryid;
  }

  set countryid(value: number) {
    this._countryid = value;
  }

  get region(): String {
    return this._region;
  }

  set region(value: String) {
    this._region = value;
  }
}
