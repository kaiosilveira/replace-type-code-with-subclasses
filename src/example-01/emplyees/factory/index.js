import { Employee } from '..';
import { Engineer } from '../engineer';
import { Manager } from '../manager';
import { Salesman } from '../salesman';

export const createEmployee = (name, type) => {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesman':
      return new Salesman(name);
    case 'manager':
      return new Manager(name);
  }
  return new Employee(name, type);
};
