import { ConcatPipe } from './concat.pipe';

describe('ConcatPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatPipe();
    expect(pipe).toBeTruthy();
  });
});
