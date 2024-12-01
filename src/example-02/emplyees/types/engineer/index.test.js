import { Engineer } from '.';

describe('Engineer', () => {
  it('should return "engineer" as its string value', () => {
    const engineer = new Engineer('Kaio');
    expect(engineer.toString()).toBe('engineer');
  });
});
