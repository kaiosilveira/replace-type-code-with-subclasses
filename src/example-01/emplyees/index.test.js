import { Employee } from '.';

describe('Employee', () => {
  describe('toString', () => {
    it('should return the name and type', () => {
      class DummyEmployee extends Employee {
        get type() {
          return 'engineer';
        }
      }

      const employee = new DummyEmployee('Kaio', 'engineer');
      expect(employee.toString()).toBe('Kaio (engineer)');
    });
  });
});
