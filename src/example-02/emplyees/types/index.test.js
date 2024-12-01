import { EmployeeType } from '.';

describe('EmployeeType', () => {
  it("should return it's value as a string", () => {
    const employeeType = new EmployeeType('engineer');
    expect(employeeType.toString()).toBe('engineer');
  });
});
