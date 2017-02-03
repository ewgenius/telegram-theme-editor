import { Component } from '@angular/core';
import { TelegramTheme } from '../../lib/telegram-theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: Observable<TelegramTheme>;

  constructor(private store: Store<fromRoot.State>) {
    this.theme = this.store.select(fromRoot.getTheme);
  }
}
