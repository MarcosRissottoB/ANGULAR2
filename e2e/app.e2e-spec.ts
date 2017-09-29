import { SPOTIAPPPage } from './app.po';

describe('spotiapp App', () => {
  let page: SPOTIAPPPage;

  beforeEach(() => {
    page = new SPOTIAPPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
