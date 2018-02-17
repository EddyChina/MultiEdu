import {Component, OnInit} from '@angular/core';
import {School} from './School';
import {SignService} from './sign.service';

@Component({
  selector: 'sign-up-component',
  templateUrl: 'sign-up.component.html'
})

export class SignUpComponent implements OnInit {

  schoolList: School[];
  submitted = false;

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


    this.signService.getSchools()
      .then(results => this.schoolList = results);
  }

  constructor(
    private signService: SignService,
  ) {}

}
