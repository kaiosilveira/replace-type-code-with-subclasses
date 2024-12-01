import { Salesman } from '.';

describe('Salesman', () => {
  it('should return "salesman" as its string value', () => {
    const engineer = new Salesman('Kaio');
    expect(engineer.toString()).toBe('salesman');
  });
});
