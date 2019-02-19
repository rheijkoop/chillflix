import { BillionDollarsPipe } from './billion-dollars.pipe';

describe('BillionDollarsPipe', () => {
  it('create an instance', () => {
    const pipe = new BillionDollarsPipe();
    expect(pipe).toBeTruthy();
  });
});
