import {Component} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: string;
  messages$: Observable<string>;

  setUser() {
  }

  create() {
  }

  read() {
  }

  update() {
  }

  delete() {
  }

  storage(){}
}
