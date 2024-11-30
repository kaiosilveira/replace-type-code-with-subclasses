import { Employee } from '..';
import { Engineer } from '../engineer';

export const createEmployee = (name, type) => {
  switch (type) {
    case 'engineer':
      return new Engineer(name);
  }
  return new Employee(name, type);
};
