import { createEmployee } from '.';
import { Engineer } from '../engineer';

describe('createEmployee', () => {
  it('should create an engineer', () => {
    const employee = createEmployee('Kaio', 'engineer');
    expect(employee.type).toBe('engineer');
    expect(employee.toString()).toBe('Kaio (engineer)');
    expect(employee instanceof Engineer).toBe(true);
  });
});
