import { Employee } from '..';

export class Manager extends Employee {
  constructor(name) {
    super(name);
  }

  get type() {
    return `manager`;
  }
}
