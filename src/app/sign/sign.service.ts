import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {School} from '../data/vo/school';
import {DataService} from '../data/data.service';

interface ResponseVO {
  results: School[];
}

@Injectable()
export class SignService {

  private serverUrl = environment.mainDomain;
  private httpHeader = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  constructor(
    private httpClient: HttpClient
  ) {}

  getSchools(): Promise<School[]> {
    console.log('get school data from server');
    const schoolUrl = `${this.serverUrl}/school`;
    return this.httpClient.get<ResponseVO>(schoolUrl, {headers: this.httpHeader})
      .toPromise()
      .then(resp => resp.results as School[]);
  }
}
