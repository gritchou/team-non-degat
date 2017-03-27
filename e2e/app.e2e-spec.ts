import { TeamNoDamagePage } from './app.po';

describe('team-no-damage App', () => {
  let page: TeamNoDamagePage;

  beforeEach(() => {
    page = new TeamNoDamagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
