import { Employee } from '.';

describe('Employee', () => {
  it('should throw an error if type is not valid', () => {
    expect(() => new Employee('Kaio', 'invalid')).toThrow('Employee cannot be of type invalid');
  });

  it('should return the capitalized type', () => {
    const employee = new Employee('Kaio', 'engineer');
    expect(employee.capitalizedType).toBe('Engineer');
  });

  describe('toString', () => {
    it('should return the name and type', () => {
      const employee = new Employee('Kaio', 'engineer');
      expect(employee.toString()).toBe('Kaio (Engineer)');
    });
  });
});
