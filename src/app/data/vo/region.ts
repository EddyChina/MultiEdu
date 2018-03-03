export class Region {

  _regionId: string;
  _regionName: string;
  _countryId: string;


  get regionId(): string {
    return this._regionId;
  }

  set regionId(value: string) {
    this._regionId = value;
  }

  get regionName(): string {
    return this._regionName;
  }

  set regionName(value: string) {
    this._regionName = value;
  }

  get countryId(): string {
    return this._countryId;
  }

  set countryId(value: string) {
    this._countryId = value;
  }
}
