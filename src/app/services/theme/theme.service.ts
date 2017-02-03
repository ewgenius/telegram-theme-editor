import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface TelegramThemeProperty {
  ref?: string;
  value?: string;
}

export interface TelegramTheme {
  [id: string]: TelegramThemeProperty;
}

@Injectable()
export class ThemeService {
  private _theme: TelegramTheme = {};

  get theme() {
    return this._theme;
  }

  hasProperty(key: string) {
    return !!this._theme[key];
  }

  getProperty(key: string) {
    const prop = this._theme[key];
    if (prop.value) {
      return prop.value;
    } else if (prop.ref) {
      return this.getProperty(prop.ref);
    } else {
      return null;
    }
  }

  setProperty(key: string, value: string) {
    this._theme[key] = {
      value
    };
  }

  refProperty(key: string, ref: string) {
    if (this.hasProperty(ref)) {
      this._theme[key] = {
        ref
      };
    }
  }
}
