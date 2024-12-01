import { Manager } from '.';

describe('Manager', () => {
  it('should return "manager" as its string value', () => {
    const engineer = new Manager('Kaio');
    expect(engineer.toString()).toBe('manager');
  });
});
