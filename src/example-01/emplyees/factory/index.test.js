import { createEmployee } from '.';
import { Engineer } from '../engineer';
import { Salesman } from '../salesman';
import { Manager } from '../manager';

describe('createEmployee', () => {
  it('should create an engineer', () => {
    const employee = createEmployee('Kaio', 'engineer');
    expect(employee.type).toBe('engineer');
    expect(employee.toString()).toBe('Kaio (engineer)');
    expect(employee instanceof Engineer).toBe(true);
  });

  it('should create a salesman', () => {
    const employee = createEmployee('Kaio', 'salesman');
    expect(employee.type).toBe('salesman');
    expect(employee instanceof Salesman).toBe(true);
  });

  it('should create a manager', () => {
    const employee = createEmployee('Kaio', 'manager');
    expect(employee.type).toBe('manager');
    expect(employee instanceof Manager).toBe(true);
  });

  it('should throw an error for an unknown type', () => {
    expect(() => createEmployee('Kaio', 'invalid')).toThrow('Employee cannot be of type invalid');
  });
});
