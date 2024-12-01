import { EmployeeType } from '..';

export function createEmployeeType(value) {
  if (!['engineer', 'manager', 'sales'].includes(value)) {
    throw new Error(`Employee cannot be of type ${value}`);
  }

  return new EmployeeType(value);
}
