import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-field',
  templateUrl: './theme-field.component.html',
  styleUrls: ['./theme-field.component.scss']
})
export class ThemeFieldComponent {
  @Input() key: string;
  @Input() value: string;
  @Output() onChange = new EventEmitter<{
    key: string,
    value: string
  }>();

  change(e) {
    this.onChange.emit({
      key: this.key,
      value: e.target.value
    });
  }
}
