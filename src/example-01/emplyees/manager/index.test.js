import { Manager } from '.';

describe('Manager', () => {
  it('should have type "manager"', () => {
    const engineer = new Manager('Kaio');
    expect(engineer.type).toBe('manager');
  });
});
