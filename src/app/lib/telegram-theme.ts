export interface TelegramThemeProperty {
  ref?: string;
  value?: string;
}

export interface TelegramTheme {
  [id: string]: TelegramThemeProperty;
}

export function getProperty(theme: TelegramTheme, key: string) {
  const prop = theme[key];
  if (prop.value) {
    return prop.value;
  } else if (prop.ref) {
    return getProperty(theme, prop.ref);
  } else {
    return null;
  }
}

export function hasProperty(theme: TelegramTheme, key: string) {
  return !!theme[key];
}