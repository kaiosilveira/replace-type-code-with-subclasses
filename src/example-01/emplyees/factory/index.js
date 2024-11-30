import { Employee } from '..';
import { Engineer } from '../engineer';
import { Salesman } from '../salesman';

export const createEmployee = (name, type) => {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
    case 'salesman':
      return new Salesman(name);
  }
  return new Employee(name, type);
};
