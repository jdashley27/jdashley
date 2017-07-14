import { OfficialDashAngularPage } from './app.po';

describe('official-dash-angular App', function() {
  let page: OfficialDashAngularPage;

  beforeEach(() => {
    page = new OfficialDashAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
