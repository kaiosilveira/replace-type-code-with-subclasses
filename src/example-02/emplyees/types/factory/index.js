import { EmployeeType } from '..';
import { Engineer } from '../engineer';

export function createEmployeeType(value) {
  if (!['engineer', 'manager', 'sales'].includes(value)) {
    throw new Error(`Employee cannot be of type ${value}`);
  }

  switch (value) {
    case 'engineer':
      return new Engineer();
  }

  return new EmployeeType(value);
}
