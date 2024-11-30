import { Employee } from '..';

export const createEmployee = (name, type) => {
  return new Employee(name, type);
};
