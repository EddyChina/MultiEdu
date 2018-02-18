export class Country {
  _countryId: number;
  _countryName: string;
  _abbreviation: string;
  _continent: string;


  get countryId(): number {
    return this._countryId;
  }

  set countryId(value: number) {
    this._countryId = value;
  }

  get countryName(): string {
    return this._countryName;
  }

  set countryName(value: string) {
    this._countryName = value;
  }

  get abbreviation(): string {
    return this._abbreviation;
  }

  set abbreviation(value: string) {
    this._abbreviation = value;
  }

  get continent(): string {
    return this._continent;
  }

  set continent(value: string) {
    this._continent = value;
  }
}
