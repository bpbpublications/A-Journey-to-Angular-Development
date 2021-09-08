import { ImpureTestPipe } from './impure-test.pipe';

describe('ImpureTestPipe', () => {
  it('create an instance', () => {
    const pipe = new ImpureTestPipe();
    expect(pipe).toBeTruthy();
  });
});
