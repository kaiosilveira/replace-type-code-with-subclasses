import { Employee } from '..';

export class Salesman extends Employee {
  constructor(name) {
    super(name, `salesman`);
  }

  get type() {
    return `salesman`;
  }
}
