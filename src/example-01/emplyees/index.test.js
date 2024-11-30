import { Employee } from '.';

describe('Employee', () => {
  it('should throw an error if type is not valid', () => {
    expect(() => new Employee('Kaio', 'invalid')).toThrow('Employee cannot be of type invalid');
  });

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
