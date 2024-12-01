import { createEmployeeType } from '.';
import { Engineer } from '../engineer';

describe('createEmployeeType', () => {
  it('should throw an error if type is not valid', () => {
    expect(() => createEmployeeType('invalid')).toThrow('Employee cannot be of type invalid');
  });

  it('should create an employee of a given type', () => {
    const employeeType = createEmployeeType('engineer');
    expect(employeeType.toString()).toBe('engineer');
  });

  it('should return an Engineer type', () => {
    const employeeType = createEmployeeType('engineer');
    expect(employeeType instanceof Engineer).toBe(true);
  });
});
