import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TelegramAppComponent } from './components/telegram-app/telegram-app.component';
import { TelegramChatsListComponent } from './components/telegram-chats-list/telegram-chats-list.component';
import { TelegramChatViewComponent } from './components/telegram-chat-view/telegram-chat-view.component';
import { TelegramChatHeaderComponent } from './components/telegram-chat-header/telegram-chat-header.component';
import { TelegramSidebarComponent } from './components/telegram-sidebar/telegram-sidebar.component';

@NgModule({
  imports: [FlexLayoutModule],
  declarations: [
    TelegramAppComponent,
    TelegramChatsListComponent,
    TelegramChatViewComponent,
    TelegramChatHeaderComponent,
    TelegramSidebarComponent
  ],
  exports: [TelegramAppComponent]
})
export class TelegramModule { }
