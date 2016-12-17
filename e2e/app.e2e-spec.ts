import { TwitchTVPage } from './app.po';

describe('twitch-tv App', function() {
  let page: TwitchTVPage;

  beforeEach(() => {
    page = new TwitchTVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
