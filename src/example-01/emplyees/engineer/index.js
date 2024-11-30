import { Employee } from '..';

export class Engineer extends Employee {
  constructor(name) {
    super(name);
  }

  get type() {
    return `engineer`;
  }
}
