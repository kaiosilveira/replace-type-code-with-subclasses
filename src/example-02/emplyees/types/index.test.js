import { EmployeeType } from '.';

describe('EmployeeType', () => {
  it("should return it's value as a string", () => {
    const employeeType = new EmployeeType('engineer');
    expect(employeeType.toString()).toBe('engineer');
  });

  it('should return the capitalized name', () => {
    const employeeType = new EmployeeType('manager');
    expect(employeeType.capitalizedName).toBe('Manager');
  });
});
