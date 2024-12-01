import { EmployeeType } from '..';
import { Engineer } from '../engineer';
import { Manager } from '../manager';
import { Salesman } from '../salesman';

export function createEmployeeType(value) {
  switch (value) {
    case 'engineer':
      return new Engineer();
    case 'manager':
      return new Manager();
    case 'sales':
      return new Salesman();
    default:
      throw new Error(`Employee cannot be of type ${value}`);
  }

  return new EmployeeType(value);
}
