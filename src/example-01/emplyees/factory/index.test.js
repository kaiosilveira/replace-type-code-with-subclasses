import { createEmployee } from '.';
import { Engineer } from '../engineer';
import { Salesman } from '../salesman';

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
});
