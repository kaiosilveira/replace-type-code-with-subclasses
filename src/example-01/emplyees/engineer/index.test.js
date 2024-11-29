import { Engineer } from '.';

describe('Engineer', () => {
  it('should have type "engineer"', () => {
    const engineer = new Engineer('Kaio');
    expect(engineer.type).toBe('engineer');
  });
});
