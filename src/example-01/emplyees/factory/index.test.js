import { createEmployee } from '.';
import { Employee } from '..';

describe('createEmployee', () => {
  it('should create an employee', () => {
    const employee = createEmployee('Kaio', 'engineer');
    expect(employee.type).toBe('engineer');
    expect(employee.toString()).toBe('Kaio (engineer)');
    expect(employee instanceof Employee).toBe(true);
  });
});
