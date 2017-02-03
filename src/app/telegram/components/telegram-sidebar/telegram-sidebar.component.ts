import { Component, Input } from '@angular/core';

@Component({
  selector: 'telegram-sidebar',
  templateUrl: './telegram-sidebar.component.html',
  styleUrls: ['./telegram-sidebar.component.scss']
})
export class TelegramSidebarComponent {
  @Input() open: boolean;
}
