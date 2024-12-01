import { createEmployeeType } from '.';
import { Engineer } from '../engineer';
import { Manager } from '../manager';
import { Salesman } from '../salesman';

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

  it('should return a Manager type', () => {
    const employeeType = createEmployeeType('manager');
    expect(employeeType instanceof Manager).toBe(true);
  });

  it('should return a Salesman type', () => {
    const employeeType = createEmployeeType('sales');
    expect(employeeType instanceof Salesman).toBe(true);
  });
});
