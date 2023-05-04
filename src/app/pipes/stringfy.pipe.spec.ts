import { StringfyPipe } from './stringfy.pipe';

describe('StringfyPipe', () => {
  it('create an instance', () => {
    const pipe = new StringfyPipe();
    expect(pipe).toBeTruthy();
  });
});
