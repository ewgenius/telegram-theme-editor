export interface TelegramThemeProperty {
  value: string;
  ref?: boolean;
}

export interface PropertyPayload extends TelegramThemeProperty {
  key: string;
}

export interface TelegramTheme {
  [key: string]: TelegramThemeProperty;
}
