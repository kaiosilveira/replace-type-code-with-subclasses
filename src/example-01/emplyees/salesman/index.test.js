import { Salesman } from '.';

describe('Salesman', () => {
  it('should have type "salesman"', () => {
    const engineer = new Salesman('Kaio');
    expect(engineer.type).toBe('salesman');
  });
});
