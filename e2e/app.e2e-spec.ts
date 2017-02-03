import { TelegramThemeEditorPage } from './app.po';

describe('telegram-theme-editor App', function() {
  let page: TelegramThemeEditorPage;

  beforeEach(() => {
    page = new TelegramThemeEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
