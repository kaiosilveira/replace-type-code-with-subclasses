import { Employee } from '..';

export class Manager extends Employee {
  constructor(name) {
    super(name, `manager`);
  }

  get type() {
    return `manager`;
  }
}
