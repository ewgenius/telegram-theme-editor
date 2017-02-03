import { Component, Output } from '@angular/core';
import { ThemeService, TelegramTheme } from '../../services/theme/theme.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @Output() onApply;
  theme: TelegramTheme;

  constructor(private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }
}
