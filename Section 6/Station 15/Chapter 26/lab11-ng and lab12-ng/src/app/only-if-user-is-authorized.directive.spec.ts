import { OnlyIfUserIsAuthorizedDirective } from './only-if-user-is-authorized.directive';

describe('OnlyIfUserIsAuthorizedDirective', () => {
  it('should create an instance', () => {
    const directive = new OnlyIfUserIsAuthorizedDirective();
    expect(directive).toBeTruthy();
  });
});
