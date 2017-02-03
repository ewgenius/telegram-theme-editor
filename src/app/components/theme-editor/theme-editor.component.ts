import { Component, Input, OnChanges } from '@angular/core';
import { TelegramTheme } from '../../lib/telegram-theme';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { SetPropertyAction } from '../../actions/theme';

@Component({
  selector: 'app-theme-editor',
  templateUrl: './theme-editor.component.html',
  styleUrls: ['./theme-editor.component.scss']
})
export class ThemeEditorComponent implements OnChanges {
  @Input() theme: TelegramTheme;
  keys: string[] = [];
  newKey = '';
  newValue = '';

  constructor(private store: Store<fromRoot.State>) { }

  ngOnChanges() {
    this.keys = Object.keys(this.theme);
  }

  onChange(value) {
    this.store.dispatch(new SetPropertyAction(value));
  }

  addProperty() {
    this.store.dispatch(new SetPropertyAction({
      key: this.newKey,
      value: this.newValue
    }));
    this.newKey = '';
    this.newValue = '';
  }
}
