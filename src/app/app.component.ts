import {AfterViewChecked, Component} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'MultiEdu';
  loaded = false;

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngAfterViewChecked(): void {
    this.loaded = true;
  }

  demos(): void {
    console.log('has entered demos()');
    // this.router.navigateByUrl('/demos');
    this.location.go('/demos');
    console.log('complete demos()');
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
