import { AmnestyPage } from './app.po';

describe('amnesty App', () => {
  let page: AmnestyPage;

  beforeEach(() => {
    page = new AmnestyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
