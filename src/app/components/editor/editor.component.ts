import { Component, Output } from '@angular/core';
import { TelegramTheme } from '../../lib/telegram-theme';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @Output() onApply;
  theme: Observable<TelegramTheme>;

  constructor(private store: Store<fromRoot.State>) {
    this.theme = this.store.select(fromRoot.getTheme);
  }
}
