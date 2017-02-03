import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers';
import { TelegramModule } from './telegram/telegram.module';

import { AppComponent } from './components/app/app.component';
import { EditorComponent } from './components/editor/editor.component';
import { ThemeEditorComponent } from './components/theme-editor/theme-editor.component';
import { ThemeFieldComponent } from './components/theme-field/theme-field.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule.forRoot(),
    TelegramModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [
    AppComponent,
    EditorComponent,
    ThemeEditorComponent,
    ThemeFieldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
