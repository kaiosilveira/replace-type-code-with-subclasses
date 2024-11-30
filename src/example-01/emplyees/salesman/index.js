import { Employee } from '..';

export class Salesman extends Employee {
  constructor(name) {
    super(name);
  }

  get type() {
    return `salesman`;
  }
}
