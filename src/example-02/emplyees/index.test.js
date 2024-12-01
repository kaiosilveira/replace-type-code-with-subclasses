import { Employee } from '.';
import { EmployeeType } from './types';

describe('Employee', () => {
  it('should throw an error if type is not valid', () => {
    expect(() => new Employee('Kaio', 'invalid')).toThrow('Employee cannot be of type invalid');
  });

  describe('toString', () => {
    it('should return the name and type', () => {
      const employee = new Employee('Kaio', new EmployeeType('engineer'));
      expect(employee.toString()).toBe('Kaio (Engineer)');
    });
  });
});
