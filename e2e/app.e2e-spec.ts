import { VideolibraryPage } from './app.po';

describe('videolibrary App', function() {
  let page: VideolibraryPage;

  beforeEach(() => {
    page = new VideolibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
