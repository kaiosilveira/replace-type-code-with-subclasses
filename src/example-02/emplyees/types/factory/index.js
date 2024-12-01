import { EmployeeType } from '..';
import { Engineer } from '../engineer';
import { Manager } from '../manager';
import { Salesman } from '../salesman';

export function createEmployeeType(value) {
  if (!['engineer', 'manager', 'sales'].includes(value)) {
    throw new Error(`Employee cannot be of type ${value}`);
  }

  switch (value) {
    case 'engineer':
      return new Engineer();
    case 'manager':
      return new Manager();
    case 'sales':
      return new Salesman();
  }

  return new EmployeeType(value);
}
