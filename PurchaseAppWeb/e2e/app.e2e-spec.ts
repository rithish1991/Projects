import { PurchaseAppWebPage } from './app.po';

describe('purchase-app-web App', function() {
  let page: PurchaseAppWebPage;

  beforeEach(() => {
    page = new PurchaseAppWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
