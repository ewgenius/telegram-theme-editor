import { NgModule } from '@angular/core';

import { TelegramAppComponent } from './components/telegram-app/telegram-app.component';

@NgModule({
  declarations: [TelegramAppComponent],
  exports: [TelegramAppComponent]
})
export class TelegramModule { }
