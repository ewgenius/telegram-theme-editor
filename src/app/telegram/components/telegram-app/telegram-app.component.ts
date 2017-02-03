import { Component, Input } from '@angular/core';
import { TelegramTheme } from '../../../lib/telegram-theme';

@Component({
  selector: 'telegram-app',
  templateUrl: './telegram-app.component.html',
  styleUrls: ['./telegram-app.component.scss']
})
export class TelegramAppComponent {
  @Input() theme: TelegramTheme;
  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
